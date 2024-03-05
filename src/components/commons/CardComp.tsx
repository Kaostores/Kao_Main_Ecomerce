import React from "react";
import pic1 from "@/assets/pngegg (84) 1.png";
import { BsStars } from "react-icons/bs";
import pic2 from "@/assets/noto_fire.png";
import { MdOutlineShoppingCart } from "react-icons/md";

const CardComp = ({deal}:any) => {
	return (
		<div className='min-h-[250px] pb-3 w-[230px] bg-ascentBlue rounded-sm'>
			<div className='h-[170px] relative w-[100%] '>
				<img
					className='w-[100%] h-[100%] object-contain pt-8 rounded-sm'
					src={pic1}
				/>
				<div className='absolute top-2 pl-3 pr-3 flex justify-between w-full'>
					<div className='h-[25px] w-[25px] bg-white rounded-[50%]'></div>
					{deal && (
						<div className='flex gap-3'>
							<div className='flex bg-ascentGray p-1 rounded-sm text-[12px]'>
								New{" "}
								<BsStars
									style={{
										color: "#FFC700",
									}}
								/>{" "}
							</div>
							<div className='flex bg-[#F7CDBB] p-1 rounded-sm text-[12px]'>
								Hot
								<img src={pic2} />
							</div>
						</div>
					)}

					<div className='absolute bg-white border-border shadow h-[30px] w-[30px] rounded-[50%] flex justify-center items-center top-32 right-2'>
						<MdOutlineShoppingCart />
					</div>
				</div>
			</div>
			<div className='p-2'>
				<div className='text-[12px]'>Twin Watches- Handmade Selly Oak Wood</div>
				<div className='flex justify-between'>
					<div>rating</div>
					<div className='text-right'>
						<div className='flex font-bold'>
							<div className='text-[10px] mt-2 mr-2'>NGN </div>
							20,000
						</div>
						<div className='line-through text-[12px] text-cardBrown font-bold'>
							35,000
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComp;
