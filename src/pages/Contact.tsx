import react from "react";
import pic from "@/assets/black.jpg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import BrandsComp from "@/components/commons/BrandsComp";

const Contact = () => {
	return (
		<div className='w-[100%] min-h-[100%] mt-10 mb-10 flex xl:justify-center items-center '>
			<div className='w-[100%]  flex flex-col my-[10px]'>
				<div className='xl:flex md:flex lg:flex sm:flex sm:flex-col'>
					<div className='text-[30px] font-semibold text-primary mb-[10px] xl:hidden lg:hidden md:hidden'>
						Contact Us
					</div>
					<div className='xl:w-[400px] lg:w-[400px] md:w-[340px] sm:w-[290px] lg:mr-[20px] xl:mr-[20px] md:mr-[15px]'>
						<img src={pic} alt='' className='w-[100%] ' />
					</div>
					<div className='flex flex-col md:w-[280px]'>
						<div className='text-[30px] font-semibold text-primary mb-[10px] sm:hidden md:text-[24px]'>
							Contact Us
						</div>
						<form action='' method='post' className='sm:mt-[30px]'>
							<div className='flex flex-col mb-[15px]'>
								<div className='text-[12px] mb-[5px]'>Full Name</div>
								<input
									type='text'
									placeholder='Input Your Name'
									className='border border-[#ddd] w-[400px] md:w-[100%] sm:w-[290px] py-[10px] outline-none px-[3px] rounded-[5px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col mb-[15px]'>
								<div className='text-[12px] mb-[5px]'>Phone Number</div>
								<input
									type='text'
									placeholder='+234'
									className='border border-[#ddd] w-[400px] sm:w-[290px] md:w-[100%]  py-[10px] outline-none px-[3px] rounded-[5px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col mb-[15px]'>
								<div className='text-[12px] mb-[5px]'>Delivery Address</div>
								<input
									type='text'
									placeholder='Input Your Address'
									className='border border-[#ddd] w-[400px] md:w-[100%]  sm:w-[290px] h-[100px] md:h-[50px] py-[10px] outline-none px-[3px] rounded-[5px] text-[14px]'
								/>
							</div>
							<button className='w-[400px] sm:w-[290px] text-white bg-secondary flex justify-center md:w-[100%]  items-center py-[15px] rounded-[2px]'>
								Contact Us
							</button>
						</form>
						<div className='flex mt-[50px] w-[400px] md:w-[100%]  sm:w-[300px] justify-between'>
							<div className='flex flex-col'>
								<div className='text-[25px] font-bold text-primary sm:text-[20px] md:text-[20px]'>
									Based In
								</div>
								<div className='flex flex-col text-[14px] sm:text-[12px]'>
									<div>Lekki</div>
									<div>Lagos. Nigeria</div>
								</div>
								<div className='flex w-[100px] md:w-[70px] sm:w-[70px] justify-between text-[20px] md:text-[15px] sm:text-[15px] text-primary mt-[30px]'>
									<RiFacebookCircleFill />
									<CgInstagram />
									<BsTwitterX />
								</div>
							</div>
							<div className='flex flex-col'>
								<div className='text-[25px] font-bold text-primary sm:text-[20px] md:text-[20px]'>
									Contact
								</div>
								<div className='text-[14px] sm:text-[12px]'>kao@gmail.com</div>
							</div>
						</div>
					</div>
				</div>

				<div className='sm:hidden mt-10'>
					<h3 className='mt-7 font-bold mb-3'>Brand Spootlight</h3>
					<div className='grid  grid-cols-5 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
