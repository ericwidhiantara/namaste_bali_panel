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
	let email = '';
	let whatsapp = '';
	let facebook = '';
	let instagram = '';
	let twitter = '';
	let tiktok = '';
	let role = '';
	let address = '';

	let isLoading = false;
	let name_error = '';
	let email_error = '';
	let whatsapp_error = '';
	let facebook_error = '';
	let instagram_error = '';
	let twitter_error = '';
	let tiktok_error = '';
	let role_error = '';
	let address_error = '';
	let image_error = '';

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

	async function addTeam() {
		try {
			isLoading = true;
			const formData = new FormData();
			formData.append('name', name);
			formData.append('email', email);
			formData.append('whatsapp', whatsapp);
			formData.append('facebook', facebook);
			formData.append('instagram', instagram);
			formData.append('twitter', twitter);
			formData.append('tiktok', tiktok);
			formData.append('role', role);
			formData.append('address', address);
			formData.append('image', input.files![0]);

			const response = await axios.post(`/teams`, formData);

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
				email = '';
				whatsapp = '';
				facebook = '';
				instagram = '';
				twitter = '';
				tiktok = '';
				role = '';
				address = '';
				name_error = '';
				email_error = '';
				whatsapp_error = '';
				facebook_error = '';
				instagram_error = '';
				twitter_error = '';
				tiktok_error = '';
				role_error = '';
				address_error = '';
				image_error = '';

				input.value = '';
				image.src = '';
				showImage = false;
			}
		} catch (error: any) {
			isLoading = false;
			// Get error response
			name_error = error.response.data.data.name;
			email_error = error.response.data.data.email;
			whatsapp_error = error.response.data.data.whatsapp;
			facebook_error = error.response.data.data.facebook;
			instagram_error = error.response.data.data.instagram;
			twitter_error = error.response.data.data.twitter;
			tiktok_error = error.response.data.data.tiktok;
			role_error = error.response.data.data.role;
			address_error = error.response.data.data.address;

			image_error = error.response.data.data.images;

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
						<h5 class="modal-title h4" id="exampleModalXlLabel">Tambah Tim</h5>
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
							<div class="alert alert-info" role="alert">
								Perhatian: Untuk Facebook, Instagram, Twitter, Tiktok harap dimasukan URL nya,
								contoh : https://facebook.com/username
							</div>

							<div class="row g-lg-3 g-2">
								<div class="col-md-12">
									<div>
										<label for="name" class="form-label">Nama</label>
										<input
											required
											type="text"
											name="name"
											class="form-control"
											id="name"
											bind:value={name}
											placeholder="Masukan Nama Tim"
										/>
										{#if name_error !== ''}
											{#each name_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-md-12">
									<div>
										<label for="role" class="form-label">Jabatan / Role</label>
										<input
											required
											type="text"
											name="role"
											class="form-control"
											id="role"
											bind:value={role}
											placeholder="Masukan Jabatan Tim"
										/>
										{#if role_error !== ''}
											{#each role_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="email" class="form-label">Email</label>
										<input
											required
											type="email"
											name="email"
											class="form-control"
											id="email"
											bind:value={email}
											placeholder="Masukan Email Tim"
										/>
										{#if email_error !== ''}
											{#each email_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-md-6">
									<div>
										<label for="whatsapp" class="form-label">No Whatsapp</label>
										<input
											required
											type="number"
											name="whatsapp"
											class="form-control"
											id="whatsapp"
											bind:value={whatsapp}
											placeholder="Masukan No Whatsapp Tim"
										/>
										{#if whatsapp_error !== ''}
											{#each whatsapp_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-md-6">
									<div>
										<label for="facebook" class="form-label">Facebook</label>
										<input
											type="text"
											name="facebook"
											class="form-control"
											id="facebook"
											bind:value={facebook}
											placeholder="Masukan link facebook : contoh https://facebook.com/username"

										/>
										{#if facebook_error !== ''}
											{#each facebook_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="instagram" class="form-label">Instagram</label>
										<input
											type="text"
											name="instagram"
											class="form-control"
											id="instagram"
											bind:value={instagram}
											placeholder="Masukan link instagram : contoh https://instagram.com/username"

										/>
										{#if instagram_error !== ''}
											{#each instagram_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="twitter" class="form-label">Twitter</label>
										<input
											type="text"
											name="twitter"
											class="form-control"
											id="twitter"
											bind:value={twitter}
											placeholder="Masukan link twitter : contoh https://twitter.com/username"

										/>
										{#if twitter_error !== ''}
											{#each twitter_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>
								<div class="col-md-6">
									<div>
										<label for="tiktok" class="form-label">Tiktok</label>
										<input
											type="text"
											name="tiktok"
											class="form-control"
											id="tiktok"
											bind:value={tiktok}
											placeholder="Masukan link tiktok : contoh https://tiktok.com/@username"

										/>
										{#if tiktok_error !== ''}
											{#each tiktok_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-12">
									<label for="address">Alamat</label>

									<textarea
										id="address"
										bind:value={address}
										class="form-control"
										name="address"
										placeholder="Masukan Alamat"
										required
										style="height: 100px"
									/>

									{#if address_error !== ''}
										{#each address_error as error}
											<div class="invalid-feedback d-block">{error}</div>
										{/each}
									{/if}
								</div>
								<div class="col-12">
									<input
										type="file"
										accept="image/*"
										class="form-control"
										name="image"
										bind:this={input}
										on:change={onChange}
										required
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
