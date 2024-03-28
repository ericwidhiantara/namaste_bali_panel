<script lang="ts">
	import { onMount } from 'svelte';
	import axios, { type AxiosRequestConfig, type RawAxiosRequestHeaders } from 'axios';

	class ImageModel {
		id: string;
		project_id: string;
		image_path: string;
		constructor(data) {
			this.id = data.id;
			this.project_id = data.project_id;
			this.image_path = data.image_path;
		}
	}

	class ProjectModel {
		id: string;
		title: string;
		slug: string;
		description: string;
		date_started: Date;
		date_finished: Date;
		images: ImageModel[];
		created_at: number;
		updated_at: number;
		constructor(data) {
			this.id = data.id;
			this.title = data.title;
			this.slug = data.slug;
			this.description = data.description;
			this.date_started = new Date(data.date_started);
			this.date_finished = new Date(data.date_finished);
			this.images = data.images;
			this.created_at = data.created_at;
			this.updated_at = data.updated_at;
		}
	}

	class ProjectDataModel {
		page_number: number;
		page_size: number;
		total: number;
		total_pages: number;
		projects: ProjectModel[];
		constructor(data) {
			this.page_number = data.page_number;
			this.page_size = data.page_size;
			this.total = data.total;
			this.total_pages = data.total_pages;
			this.projects = data.projects;
		}
	}

	let projects = [] as ProjectModel[];
	let projectInfo = {} as ProjectDataModel;
	let pageNumber = 1; // Define page number
	let pageSize = 10; // Define page size
	let search = '';
	let token;
	let searchTimeout;

	function getToken() {
		token = localStorage.getItem('access_token');
		if (!token) {
			window.location.href = '/auth/login';
		}
		return token;
	}

	async function fetchData() {
		const config: AxiosRequestConfig = {
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${getToken()}`
			} as RawAxiosRequestHeaders,
			params: {
				page: pageNumber,
				page_size: pageSize,
				search: search
			}
		};
		try {
			const response = await axios.get('http://localhost:8000/projects/pagination', config);

			if (response.status === 200) {
				projects = response.data.data.projects;
				projectInfo = response.data.data;
			}
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	function handleChange(event) {
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
		if (pageNumber < projectInfo.total_pages) {
			pageNumber++;
			fetchData();
		}
	}

	function handleSearch(event) {
		// Clear previous timeout to debounce the input
		clearTimeout(searchTimeout);

		// Set new timeout to trigger the search after a delay
		searchTimeout = setTimeout(() => {
			search = event.target.value;
			pageNumber = 1; // Reset page number when performing a new search
			fetchData(); // Fetch data with the updated search query
		}, 500); // Delay in milliseconds (adjust as needed)
	}

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

	// Call fetchData function on component mount
	onMount(fetchData);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<!-- start: page body area -->
<div class="ps-md-4 pe-md-3 px-2 py-3 page-body">
	<div class="row g-12">
		<div class="col-xxl-12 col-xl-7 col-lg-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">List Project</h6>
				</div>
				<div class="card-body">
					<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
						<div class="row">
							<div class="col-sm-12 col-md-6">
								<div class="dataTables_length" id="DataTables_Table_0_length">
									<label>
										Show
										<select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select form-select-sm" bind:value={pageSize}
														on:change={handleChange}>
											<option value="10">10</option>
											<option value="25">25</option>
											<option value="50">50</option>
											<option value="100">100</option>
										</select>
										entries
									</label>
								</div>
							</div>
							<div class="col-sm-12 col-md-6">
								<div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="DataTables_Table_0" on:input={handleSearch}></label></div>
							</div>
						</div>
						<div class="row dt-row">
							<div class="col-sm-12">
								<table class="table table-hover custom-table mb-0 dataTable nowrap no-footer dtr-inline collapsed" style="width: 100%;" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
									<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Judul</th>
										<th scope="col">Deskripsi</th>
										<th scope="col">Tanggal</th>
										<th scope="col">Dibuat Pada</th>
									</tr>
									</thead>
									<tbody>
									{#await fetchData()}
										<tr>
											<td colspan="5" class="text-center">Loading...</td>

										</tr>

									{:then result}
										{#each projects as project, index}
											<tr>
												<!-- Calculate the correct row number based on the current page number and page size -->
												<th scope="row">{(pageNumber - 1) * pageSize + index + 1}</th>
												<td>{project.title}</td>
												<td>{project.description}</td>
												<td>
													{formatDate(project.date_started)} - {formatDate(project.date_finished)}
												</td>

												<td>{formatHumanDate(project.created_at)}</td>
											</tr>
										{/each}
									{/await}


									</tbody>
								</table>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12 col-md-5">
								<div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing {(pageNumber - 1) * pageSize + 1} to {Math.min(
									pageNumber * pageSize,
									projectInfo.total
								)} of {projectInfo.total} items</div>
							</div>
							<div class="col-sm-12 col-md-7">
								<div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
									<ul class="pagination">
										<li class="paginate_button previous page-item {pageNumber === 1 ? 'disabled' : 'none'}" id="DataTables_Table_0_previous"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="0" class="page-link"  on:click={handlePrev}>Previous</a></li>
										{#each Array.from({ length: projectInfo.total_pages }, (_, i) => i + 1) as page}
											<li class="paginate_button page-item {pageNumber === page ? 'active' : 'none'}">
												<a
													href="#" aria-controls="DataTables_Table_0" role="link" aria-current="page" data-dt-idx="0" tabindex="0" class="page-link"
													on:click={() => {
														pageNumber = page;
														fetchData();
													}}>{page}</a
												>
											</li>
										{/each}
										<li class="paginate_button next page-item {pageNumber === projectInfo.total_pages
												? 'disabled'
												: 'none'} " id="DataTables_Table_0_next"><a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="next" tabindex="0" class="page-link" on:click={handleNext}>Next</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- end: page body area -->
