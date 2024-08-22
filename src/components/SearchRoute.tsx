import { useNavigate, useLocation } from "react-router-dom";

const useUpdateUrlParams = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const updateUrlParams = (params: any) => {
		const searchParams = new URLSearchParams(location.search);

		// If minPrice and maxPrice are provided, combine them in the filter
		if (params.minPrice && params.maxPrice) {
			searchParams.set("filter", "");
		} else {
			searchParams.set("filter", ""); // Ensure filter is included even if empty
		}

		searchParams.set("minPrice", params.minPrice || "");
		searchParams.set("maxPrice", params.maxPrice || "");

		// Update or remove other parameters
		Object.keys(params).forEach((key) => {
			if (key !== "filter" && key !== "minPrice" && key !== "maxPrice") {
				if (params[key] !== undefined && params[key] !== "") {
					searchParams.set(key, params[key]);
				} else {
					searchParams.delete(key);
				}
			}
		});

		// Construct the new URL
		const newUrl = `/search?${searchParams.toString()}`;

		// Navigate to the updated URL
		navigate(newUrl, { replace: true });
	};

	return updateUrlParams;
};

export default useUpdateUrlParams;
