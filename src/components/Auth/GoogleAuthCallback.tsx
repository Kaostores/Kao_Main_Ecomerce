import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Instance } from "@/utils/AxiosConfig";

const GoogleAuthCallback = () => {
	const location = useLocation();

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const code = queryParams.get("code");

		if (code) {
			exchangeCodeForToken(code);
		}
	}, [location]);

	const exchangeCodeForToken = async (code: any) => {
		try {
			const response = await Instance.get(`/user/auth/google`, {
				params: { code },
				headers: {
					Authorization: `Bearer your_token_here`, // if necessary
				},
			});

			if (response.data.success) {
				console.log("Token received:", response.data.token);
				// Store token (e.g., localStorage) and redirect to protected route
			} else {
				console.error("Failed to get token");
			}
		} catch (error) {
			console.error("Error exchanging code for token", error);
		}
	};

	return <div>Loading...</div>;
};

export default GoogleAuthCallback;
