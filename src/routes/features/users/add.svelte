<script lang="ts">
	import { fade } from 'svelte/transition';
	import axios from '$lib/axios_client';
	import Swal from 'sweetalert2';
	import { toasts } from 'svelte-toasts';

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
	let name = '';
	let username = '';
	let email = '';
	let phone = '';
	let password = '';

	let isLoading = false;
	let name_error = '';
	let username_error = '';
	let email_error = '';
	let phone_error = '';
	let password_error = '';
	let image_error = '';
	let input: HTMLInputElement;
	let image: HTMLImageElement;
	let showImage = false;

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

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

	async function addTeam() {
		try {
			isLoading = true;
			const formData = new FormData();
			formData.append('name', name);
			formData.append('username', username);
			formData.append('email', email);
			formData.append('phone', phone);
			formData.append('password', password);
			formData.append('picture', input.files![0]);

			const response = await axios.post(`/users`, formData);

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

				name = '';
				username = '';
				email = '';
				phone = '';
				password = '';
				name_error = '';
				email_error = '';
				phone_error = '';
				password_error = '';
				image_error = '';

				input.value = '';
				image.src = '';
				showImage = false;
			}
		} catch (error: any) {
			isLoading = false;
			// Get error response
			name_error = error.response.data.data.name;
			username_error = error.response.data.data.username;
			email_error = error.response.data.data.email;
			phone_error = error.response.data.data.phone;
			password_error = error.response.data.data.password;

			image_error = error.response.data.data.picture;

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
			<form on:submit|preventDefault={addTeam}>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title h4" id="exampleModalXlLabel">Tambah Pengguna</h5>
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
										<label for="name" class="form-label">Nama</label>
										<input
											bind:value={name}
											class="form-control"
											name="name"
											placeholder="Masukan Nama"
											required
											type="text"
										/>
										{#if name_error !== ''}
											{#each name_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="username" class="form-label">Username</label>
										<input
											bind:value={username}
											id="username"
											class="form-control"
											name="username"
											placeholder="Masukan Username"
											required
											type="text"
										/>
										{#if username_error !== ''}
											{#each username_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-md-6">
									<div>
										<label for="phone" class="form-label">No HP</label>
										<input
											bind:value={phone}
											id="phone"
											class="form-control"
											name="phone"
											placeholder="Masukan No HP / Whatsapp"
											required
											type="number"
										/>
										{#if phone_error !== ''}
											{#each phone_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="email" class="form-label">Email</label>
										<input
											bind:value={email}
											id="phone"
											class="form-control"
											name="phone"
											placeholder="Masukan Email"
											required
											type="email"
										/>
										{#if email_error !== ''}
											{#each email_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6 input-with-icon">
									<div>
										<label for="password" class="form-label">Kata Sandi</label>
										{#if !showPassword}
											<input
												id="password"
												bind:value={password}
												type="password"
												class="form-control"
												placeholder="Masukan Kata Sandi"
												name="password"
											/>
										{:else}
											<input
												id="password"
												type="text"
												class="form-control"
												placeholder="Masukan Kata Sandi"
												name="password"
												bind:value={password}
											/>
										{/if}
										{#if password_error !== ''}
											{#each password_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
										<button
											aria-label="Toggle password visibility"
											class="icon"
											on:click={() => togglePasswordVisibility()}
											style="padding-right: 10px; border: none; background-color: transparent;"
											type="button"
										>
											{#if showPassword}
												<i class="bi bi-eye-slash-fill"></i>
											{:else}
												<i class="bi bi-eye-fill"></i>
											{/if}
										</button>

									</div>
								</div>


								<div class="col-12">
									<label for="file" class="form-label">Foto</label>

									<input
										type="file"
										accept="image/*"
										class="form-control"
										name="image"
										bind:this={input}
										on:change={onChange}
										required
										id="file"
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
    .input-with-icon {
        position: relative;
    }

    .input-with-icon input {
        padding-right: 2.5rem; /* Adjust padding to accommodate the icon */
    }

    .input-with-icon .icon {
        position: absolute;
        top: 72%;
        right: 0.5rem; /* Adjust the distance of the icon from the right */
        transform: translateY(-50%);
        cursor: pointer;
    }
</style>
