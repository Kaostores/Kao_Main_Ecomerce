import { Instance } from "./AxiosConfig";

export const Register = async (data: any) => {
	try {
		const response = await Instance.post("/customer/register", data);
		return response;
	} catch (err) {
		return err;
	}
};

export const LogIn = async (data: any) => {
	try {
		const response = await Instance.post("/customer/login", data);
		return response;
	} catch (err) {
		return err;
	}
};

export const getUserDetails = async () => {
	try {
		const response = await Instance.get("/customer/userdata");
		// Ensure only the data part is returned
		return response.data;
	} catch (err: any) {
		console.error(
			"Error fetching user details:",
			err.response ? err.response.data : err.message,
		);
		throw err;
	}
};

export const createAddress = async (data: any) => {
	try {
		const response = await Instance.post(
			"/customer/profile/address/create",
			data,
		);

		return response.data;
	} catch (err: any) {
		console.error(
			"Error creating address:",
			err.response ? err.response.data : err.message,
		);
		throw err; // Throw error to be handled by the calling function
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
