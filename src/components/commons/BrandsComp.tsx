const BrandsComp = ({ ...props }) => {
	return (
		<div className=' relative  '>
			<img
				className='w-[100%] object-cover h-[120px] rounded-sm'
				src={props?.image}
			/>
			<div className='absolute top-0 left-0 bottom-0 right-0 rounded-sm bg-[rgba(0,0,0,0.5)] font-bold text-white text-lg flex justify-center items-center text-center p-4 sm:p-2 sm:text-[17px] '>
				{props?.title}
			</div>
		</div>
	);
};

export default BrandsComp;
