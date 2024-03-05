import React from "react";
import pic2 from '@/assets/ep_sell.svg'
import pic1 from '@/assets/lucide_locate-fixed.svg'
import pic3 from '@/assets/bulk.png'
import pic4 from '@/assets/hero2.png'

const Hero = () => {
	return (
		<div className=' flex w-full sm:flex-col md:flex-col mt-7 sm:mt-3  gap-5 '>
			<div className='flex-1 bg-ascentBlue rounded-sm'>
				<img src={pic4} />
			</div>
			<div className='w-[270px] sm:w-[100%] md:w-[100%]  sm:flex-row md:flex-row  gap-4 flex flex-col'>
				<div className='bg-ascentBlue rounded-sm h-[70px] flex justify-between pl-5 pr-5 items-center flex-1'>
					<div className='text-[17px]  sm:text-[14px] md:text-[14px] font-semibold text-primary'>
						Locate Our <br />
						Agent
					</div>
					<div>
						<img src={pic1} className='w-[30px] sm:w-[20px]' />
					</div>
				</div>

				<div className='bg-secondaryAscent rounded-sm h-[70px] flex justify-between pl-5 pr-5 items-center flex-1 '>
					<div className='text-[17px] sm:text-[14px] md:text-[14px] font-semibold text-secondary'>
						Sell On <br />
						Kao
					</div>
					<div>
						<img src={pic2} className='w-[30px] sm:w-[20px] md:w-[20px]' />
					</div>
				</div>

				<div className='flex-1 sm:hidden md:hidden'>
					<img src={pic3} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
