import pic2 from "@/assets/ep_sell.svg";
import pic1 from "@/assets/lucide_locate-fixed.svg";
import pic3 from "@/assets/bulk.png";
import CarouselComp from "./CarouselComp";

const Hero = () => {
	return (
		<div className=' flex w-full sm:flex-col md:flex-col mt-7 sm:mt-3  gap-5 '>
			<div className='w-2/3 sm:w-full md:w-full  h-[450px] sm:h-[300px] '>
				<CarouselComp />
			</div>

			<div className='w-1/3 sm:w-full md:w-full h-[400px] sm:h-[100%] md:h-[100%]  overflow-hidden sm:flex-row md:flex-row  gap-4 flex flex-col'>
				<a target='_blank' href='https://kao-agent.netlify.app/'>
					<div className='bg-ascentBlue rounded-sm min-h-[70px] md:h-[70px] flex justify-between pl-5 pr-5 items-center flex-1 cursor-pointer'>
						<div className='text-[17px]  sm:text-[14px] md:text-[14px] font-semibold text-primary cursor-pointer'>
							Become an <br />
							Agent
						</div>

						<div>
							<img src={pic1} className='w-[30px] sm:w-[20px]' />
						</div>
					</div>
				</a>
				<a target='_blank' href='https://kao-storeowner.netlify.app/'>
					<div className='bg-secondaryAscent rounded-sm min-h-[70px] md:h-[70px] flex justify-between pl-5 pr-5 items-center flex-1 '>
						<div className='text-[17px] sm:text-[14px] md:text-[14px] font-semibold text-secondary  cursor-pointer'>
							Sell On <br />
							Kao
						</div>

						<div>
							<img src={pic2} className='w-[30px] sm:w-[20px] md:w-[20px]' />
						</div>
					</div>
				</a>

				<div className='  sm:hidden md:hidden flex-1'>
					<img
						style={{
							objectFit: "contain",
							width: "100%",
						}}
						className='object-contain'
						src={pic3}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
