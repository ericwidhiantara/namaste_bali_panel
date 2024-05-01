<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { jwtDecode } from 'jwt-decode';
	import Swal from 'sweetalert2';
	import axios, { type AxiosRequestConfig, type RawAxiosRequestHeaders } from 'axios';

	class UserModel {
		id: string;
		name: string;
		email: string;
		phone: string;
		picture: string;
		is_active: boolean;

		constructor(data: any) {
			this.id = data.id;
			this.name = data.name;
			this.email = data.email;
			this.phone = data.phone;
			this.picture = data.picture;
			this.is_active = data.is_active;
		}
	}

	class JWTModel {
		exp: Number;
		sub: Number;
		user: UserModel;

		constructor(data: any) {
			this.exp = data.exp;
			this.sub = data.sub;
			this.user = new UserModel(data.user);
		}
	}

	let user = new UserModel({});

	function loadScript(src: string) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = () => resolve(script);
			script.onerror = () => reject(new Error(`Script load error for ${src}`));
			document.body.appendChild(script);
		});
	}

	function getUserLogin() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token);

		const jwtData = new JWTModel(decoded);

		user = jwtData.user;
		getUserPicture();
	}

	async function getUserPicture() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		try {
			const config: AxiosRequestConfig = {
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${access_token}`
				} as RawAxiosRequestHeaders
			};
			const response = await axios.get('http://localhost:8000/get-picture', config);

			if (response.status === 200) {
				// Assuming user is defined elsewhere
				user.picture = response.data;
				return response.data;
			}
			return 'https://via.placeholder.com/150x150';
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	function logout() {
		Swal.fire({
			title: 'Are you sure?',
			text: 'You want to logout from the system!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, logout!'
		}).then((result) => {
			if (result.isConfirmed) {
				localStorage.removeItem('access_token');
				localStorage.removeItem('refresh_token');
				window.location.href = '/auth/login';
			}
		});
	}

	// Function to load your specific scripts
	async function loadMyScripts() {
		try {
			await loadScript('/assets/bundles/libscripts.bundle.js');
			await loadScript('/assets/js/main.js');
			await loadScript('/assets/bundles/dataTables.bundle.js');
		} catch (error) {
			console.error('Error loading scripts:', error);
		}
	}

	const FEATURES_PATH = ['/destinations', '/teams', '/users'];
	const featurePath = () => {
		for (let i = 0; i < FEATURES_PATH.length; i++) {
			if ($page.url.pathname.startsWith(`/features/${FEATURES_PATH[i]}`)) {
				return true;
			}
		}
		return false;
	};

	onMount(async () => {
		getUserLogin();

		await loadMyScripts();
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
	<!-- start: main grid layout -->
	<main class="container-fluid px-0">
		<!-- start: project logo -->
		<div class="px-md-4 px-2 pt-2 pb-2 brand" data-bs-theme="none">
			<div>
				<div class="d-flex align-items-center pt-1">
					<button
						class="btn d-inline-flex d-xl-none border-0 p-0 pe-2"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvas_Navbar"
					>
						<svg
							class="svg-stroke"
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="26"
							viewBox="0 0 24 24"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M4 6l16 0"></path>
							<path d="M4 12l16 0"></path>
							<path d="M4 18l16 0"></path>
						</svg>
					</button>
					<!--[ Start:: Brand Logo icon ]-->
					<a
						href="/"
						class="brand-icon text-decoration-none d-flex align-items-center"
						title="BVITE Admin Template"
					>
						<svg height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="var(--primary-color)"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.30814 0C6.02576 0 4.33695 1.99763 4.41254 4.16407C4.48508 6.24542 4.39085 8.94102 3.7122 11.1393C3.03153 13.3441 1.88034 14.7407 0 14.92V16.9444C1.88034 17.1237 3.03153 18.5203 3.7122 20.7251C4.39085 22.9234 4.48508 25.619 4.41254 27.7003C4.33695 29.8664 6.02576 31.8644 8.30847 31.8644H31.6949C33.9773 31.8644 35.6658 29.8668 35.5902 27.7003C35.5176 25.619 35.6119 22.9234 36.2905 20.7251C36.9715 18.5203 38.1197 17.1237 40 16.9444V14.92C38.1197 14.7407 36.9715 13.3441 36.2905 11.1393C35.6119 8.94136 35.5176 6.24542 35.5902 4.16407C35.6658 1.99797 33.9773 0 31.6949 0H8.30814Z"
							/>
							<path
								fill="white"
								d="M30.0474 8.81267L20.0721 26.7214C19.8661 27.0911 19.337 27.0933 19.128 26.7253L8.95492 8.81436C8.72711 8.41342 9.06866 7.92768 9.52124 8.009L19.5072 9.80102C19.5709 9.81245 19.6361 9.81234 19.6998 9.80069L29.4769 8.01156C29.928 7.92899 30.2711 8.41086 30.0474 8.81267Z"
							/>
							<path
								fill="var(--primary-color)"
								d="M22.9634 11.0029L18.4147 11.8178C18.3784 11.8243 18.3455 11.8417 18.3211 11.8672C18.2967 11.8927 18.2823 11.9248 18.2801 11.9586L18.0003 16.2791C17.9937 16.3808 18.0959 16.4598 18.2046 16.4369L19.471 16.1697C19.5895 16.1447 19.6966 16.2401 19.6722 16.3491L19.2959 18.0335C19.2706 18.1468 19.387 18.2438 19.5081 18.2101L20.2903 17.9929C20.4116 17.9592 20.5281 18.0564 20.5025 18.1699L19.9045 20.8157C19.8671 20.9812 20.1079 21.0715 20.2083 20.9296L20.2754 20.8348L23.9819 14.0722C24.044 13.959 23.937 13.8299 23.8009 13.8539L22.4974 14.0839C22.3749 14.1055 22.2706 14.0012 22.3052 13.8916L23.156 11.1951C23.1906 11.0854 23.086 10.981 22.9634 11.0029Z"
							/>
						</svg>
						<span class="fw-bold ps-2 fs-5 d-none d-xl-inline-flex text-gradient">BVITE</span>
					</a>
				</div>
			</div>
			<div class="d-none layout-a-action">
				<div class="mb-2">
					<a
						class="d-flex align-items-center lh-sm p-0"
						href={'#'}
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						title="User"
					>
						<img
							class="avatar rounded-circle border border-3 shadow"
							src={user.picture}
							alt="avatar"
						/>
					</a>
					<div class="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
						<div class="bg-body p-3 rounded-3">
							<h4 class="mb-1 title-font text-gradient">{user.name}</h4>
							<p class="small text-muted">{user.email}</p>
							<input
								type="text"
								class="form-control form-control-sm"
								placeholder="Update my status"
							/>
						</div>

						<a
							class="btn py-2 btn-primary w-100 mt-3 rounded-pill"
							href={'#'}
							on:click={logout}
							role="button">Logout</a
						>
					</div>
				</div>
				<a href={'#'} class="btn p-1" title="Sign out">
					<svg
						class="svg-stroke"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
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
				<ul class="header-menu flex-grow-1">
					<!--[ Start:: user detail ]-->
					<li class="nav-item user ms-3">
						<a
							class="dropdown-toggle gray-6 d-flex text-decoration-none align-items-center lh-sm p-0"
							href={'#'}
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							title="User"
							data-bs-auto-close="outside"
						>
							<img class="avatar rounded-circle border border-3" src={user.picture} alt="avatar" />
							<span class="ms-2 fs-6 d-none d-sm-inline-flex">{user.name}</span>
						</a>
						<div class="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
							<div class="bg-body p-3 rounded-3">
								<h4 class="mb-1 title-font text-gradient">{user.name}</h4>
								<p class="small text-muted">{user.email}</p>
							</div>

							<a
								class="btn py-2 btn-primary w-100 mt-3 rounded-pill"
								href={'#'}
								on:click={logout}
								role="button">Logout</a
							>
						</div>
					</li>
				</ul>
			</div>
		</header>

		<!-- start: page menu link -->
		<aside class="ps-4 pe-3 py-3 sidebar" data-bs-theme="none">
			<nav class="navbar navbar-expand-xl py-0">
				<div
					class="offcanvas offcanvas-start"
					data-bs-scroll="true"
					tabindex="-1"
					id="offcanvas_Navbar"
				>
					<div class="offcanvas-header">
						<div class="d-flex">
							<a href="/" class="brand-icon me-2">
								<svg height="26" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										fill="var(--primary-color)"
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.30814 0C6.02576 0 4.33695 1.99763 4.41254 4.16407C4.48508 6.24542 4.39085 8.94102 3.7122 11.1393C3.03153 13.3441 1.88034 14.7407 0 14.92V16.9444C1.88034 17.1237 3.03153 18.5203 3.7122 20.7251C4.39085 22.9234 4.48508 25.619 4.41254 27.7003C4.33695 29.8664 6.02576 31.8644 8.30847 31.8644H31.6949C33.9773 31.8644 35.6658 29.8668 35.5902 27.7003C35.5176 25.619 35.6119 22.9234 36.2905 20.7251C36.9715 18.5203 38.1197 17.1237 40 16.9444V14.92C38.1197 14.7407 36.9715 13.3441 36.2905 11.1393C35.6119 8.94136 35.5176 6.24542 35.5902 4.16407C35.6658 1.99797 33.9773 0 31.6949 0H8.30814Z"
									/>
									<path
										fill="white"
										d="M30.0474 8.81267L20.0721 26.7214C19.8661 27.0911 19.337 27.0933 19.128 26.7253L8.95492 8.81436C8.72711 8.41342 9.06866 7.92768 9.52124 8.009L19.5072 9.80102C19.5709 9.81245 19.6361 9.81234 19.6998 9.80069L29.4769 8.01156C29.928 7.92899 30.2711 8.41086 30.0474 8.81267Z"
									/>
									<path
										fill="var(--primary-color)"
										d="M22.9634 11.0029L18.4147 11.8178C18.3784 11.8243 18.3455 11.8417 18.3211 11.8672C18.2967 11.8927 18.2823 11.9248 18.2801 11.9586L18.0003 16.2791C17.9937 16.3808 18.0959 16.4598 18.2046 16.4369L19.471 16.1697C19.5895 16.1447 19.6966 16.2401 19.6722 16.3491L19.2959 18.0335C19.2706 18.1468 19.387 18.2438 19.5081 18.2101L20.2903 17.9929C20.4116 17.9592 20.5281 18.0564 20.5025 18.1699L19.9045 20.8157C19.8671 20.9812 20.1079 21.0715 20.2083 20.9296L20.2754 20.8348L23.9819 14.0722C24.044 13.959 23.937 13.8299 23.8009 13.8539L22.4974 14.0839C22.3749 14.1055 22.2706 14.0012 22.3052 13.8916L23.156 11.1951C23.1906 11.0854 23.086 10.981 22.9634 11.0029Z"
									/>
								</svg>
							</a>
							<span class="fs-5">BVITE</span>
						</div>
						<button
							type="button"
							class="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body flex-column custom_scroll ps-4 ps-xl-0">
						<!-- start: Workspace -->
						<h6
							class="fl-title title-font ps-2 small text-uppercase text-muted"
							style="--text-color: var(--theme-color1)"
						>
							Workspace
						</h6>
						<ul class="list-unstyled mb-4 menu-list">
							<li>
								<a href="/" aria-label="My Dashboard">
									<svg
										class="svg-stroke"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										viewBox="0 0 24 24"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
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
						<h6
							class="fl-title title-font ps-2 small text-uppercase text-muted"
							style="--text-color: var(--theme-color2)"
						>
							Apps
						</h6>
						<ul class="list-unstyled mb-4 menu-list">
							<li>
								<a
									href="#FeaturesMenu"
									data-bs-toggle="collapse"
									aria-expanded={featurePath()}
									class="dropdown-toggle"
									aria-label="Features"
								>
									<svg
										fill="none"
										height="18"
										width="18"
										viewBox="0 0 30 30"
										class="svg-stroke"
										xmlns="http://www.w3.org/2000/svg"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M22.005 0c-.194-.002-.372.105-.458.276l-2.197 4.38-4.92.7c-.413.06-.578.56-.278.846l3.805 3.407-.953 4.81c-.07.406.363.715.733.523L22 12.67l4.286 2.273c.37.19.8-.118.732-.522l-.942-4.81 3.77-3.408c.3-.286.136-.787-.278-.846l-4.916-.7-2.2-4.38C22.368.11 22.195.002 22.005 0zM22 1.615l1.863 3.71c.073.148.216.25.38.273l4.168.595-3.227 2.89c-.12.112-.173.276-.145.436l.813 4.08-3.616-1.927c-.147-.076-.322-.076-.47 0l-3.59 1.926.823-4.08c.028-.16-.027-.325-.145-.438l-3.262-2.89 4.166-.594c.165-.023.307-.125.38-.272zM16.5 18c-.822 0-1.5.678-1.5 1.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5zM1.5 3C.678 3 0 3.678 0 4.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5zm0 14c-.822 0-1.5.678-1.5 1.5v9c0 .822.678 1.5 1.5 1.5h9c.822 0 1.5-.678 1.5-1.5v-9c0-.822-.678-1.5-1.5-1.5zm0 1h9c.286 0 .5.214.5.5v9c0 .286-.214.5-.5.5h-9c-.286 0-.5-.214-.5-.5v-9c0-.286.214-.5.5-.5z"
										/>
									</svg>

									<span class="mx-2">Menu Utama</span>
								</a>
								<ul class="collapse list-unstyled {featurePath() ? 'show' : ''}" id="FeaturesMenu">
									<li>
										<a
											href="/features/destinations"
											class={$page.url.pathname.startsWith('/features/destinations')
												? 'active'
												: ''}
											aria-label="Project">Destinasi Wisata</a
										>
									</li>
									<li>
										<a
											href="/features/teams"
											class={$page.url.pathname.startsWith('/features/teams') ? 'active' : ''}
											aria-label="Project">Tim</a
										>
									</li>
									<li>
										<a
											href="/features/users"
											class={$page.url.pathname.startsWith('/features/users') ? 'active' : ''}
											aria-label="Project">Pengguna</a
										>
									</li>
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
					<svg
						class="svg-stroke"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path
							d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
						></path>
						<path d="M9 4v16"></path>
						<path d="M15 10l-2 2l2 2"></path>
					</svg>
				</button>
				<ol class="breadcrumb mb-0 bg-transparent">
					<li class="breadcrumb-item"><a href="/" title="home">Home</a></li>
					<li class="breadcrumb-item">
						<a href={'#'} title="App">
							{#if $page.url.pathname.startsWith('/features')}
								Fitur
							{/if}
						</a>
					</li>
					<li class="breadcrumb-item active" aria-current="page" title="">
						{#if $page.url.pathname.startsWith('/features/destinations')}
							Destinasi Wisata
						{:else if $page.url.pathname.startsWith('/features/teams')}
							Tim
						{:else if $page.url.pathname.startsWith('/features/users')}
							Pengguna
						{:else}
							Dashboard
						{/if}
					</li>
				</ol>
			</div>
		</div>

		<!-- start: page body area -->
		<slot />

		<!-- start: page footer -->
		<footer class="px-md-4 px-2">
			<p class="mb-0 text-muted">
				Crafted with <i class="bi bi-heart-fill text-danger"></i> by
				<a href="https://richh.my.id/" target="_blank" title="richh">Richh</a>
				using
				<a href="https://svelte.dev/" target="_blank" title="richh">
					<!-- License: MIT. Made by vscode-icons: https://github.com/vscode-icons/vscode-icons -->
					<svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
						<title>Svelte</title>
						<path
							d="M26.47,5.7A8.973,8.973,0,0,0,14.677,3.246L7.96,7.4a7.461,7.461,0,0,0-3.481,5.009,7.686,7.686,0,0,0,.8,5.058,7.358,7.358,0,0,0-1.151,2.8,7.789,7.789,0,0,0,1.4,6.028,8.977,8.977,0,0,0,11.794,2.458L24.04,24.6a7.468,7.468,0,0,0,3.481-5.009,7.673,7.673,0,0,0-.8-5.062,7.348,7.348,0,0,0,1.152-2.8A7.785,7.785,0,0,0,26.47,5.7"
							style="fill:#ff3e00"
						/>
						<path
							d="M14.022,26.64A5.413,5.413,0,0,1,8.3,24.581a4.678,4.678,0,0,1-.848-3.625,4.307,4.307,0,0,1,.159-.61l.127-.375.344.238a8.76,8.76,0,0,0,2.628,1.274l.245.073-.025.237a1.441,1.441,0,0,0,.271.968,1.63,1.63,0,0,0,1.743.636,1.512,1.512,0,0,0,.411-.175l6.7-4.154a1.366,1.366,0,0,0,.633-.909,1.407,1.407,0,0,0-.244-1.091,1.634,1.634,0,0,0-1.726-.622,1.509,1.509,0,0,0-.413.176l-2.572,1.584a4.934,4.934,0,0,1-1.364.582,5.415,5.415,0,0,1-5.727-2.06A4.678,4.678,0,0,1,7.811,13.1,4.507,4.507,0,0,1,9.9,10.09l6.708-4.154a4.932,4.932,0,0,1,1.364-.581A5.413,5.413,0,0,1,23.7,7.414a4.679,4.679,0,0,1,.848,3.625,4.272,4.272,0,0,1-.159.61l-.127.375-.344-.237a8.713,8.713,0,0,0-2.628-1.274l-.245-.074.025-.237a1.438,1.438,0,0,0-.272-.968,1.629,1.629,0,0,0-1.725-.622,1.484,1.484,0,0,0-.411.176l-6.722,4.14a1.353,1.353,0,0,0-.631.908,1.394,1.394,0,0,0,.244,1.092,1.634,1.634,0,0,0,1.726.621,1.538,1.538,0,0,0,.413-.175l2.562-1.585a4.9,4.9,0,0,1,1.364-.581,5.417,5.417,0,0,1,5.728,2.059,4.681,4.681,0,0,1,.843,3.625A4.5,4.5,0,0,1,22.1,21.905l-6.707,4.154a4.9,4.9,0,0,1-1.364.581"
							style="fill:#fff"
						/>
					</svg>
				</a>
				© {new Date().getFullYear()}, All Rights Reserved.
			</p>
		</footer>
	</main>
{/if}
