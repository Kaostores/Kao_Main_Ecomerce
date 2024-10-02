import pic1 from "@/assets/icons/iconoir_send-mail.svg";
import pic2 from "@/assets/icons/bi_phone.svg";
import pic3 from "@/assets/icons/ion_logo-google-playstore.svg";
import pic4 from "@/assets/icons/Vector (3).svg";
import pic5 from "@/assets/icons/playBlue.svg";
import pic6 from "@/assets/icons/appBlue.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className='w-full mt-10 sm:mt-5'>
			<div className='min-h-[70px]   w-full bg-ascentGray flex items-center justify-center'>
				<div className='w-[85%] sm:w-[90%] flex justify-between '>
					<div className='flex gap-3 items-center sm:flex-1'>
						<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-white'>
							<img src={pic1} className='w-[20px]' />
						</div>
						<div className='text-[14px] sm:text-[8px]'>
							<div>Support Email</div>
							<div className='font-bold '>support@kaostoresonline.com</div>
						</div>
					</div>
					<div className='flex gap-3 items-center sm:flex-1'>
						<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-white'>
							<img src={pic2} className='w-[20px]' />
						</div>
						<div className='text-[14px] sm:text-[8px]'>
							<div>Support Number </div>
							<div className='font-bold'>090 XXX XXXX, 01 XXX XXXX</div>
						</div>
					</div>
					<div className='w-[300px] h-[40px] bg-white md:hidden sm:hidden rounded-sm flex'>
						<input
							placeholder='Enter Email Address'
							className='flex-1 border-none outline- p-2 rounded-sm'
						/>
						<button className=' bg-primary rounded-sm text-[10px] w-[130px] text-white border-none outline-none'>
							Subscribe Now
						</button>
					</div>
				</div>
			</div>
			<div className='min-h-[200px] sm:hidden bg-primary pt-10 pb-5 text-white  flex  flex-col items-center'>
				<div className='justify-between text-white flex w-[85%] '>
					<div className='text-[15px] md:text-[13px]'>
						<div className='font-bold mb-2'>ABOUT US</div>
						<div
							onClick={() => navigate("/contact")}
							className='mb-1 cursor-pointer hover:underline transition ease-in-out delay-150'>
							Contact Us
						</div>
						<div
							onClick={() => {
								window.location.href = "https://kao-web-seven.vercel.app/about";
							}}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							About Us
						</div>
						<div className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Terms & <br /> Conditions
						</div>
					</div>
					<div className='text-[15px] md:text-[13px]'>
						<div className='font-bold mb-2'>PAYMENT</div>
						<div
							onClick={() => navigate("/help&support")}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							KAO Wallet
						</div>
						<div
							onClick={() => navigate("/help&support")}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Verve
						</div>
						<div
							onClick={() => navigate("/help&support")}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Visa
						</div>
						<div
							onClick={() => navigate("/help&support")}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Master Card
						</div>
						<div
							onClick={() => navigate("/help&support")}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Digital Currency
						</div>
					</div>
					<div className='text-[15px] md:text-[13px]'>
						<div className='font-bold mb-2'>MORE INFO</div>
						<div className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							FAQs
						</div>
						<div
							onClick={() => navigate("/help&support")}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Delivery
						</div>
						<div className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Retrun Policy
						</div>
						<div className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Track My Order
						</div>
						<div className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Privacy Policy
						</div>
					</div>
					<div className='text-[15px] md:text-[13px]'>
						<div className='font-bold mb-2'>MAKE MONEY WITH US</div>
						<div
							onClick={() => {
								window.location.href = "https://kao-agent.netlify.app/";
							}}
							className='mb-1 hover:underline transition ease-in-out delay-150 cursor-pointer'>
							Become an agent
						</div>
					</div>
					<div></div>
					<div></div>
					<div></div>

					<div className='text-[15px]'>
						<div className=' mb-2'>Download on mobile </div>
						<div className='mb-2 flex gap-2'>
							<img src={pic3} className='w-[30px]' />
							<div>
								<div className='text-[10px]'>Download on</div>
								<div className='font-bold'>Google Play Store</div>
							</div>
						</div>
						<div className=' flex gap-2 mb-3'>
							<img src={pic4} className='w-[30px]' />
							<div>
								<div className='text-[10px]'>Download on</div>
								<div className='font-bold'>Apple App Store</div>
							</div>
						</div>
						<div className='mb-1 text-[12px]'>Keep up to date with us</div>
						<div className='flex gap-2'>
							<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-[rgba(225,225,225,0.2)]'>
								<FaFacebookF className='w-[20px]' />
							</div>
							<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-[rgba(225,225,225,0.2)]'>
								<FaXTwitter className='w-[20px]' />
							</div>
							<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-[rgba(225,225,225,0.2)]'>
								<FaInstagram className='w-[20px]' />
							</div>
							<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-[rgba(225,225,225,0.2)]'>
								<FaThreads className='w-[20px]' />
							</div>
						</div>
					</div>
				</div>
				<div className='text-[13px] mt-5'>
					Copyright © 2023 KAO.com. All rights reserved
				</div>
			</div>
			<div className='hidden sm:flex flex-col pb-5 text-primary pt-5  items-center'>
				<div className='flex justify-between w-[90%]'>
					<div className='mb-2 flex gap-2'>
						<img src={pic5} className='w-[30px]' />
						<div>
							<div className='text-[10px]'>Download on</div>
							<div className='font-bold text-[12px]'>Google Play Store</div>
						</div>
					</div>
					<div className=' flex gap-2 mb-3'>
						<img src={pic6} className='w-[30px]' />
						<div>
							<div className='text-[10px]'>Download on</div>
							<div className='font-bold text-[12px]'>Apple App Store</div>
						</div>
					</div>
				</div>
				<div className='mb-1 text-[12px] w-[90%] mt-3'>
					Keep up to date with us
				</div>
				<div className='flex gap-2  w-[90%]'>
					<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-primary'>
						<FaFacebookF className='w-[20px] text-white' />
					</div>
					<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-primary text-white'>
						<FaXTwitter className='w-[20px]' />
					</div>
					<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-primary'>
						<FaInstagram className='w-[20px] text-white' />
					</div>
					<div className='h-[35px] flex justify-center items-center w-[35px] rounded-[50%] bg-primary'>
						<FaThreads className='w-[20px] text-white' />
					</div>
				</div>
				<div className='text-[13px] font-semibold mt-5 w-[90%]'>
					Copyright © 2023 KAO.com. All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
