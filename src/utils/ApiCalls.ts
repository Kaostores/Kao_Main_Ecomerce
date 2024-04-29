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
        return err
    }
}

export const getAllProducts = async () => {
    try {
        const response = await Instance.get("/customer/home")
        return response;
    } catch (err) {
        return err
    }
}