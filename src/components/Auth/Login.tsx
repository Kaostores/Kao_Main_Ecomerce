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
import { useAddCartCustomerMutation } from "@/services/apiSlice";
import { useAppSelector } from "@/services/store";

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

	const cart = useAppSelector((state) => state.persistedReducer.cart);
	console.log("there is cat data", cart);
	//
	const [addCartFn] = useAddCartCustomerMutation();
	//
	const handleAddToCartUser = async (props: any) => {
		try {
			const response: any = await addCartFn({
				product: props?.product_id,
				quantity: 1,
				variant: props?.variantID ? props?.variantID : null,
			});
			console.log("cart added", response);
			if (response?.data?.success) {
				// toast.success("cart added");
			} else {
				toast.error("Failed to add item to Cart");
			}
			console.log("Response from adding to cart:", response);
		} catch (error) {
			toast.error("An error occurred while adding to the cart");
			console.error("Error adding cart item:", error);
		}
	};

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoad(true);
		try {
			// Perform login first
			const response: any = await LogIn(values);
			console.log("Login response:", response);

			// Handle successful login
			if (response?.status === 200) {
				toast.success("Login Successful");

				// Set cookie after login success
				cookies.set("Kao_cookie_user", response?.data?.token, {
					expires: expiryDate,
					path: "/",
				});

				// Dispatch user details to the store
				dispatch(updateUserDetails(response?.data.data));

				// After successful login, add cart items
				if (cart.length > 0) {
					for (const cartItem of cart) {
						// Sequentially add each cart item
						await handleAddToCartUser({
							product_id: cartItem.productID,
							variantID: cartItem.variant ? cartItem.variant.id : null,
						});
					}
				}

				// Close the modal after login and cart addition
				onClose();
			} else if (response?.status === 500) {
				ShowToast(false, "Details do not match");
			} else if (response?.response?.status === 401) {
				ShowToast(false, "Invalid Credentials");
			}

			setLoad(false);
		} catch (error) {
			toast.info("An error occurred. Please try again.");
			console.error("Error during login:", error);
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
											<Input
												type='password'
												placeholder='input your password'
												{...field}
											/>
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
