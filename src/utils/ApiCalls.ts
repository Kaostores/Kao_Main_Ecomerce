// import axios from "axios";
import { Instance } from "./AxiosConfig";

export const Register = async (data: any) => {
	try {
		const response = await Instance.post("/user/register", data);
		return response;
	} catch (err) {
		return err;
	}
};

export const LogIn = async (data: any) => {
	try {
		const response = await Instance.post("/user/login", data);
		return response;
	} catch (err) {
		return err;
	}
};

export const getUserDetails = async () => {
	try {
		const response = await Instance.get("/user/userdata");
		// Ensure only the data part is returned
		return response.data;
	} catch (err: any) {
		throw err;
	}
};

export const getAllProducts = async () => {
	try {
		const response = await Instance.get("/customer/home");
		return response;
	} catch (err) {
		return err;
	}
};
