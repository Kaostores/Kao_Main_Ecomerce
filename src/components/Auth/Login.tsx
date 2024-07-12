import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LogIn } from "@/utils/ApiCalls";
import ShowToast from "../reuse/ShowToast";
import LoadingButton from "../reuse/LoadingButton";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "@/services/reducers";
import { useState } from "react";

const formSchema = z.object({
	email: z.string().min(2, {
		message: "email is required",
	}),
	password: z.string().min(2, {
		message: "password is required",
	}),
});

const Login = ({ open, onClose, onOpenRegister }: any) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoad(true);
		try {
			const response: any = await LogIn(values);

			console.log("reeee", response);

			if (response?.status === 201) {
				toast.success("Login Successful");
				cookies.set("Kao_cookie_user", response?.data?.token, {
					expires: expiryDate,
					path: "/",
				});
				dispatch(updateUserDetails(response?.data.data));
				onClose();
			} else if (response?.status === 500) {
				ShowToast(false, "Details do not match");
			} else if (response?.response?.status === 401) {
				ShowToast(false, "Invalid Credentials");
			}
			setLoad(false);
		} catch (error) {
			toast.info("An error occurred. Please try again.");
			setLoad(false);
		}
	}

	const cookies = new Cookies();
	const dispatch = useDispatch();
	const expiryDate = new Date();
	expiryDate.setDate(expiryDate.getDate() + 7);
	const [load, setLoad] = useState(false);

	return (
		<Dialog
			open={open?.type === "login" ? open?.state : false}
			onOpenChange={onClose}>
			<DialogContent className='overflow-y-scroll'>
				<DialogHeader>
					<DialogTitle className='mb-3'>Login</DialogTitle>
				</DialogHeader>
				<DialogDescription className='text-left w-full'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='input your email' {...field} />
										</FormControl>
										<FormMessage style={{ color: "red" }} />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder='input your password' {...field} />
										</FormControl>
										<FormMessage style={{ color: "red" }} />
									</FormItem>
								)}
							/>
							<div className='flex justify-center'>
								{load ? (
									<LoadingButton w={"100%"} />
								) : (
									<Button
										variant='secondary'
										className='w-full bg-secondary text-white'
										type='submit'>
										Submit
									</Button>
								)}
							</div>
						</form>
					</Form>
					<div className='mt-2 flex justify-center'>
						Don't have an account?{" "}
						<span
							onClick={onOpenRegister}
							className='ml-2 underline font-bold cursor-pointer'>
							Register
						</span>
					</div>
					<div className='flex items-center gap-3 mt-7 mb-7'>
						<div className='flex-1 h-[1px] bg-black'></div>
						<div className='font-bold'>Or Continue with</div>
						<div className='flex-1 h-[1px] bg-black'></div>
					</div>
					<div className='flex justify-center'>
						<Button
							variant='outline'
							className='w-full border-border'
							type='submit'>
							<span className='text-lg mr-2 '>
								<FcGoogle />
							</span>
							Google
						</Button>
					</div>
				</DialogDescription>
				<DialogDescription className='text-[13px] text-left'>
					By continuing, you confirm that you are an adult. By creating an
					account, you agree to the Kao.com Free Membership Agreement and
					Privacy Policy
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
};

export default Login;
