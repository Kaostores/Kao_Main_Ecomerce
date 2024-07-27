const CategoriesCard = ({ props }: any) => {
	console.log("yoooo", props);
	return (
		<div className='  '>
			<img
				className='w-[100%] object-cover h-[120px] rounded-sm'
				src={props?.image}
			/>
			<div className='mt-3 text-center text-sm'>{props?.name}</div>
		</div>
	);
};

export default CategoriesCard;
