import React from "react";

const BrandsCompSkeleton = () => {
	return (
		<div className='relative'>
			<div className='w-full h-32 bg-gray-200 rounded-sm animate-pulse'></div>
			<div className='absolute inset-0 rounded-sm bg-gray-300 bg-opacity-50 flex justify-center items-center'>
				<div className='w-24 h-6 bg-gray-400 rounded animate-pulse'></div>
			</div>
		</div>
	);
};

export default BrandsCompSkeleton;
