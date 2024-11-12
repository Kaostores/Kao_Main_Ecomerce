import { toast } from "react-toastify";

const ShowToast = (isSuccess: boolean, value: string) => {
	if (isSuccess) {
		toast.success(value, {});
	} else {
		toast.error(value, {
			// variant: "destructive",
			// title: "Uh oh! Something went wrong.",
		});
	}
};

export default ShowToast;
