<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import axios from '$lib/axios_client';
	import AddModal from './add.svelte';
	import EditModal from './edit.svelte';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import Swal from 'sweetalert2';
	import {
		DestinationDataModel,
		DestinationModel
	} from '$lib/models/destinations/destination_model';

	setContext('fetchData', { fetchData });

	let destinations = [] as DestinationDataModel[];
	let destinationInfo = {} as DestinationModel;
	let destinationData = {} as DestinationDataModel;
	let pageNumber = 1; // Define page number
	let pageSize = '10'; // Define page size
	let pageSizes = ['10', '25', '50', '100'];
	let search = '';
	let searchTimeout = 0;

	async function fetchData() {
		try {
			const response = await axios.get(
				`/destinations?page=${pageNumber}&page_size=${pageSize}&search=${search}`
			);

			if (response.status === 200) {
				destinations = response.data.data.destinations;
				destinationInfo = response.data.data;
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	const deletedestination = async (id: string) => {
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
				const response = await axios.delete(`/destinations/${id}`);
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
		if (pageNumber < destinationInfo.total_pages) {
			pageNumber++;
			fetchData();
		}
	}

	function handleSearch(event: any) {
		// Clear previous timeout to debounce the input
		clearTimeout(searchTimeout);

		// Set new timeout to trigger the search after a delay
		searchTimeout = setTimeout(() => {
			search = event.target.value;
			pageNumber = 1; // Reset page number when performing a new search
			fetchData(); // Fetch data with the updated search query
		}, 500); // Delay in milliseconds (adjust as needed)
	}

	// function to update the destinationdata images when user delete a single image
	const updatedestinationDataImages = (newData: any) => {
		console.log('parent updated', newData.detail);
		destinationData = newData.detail;
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

	const onPopupAddClose = (data: any) => {
		showAddPopup = false;
		fetchData();

		console.log(data);
	};

	let showEditPopup = false;

	const onShowEditPopup = (item?: any) => {
		destinationData = item;

		showEditPopup = true;
	};

	const onPopupEditClose = (data: any) => {
		showEditPopup = false;
		fetchData();

		console.log(data);
	};

	// Call fetchData function on component mount
	onMount(() => {
		fetchData();
	});
</script>

<svelte:head>
	<title>Destinasi Wisata</title>
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
					<h4 class="card-title">List Destinasi Wisata</h4>
					<a class="btn btn-primary" href={'#'} on:click={onShowAddPopup} role="button">
						<i class="fa fa-plus-circle me-1"></i>Tambah Destinasi Wisata
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
											<th scope="col">Nama Tempat Wisata</th>
											<th scope="col">Deskripsi</th>
											<th scope="col">Dibuat Pada</th>
											<th scope="col">Aksi</th>
										</tr>
									</thead>
									<tbody>
										{#await fetchData()}
											<tr>
												<td colspan="6" class="text-center">Loading...</td>
											</tr>
										{:then _}
											{#if destinations.length <= 0}
												<tr>
													<td colspan="6" class="text-center">Tidak ada data</td>
												</tr>
											{:else}
												{#each destinations as destination, index}
													<tr>
														<!-- Calculate the correct row number based on the current page number and page size -->
														<th scope="row">{(pageNumber - 1) * parseInt(pageSize) + index + 1}</th>
														<td>
															{#if destination.image !== null || destination.image !== ''}
																<img
																	src={destination.image}
																	alt={destination.title}
																	style="width: 100px; height: 100px; object-fit: cover;"
																/>
															{:else}
																<img
																	src="https://via.placeholder.com/100"
																	alt={destination.title}
																	style="width: 100px; height: 100px; object-fit: cover;"
																/>
															{/if}
														</td>
														<td>{destination.title}</td>
														<td>{destination.description}</td>

														<td>{formatHumanDate(destination.created_at)}</td>
														<td style="position: sticky; right: 0">
															<a
																href={'#'}
																on:click={() => onShowEditPopup(destination)}
																class="btn btn-info btn-sm"
																style="color: white;"
															>
																<i class="bi bi-pencil-square"></i>
															</a>
															<button
																type="button"
																class="btn btn-danger btn-sm"
																style="color: white;"
																on:click={() => deletedestination(destination.id)}
															>
																<i class="bi bi-trash"></i>
															</button>
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
									{#if destinationInfo.total > 0}
										Menampilkan {(pageNumber - 1) * parseInt(pageSize) + 1} sampai {Math.min(
											pageNumber * parseInt(pageSize),
											destinationInfo.total
										)} dari {destinationInfo.total} data
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
										{#each Array.from({ length: destinationInfo.total_pages }, (_, i) => i + 1) as page}
											<li
												class="paginate_button page-item {pageNumber === page ? 'active' : 'none'}"
											>
												<a
													href={'#'}
													aria-controls="DataTables_Table_0"
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
											class="paginate_button next page-item {pageNumber ===
											destinationInfo.total_pages
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
		{destinationData}
		on:updateParentData={updatedestinationDataImages}
		onClosed={(data) => onPopupEditClose(data)}
		open={showEditPopup}
	/>

	<AddModal onClosed={(data) => onPopupAddClose(data)} open={showAddPopup} />
</div>
<!-- end: page body area -->
