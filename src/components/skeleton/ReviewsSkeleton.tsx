import React from "react";

const ReviewSkeleton = () => {
	return (
		<div className=' flex flex-col  md:items-center md:mt-5 sm:items-center'>
			<div className='w-full  md:w-5/6 flex flex-col'>
				<div className='w-full flex flex-col'>
					<div className='w-full flex justify-between mt-7'>
						<div className='flex items-center'>
							<div className='w-24 h-24 flex justify-center items-center border border-primary'>
								<div className='h-15 w-15 bg-gray-300 animate-pulse'></div>
							</div>
							<div className='flex flex-col ml-4 sm:hidden'>
								<div className='h-5 w-36 bg-gray-300 animate-pulse mb-3'></div>
								<div className='flex items-center mt-3'>
									<div className='h-3 w-24 bg-gray-300 animate-pulse'></div>
									<div className='h-3 w-12 bg-gray-300 animate-pulse ml-1'></div>
									<div className='h-3 w-20 bg-gray-300 animate-pulse ml-1'></div>
								</div>
								<div className='flex items-center mt-3'>
									<div className='h-3.5 w-10 bg-gray-300 animate-pulse'></div>
									<div className='h-3.5 w-8 bg-gray-300 animate-pulse ml-1'></div>
									<div className='h-4 w-15 bg-gray-300 animate-pulse ml-1'></div>
								</div>
							</div>
						</div>
						<div className='flex flex-col items-end sm:hidden'>
							<div className='h-3.5 w-20 bg-gray-300 animate-pulse'></div>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-col mt-3'>
					<div className='flex items-center'>
						<div className='flex'>
							{[...Array(5)].map((_, i) => (
								<div
									key={i}
									className='w-4 h-4 bg-gray-300 animate-pulse mr-1'></div>
							))}
						</div>
					</div>
					<div className='h-3 w-full bg-gray-300 animate-pulse mt-2.5'></div>
				</div>
				<div className='flex-col hidden sm:flex mt-3.5'>
					<div className='h-3.5 w-20 bg-gray-300 animate-pulse'></div>
				</div>
			</div>
			<div className='w-full h-0.5 bg-[#E6E6E6] mt-5'></div>
		</div>
	);
};

export default ReviewSkeleton;
