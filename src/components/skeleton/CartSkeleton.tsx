const CartSkeleton = () => {
	return (
		<div className='w-full flex flex-col my-2.5'>
			<div className='flex sm:flex-col gap-5 md:flex-row md:gap-5'>
				{/* Product Info Skeleton */}
				<div className='flex flex-col w-full'>
					<div className='text-2xl font-semibold mb-5 bg-gray-200 h-8 w-36 rounded sm:self-start md:mb-8'></div>
					<div className='flex flex-col gap-4 w-full'>
						{[...Array(3)].map((_, index) => (
							<div
								key={index}
								className='flex sm:flex-row gap-4 sm:gap-2 items-center mb-4 sm:mb-6 md:mb-8'>
								<div className='flex-shrink-0 bg-gray-200 h-24 w-24 sm:h-16 sm:w-16 md:h-24 md:w-24 rounded-md'></div>
								<div className='flex flex-col flex-grow'>
									<div className='bg-gray-200 h-5 w-full md:w-3/4 rounded mb-2.5'></div>
									<div className='bg-gray-200 h-4 w-full md:w-1/2 rounded mb-2.5'></div>
									<div className='bg-gray-200 h-5 w-2/3 md:w-1/3 rounded self-end'></div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Summary Skeleton */}
				<div className='flex flex-col w-full lg:w-[40%] sm:mt-6 p-5 bg-gray-100 rounded-md'>
					<div className='bg-gray-300 h-6 w-24 rounded mb-4'></div>
					<div className='bg-gray-200 h-4 w-full rounded mb-2.5'></div>
					<div className='bg-gray-200 h-4 w-full rounded mb-2.5'></div>
					<div className='bg-gray-300 h-8 w-36 rounded mt-4 self-center md:self-end'></div>
				</div>
			</div>
		</div>
	);
};

export default CartSkeleton;
