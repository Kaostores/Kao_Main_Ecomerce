import React from "react";
import pic from "@/assets/cate.svg";

const BrandsComp = () => {
	return (
		<div className=' relative  '>
			<img className='w-[100%] object-cover h-[120px] rounded-sm' src={pic} />
			<div className='absolute top-0 left-0 bottom-0 right-0 rounded-sm bg-[rgba(0,0,0,0.5)] font-bold text-white text-lg flex justify-center items-center text-center'>Apple</div>
		</div>
	);
};

export default BrandsComp;
