<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import Swal from 'sweetalert2';
	import axios from '$lib/axios_client';
	import { jwtDecode } from 'jwt-decode';
	import { FlatToast, ToastContainer, toasts } from 'svelte-toasts';

	let error_msg = '';
	let success_msg = '';
	let isLoading = false;

	const clientTitle = env.PUBLIC_CLIENT_NAME;

	let username = '';
	let password = '';

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	class LoginResponseModel {
		access_token: string;
		refresh_token: string;

		constructor(response: any) {
			this.access_token = response.data.data.access_token;
			this.refresh_token = response.data.data.refresh_token;
		}
	}

	async function login() {
		try {
			isLoading = true;

			const formData = new FormData();
			formData.append('username', username);
			formData.append('password', password);

			const response = await axios.post(`/login`, formData);

			if (response.status === 200) {
				isLoading = false;

				const loginResponse = new LoginResponseModel(response);

				// Save access token and expiry time to local storage
				localStorage.setItem('access_token', loginResponse.access_token);
				localStorage.setItem('refresh_token', loginResponse.refresh_token);

				// Login successful, redirect or show success message
				await Swal.fire({
					icon: 'success',
					title: response.data.meta.message,
					showConfirmButton: false,
					timer: 1500
				});

				// Redirect to dashboard
				window.location.href = '/';
			}
		} catch (error: any) {
			isLoading = false;
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

	function checkTokenExpiry() {
		const access_token = localStorage.getItem('access_token');
		if (!access_token) {
			// Token is not available
			return false;
		}
		// Decode JWT to get expiry time
		const decoded = jwtDecode(access_token);
		const expired = decoded?.exp ?? 0;
		const expiry_time = expired * 1000;

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
		if (isValidToken) {
			// Token is valid, redirect to dashboard or do something else
			window.location.href = '/';
		}
	});
</script>

<svelte:head>
	<title>Login - {clientTitle} Panel</title>
</svelte:head>
<ToastContainer let:data placement="bottom-right">
	<FlatToast {data} />
	<!-- Provider template for your toasts -->
</ToastContainer>
<!-- start: main grid layout -->
<main class="container-fluid px-0">
	<!-- start: project logo -->
	<div class="px-xl-5 px-4 auth-header" data-bs-theme="none">
		<a
			class="brand-icon text-decoration-none d-flex align-items-center"
			href="/"
			title="{clientTitle}"
		>
			<img alt="logo" src="/assets/images/favicon.png" style="width:100px;" />
		</a>
	</div>

	<!-- start: page menu link -->
	<aside class="px-xl-5 px-4 auth-aside" data-bs-theme="none">
		<img alt="" class="login-img" src="/assets/images/login-img.png" />
	</aside>

	<!-- start: page body area -->
	<div class="px-xl-5 px-4 auth-body">
		<form on:submit|preventDefault={login}>
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
					<label class="form-label" for="username">Username</label>
					<input
						bind:value={username}
						class="form-control form-control-lg"
						id="username"
						name="username"
						placeholder="Input your username"
						type="text"
					/>
				</li>
				<li class="col-12">
					<div class="input-with-icon">
						{#if !showPassword}
							<input
								type="password"
								class="form-control form-control-lg"
								placeholder="Enter your password"
								name="password"
								bind:value={password}
							/>
						{:else}
							<input
								type="text"
								class="form-control form-control-lg"
								placeholder="Enter your password"
								name="password"
								bind:value={password}
							/>
						{/if}

						<!-- Icon to toggle password vi	sibility -->
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
				</li>

				<li class="col-12 my-lg-4">
					<button
						class="btn btn-lg w-100 btn-primary text-uppercase mb-2"
						title="sign in"
						type="submit"
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
			</ul>
			<!--[ ul.row end ]-->
		</form>
	</div>

	<!-- start: page footer -->
	<footer class="px-xl-5 px-4">
		<p class="mb-0 text-muted">
			© {new Date().getFullYear()}
			<a href="https://richh.my.id/" target="_blank" title="richh">{clientTitle}</a>, All Rights
			Reserved.
		</p>
	</footer>
</main>

<style>
    .input-with-icon {
        position: relative;
    }

    .input-with-icon input {
        padding-right: 2.5rem; /* Adjust padding to accommodate the icon */
    }

    .input-with-icon .icon {
        position: absolute;
        top: 50%;
        right: 0.5rem; /* Adjust the distance of the icon from the right */
        transform: translateY(-50%);
        cursor: pointer;
    }
</style>
