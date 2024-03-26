<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	function loadScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => resolve(script);
			script.onerror = () => reject(new Error(`Script load error for ${src}`));
			document.body.appendChild(script);
		});
	}

	// Function to load your specific scripts
	async function loadMyScripts() {
		try {
			await loadScript('/assets/bundles/libscripts.bundle.js');
			await loadScript('/assets/js/main.js');
			console.log('Scripts loaded successfully');
		} catch (error) {
			console.error('Error loading scripts:', error);
		}
	}

	onMount(() => {
		loadMyScripts();
	});
</script>

{#if $page.url.pathname.startsWith('/auth')}
	<body
		data-bvite="theme-CeruleanBlue"
		class="layout-border svgstroke-a layout-default auth rightbar-hide"
		data-sveltekit-preload-data="hover"
	>
	<slot />
	</body>

{:else}
	<body data-bvite="theme-CeruleanBlue" class="layout-border svgstroke-a layout-default rightbar-hide">

	<!-- start: main grid layout -->
	<main class="container-fluid px-0">

		<!-- start: project logo -->
		<div class="px-md-4 px-2 pt-2 pb-2 brand" data-bs-theme="none">
			<div>
				<div class="d-flex align-items-center pt-1">
					<button class="btn d-inline-flex d-xl-none border-0 p-0 pe-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_Navbar">
						<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M4 6l16 0"></path>
							<path d="M4 12l16 0"></path>
							<path d="M4 18l16 0"></path>
						</svg>
					</button>
					<!--[ Start:: Brand Logo icon ]-->
					<a href="index.html" class="brand-icon text-decoration-none d-flex align-items-center" title="BVITE Admin Template">
						<svg height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill="var(--primary-color)" fill-rule="evenodd" clip-rule="evenodd" d="M8.30814 0C6.02576 0 4.33695 1.99763 4.41254 4.16407C4.48508 6.24542 4.39085 8.94102 3.7122 11.1393C3.03153 13.3441 1.88034 14.7407 0 14.92V16.9444C1.88034 17.1237 3.03153 18.5203 3.7122 20.7251C4.39085 22.9234 4.48508 25.619 4.41254 27.7003C4.33695 29.8664 6.02576 31.8644 8.30847 31.8644H31.6949C33.9773 31.8644 35.6658 29.8668 35.5902 27.7003C35.5176 25.619 35.6119 22.9234 36.2905 20.7251C36.9715 18.5203 38.1197 17.1237 40 16.9444V14.92C38.1197 14.7407 36.9715 13.3441 36.2905 11.1393C35.6119 8.94136 35.5176 6.24542 35.5902 4.16407C35.6658 1.99797 33.9773 0 31.6949 0H8.30814Z"/>
							<path fill="white" d="M30.0474 8.81267L20.0721 26.7214C19.8661 27.0911 19.337 27.0933 19.128 26.7253L8.95492 8.81436C8.72711 8.41342 9.06866 7.92768 9.52124 8.009L19.5072 9.80102C19.5709 9.81245 19.6361 9.81234 19.6998 9.80069L29.4769 8.01156C29.928 7.92899 30.2711 8.41086 30.0474 8.81267Z"/>
							<path fill="var(--primary-color)" d="M22.9634 11.0029L18.4147 11.8178C18.3784 11.8243 18.3455 11.8417 18.3211 11.8672C18.2967 11.8927 18.2823 11.9248 18.2801 11.9586L18.0003 16.2791C17.9937 16.3808 18.0959 16.4598 18.2046 16.4369L19.471 16.1697C19.5895 16.1447 19.6966 16.2401 19.6722 16.3491L19.2959 18.0335C19.2706 18.1468 19.387 18.2438 19.5081 18.2101L20.2903 17.9929C20.4116 17.9592 20.5281 18.0564 20.5025 18.1699L19.9045 20.8157C19.8671 20.9812 20.1079 21.0715 20.2083 20.9296L20.2754 20.8348L23.9819 14.0722C24.044 13.959 23.937 13.8299 23.8009 13.8539L22.4974 14.0839C22.3749 14.1055 22.2706 14.0012 22.3052 13.8916L23.156 11.1951C23.1906 11.0854 23.086 10.981 22.9634 11.0029Z"/>
						</svg>
						<span class="fw-bold ps-2 fs-5 d-none d-xl-inline-flex text-gradient">BVITE</span>
					</a>
				</div>
			</div>
			<div class="d-none layout-a-action">
				<div class="mb-2">
					<a class="d-flex align-items-center lh-sm p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="User">
						<img class="avatar rounded-circle border border-3 shadow" src="assets/images/profile_av.png" alt="avatar">
					</a>
					<div class="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
						<div class="bg-body p-3 rounded-3">
							<h4 class="mb-1 title-font text-gradient">Michelle Glover</h4>
							<p class="small text-muted">michelle.glover@gmail.com</p>
							<input type="text" class="form-control form-control-sm" placeholder="Update my status">
						</div>
						<ul class="list-unstyled mt-3">
							<li>
								<a class="dropdown-item rounded-pill" aria-label="my wallet" href="my-wallet.html">
									<span class="align-middle">Balance: <span class="fw-bold text-success"><span data-purecounter-start="0" data-purecounter-separator="," data-purecounter-currency="$" data-purecounter-end="14000" class="purecounter">0</span></span></span>
								</a>
							</li>
							<li><a class="dropdown-item rounded-pill" aria-label="my profile" href="my-profile.html">My Profile</a></li>
							<li><a class="dropdown-item rounded-pill" aria-label="my task" href="my-task.html">My Taskboard</a></li>
							<li><a class="dropdown-item rounded-pill" aria-label="account settings" href="account-settings.html">Settings</a></li>
							<li class="dropdown-divider"></li>
							<li><a class="dropdown-item rounded-pill" aria-label="Add another account" href="#">Add another account</a></li>
						</ul>
						<a class="btn py-2 btn-primary w-100 mt-3 rounded-pill" href="signin.html" role="button">Logout</a>
						<div class="mt-3 text-center small">
							<a class="text-muted me-1" href="#!">Privacy policy</a>•<a class="text-muted mx-1" href="#!">Terms</a>•<a class="text-muted ms-1" href="#!">Cookies</a>
						</div>
					</div>
				</div>
				<a href="#" class="btn p-1" title="Sign out">
					<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
						<path d="M12 4l0 8"></path>
					</svg>
				</a>
			</div>
		</div>

		<!-- start: page header -->
		<header class="px-md-4 px-2" data-bs-theme="none">
			<div class="d-flex justify-content-between align-items-center py-2 w-100">
				<!--[ Start:: Full screen modal popup menu ]-->
				<div class="modal fade" id="FullscreenMenu" tabindex="-1" aria-labelledby="FullscreenMenu" aria-hidden="true" data-bs-theme="dark">
					<div class="modal-dialog modal-fullscreen">
						<div class="modal-content border-4 border border-primary">
							<div class="modal-header border-0">
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body custom_scroll">
								<div class="container-xxl">
									<h5 class="text-light fw-light">Application</h5>
									<ul class="row g-2 list-unstyled li_animate row-cols-lg-5 row-cols-md-3 row-cols-sm-3 row-cols-2 row-deck mb-lg-5 mb-4">
										<li class="col">
											<a class="card hr-arrow p-4" href="inbox.html" title="Inbox" style="--dynamic-color: var(--theme-color1);">
												<svg class="mb-3" width="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path opacity="0.7" d="M4.97978 1C4.90484 1.00011 4.83088 1.01706 4.76338 1.0496C4.69587 1.08214 4.63654 1.12944 4.58978 1.188L1.53978 5H5.99978C6.13239 5 6.25957 5.05268 6.35334 5.14645C6.4471 5.24021 6.49978 5.36739 6.49978 5.5C6.49978 5.89782 6.65782 6.27936 6.93912 6.56066C7.22043 6.84196 7.60196 7 7.99978 7C8.39761 7 8.77914 6.84196 9.06044 6.56066C9.34175 6.27936 9.49978 5.89782 9.49978 5.5C9.49978 5.36739 9.55246 5.24021 9.64623 5.14645C9.74 5.05268 9.86717 5 9.99978 5H14.4598L11.4098 1.188C11.363 1.12944 11.3037 1.08214 11.2362 1.0496C11.1687 1.01706 11.0947 1.00011 11.0198 1H4.97978ZM3.80978 0.563C3.95017 0.387503 4.1282 0.245795 4.33071 0.148346C4.53322 0.050898 4.75504 0.000200429 4.97978 0L11.0198 0C11.2445 0.000200429 11.4663 0.050898 11.6689 0.148346C11.8714 0.245795 12.0494 0.387503 12.1898 0.563L15.8898 5.188C15.9315 5.24011 15.9624 5.30004 15.9806 5.36428C15.9988 5.42851 16.004 5.49574 15.9958 5.562L15.6058 8.686C15.5604 9.04889 15.3841 9.38271 15.1099 9.62469C14.8357 9.86667 14.4825 10.0001 14.1168 10H1.88278C1.51707 10.0001 1.16391 9.86667 0.889698 9.62469C0.61549 9.38271 0.43913 9.04889 0.393782 8.686L0.00378209 5.562C-0.00441416 5.49574 0.000742512 5.42851 0.0189479 5.36428C0.0371533 5.30004 0.0680387 5.24011 0.109782 5.188L3.80978 0.563Z"/>
													<path opacity="0.2" d="M0.294097 11.0446C0.229438 11.0739 0.171762 11.1167 0.124907 11.17V11.169C0.0780298 11.2222 0.0429981 11.2847 0.0221368 11.3525C0.00127556 11.4202 -0.00493837 11.4917 0.00390735 11.562L0.393907 14.686C0.439256 15.0489 0.615615 15.3827 0.889823 15.6247C1.16403 15.8667 1.5172 16.0001 1.88291 16H14.1169C14.4826 16.0001 14.8358 15.8667 15.11 15.6247C15.3842 15.3827 15.5606 15.0489 15.6059 14.686L15.9959 11.562C16.0047 11.4917 15.9984 11.4203 15.9775 11.3525C15.9566 11.2848 15.9216 11.2223 15.8746 11.1691C15.8277 11.116 15.7701 11.0734 15.7055 11.0443C15.6409 11.0151 15.5708 11 15.4999 11H9.99991C9.8673 11 9.74012 11.0527 9.64635 11.1464C9.55259 11.2402 9.49991 11.3674 9.49991 11.5C9.49991 11.8978 9.34187 12.2794 9.06057 12.5607C8.77926 12.842 8.39773 13 7.99991 13C7.60208 13 7.22055 12.842 6.93925 12.5607C6.65794 12.2794 6.49991 11.8978 6.49991 11.5C6.49991 11.3674 6.44723 11.2402 6.35346 11.1464C6.25969 11.0527 6.13252 11 5.99991 11H0.499907C0.428915 11.0001 0.358755 11.0153 0.294097 11.0446Z"/>
												</svg>
												<h6 class="title mb-1">Inbox <span class="badge rounded-pill bg-warning">11</span></h6>
												<p class="small text-muted mb-0 d-none d-xl-inline-flex">Description text here...</p>
												<div class="go-corner">
													<div class="go-arrow">→</div>
												</div>
											</a>
										</li>
										<li class="col">
											<a class="card hr-arrow p-4" href="chat.html" title="Chat App" style="--dynamic-color: var(--theme-color2);">
												<svg class="mb-3" width="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
													<path opacity="0.4" d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
													<path opacity="0.9" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
												</svg>
												<h6 class="title mb-1">Chat App</h6>
												<p class="small text-muted mb-0 d-none d-xl-inline-flex">Description text here...</p>
												<div class="go-corner">
													<div class="go-arrow">→</div>
												</div>
											</a>
										</li>

									</ul>
									<div class="row g-5">
										<div class="col-lg-3 col-md-6 col-sm-6">
											<h6 class="mb-1 text-light fw-light">Project</h6>
											<p class="text-muted small">Lorem ipsum dolor sit amet dis sociosqu sapien.</p>
											<ul class="list-unstyled li_animate link-hover">
												<li><a href="new-project.html" aria-label="New Project">New Project</a></li>
												<li><a href="project-list.html" aria-label="Project List">Project List</a></li>
												<li><a href="project-grid.html" aria-label="Project Grid">Project Grid</a></li>
												<li><a href="project-details.html" aria-label="Project Details">Project Details</a></li>
												<li><a href="clients-list.html" aria-label="Clients">Clients</a></li>
											</ul>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6">
											<h6 class="mb-1 text-light fw-light">Crafted Page</h6>
											<p class="text-muted small">Lorem ipsum dolor sit amet dis sociosqu sapien.</p>
											<ul class="list-unstyled li_animate link-hover">
												<li><a href="my-profile.html">My Profile</a></li>
												<li><a href="user-activity.html">User Activity</a></li>
												<li><a href="gallery.html">Imgae gallery</a></li>
												<li><a href="pricing.html">Pricing table</a></li>
												<li><a href="search.html">Search page</a></li>
											</ul>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6">
											<h6 class="mb-1 text-light fw-light">Authentication Page</h6>
											<p class="text-muted small">Lorem phasellus sociosqu nec turpis montes.</p>
											<ul class="list-unstyled li_animate link-hover">
												<li><a href="signin.html">Sign in</a></li>
												<li><a href="signup.html">Sign up</a></li>
												<li><a href="password-reset.html">Password reset</a></li>
												<li><a href="two-step.html">2-Step Authentication</a></li>
												<li><a href="lockscreen.html">Lockscreen</a></li>
												<li><a href="maintenance.html">Maintenance</a></li>
												<li><a href="404.html">404</a></li>
											</ul>
										</div>
										<div class="col-lg-3 col-md-6 col-sm-6">
											<h6 class="mb-1 text-light fw-light">Widgets</h6>
											<p class="text-muted small">Lorem phasellus sociosqu nec turpis montes.</p>
											<ul class="list-unstyled li_animate link-hover">
												<li><a href="docs/widgets-basic-card.html" aria-label="Widgets Basic card">Basic card</a></li>
												<li><a href="docs/widgets-card-tiles.html" aria-label="Widgets tiles">Card tiles</a></li>
												<li><a href="docs/widgets-card-tab.html" aria-label="Widgets Tabbed">Tabbed card</a></li>
												<li><a href="table.html" aria-label="Widgets Tables">Tables</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer border-0 justify-content-center">
								<div class="container-xxl">
									<div class="row g-3">
										<div class="col-auto">
											<div class="card">
												<div class="card-body d-flex align-items-center p-2">
													<div class="avatar rounded-circle no-thumbnail"><i class="fa fa-skype"></i></div>
													<div class="ms-3">
														<small class="text-muted">Skype ID</small>
														<p class="mb-0 small">bvite.theme</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-auto">
											<div class="card">
												<div class="card-body d-flex align-items-center p-2">
													<div class="avatar rounded-circle no-thumbnail"><i class="fa fa-envelope"></i></div>
													<div class="ms-3">
														<small class="text-muted">Email us</small>
														<p class="mb-0 small">bvite.theme@info.com</p>
													</div>
												</div>
											</div>
										</div>
										<div class="col-auto">
											<div class="card">
												<div class="card-body d-flex align-items-center p-2">
													<div class="avatar rounded-circle no-thumbnail"><i class="fa fa-phone"></i></div>
													<div class="ms-3">
														<small class="text-muted">United States</small>
														<p class="mb-0 small">+1 111-222-1234</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<ul class="header-menu flex-grow-1">


					<!--[ Start:: user detail ]-->
					<li class="nav-item user ms-3">
						<a class="dropdown-toggle gray-6 d-flex text-decoration-none align-items-center lh-sm p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="User" data-bs-auto-close="outside">
							<img class="avatar rounded-circle border border-3" src="assets/images/profile_av.png" alt="avatar">
							<span class="ms-2 fs-6 d-none d-sm-inline-flex">Michelle</span>
						</a>
						<div class="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
							<div class="bg-body p-3 rounded-3">
								<h4 class="mb-1 title-font text-gradient">Michelle Glover</h4>
								<p class="small text-muted">michelle.glover@gmail.com</p>
							</div>
							<ul class="list-unstyled mt-3">

								<li><a class="dropdown-item rounded-pill" aria-label="my profile" href="my-profile.html">My Profile</a></li>

							</ul>
							<a class="btn py-2 btn-primary w-100 mt-3 rounded-pill" href="signin.html" role="button">Logout</a>

						</div>
					</li>
				</ul>
			</div>
		</header>

		<!-- start: page menu link -->
		<aside class="ps-4 pe-3 py-3 sidebar" data-bs-theme="none">
			<nav class="navbar navbar-expand-xl py-0">
				<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvas_Navbar">
					<div class="offcanvas-header">
						<div class="d-flex">
							<a href="index.html" class="brand-icon me-2">
								<svg height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill="var(--primary-color)" fill-rule="evenodd" clip-rule="evenodd" d="M8.30814 0C6.02576 0 4.33695 1.99763 4.41254 4.16407C4.48508 6.24542 4.39085 8.94102 3.7122 11.1393C3.03153 13.3441 1.88034 14.7407 0 14.92V16.9444C1.88034 17.1237 3.03153 18.5203 3.7122 20.7251C4.39085 22.9234 4.48508 25.619 4.41254 27.7003C4.33695 29.8664 6.02576 31.8644 8.30847 31.8644H31.6949C33.9773 31.8644 35.6658 29.8668 35.5902 27.7003C35.5176 25.619 35.6119 22.9234 36.2905 20.7251C36.9715 18.5203 38.1197 17.1237 40 16.9444V14.92C38.1197 14.7407 36.9715 13.3441 36.2905 11.1393C35.6119 8.94136 35.5176 6.24542 35.5902 4.16407C35.6658 1.99797 33.9773 0 31.6949 0H8.30814Z"/>
									<path fill="white" d="M30.0474 8.81267L20.0721 26.7214C19.8661 27.0911 19.337 27.0933 19.128 26.7253L8.95492 8.81436C8.72711 8.41342 9.06866 7.92768 9.52124 8.009L19.5072 9.80102C19.5709 9.81245 19.6361 9.81234 19.6998 9.80069L29.4769 8.01156C29.928 7.92899 30.2711 8.41086 30.0474 8.81267Z"/>
									<path fill="var(--primary-color)" d="M22.9634 11.0029L18.4147 11.8178C18.3784 11.8243 18.3455 11.8417 18.3211 11.8672C18.2967 11.8927 18.2823 11.9248 18.2801 11.9586L18.0003 16.2791C17.9937 16.3808 18.0959 16.4598 18.2046 16.4369L19.471 16.1697C19.5895 16.1447 19.6966 16.2401 19.6722 16.3491L19.2959 18.0335C19.2706 18.1468 19.387 18.2438 19.5081 18.2101L20.2903 17.9929C20.4116 17.9592 20.5281 18.0564 20.5025 18.1699L19.9045 20.8157C19.8671 20.9812 20.1079 21.0715 20.2083 20.9296L20.2754 20.8348L23.9819 14.0722C24.044 13.959 23.937 13.8299 23.8009 13.8539L22.4974 14.0839C22.3749 14.1055 22.2706 14.0012 22.3052 13.8916L23.156 11.1951C23.1906 11.0854 23.086 10.981 22.9634 11.0029Z"/>
								</svg>
							</a>
							<span class="fs-5">BVITE</span>
						</div>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div class="offcanvas-body flex-column custom_scroll ps-4 ps-xl-0">
						<!-- start: Workspace -->
						<h6 class="fl-title title-font ps-2 small text-uppercase text-muted" style="--text-color: var(--theme-color1)">Workspace</h6>
						<ul class="list-unstyled mb-4 menu-list">
							<li>
								<a href="index.html" aria-label="My Dashboard">
									<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
										<path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
										<path d="M10 12h4v4h-4z"></path>
									</svg>
									<span class="mx-2">Dashboard</span>
								</a>
							</li>


						</ul>
						<!-- start: Application -->
						<h6 class="fl-title title-font ps-2 small text-uppercase text-muted" style="--text-color: var(--theme-color2)">Apps</h6>
						<ul class="list-unstyled mb-4 menu-list">
							<li>
								<a href="#UsersMenu" data-bs-toggle="collapse" aria-expanded="false" class="dropdown-toggle" aria-label="Users">
									<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
										<path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
										<path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
									</svg>
									<span class="mx-2">Users</span>
								</a>
								<ul class="collapse list-unstyled" id="UsersMenu">
									<li><a href="my-profile.html" aria-label="My Profile">My Profile</a></li>
									<li><a href="account-settings.html" aria-label="Account Setting">Account Setting</a></li>
								</ul>
							</li>


						</ul>


					</div>
				</div>
			</nav>
		</aside>

		<!-- start: page header area -->
		<div class="px-md-4 px-2 py-2 page-header" data-bs-theme="none">

			<div class="d-flex align-items-center">
				<button class="btn d-none d-xl-inline-flex me-3 px-0 sidebar-toggle" type="button">
					<svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
						<path d="M9 4v16"></path>
						<path d="M15 10l-2 2l2 2"></path>
					</svg>
				</button>
				<ol class="breadcrumb mb-0 bg-transparent">
					<li class="breadcrumb-item"><a href="index.html" title="home">Home</a></li>
					<li class="breadcrumb-item"><a href="#" title="App">Pages</a></li>
					<li class="breadcrumb-item active" aria-current="page" title="Search page">Search page</li>
				</ol>
			</div>

		</div>

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

		<!-- start: page footer -->
		<footer class="px-md-4 px-2">
			<p class="mb-0 text-muted">© 2023 <a href="https://Pixelwibes.com/" target="_blank" title="pixelwibes">pixelwibes</a>, All Rights Reserved.</p>
		</footer>

	</main>

	</body>

{/if}
