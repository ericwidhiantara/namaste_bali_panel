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
	let title = '';
	let description = '';
	let isLoading = false;
	let title_error = '';
	let description_error = '';
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

	async function addDestination() {
		try {
			isLoading = true;
			const formData = new FormData();
			formData.append('title', title);
			formData.append('description', description);
			formData.append('image', input.files![0]);

			const response = await axios.post(`/destinations`, formData);

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

				title = '';
				description = '';
				input.value = '';
				image.src = '';
				showImage = false;
			}
		} catch (error: any) {
			isLoading = false;
			// Get error response

			title_error = error.response.data.data.title;
			description_error = error.response.data.data.description;
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
			<form on:submit|preventDefault={addDestination}>
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title h4" id="exampleModalXlLabel">Tambah Destinasi Wisata</h5>
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
								<div class="col-12">
									<div class="form-floating">
										<input
											id="judul"
											bind:value={title}
											class="form-control"
											name="title"
											placeholder="Tambahkan judul"
											required
											type="text"
										/>
										<label for="judul">Judul</label>
										{#if title_error !== ''}
											{#each title_error as error}
												<div class="invalid-feedback d-block">{error}</div>
											{/each}
										{/if}
									</div>
								</div>

								<div class="col-12">
									<div class="form-floating">
										<textarea
											id="deskripsi"
											bind:value={description}
											class="form-control"
											name="description"
											placeholder="Tambahkan deskripsi "
											required
											style="height: 100px"
										/>

										<label for="deskripsi">Deskripsi</label>
										{#if description_error !== ''}
											{#each description_error as error}
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
