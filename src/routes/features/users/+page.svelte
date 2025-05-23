<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import axios from '$lib/axios_client';
	import AddModal from './add.svelte';
	import EditModal from './edit.svelte';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import Swal from 'sweetalert2';
	import { jwtDecode } from 'jwt-decode';
	import { UserDataModel, type UserModel } from '$lib/models/users/user_model';
	import { type ExtendedJwt, JWTModel } from '$lib/models/general/jwt_model';

	setContext('fetchData', { fetchData });

	let users = [] as UserDataModel[];
	let userInfo = {} as UserModel;
	let pageNumber = 1; // Define page number
	let pageSize = '10'; // Define page size
	let pageSizes = ['10', '25', '50', '100'];
	let search = '';
	let searchTimeout = 0;

	// Define a sample user data;;
	let userData = {} as UserDataModel;

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
		userData.picture = newData.detail;
	};

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

	const onPopupAddClose = () => {
		showAddPopup = false;
		fetchData();
	};

	let showEditPopup = false;

	const onShowEditPopup = (item?: any) => {
		userData = item;

		showEditPopup = true;
	};

	const onPopupEditClose = () => {
		showEditPopup = false;
		fetchData();
	};

	let userLogin = {} as UserDataModel;

	function getUserLogin() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token) as ExtendedJwt;

		const jwtData = new JWTModel({
			exp: decoded.exp,
			sub: decoded.sub,
			user: decoded.user
		});

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
					<a class="btn btn-primary" href={'#'} on:click={onShowAddPopup} role="button">
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
										{#if users}
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
															<button
																type="button"
																on:click={() => onShowEditPopup(user)}
																class="btn btn-info btn-sm"
																style="color: white;"
															>
																<i class="bi bi-pencil-square"></i>
															</button>

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
										{:else}
											<tr>
												<td colspan="6" class="text-center">Loading...</td>
											</tr>
										{/if}
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
											<button
												aria-controls="DataTables_Table_0"
												aria-disabled="true"
												class="page-link"
												data-dt-idx="previous"
												on:click={handlePrev}
												role="link"
												tabindex="0"
												type="button"><span aria-hidden="true">«</span></button
											>
										</li>
										{#each Array.from({ length: userInfo.total_pages }, (_, i) => i + 1) as page}
											<li
												class="paginate_button page-item {pageNumber === page ? 'active' : 'none'}"
											>
												<button
													type="button"
													aria-controls="DataTables_Table_0"
													role="link"
													aria-current="page"
													data-dt-idx="0"
													tabindex="0"
													class="page-link"
													on:click={() => {
														pageNumber = page;
														fetchData();
													}}>{page}</button
												>
											</li>
										{/each}
										<li
											class="paginate_button next page-item {pageNumber === userInfo.total_pages
												? 'disabled'
												: 'none'} "
											id="DataTables_Table_0_next"
										>
											<button
												aria-controls="DataTables_Table_0"
												aria-disabled="true"
												class="page-link"
												data-dt-idx="next"
												on:click={handleNext}
												role="link"
												tabindex="0"
												type="button"><span aria-hidden="true">»</span></button
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
		onClosed={() => onPopupEditClose()}
		open={showEditPopup}
		{userData}
	/>

	<AddModal onClosed={() => onPopupAddClose()} open={showAddPopup} />
</div>
<!-- end: page body area -->
