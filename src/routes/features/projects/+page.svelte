<script>
	import { onMount } from 'svelte';
	import axios from 'axios';

	let projects = [];
	let projectInfo;
	let pageNumber = 1; // Define page number
	let pageSize = 10; // Define page size
	let search = '';
	let token;
	let searchTimeout;



	function getToken() {
		token = localStorage.getItem("access_token")
	console.log("token", token)
		if (!token) {
			window.location.href = '/auth/login';
		}
		return token;
	}

	async function fetchData() {
		console.log("page number", pageNumber)
		try {
			const response = await axios.get('http://localhost:8000/projects/pagination', {
				headers: {
					Authorization: `Bearer ${getToken()}`
				},
				params: {
					page: pageNumber,
					page_size: pageSize,
					search: search,
				}
			});

			if (response.status === 200) {
				projects = response.data.data.projects;
				projectInfo = response.data.data;
				console.log(response.data);
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

						{#await fetchData()}
							READING DATA...
						{:then result}
							<div class="dt-container dt-bootstrap5">
								<div class="row mt-2 justify-content-between">
									<div class="col-md-auto me-auto">
										<div class="dt-length">
											<label for="dt-length-0">Show entries per page:</label>
											<select name="example_length" aria-controls="example" class="form-select form-select-sm" id="dt-length-0" bind:value={pageSize} on:change={handleChange}>
												<option value="10">10</option>
												<option value="25">25</option>
												<option value="50">50</option>
												<option value="100">100</option>
											</select>
										</div>
									</div>
									<div class="col-md-auto ms-auto">
										<div class="dt-search">
											<label for="dt-search-0">Search:</label>
											<input type="search" class="form-control form-control-sm" id="dt-search-0" placeholder="" aria-controls="example" on:input={handleSearch}>
										</div>
									</div>
								</div>
							</div>

							<table class="table">

								<caption>Showing {((pageNumber - 1) * pageSize) + 1} to {Math.min(pageNumber * pageSize, projectInfo.total)} of {projectInfo.total} items</caption>
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
								{#each projects as project, index}
									<tr>
										<!-- Calculate the correct row number based on the current page number and page size -->
										<th scope="row">{(pageNumber - 1) * pageSize + index + 1}</th>
										<td>{project.title}</td>
										<td>{project.description}</td>
										<td>
											{new Date(project.date_started).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })} -
											{new Date(project.date_finished).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
										</td>

										<td>{project.created_at}</td>
									</tr>
								{/each}
								</tbody>
							</table>
							<!-- Pagination -->
							<div class="card-footer">
								<nav aria-label="Page navigation">
									<ul class="pagination justify-content-end">
										<li class="page-item {pageNumber === 1 ? 'disabled' : 'none'}">
											<a class="page-link" on:click={handlePrev}>Previous</a>
										</li>
										{#each Array.from({ length: projectInfo.total_pages }, (_, i) => i + 1) as page}
											<li class="page-item {pageNumber === page ? 'active' :'none'}">
												<a class="page-link" on:click={() => { pageNumber = page; fetchData(); }}>{page}</a>
											</li>
										{/each}
										<li class="page-item {pageNumber === projectInfo.total_pages ? 'disabled' : 'none'} ">
											<a class="page-link" on:click={handleNext}>Next</a>
										</li>
									</ul>
								</nav>
							</div>
						{/await}


				</div>
			</div>
		</div>

	</div>
</div>
<!-- end: page body area -->
