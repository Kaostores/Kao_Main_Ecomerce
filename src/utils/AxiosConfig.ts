// src/utils/api.ts
import axios from "axios";
import Cookies from "universal-cookie";

// Initialize Cookies
const cookies = new Cookies();
// Retrieve the token from cookies
const token = `Bearer ${cookies.get("Kao_cookie_user") || ""}`;

// Configure Axios instance
export const Instance = axios.create({
	baseURL: "https://kaostores.onrender.com/api/v1",
	headers: {
		Authorization: token,
	},
});
