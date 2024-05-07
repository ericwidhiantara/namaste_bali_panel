<script lang="ts">
	import { jwtDecode } from 'jwt-decode';
	import { onMount } from 'svelte';
	import axios from '$lib/axios_client';
	import { DashboardModel } from '$lib/models/general/dashboard_model';


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

	let data = new DashboardModel();

	async function fetchData() {
		try {
			const response = await axios.get(
				`/dashboard`
			);

			if (response.status === 200) {
				data = response.data.data;

			} else {
				console.error('Error fetching data:', response);
			}
		} catch (error) {
			console.error('Error fetching data:', error);
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
				<div class="col-xl-12 col-lg-4">
					<h2 class="fw-bold mb-xl-5 mb-4">Dashboard</h2>
					<div class="d-flex align-items-start">
						<div class="bd-callout bd-callout-info">
							Dashboard ini menampilkan total data yang ada pada website ini. Anda dapat melihat data-data yang ada
							pada website dengan menekan menu fitur lalu pilih menu yang ingin dilihat datanya.
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	{#await fetchData()}
		<br /> Loading ...
	{:then _}
		<div class="col-lg-12">
			<div class="row g-3">
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Pesanan</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="6245"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_orders}</span
					>
						</div>

					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Pesanan Belum Dibayar</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="2145"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_unpaid}</span
					>
						</div>

					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Pesanan Sudah Dibayar</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="2145"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_paid}</span
					>
						</div>

					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Pesanan Dibatalkan</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="2145"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_canceled}</span
					>
						</div>

					</div>
				</div>
			</div>
		</div>
		<br />
		<div class="col-lg-12">
			<div class="row g-3">
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Tim</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="6245"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_teams}</span
					>
						</div>

					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Pengguna</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="2145"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_users}</span
					>
						</div>

					</div>
				</div>
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="card p-3 px-4">
						<div>Total Destinasi Wisataa</div>
						<div class="py-4 m-0 text-center h2">
					<span
						class="purecounter"
						data-purecounter-currency="$"
						data-purecounter-end="2145"
						data-purecounter-separator=","
						data-purecounter-start="0">{data.total_destinations}</span
					>
						</div>

					</div>
				</div>
			</div>
		</div>
	{/await}
</div>
<!-- end: page body area -->
