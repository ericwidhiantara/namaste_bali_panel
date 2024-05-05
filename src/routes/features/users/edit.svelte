<script lang="ts">
	import { fade } from 'svelte/transition';
	import axios from '$lib/axios_client';
	import Swal from 'sweetalert2';
	import { toasts } from 'svelte-toasts';
	import { createEventDispatcher, getContext } from 'svelte';

	export let open = false;
	export let showBackdrop = true;
	export let onClosed;

	const modalClose = (data) => {
		open = false;
		if (onClosed) {
			onClosed(data);
		}
	};

	export let userData;

	let files = {
		accepted: [],
		rejected: []
	};

	let error_msg = '';
	let isLoading = false;
	let name_error = '';
	let username_error = '';
	let email_error = '';
	let phone_error = '';
	let password_error = '';
	let image_error = '';
	let input;
	let image;
	let showImage = false;

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	const { fetchData } = getContext('fetchData');

	function onChange() {
		const file = input.files[0];

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function() {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	}

	async function editPengguna() {
		try {
			isLoading = true;
			const formData = new FormData();
			formData.append('id', userData.id);

			formData.append('name', userData.name);
			formData.append('username', userData.username);
			formData.append('email', userData.email);
			formData.append('phone', userData.phone);

			if (input.files[0]) {
				formData.append('picture', input.files[0]);
			}

			const response = await axios.patch(`/users`, formData);

			if (response.status === 200) {
				isLoading = false;

				// Login successful, redirect or show success message
				await Swal.fire({
					icon: 'success',
					title: response.data.meta.message,
					showConfirmButton: false,
					timer: 1500
				});

				document.querySelector('#exampleModalXl').classList.remove('show');
				document.querySelector('body').classList.remove('modal-open');
				const mdbackdrop = document.querySelector('.modal-backdrop');
				if (mdbackdrop) {
					mdbackdrop.classList.remove('modal-backdrop', 'show');
				}

				name_error = '';
				username_error = '';
				email_error = '';
				phone_error = '';
				password_error = '';
				image_error = '';

				input.value = '';
				image.src = '';
				showImage = false;

				modalClose('close');

				fetchData();
			}
		} catch (error: any) {
			isLoading = false;
			// Get error response
			name_error = error.response.data.data.name;
			username_error = error.response.data.data.username;
			email_error = error.response.data.data.email;
			phone_error = error.response.data.data.phone;
			password_error = error.response.data.data.password;

			image_error = error.response.data.data.image;

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

	const dispatch = createEventDispatcher();
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
			<form on:submit|preventDefault={editPengguna}>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title h4" id="exampleModalXlLabel">Edit Pengguna</h5>
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

							<div class="row text-center text-lg-start">
								<div class="col-lg-3 col-md-4 col-6">
									<div class="image-container">
										<a class="d-block mb-4 h-100" href="#">
											<img
												alt={userData.name}
												class="img-fluid img-thumbnail"
												src={userData.picture}
											/>
										</a>
									</div>
								</div>
							</div>

							<div class="row g-lg-3 g-2">
								<div class="col-12">
									<div class="form-floating">
										<input
											bind:value={userData.name}
											class="form-control"
											name="name"
											placeholder="Masukan nama"
											required
											type="text"
										/>
										<label>Nama</label>
										{#if name_error !== ''}
											{#each name_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-12">
									<div class="form-floating">
										<input
											bind:value={userData.username}
											class="form-control"
											name="username"
											placeholder="Masukan username"
											required
											type="text"
										/>
										<label>Username</label>
										{#if username_error !== ''}
											{#each username_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-12">
									<div class="form-floating">
										<input
											bind:value={userData.email}
											class="form-control"
											name="email"
											placeholder="Masukan email"
											required
											type="email"
										/>
										<label>Email</label>
										{#if email_error !== ''}
											{#each email_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-12">
									<div class="form-floating">
										<input
											bind:value={userData.phone}
											class="form-control"
											name="phone"
											placeholder="Masukan nomor handphone"
											required
											type="number"
										/>
										<label>No HP</label>
										{#if phone_error !== ''}
											{#each phone_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-12">
									<input
										type="file"
										accept="image/*"
										class="form-control"
										name="image"
										bind:this={input}
										on:change={onChange}
									/>
									{#if image_error !== ''}
										{#each image_error as error}
											<div class="invalid-feedback d-block">{error}</div>
										{/each}
									{/if}
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

<style>
    .image-container {
        position: relative;
    }
</style>
