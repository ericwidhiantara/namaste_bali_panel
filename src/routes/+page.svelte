<script>

	import { jwtDecode } from 'jwt-decode';
	import { onMount } from 'svelte';

	function checkTokenExpiry() {

		const access_token = localStorage.getItem('access_token');
		console.log("access_token", access_token);
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token);
		const expiry_time = decoded.exp * 1000;

		if (expiry_time && expiry_time > Date.now()) {
			// Token is still valid
			return true;
		} else {
			// Token has expired or not available
			localStorage.removeItem('access_token');
			return false;
		}
	}

	// Example of redirect after successful login
	onMount(async () => {
		// Check if access token exists and if it's expired
		const isValidToken = checkTokenExpiry();
		if (!isValidToken) {

			// Token is valid, redirect to dashboard or do something else
			window.location.href = '/auth/login';

		}
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>


<!-- start: page body area -->
<div class="ps-md-4 pe-md-3 px-2 py-3 page-body">
	<div class="card mb-3">
		<div class="card-body">
			<div class="row g-4 li_animate">
				<div class="col-xl-4 col-lg-4">
					<span class="small">Welcome back!</span>
					<h2 class="fw-bold mb-xl-5 mb-4">My Dashboard</h2>
					<div class="d-flex align-items-start">
						<img class="avatar lg rounded-circle border border-3" src="assets/images/profile_av.png" alt="avatar">
						<div class="ms-3">
							<h4 class="mb-0 text-gradient title-font">Hello, Michelle!</h4>
							<span class="text-muted small">michelle.glover@bvite.com</span>
							<p class="mb-0 mt-xl-4 mt-3 text-muted small">"Power up your web app with our sleek (Bvite) Bootstrap admin dashboard template.</p>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-lg-3 col-md-4 col-sm-4">
					<h2>Halo</h2>
				</div>
				<div class="col-xl-5 col-lg-5 col-md-8 col-sm-8">
					<h2>Hello</h2>
				</div>
			</div>
		</div>
	</div>
	<div class="row g-3">
		<div class="col-lg-3 col-md-6 col-sm-6">
			<div class="card p-3 px-4">
				<div>Total Income</div>
				<div class="py-4 m-0 text-center h2"><span data-purecounter-start="0" data-purecounter-separator="," data-purecounter-currency="$" data-purecounter-end="6245" class="purecounter">0</span></div>
				<div class="d-flex">
					<small class="text-muted">This year</small>
					<div class="ms-auto">22%</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-6">
			<div class="card p-3 px-4">
				<div>Total Expense</div>
				<div class="py-4 m-0 text-center h2"><span data-purecounter-start="0" data-purecounter-separator="," data-purecounter-currency="$" data-purecounter-end="2145" class="purecounter">0</span></div>
				<div class="d-flex">
					<small class="text-muted">This year</small>
					<div class="ms-auto">17%</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-6">
			<div class="card p-3 px-4">
				<div>Meetings</div>
				<div class="py-4 m-0 text-center h2"><span data-purecounter-start="0" data-purecounter-separator="," data-purecounter-end="58" class="purecounter">0</span>
				</div>
				<div class="d-flex">
					<small class="text-muted">This year</small>
					<div class="ms-auto">34%</div>
				</div>
			</div>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-6">
			<div class="card p-3 px-4">
				<div>Number of Events</div>
				<div class="py-4 m-0 text-center h2"><span data-purecounter-start="0" data-purecounter-separator="," data-purecounter-end="267" class="purecounter">0</span>
				</div>
				<div class="d-flex">
					<small class="text-muted">This year</small>
					<div class="ms-auto">19%</div>
				</div>
			</div>
		</div>
		<div class="col-xxl-8 col-xl-7 col-lg-12">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title">Sales Analytics</h6>
				</div>
				<div class="card-body">
					<h2>Blabla</h2>
				</div>
			</div>
		</div>
		<div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title mb-0">Sales Revenue</h6>
					<div class="dropdown card-action">
						<a href="#" class="card-fullscreen" data-bs-toggle="tooltip" title="Card Full Screen">
							<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z"></path>
								<path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"></path>
								<path d="M12 8h4v4"></path>
								<path d="M16 8l-5 5"></path>
							</svg>
						</a>
						<a href="#" class="dropdown-toggle after-none" data-bs-toggle="dropdown" aria-expanded="false" title="More Action">
							<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"> </path>
								<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
								<path d="M8 12l0 .01"></path>
								<path d="M12 12l0 .01"></path>
								<path d="M16 12l0 .01"></path>
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-end shadow rounded-4 p-2">
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-share"></i>Share</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-pencil"></i>Rename</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-link"></i>Copy Link Address</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-folder"></i>Move to</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-copy"></i>Copy to</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-edit"></i>Make Private</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-download"></i>Download</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill card-options-remove" data-toggle="card-remove"><i class="me-2 fa fa-trash"></i>Delete</a>
						</div>
					</div>
				</div>
				<div class="card-body custom_scroll" style="height: 320px;">
					<table class="table table-hover mb-0">
						<tbody>
						<tr>
							<td>
								USA
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 78%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$6425</span></td>
						</tr>
						<tr>
							<td>
								Poland
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 62%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$5582</span></td>
						</tr>
						<tr>
							<td>
								Germany
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 48%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$4587</span></td>
						</tr>
						<tr>
							<td>
								Russia
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 35%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$2520</span></td>
						</tr>
						<tr>
							<td>
								Australia
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 30%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$1899</span></td>
						</tr>
						<tr>
							<td>
								Great Britain
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 22%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$1056</span></td>
						</tr>
						<tr>
							<td>
								Poland
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 62%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$5582</span></td>
						</tr>
						<tr>
							<td>
								Germany
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 48%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$4587</span></td>
						</tr>
						<tr>
							<td>
								Russia
								<div class="progress mt-1" style="height: 2px;">
									<div class="progress-bar bg-primary" style="width: 35%"></div>
								</div>
							</td>
							<td class="text-end"><span class="text-muted">$2520</span></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title mb-0">Customer rating</h6>
					<div class="dropdown card-action">
						<a href="#" class="card-fullscreen" data-bs-toggle="tooltip" title="Card Full Screen">
							<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z"></path>
								<path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"></path>
								<path d="M12 8h4v4"></path>
								<path d="M16 8l-5 5"></path>
							</svg>
						</a>
						<a href="#" class="dropdown-toggle after-none" data-bs-toggle="dropdown" aria-expanded="false" title="More Action">
							<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"> </path>
								<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
								<path d="M8 12l0 .01"></path>
								<path d="M12 12l0 .01"></path>
								<path d="M16 12l0 .01"></path>
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-end shadow rounded-4 p-2">
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-share"></i>Share</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-pencil"></i>Rename</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-link"></i>Copy Link Address</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-folder"></i>Move to</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-copy"></i>Copy to</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-edit"></i>Make Private</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-download"></i>Download</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill card-options-remove" data-toggle="card-remove"><i class="me-2 fa fa-trash"></i>Delete</a>
						</div>
					</div>
				</div>
				<div class="card-body custom_scroll" style="height: 280px;">
					<div class="d-flex align-items-center">
						<div class="avatar rounded-circle no-thumbnail theme-color4 text-white"><i class="fa fa-star fa-lg"></i></div>
						<h6 class="ms-3 mb-0">4.9 Rating </h6>
					</div>
					<div class="avatar-list avatar-list-stacked my-4 px-3">
						<img class="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" data-toggle="tooltip" title="Avatar" alt="avatar">
						<img class="avatar rounded-circle" src="assets/images/xs/avatar6.jpg" data-toggle="tooltip" title="Avatar" alt="avatar">
						<img class="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" data-toggle="tooltip" title="Avatar" alt="avatar">
						<img class="avatar rounded-circle" src="assets/images/xs/avatar4.jpg" data-toggle="tooltip" title="Avatar" alt="avatar">
						<span>+195K raters</span>
					</div>
					<p class="text-muted small mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
				</div>
				<div class="card-footer py-2">
					<a href="#" title="Rate Out Application">Rate Out Application<i class="fa fa-long-arrow-right ms-2"></i></a>
				</div>
			</div>
		</div>
		<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title mb-0">Employee Salary</h6>
				</div>
				<div class="card-body py-1">
				</div>
				<div class="card-footer py-2">
					<a href="#" title="my task">View report<i class="fa fa-long-arrow-right ms-2"></i></a>
				</div>
			</div>
		</div>
		<div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
			<div class="card">
				<div class="card-header">
					<h6 class="card-title mb-0">Recent Sellers</h6>
					<div class="dropdown card-action">
						<a href="#" class="card-fullscreen" data-bs-toggle="tooltip" title="Card Full Screen">
							<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M3 16m0 1a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1z"></path>
								<path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6"></path>
								<path d="M12 8h4v4"></path>
								<path d="M16 8l-5 5"></path>
							</svg>
						</a>
						<a href="#" class="dropdown-toggle after-none" data-bs-toggle="dropdown" aria-expanded="false" title="More Action">
							<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"> </path>
								<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
								<path d="M8 12l0 .01"></path>
								<path d="M12 12l0 .01"></path>
								<path d="M16 12l0 .01"></path>
							</svg>
						</a>
						<div class="dropdown-menu dropdown-menu-end shadow rounded-4 p-2">
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-share"></i>Share</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-pencil"></i>Rename</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-link"></i>Copy Link Address</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-folder"></i>Move to</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-copy"></i>Copy to</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-edit"></i>Make Private</a>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill"><i class="me-2 fa fa-download"></i>Download</a>
							<div class="dropdown-divider"></div>
							<a href="javascript:void(0)" class="dropdown-item rounded-pill card-options-remove" data-toggle="card-remove"><i class="me-2 fa fa-trash"></i>Delete</a>
						</div>
					</div>
				</div>
				<div class="card-body custom_scroll" style="height: 320px;">
					<ul class="list-group list-group-flush user-list mb-0" role="tablist">
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Stephen McLean</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<div class="avatar rounded-circle no-thumbnail">FG</div>
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Friends Group</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Gordon Butler</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex active">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar4.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Barbara Kelly</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar6.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Gordon Butler</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar7.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Rose Rivera</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Stephen McLean</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<div class="avatar rounded-circle no-thumbnail">RH</div>
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Gordon Butler</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar4.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Barbara Kelly</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
						<li class="list-group-item b-dashed">
							<a href="javascript:void(0);" class="d-flex">
								<img class="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" alt="">
								<div class="flex-fill ms-3">
									<h6 class="d-flex justify-content-between mb-0"><span>Robert Hammer</span></h6>
									<span class="text-muted small">Customer ID#00222</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- end: page body area -->