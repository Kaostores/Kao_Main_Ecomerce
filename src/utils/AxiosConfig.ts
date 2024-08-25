import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const token = `Bearer ${cookies.get("Kao_cookie_user") || ""}`;

export const Instance = axios.create({
	baseURL: "https://kaostores.onrender.com/api/v1",
	headers: {
		Authorization: token,
	},
});
