// axiosClient.ts
import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import { env } from '$env/dynamic/public';
import Swal from 'sweetalert2';

const BASE_URL = env.PUBLIC_BASE_URL; // Your API base URL

const axiosInstance: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		// You can add other headers here if needed
	}
});

// Function to retrieve the access token from localStorage
const getAccessToken = (): string | null => {
	return localStorage.getItem('access_token');
};

// Function to set Authorization header with bearer token
const setAuthHeader = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	const token: string | null = getAccessToken();
	if (token) {
		config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
	}
	return config;
};

// Request interceptor to set Authorization header for all requests except login
axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
		// Check if the request is for login
		if (config.url?.endsWith('/login')) {
			// Skip adding Authorization header for login request
			return config;
		}
		// Add Authorization header for other requests
		return setAuthHeader(config);
	},
	(error) => {
		// Handle error with the request
		return Promise.reject(error);
	}
);

// Response interceptor to handle unauthorized responses (HTTP 401 or 403)
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		// Handle error responses
		if (error.response && (error.response.status === 401 || error.response.status === 403)) {
			// Show notification about session expiration
			showSessionExpiredNotification();
			// Immediately force logout
			logout();
		}
		return Promise.reject(error);
	}
);

// Function to show session expired notification
const showSessionExpiredNotification = () => {
	Swal.fire({
		icon: 'warning',
		title: 'Session Expired',
		text: 'Your session has expired. Please log in again.'
	}).then(() => {
		// Redirect to the login page or any other appropriate action
		setTimeout(() => {
			window.location.href = '/auth/login';
		}, 3001);
	});
};

// Function to perform logout action
const logout = () => {
	// Perform logout action here, such as clearing local storage, redirecting to login page, etc.
	localStorage.removeItem('access_token');
	// Redirect to the login page or any other appropriate action
	// Example:
	window.location.href = '/auth/login';
};

export default axiosInstance;
