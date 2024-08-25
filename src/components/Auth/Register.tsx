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
import CurrencySelector from "../currency/CurrencySelector";
// import { useAddCartCustomerMutation } from "@/services/apiSlice";
// import { useAppSelector } from "@/services/store";
//
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

	// const cart = useAppSelector((state: any) => state.persistedReducer.cart);

	// const [addCartFn, { isLoading: loadingCart }] = useAddCartCustomerMutation();

	// const handleAddToCartUser = async (props: any) => {
	// try {
	// const response: any = await addCartFn({
	// product: props?.product_id,
	// quantity: 1,
	// variant: props?.variantID ? props?.variantID : null,
	// });
	//
	// if (response?.data?.success) {
	// } else {
	// toast.error("Failed to add item to Cart");
	// }
	//
	// console.log("Response from adding to cart:", response);
	// } catch (error) {
	// toast.error("An error occurred while adding to the cart");
	// console.error("Error adding cart item:", error);
	// }
	// };
	//
	// async function onSubmit(values: z.infer<typeof formSchema>) {
	// setLoad(true);
	// try {
	// const response: any = await Register(values);
	//
	// if (response?.status === 201) {
	// cookies.set("Kao_cookie_user", response?.data?.token, {
	// expires: expiryDate,
	// path: "/",
	// });
	// dispatch(updateUserDetails(response?.data.data));
	//
	// if (cart.length > 0) {
	// for (const cartItem of cart) {
	// await handleAddToCartUser({
	// product_id: cartItem.id,
	// variantID: cartItem.variant ? cartItem.variant.id : null,
	// });
	// }
	// }
	//
	// onClose();
	// toast.success("Registration Successful");
	// } else if (response?.status === 500) {
	// toast.info("Account already exists");
	// }
	// setLoad(false);
	// } catch (error) {
	// toast.error("An error occurred. Please try again.");
	// setLoad(false);
	// }
	// }
	const [selectedCurrency, setSelectedCurrency] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setLoad(true);
		try {
			const response: any = await Register({
				...values,
				currency: selectedCurrency,
				role: "user",
				country: selectedCountry,
			});

			if (response?.status >= 200 && response?.status < 300) {
				toast.success(response?.data?.message);
			} else if (response?.status >= 300 && response?.status < 400) {
				toast.info(response?.data?.message);
			} else if (response?.status >= 400 && response?.status < 500) {
				toast.error(response?.data?.message);
			} else if (response?.status >= 500 && response?.status < 600) {
				toast.error(response?.data?.message);
			}

			// Additional specific status checks and handling
			if (response?.status === 200) {
				cookies.set("Kao_cookie_user", response?.data?.token, {
					expires: expiryDate,
					path: "/",
				});
				dispatch(updateUserDetails(response?.data.data));
				onClose();
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
			<DialogContent className='overflow-y-scroll sm:h-[90vh] h-[80vh]'>
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
							<CurrencySelector
								selectedCurrency={selectedCurrency}
								setSelectedCurrency={setSelectedCurrency}
								selectedCountry={selectedCountry}
								setSelectedCountry={setSelectedCountry}
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
