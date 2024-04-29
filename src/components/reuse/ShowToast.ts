import { toast } from "../ui/use-toast";

const ShowToast = (isSuccess: boolean, value: string) => {
	if (isSuccess) {
		toast({
			title: "Successful",
			description: value,
		});
	} else {
		toast({
			variant: "destructive",
			title: "Uh oh! Something went wrong.",
			description: value,
		});
	}
};

export default ShowToast;