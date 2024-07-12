import React from "react";

const ProductSkeleton = () => {
	return (
		<div className='h-[370px] sm:w-[100%] pb-3 flex-shrink-0 bg-ascentBlue rounded-sm mb-4 animate-pulse'>
			<div className='h-[260px] relative w-[100%] bg-gray-400 rounded-sm'></div>
			<div className='p-2'>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
			</div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

export default ProductSkeleton;
