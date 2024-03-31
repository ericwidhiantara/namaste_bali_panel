<script lang="ts">
	import Dropzone from 'svelte-file-dropzone';
	import axios from '$lib/axios_client';
	import Swal from 'sweetalert2';
	import { toasts } from 'svelte-toasts';
	import { createEventDispatcher, getContext } from 'svelte';

	export let projectData;

	let files = {
		accepted: [],
		rejected: []
	};

	let error_msg = '';
	let isLoading = false;
	let title_error = '';
	let date_started_error = '';
	let date_finished_error = '';
	let description_error = '';
	let images_error = '';

	const { fetchData } = getContext('fetchData');

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		console.log(e);
		console.log('acceptedFiles', acceptedFiles);
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	async function editProject() {
		try {
			isLoading = true;
			const formData = new FormData();
			formData.append('id', projectData.id);
			formData.append('title', projectData.title);
			formData.append('description', projectData.description);
			formData.append('date_started', projectData.date_started);
			formData.append('date_finished', projectData.date_finished);

			files.accepted.forEach((file) => {
				formData.append('images', file);
			});

			const response = await axios.patch(`/projects`, formData);

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
				fetchData();
				files.accepted = [];
				files.rejected = [];
			}
		} catch (error) {
			isLoading = false;
			// Get error response
			console.log('error', error.response.data.data);
			title_error = error.response.data.data.title;
			date_started_error = error.response.data.data.date_started;
			date_finished_error = error.response.data.data.date_finished;
			description_error = error.response.data.data.description;
			images_error = error.response.data.data.images;

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

	const deleteImage = async (index, imageId) => {
		event.preventDefault(); // Prevent form submission
		try {
			const { isConfirmed } = await Swal.fire({
				title: 'Are you sure?',
				text: 'Once deleted, you will not be able to recover this image!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#3085d6',
				confirmButtonText: 'Yes, delete it!'
			});

			if (isConfirmed) {
				const response = await axios.delete(`/projects/image/${imageId}`);
				if (response.status == 200) {
					projectData.images.splice(index, 1);
					let images = projectData.images;
					dispatch('updateParentData', images);
				}
			}
		} catch (error) {
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
	};
</script>

<div class="modal-dialog modal-xl" id="customModal">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title h4" id="exampleModalXlLabel">Edit Project</h5>
			<button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
		</div>
		<div class="modal-body">
			<div class="ps-md-4 pe-md-3 px-2 py-3 page-body">
				<form class="row g-lg-3 g-2" on:submit|preventDefault={editProject}>
					{#if error_msg}
						<div class="alert alert-danger" role="alert">{error_msg}</div>
					{/if}
					<div class="row text-center text-lg-start">
						{#each projectData.images as image, index}
							<div class="col-lg-3 col-md-4 col-6">
								<div class="image-container">
									<a class="d-block mb-4 h-100" href="#">
										<img
											alt={projectData.title}
											class="img-fluid img-thumbnail"
											src={image.image_path}
										/>
									</a>
									{#if projectData.images.length > 1}
										<button
											on:click={() => deleteImage(index, image.id)}
											class="btn btn-danger btn-sm delete-btn"
											style="color: white;"
										>
											<i class="bi bi-trash"></i>
										</button>
									{/if}
								</div>
							</div>
						{/each}
					</div>

					<div class="col-12">
						<div class="form-floating">
							<input
								bind:value={projectData.title}
								class="form-control"
								name="title"
								placeholder="Tambahkan judul"
								required
								type="text"
							/>
							<label>Judul</label>
							{#if title_error !== ''}
								{#each title_error as error}
									<div class="invalid-feedback d-block">{error}</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="col-sm-6 col-12">
						<div class="form-floating">
							<input
								bind:value={projectData.date_started}
								class="form-control"
								name="date_started"
								required
								type="date"
							/>
							<label>Tanggal Mulai</label>
							{#if date_started_error !== ''}
								{#each date_started_error as error}
									<div class="invalid-feedback d-block">{error}</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="col-sm-6 col-12">
						<div class="form-floating">
							<input
								bind:value={projectData.date_finished}
								class="form-control"
								name="date_finished"
								required
								type="date"
							/>
							<label>Tanggal Selesai</label>
							{#if date_finished_error !== ''}
								{#each date_finished_error as error}
									<div class="invalid-feedback d-block">{error}</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="col-12">
						<div class="form-floating">
							<textarea
								bind:value={projectData.description}
								class="form-control"
								name="description"
								placeholder="Tambahkan deskripsi "
								required
								style="height: 100px"
							/>

							<label>Deskripsi</label>
							{#if description_error !== ''}
								{#each description_error as error}
									<div class="invalid-feedback d-block">{error}</div>
								{/each}
							{/if}
						</div>
					</div>
					<div class="col-12">
						<Dropzone multiple name="images" on:drop={handleFilesSelect} />
						{#if images_error !== ''}
							{#each images_error as error}
								<div class="invalid-feedback d-block">{error}</div>
							{/each}
						{/if}
					</div>
					<ul class="grid-wrapper li_animate list-unstyled mb-0">
						{#each files.accepted as item}
							<li><img src={URL.createObjectURL(item)} alt="" /></li>
						{/each}
					</ul>
					<div class="col-12">
						<button
							class="btn btn-md w-10 btn-secondary text-uppercase mb-2"
							data-bs-dismiss="modal"
							type="button"
						>
							Batal
						</button>
						<button
							class="btn btn-md w-10 btn-primary text-uppercase mb-2"
							title="edit project"
							type="submit"
						>
							{#if isLoading}
								<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
								></span>
								Loading...
							{:else}
								Edit Project
							{/if}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.image-container {
		position: relative;
	}

	.delete-btn {
		position: absolute;
		top: 5px;
		right: 5px;
	}
</style>
