import { useNavigate, useLocation } from "react-router-dom";

const useUpdateUrlParams = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const updateUrlParams = (params: any) => {
		const searchParams = new URLSearchParams(location.search);
		Object.keys(params).forEach((key) => {
			searchParams.set(key, params[key]);
		});
		navigate(`/search?${searchParams.toString()}`);
	};

	return updateUrlParams;
};

export default useUpdateUrlParams;
