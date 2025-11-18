// src/utils/api.ts
import axios from "axios";
import Cookies from "universal-cookie";

// Initialize Cookies
const cookies = new Cookies();
// Retrieve the token from cookies
const token = `Bearer ${cookies.get("Kao_cookie_user") || ""}`;

// Retrieve the API URL from environment variables
const API_URL = import.meta.env.VITE_API_URL || "";



// Configure Axios instance
export const Instance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: token,
	},
});
