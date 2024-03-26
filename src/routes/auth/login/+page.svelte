<script>
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';
	import axios from 'axios';
	import { jwtDecode } from "jwt-decode";
	import { toasts, ToastContainer, FlatToast }  from "svelte-toasts";

	let error_msg;
	let success_msg;
	let isLoading = false;

	const clientTitle = env.PUBLIC_CLIENT_NAME;

	let username = '';
	let password = '';

	async function login() {
		try {
			isLoading = true;

			const formData = new FormData();
			formData.append('username', username);
			formData.append('password', password);

			const response = await axios.post(`${env.PUBLIC_BASE_URL}/login`, formData);

			if (response.status === 200) {
				isLoading = false;
				console.log("ini response",response.data.data.access_token);
				const  access_token  = response.data.data.access_token;
				console.log("ini access token",access_token);

				// Save access token and expiry time to local storage
				localStorage.setItem('access_token', access_token);

				// Login successful, redirect or show success message
				await Swal.fire({
					icon: 'success',
					title: response.data.meta.message,
					showConfirmButton: false,
					timer: 1500
				});
			}
		} catch (error) {
			isLoading = false;
			// Handle error, show error message
			error_msg = error.response.data.meta.message ?? "An error occurred, please try again later";
			toasts.error({
				title: "Oops!",
				description: error.response.data.meta.message ?? "An error occurred, please try again later",
				uid: 1615153277482,
				placement: "bottom-right",
				theme: "dark",
				duration: 0,
			});


		}
	}

	function checkTokenExpiry() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token);
		const expiry_time = decoded.exp * 1000;

		if (expiry_time && parseInt(expiry_time) > Date.now()) {
			// Token is still valid
			return true;
		} else {
			// Token has expired or not available
			localStorage.removeItem('access_token');
			return false;
		}
	}
	// Example of redirect after successful login
	onMount(() => {
		// Check if access token exists and if it's expired
		const isValidToken = checkTokenExpiry();
		if (isValidToken) {
			// Token is valid, redirect to dashboard or do something else
			// window.location.href = '/dashboard';
		}
	});
</script>

<svelte:head>
	<title>Login - {clientTitle} Panel</title>
</svelte:head>
<ToastContainer placement="bottom-right" let:data={data}>
	<FlatToast {data} /> <!-- Provider template for your toasts -->
</ToastContainer>
<!-- start: main grid layout -->
<main class="container-fluid px-0">
	<!-- start: project logo -->
	<div class="px-xl-5 px-4 auth-header" data-bs-theme="none">
		<a
			href="index.html"
			class="brand-icon text-decoration-none d-flex align-items-center"
			title="BVITE Admin Template"
		>
			<img class="" src={env.PUBLIC_CLIENT_LOGO} height="60" alt="logo" style="width:100%;" />

		</a>
	</div>

	<!-- start: page menu link -->
	<aside class="px-xl-5 px-4 auth-aside" data-bs-theme="none">
		<img class="login-img" src="/assets/images/login-img.png" alt="" />
	</aside>

	<!-- start: page body area -->
	<div class="px-xl-5 px-4 auth-body">
		<form on:submit|preventDefault={login} >
			<ul class="row g-3 list-unstyled li_animate">
				<li class="col-12">
					<h1 class="h2 title-font">Welcome to {clientTitle}</h1>
					<p>Your Admin Dashboard</p>
				</li>
				{#if error_msg}
					<div class="alert alert-danger" role="alert">{error_msg}</div>
				{/if}
				{#if success_msg}
					<div class="alert alert-success" role="alert">{success_msg}</div>
				{/if}
				<li class="col-12">
					<label class="form-label">Username</label>
					<input
						type="text"
						class="form-control form-control-lg"
						placeholder="Input your username"
						name="username"
						bind:value={username}
					/>
				</li>
				<li class="col-12">
					<div class="form-label">
						<span class="d-flex justify-content-between align-items-center">
							Password
							<a class="text-primary" href="password-reset.html">Forgot Password?</a>
						</span>
					</div>
					<input
						type="password"
						class="form-control form-control-lg"
						placeholder="Enter your password"
						name="password"
						bind:value={password}
					/>
				</li>

				<li class="col-12 my-lg-4">
					<button
						class="btn btn-lg w-100 btn-primary text-uppercase mb-2"
						type="submit"
						title="sign in"
					>
						{#if isLoading}
							<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"
							></span>
							Loading...
						{:else}
							SIGN IN
						{/if}
					</button>

				</li>
				<li class="col-12">
					<span class="text-muted d-flex d-sm-inline-flex"
					>New to {clientTitle} <a class="ms-2" href="signup.html" title="">Sign up here</a></span
					>
				</li>
			</ul>
			<!--[ ul.row end ]-->
		</form>
	</div>

	<!-- start: page footer -->
	<footer class="px-xl-5 px-4">
		<p class="mb-0 text-muted">
			© 2023 <a href="https://Pixelwibes.com/" target="_blank" title="pixelwibes">{clientTitle}</a
		>, All Rights Reserved.
		</p>
	</footer>
</main>
