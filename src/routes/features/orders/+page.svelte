<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import axios from '$lib/axios_client';
	import AddModal from './add.svelte';
	import EditModal from './edit.svelte';
	import UpdatePaymentModal from './update_payment.svelte';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';
	import Swal from 'sweetalert2';
	import { OrderDataModel, OrderModel } from '$lib/models/orders/order_model';

	setContext('fetchData', { fetchData });

	let orders = [] as OrderDataModel[];
	let orderInfo = {} as OrderModel;
	let orderData = {} as OrderDataModel;
	let pageNumber = 1; // Define page number
	let pageSize = '10'; // Define page size
	let pageSizes = ['10', '25', '50', '100'];
	let search = '';
	let searchTimeout = 0;

	async function fetchData() {
		try {
			const response = await axios.get(
				`/orders?page=${pageNumber}&page_size=${pageSize}&search=${search}`
			);

			if (response.status === 200) {
				orders = response.data.data.orders;
				orderInfo = response.data.data;
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	const deleteorder = async (id: string) => {
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
				const response = await axios.delete(`/orders/${id}`);
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
		if (pageNumber < orderInfo.total_pages) {
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

	// function to update the orderdata payment_proofs when user delete a single payment_proof
	const updateorderDataImages = (newData: any) => {
		console.log('parent updated', newData.detail);
		orderData = newData.detail;
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


	let showPaymentPopup = false;

	const onShowPaymentPopup = (item?: any) => {
		orderData = item;

		showPaymentPopup = true;
	};

	const onPopupPaymentClose = (data: any) => {

		showPaymentPopup = false;
		fetchData();

		console.log(data);
	};


	let showEditPopup = false;

	const onShowEditPopup = (item?: any) => {
		orderData = item;

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
	<title>Pesanan</title>
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
					<h4 class="card-title">List Pesanan</h4>
					<a class="btn btn-primary" href={'#'} on:click={onShowAddPopup} role="button">
						<i class="fa fa-plus-circle me-1"></i>Tambah Pesanan
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
										<th scope="col" style="max-width: 100%">Customer</th>
										<th scope="col">Status Pembayaran</th>
										<th scope="col">Bukti Pembayaran</th>
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
										{#if orders.length <= 0}
											<tr>
												<td colspan="6" class="text-center">Tidak ada data</td>
											</tr>
										{:else}
											{#each orders as order, index}
												<tr>
													<!-- Calculate the correct row number based on the current page number and page size -->
													<th scope="row">{(pageNumber - 1) * parseInt(pageSize) + index + 1}</th>
													<td
													>{order.customer_name}
														<br />
														<span class="badge bg-primary">Email : {order.customer_email}</span>
														<br />
														<span class="badge bg-success">Negara : {order.customer_country}</span
														>
														<br />
														<span class="badge bg-warning">No HP : {order.customer_phone}</span>
														<br />
														<p
															style="max-width: 200px; overflow: auto; max-height: 10em; white-space: pre-line;"
														>
															Alamat : {order.customer_address}
														</p>
													</td>

													<td>
														{#if order.payment_status === 'paid'}
															<span class="badge bg-success">Sudah Dibayar</span>
														{:else if order.payment_status === 'unpaid'}
															<span class="badge bg-warning">Belum Dibayar</span>
														{:else}
															<span class="badge bg-danger">Dibatalkan</span>
														{/if}
													</td>

													<td>
														{#if order.payment_status !== 'unpaid' && order.payment_status !== 'canceled'}
															<img
																src={order.payment_proof}
																alt="Bukti Pembayaran"
																style="width: 100px; height: 100px; object-fit: cover;"
															/>
														{:else}
															-
														{/if}
													</td>

													<td>{formatHumanDate(order.created_at)}</td>
													<td style="position: sticky; right: 0">
														<a
															href={'#'}
															on:click={() => onShowPaymentPopup(order)}
															class="btn btn-info btn-sm"
															style="color: white;"
														>
															<i class="bi bi-pencil"></i>
														</a>
														<a
															href={'#'}
															on:click={() => onShowEditPopup(order)}
															class="btn btn-info btn-sm"
															style="color: white;"
														>
															<i class="bi bi-pencil-square"></i>
														</a>
														<button
															type="button"
															class="btn btn-danger btn-sm"
															style="color: white;"
															on:click={() => deleteorder(order.id)}
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
									{#if orderInfo.total > 0}
										Menampilkan {(pageNumber - 1) * parseInt(pageSize) + 1} sampai {Math.min(
										pageNumber * parseInt(pageSize),
										orderInfo.total
									)} dari {orderInfo.total} data
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
										{#each Array.from({ length: orderInfo.total_pages }, (_, i) => i + 1) as page}
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
											class="paginate_button next page-item {pageNumber === orderInfo.total_pages
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
		on:updateParentData={updateorderDataImages}
		onClosed={(data) => onPopupEditClose(data)}
		open={showEditPopup}
		{orderData}
	/>

	<AddModal onClosed={(data) => onPopupAddClose(data)} open={showAddPopup} />

	<UpdatePaymentModal on:updateParentData={fetchData}
											onClosed={(data) => onPopupPaymentClose(data)}
											open={showPaymentPopup}
											{orderData} />
</div>
<!-- end: page body area -->
