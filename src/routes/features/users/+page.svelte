<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import axios from '$lib/axios_client';
	import AddModal from './add.svelte';
	import EditModal from './edit.svelte';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import Swal from 'sweetalert2';
	import { jwtDecode } from 'jwt-decode';

	setContext('fetchData', { fetchData });

	class UserModel {
		id: string;
		name: string;
		username: string;
		email: string;
		phone: string;
		picture: string;
		created_at: number;
		updated_at: number;

		constructor(data: any) {
			this.id = data.id;
			this.name = data.name;
			this.username = data.username;
			this.email = data.email;
			this.phone = data.whatsapp;
			this.picture = data.picture;
			this.created_at = data.created_at;
			this.updated_at = data.updated_at;
		}
	}

	class UserDataModel {
		page_number: number;
		page_size: number;
		total: number;
		total_pages: number;
		users: UserModel[];

		constructor(data: any) {
			this.page_number = data.page_number;
			this.page_size = data.page_size;
			this.total = data.total;
			this.total_pages = data.total_pages;
			this.users = data.users;
		}
	}

	let users = [] as UserModel[];
	let userInfo = {} as UserDataModel;
	let pageNumber = 1; // Define page number
	let pageSize = '10'; // Define page size
	let pageSizes = ['10', '25', '50', '100'];
	let search = '';
	let token;
	let searchTimeout = 0;

	// Define a sample user data;;
	let userData = new UserModel({
		id: '',
		name: '',
		username: '',
		email: '',
		whatsapp: '',
		picture: '',
		created_at: 0,
		updated_at: 0
	});

	async function fetchData() {
		try {
			const response = await axios.get(
				`/users?page=${pageNumber}&page_size=${pageSize}&search=${search}`
			);

			if (response.status === 200) {
				users = response.data.data.users;
				userInfo = response.data.data;
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	const deleteuser = async (id: string) => {
		try {
			const { isConfirmed } = await Swal.fire({
				title: 'Are you sure?',
				text: 'You will not be able to recover this data!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Yes, delete it!'
			});

			if (isConfirmed) {
				const response = await axios.delete(`/users/${id}`);
				if (response.status == 200) {
					toasts.success({
						title: 'Success',
						description: response.data.meta.message ?? 'Data has been deleted',
						uid: 1615153277482,
						placement: 'bottom-right',
						theme: 'dark',
						duration: 5000
					});
					await fetchData();
				}
			}
		} catch (error: any) {
			toasts.error({
				title: 'Oops!',
				description:
					error.response.data.meta.message ?? 'An error occurred, please try again later',
				uid: 1615153277482,
				placement: 'bottom-right',
				theme: 'dark',
				duration: 0
			});
		}
	};

	function handleChange(event: any) {
		pageNumber = 1; // Reset page number to 1
		pageSize = event.target.value;
		fetchData(); // Fetch data with the updated page size
	}

	function handlePrev() {
		if (pageNumber > 1) {
			pageNumber--;
			fetchData();
		}
	}

	function handleNext() {
		if (pageNumber < userInfo.total_pages) {
			pageNumber++;
			fetchData();
		}
	}

	function handleSearch(event: any) {
		// Clear previous timeout to debounce the input f
		clearTimeout(searchTimeout);

		// Set new timeout to trigger the search after a delay
		searchTimeout = setTimeout(() => {
			search = event.target.value;
			pageNumber = 1; // Reset page number when performing a new search
			fetchData(); // Fetch data with the updated search query
		}, 500); // Delay in milliseconds (adjust as needed)
	}

	// function to update the userdata pictures when user delete a single picture
	const updateuserDataImages = (newData: any) => {
		console.log('parent updated', newData.detail);
		userData.picture = newData.detail;
	};

	function formatDate(date: string): string {
		const options: Intl.DateTimeFormatOptions = {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		};
		return new Intl.DateTimeFormat('id-ID', options).format(new Date(date));
	}

	function formatHumanDate(timestamp: number): string {
		const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
		return date.toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	let showAddPopup = false;

	const onShowAddPopup = () => {
		showAddPopup = true;
	};

	const onPopupAddClose = (data: any) => {
		showAddPopup = false;
		fetchData();

		console.log(data);
	};

	let showEditPopup = false;

	const onShowEditPopup = (item?: any) => {
		userData = item;

		showEditPopup = true;
	};

	const onPopupEditClose = (data: any) => {
		showEditPopup = false;
		fetchData();

		console.log(data);
	};

	class JWTModel {
		exp: Number;
		sub: Number;
		user: UserModel;

		constructor(data) {
			this.exp = data.exp;
			this.sub = data.sub;
			this.user = new UserModel(data.user);
		}
	}

	let userLogin = new UserModel({});

	function getUserLogin() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token);

		const jwtData = new JWTModel(decoded);

		userLogin = jwtData.user;
	}

	// Call fetchData function on component mount
	onMount(() => {
		getUserLogin();
		fetchData();
	});
</script>

<svelte:head>
	<title>Pengguna</title>
</svelte:head>

<ToastContainer let:data placement="bottom-right">
	<FlatToast {data} />
	<!-- Provider template for your toasts -->
</ToastContainer>
<!-- start: page body area -->
<div class="ps-md-4 pe-md-3 px-2 py-3 page-body">
	<div class="row g-12">
		<div class="col-xxl-12 col-xl-7 col-lg-12">
			<div class="card">
				<div class="card-header">
					<h4 class="card-title">List Pengguna</h4>
					<a class="btn btn-primary" href="#" on:click={onShowAddPopup} role="button">
						<i class="fa fa-plus-circle me-1"></i>Tambah Pengguna
					</a>
				</div>
				<div class="card-body">
					<div class="dataTables_wrapper dt-bootstrap5 no-footer" id="DataTables_Table_0_wrapper">
						<div class="row">
							<div class="col-sm-12 col-md-6">
								<div class="dataTables_length" id="DataTables_Table_0_length">
									<label>
										Tampilkan

										<select
											bind:value={pageSize}
											class="form-select form-select-sm"
											on:change={handleChange}
										>
											{#each pageSizes as value}
												<option {value}>{value}</option>
											{/each}
										</select>
										data
									</label>
								</div>
							</div>
							<div class="col-sm-12 col-md-6">
								<div class="dataTables_filter" id="DataTables_Table_0_filter">
									<label
										>Pencarian:<input
											aria-controls="DataTables_Table_0"
											class="form-control form-control-sm"
											on:input={handleSearch}
											placeholder=""
											type="search"
										/></label
									>
								</div>
							</div>
						</div>
						<div class="row dt-row">
							<div class="col-sm-12">
								<table
									aria-describedby="DataTables_Table_0_info"
									class="table table-hover custom-table mb-0 dataTable nowrap no-footer dtr-inline collapsed"
									id="DataTables_Table_0"
									style="width: 100%;"
								>
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Foto</th>
											<th scope="col">Nama</th>
											<th scope="col">Dibuat Pada</th>
											<th scope="col">Aksi</th>
										</tr>
									</thead>
									<tbody>
										{#await fetchData()}
											<tr>
												<td colspan="6" class="text-center">Loading...</td>
											</tr>
										{:then result}
											{#if users.length <= 0}
												<tr>
													<td colspan="6" class="text-center">Tidak ada data</td>
												</tr>
											{:else}
												{#each users as user, index}
													<tr>
														<!-- Calculate the correct row number based on the current page number and page size -->
														<th scope="row">{(pageNumber - 1) * parseInt(pageSize) + index + 1}</th>
														<td>
															{#if user.picture !== null || user.picture !== ''}
																<img
																	src={user.picture}
																	alt={user.name}
																	style="width: 100px; height: 100px; object-fit: cover;"
																/>
															{:else}
																<img
																	src="https://via.placeholder.com/100"
																	alt={user.name}
																	style="width: 100px; height: 100px; object-fit: cover;"
																/>
															{/if}
														</td>
														<td
															>{user.name}
															<br />
															No HP : {user.phone}
															<br />
															Username : <span class="badge bg-primary">{user.username}</span>
														</td>

														<td>{formatHumanDate(user.created_at)}</td>
														<td style="position: sticky; right: 0">
															<a
																href="#"
																on:click={() => onShowEditPopup(user)}
																class="btn btn-info btn-sm"
																style="color: white;"
															>
																<i class="bi bi-pencil-square"></i>
															</a>

															{#if userLogin.id !== user.id}
																<button
																	type="button"
																	class="btn btn-danger btn-sm"
																	style="color: white;"
																	on:click={() => deleteuser(user.id)}
																>
																	<i class="bi bi-trash"></i>
																</button>
															{/if}
														</td>
													</tr>
												{/each}
											{/if}
										{/await}
									</tbody>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-5">
								<div
									aria-live="polite"
									class="dataTables_info"
									id="DataTables_Table_0_info"
									role="status"
								>
									{#if userInfo.total > 0}
										Menampilkan {(pageNumber - 1) * parseInt(pageSize) + 1} sampai {Math.min(
											pageNumber * parseInt(pageSize),
											userInfo.total
										)} dari {userInfo.total} data
									{:else}
										Tidak ada data yang ditemukan
									{/if}
								</div>
							</div>
							<div class="col-sm-12 col-md-7">
								<div
									class="dataTables_paginate paging_simple_numbers"
									id="DataTables_Table_0_paginate"
								>
									<ul class="pagination">
										<li
											class="paginate_button previous page-item {pageNumber === 1
												? 'disabled'
												: 'none'}"
											id="DataTables_Table_0_previous"
										>
											<a
												aria-controls="DataTables_Table_0"
												aria-disabled="true"
												class="page-link"
												data-dt-idx="previous"
												on:click={handlePrev}
												role="link"
												tabindex="0"><span aria-hidden="true">«</span></a
											>
										</li>
										{#each Array.from({ length: userInfo.total_pages }, (_, i) => i + 1) as page}
											<li
												class="paginate_button page-item {pageNumber === page ? 'active' : 'none'}"
											>
												<a
													href="#"
													aria-controls="DataTables_Table_0"
													role="link"
													aria-current="page"
													data-dt-idx="0"
													tabindex="0"
													class="page-link"
													on:click={() => {
														pageNumber = page;
														fetchData();
													}}>{page}</a
												>
											</li>
										{/each}
										<li
											class="paginate_button next page-item {pageNumber === userInfo.total_pages
												? 'disabled'
												: 'none'} "
											id="DataTables_Table_0_next"
										>
											<a
												aria-controls="DataTables_Table_0"
												aria-disabled="true"
												class="page-link"
												data-dt-idx="next"
												on:click={handleNext}
												role="link"
												tabindex="0"><span aria-hidden="true">»</span></a
											>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<EditModal
		on:updateParentData={updateuserDataImages}
		onClosed={(data) => onPopupEditClose(data)}
		open={showEditPopup}
		{userData}
	/>

	<AddModal onClosed={(data) => onPopupAddClose(data)} open={showAddPopup} />
</div>
<!-- end: page body area -->

<!--&lt;!&ndash; Render the modal but keep it hidden &ndash;&gt;-->
<!--<div-->
<!--	aria-hidden="true"-->
<!--	aria-labelledby="exampleModalXlLabel"-->
<!--	bind:this={customModal}-->
<!--	class="modal fade"-->
<!--	id="exampleModalXl"-->
<!--	tabindex="-1"-->
<!--&gt;-->
<!--	{#if isEditModal}-->
<!--		<EditModal {userData} on:updateParentData={updateuserDataImages} />-->
<!--	{:else}-->
<!--		<AddModal />-->
<!--	{/if}-->
<!--</div>-->
