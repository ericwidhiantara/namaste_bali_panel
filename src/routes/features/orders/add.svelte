<script lang="ts">
	import { fade } from 'svelte/transition';
	import axios from '$lib/axios_client';
	import Swal from 'sweetalert2';
	import { toasts } from 'svelte-toasts';
	import { jwtDecode } from 'jwt-decode';
	import { JWTModel } from '$lib/models/general/jwt_model';
	import { onMount } from 'svelte';
	import type { UserDataModel } from '$lib/models/users/user_model';

	export let open = false;
	export let showBackdrop = true;
	export let onClosed: (data: any) => void;

	const modalClose = (data: any) => {
		open = false;
		if (onClosed) {
			onClosed(data);
		}
	};

	let error_msg = '';
	let customer_name = '';
	let customer_email = '';
	let customer_phone = '';
	let customer_country = '';
	let customer_address = '';
	let total_price = '';
	let payment_status = '';
	let isLoading = false;
	let customer_name_error = '';
	let customer_email_error = '';
	let customer_phone_error = '';
	let customer_country_error = '';
	let customer_address_error = '';
	let total_price_error = '';
	let payment_status_error = '';

	let input: HTMLInputElement;
	let image: HTMLImageElement;
	let showImage = false;

	function onChange() {
		const file = input.files![0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function() {
				if (image) {
					image.setAttribute('src', reader.result as string);
				}
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	}

	async function addDestination() {
		try {
			isLoading = true;
			const formData = new FormData();
			formData.append('customer_name', customer_name);
			formData.append('customer_email', customer_email);
			formData.append('customer_phone', customer_phone);
			formData.append('customer_country', customer_country);
			formData.append('customer_address', customer_address);
			formData.append('total_price', total_price);
			formData.append('payment_status', payment_status);
			formData.append('user_id', userLogin.id);

			if (payment_status === 'paid') {
				formData.append('payment_proof', input.files![0]);
			}

			const response = await axios.post(`/orders`, formData);

			if (response.status === 200) {
				isLoading = false;

				// Login successful, redirect or show success message
				await Swal.fire({
					icon: 'success',
					title: response.data.meta.message,
					showConfirmButton: false,
					timer: 1500
				});

				const modalElement = document.querySelector('#exampleModalXl');
				const bodyElement = document.querySelector('body');

				if (modalElement && bodyElement) {
					modalElement.classList.remove('show');
					bodyElement.classList.remove('modal-open');
				}

				const mdbackdrop = document.querySelector('.modal-backdrop');
				if (mdbackdrop) {
					mdbackdrop.classList.remove('modal-backdrop', 'show');
				}
				// fetchData();
				modalClose('close');

				customer_name = '';
				customer_email = '';
				customer_phone = '';
				customer_country = '';
				customer_address = '';
				total_price = '';
				payment_status = '';
				input.value = '';
				image.src = '';
				showImage = false;
			}
		} catch (error: any) {
			isLoading = false;
			// Get error response
			customer_name_error = error.response.data.data.customer_name;
			customer_email_error = error.response.data.data.customer_email;
			customer_phone_error = error.response.data.data.customer_phone;
			customer_country_error = error.response.data.data.customer_country;
			customer_address_error = error.response.data.data.customer_address;
			total_price_error = error.response.data.data.total_price;
			payment_status_error = error.response.data.data.payment_status;

			// Handle error, show error message
			error_msg = error.response.data.meta.message ?? 'An error occurred, please try again later';
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
	}

	let userLogin: UserDataModel;

	function getUserLogin() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token);

		const jwtData = new JWTModel({
			exp: decoded.exp,
			sub: decoded.sub,
			user: decoded.user
		});

		userLogin = jwtData.user;
	}

	onMount(() => {
		getUserLogin();
	});
</script>

{#if open}
	<div
		class="modal fade show"
		id="exampleModalXl"
		tabindex="-1"
		aria-labelledby="exampleModalXlLabel"
		style="display: block;"
		aria-modal="true"
		role="dialog"
		aria-hidden={false}
	>
		<div class="modal-dialog modal-xl" role="document">
			<form on:submit|preventDefault={addDestination}>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-customer_name h4" id="exampleModalXlLabel">Tambah Pesanan</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							on:click={() => modalClose('close')}
						></button>
					</div>
					<div class="modal-body">
						<div class="ps-md-4 pe-md-3 px-2 py-3 page-body">
							{#if error_msg}
								<div class="alert alert-danger" role="alert">{error_msg}</div>
							{/if}
							<div class="row g-lg-3 g-2">
								<div class="col-md-12">
									<div>
										<label for="customer_name" class="form-label">Nama Customer</label>
										<input
											required
											type="text"
											name="customer_name"
											class="form-control"
											id="customer_name"
											bind:value={customer_name}
											placeholder="Masukan Nama Customer"
										/>
										{#if customer_name_error !== ''}
											{#each customer_name_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="customer_email" class="form-label">Email Customer</label>
										<input
											required
											type="text"
											name="customer_email"
											class="form-control"
											id="customer_email"
											bind:value={customer_email}
											placeholder="Masukan Email Customer"
										/>
										{#if customer_email_error !== ''}
											{#each customer_email_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="customer_phone" class="form-label">Nomor Telepon Customer</label>
										<input
											required
											type="text"
											name="customer_phone"
											class="form-control"
											id="customer_phone"
											bind:value={customer_phone}
											placeholder="Masukan Nomor Telepon Customer"
										/>
										{#if customer_phone_error !== ''}
											{#each customer_phone_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-md-6">
									<div>
										<label for="customer_country" class="form-label">Negara Customer</label>
										<input
											required
											type="text"
											name="customer_country"
											class="form-control"
											id="customer_country"
											bind:value={customer_country}
											placeholder="Masukan Asal Negara Customer"
										/>
										{#if customer_country_error !== ''}
											{#each customer_country_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="customer_address" class="form-label">Alamat Customer</label>
										<textarea
											required
											name="customer_address"
											class="form-control"
											id="customer_address"
											bind:value={customer_address}
											placeholder="Masukan Alamat Customer"
										/>
										{#if customer_address_error !== ''}
											{#each customer_address_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-md-12">
									<label for="total_price" class="form-label">Total</label>
									<input
										name=""
										type="number"
										class="form-control"
										id="total_price"
										placeholder="Masukan total pesanan - Hanya Angka"
										required
										bind:value={total_price}
									/>
									{#if total_price_error !== ''}
										{#each total_price_error as error}
											<div class="invalid-feedback d-block">{error}</div>
										{/each}
									{/if}
								</div>

								<div class="col-md-12">
									<label for="payment_status" class="form-label">Status Pembayaran</label>
									<select
										name="payment_status"
										id="payment_status"
										class="form-control"
										required
										bind:value={payment_status}
									>
										<option value="" class="text-success">Pilih Status Pembayaran</option>
										<option value="paid" class="text-success">Sudah Dibayar</option>
										<option value="unpaid" class="text-success">Belum Dibayar</option>
										<option value="canceled" class="text-danger">Dibatalkan</option>
									</select>
									{#if payment_status_error !== ''}
										{#each payment_status_error as error}
											<div class="invalid-feedback d-block">{error}</div>
										{/each}
									{/if}
								</div>

								<div class="col-12">
									<label for="payment_proof" class="form-label"
									>Bukti Pembayaran (biarkan kosong jika belum dibayar)</label
									>

									<input
										id="payment_proof"
										type="file"
										accept="image/*"
										class="form-control"
										name="image"
										bind:this={input}
										on:change={onChange}
									/>
								</div>
								<ul class="grid-wrapper li_animate list-unstyled mb-0">
									{#if showImage}
										<img bind:this={image} src="" alt="Preview" />
									{/if}
								</ul>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
							on:click={() => modalClose('close')}
						>
							Batal
						</button>
						<button type="submit" class="btn btn-primary">
							{#if isLoading}
								<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
								></span>
								Loading...
							{:else}
								Simpan
							{/if}
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	{#if showBackdrop}
		<div class="modal-backdrop show" transition:fade={{ duration: 150 }} />
	{/if}
{/if}
