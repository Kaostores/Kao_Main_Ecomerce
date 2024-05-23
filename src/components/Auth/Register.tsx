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
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "@/services/reducers";
import { useState } from "react";
import { Register } from "@/utils/ApiCalls";
import LoadingButton from "../reuse/LoadingButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const formSchema = z.object({
	firstname: z.string().min(2, {
		message: "firstname is required",
	}),
	lastname: z.string().min(2, {
		message: "lastname is required",
	}),
	email: z.string().min(2, {
		message: "email is required",
	}),
	phone: z.string().min(2, {
		message: "number is required",
	}),
	password: z.string().min(2, {
		message: "password is required",
	}),
});

const Auth = ({ open, onClose, onOpenLogin }: any) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			phone: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoad(true);
		try {
			const response: any = await Register(values);

			if (response?.status === 201) {
				toast.success("Registration Successful");
				cookies.set("Kao_cookie_user", response?.data?.token, {
					expires: expiryDate,
					path: "/",
				});
				dispatch(updateUserDetails(response?.data.data));
				onClose();
			} else if (response?.status === 500) {
				toast.info("Account already exists");
			}
			setLoad(false);
		} catch (error) {
			toast.error("An error occurred. Please try again.");
			setLoad(false);
		}
	}

	const cookies = new Cookies();
	const dispatch = useDispatch();
	const expiryDate = new Date();
	expiryDate.setDate(expiryDate.getDate() + 7);
	const [load, setLoad] = useState(false);
	const [value] = useState();

	return (
		<Dialog
			open={open?.type === "register" ? open?.state : false}
			onOpenChange={onClose}>
			<DialogContent className='overflow-y-scroll sm:h-[80vh]'>
				<DialogHeader>
					<DialogTitle className='mb-3'>Register</DialogTitle>
				</DialogHeader>
				<DialogDescription className='text-left w-full'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='firstname'
								render={({ field }) => (
									<FormItem>
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input placeholder='input your first name' {...field} />
										</FormControl>
										<FormMessage style={{ color: "red" }} />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='lastname'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input placeholder='input your last name' {...field} />
										</FormControl>
										<FormMessage style={{ color: "red" }} />
									</FormItem>
								)}
							/>
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
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<PhoneInput
												className='flex h-10  w-full rounded-md border outline-none border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50'
												{...field}
												placeholder='Enter phone number'
												value={value}
												// onChange={setValue}
											/>
											{/* <Input placeholder='input your phone number' {...field} /> */}
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
						Already have an account?{" "}
						<span
							onClick={onOpenLogin}
							className='ml-2 underline font-bold cursor-pointer'>
							Login
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

export default Auth;
