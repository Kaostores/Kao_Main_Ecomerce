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

const formSchema = z.object({
	Email: z.string().min(2, {
		message: "email is required",
	}),
	Password: z.string().min(2, {
		message: "password is required",
	}),
});

const Auth = ({ open, onClose, onOpenLogin }: any) => {
	// Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			Email: "",
			Password: "",
		},
	});

	console.log(open);

	//  Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Dialog
			open={open?.type === "register" ? open?.state : false}
			onOpenChange={() => onClose()}>
			<DialogContent className='overflow-y-scroll   '>
				<DialogHeader>
					<DialogTitle className='mb-3'>Register</DialogTitle>
				</DialogHeader>
				<DialogDescription className='text-left w-full'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
							<FormField
								control={form.control}
								name='Email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder='input your email' {...field} />
										</FormControl>
										<FormMessage
											style={{
												color: "red",
											}}
										/>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='Password'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder='input your password' {...field} />
										</FormControl>
										<FormMessage
											style={{
												color: "red",
											}}
										/>
									</FormItem>
								)}
							/>
							<div className=' flex justify-center'>
								<Button
									variant='secondary'
									className='w-full bg-secondary text-white'
									type='submit'>
									Submit
								</Button>
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
					<div className=' flex justify-center'>
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

				<DialogDescription className='text-[13px] text-left  '>
					By continuing, you confirm that you are an adult. By creating an
					account, you agree to the Kao.com Free Membership Agreement and
					Privacy Policy
				</DialogDescription>
			</DialogContent>
		</Dialog>
	);
};

export default Auth;
