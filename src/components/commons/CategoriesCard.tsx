import useUpdateUrlParams from "../SearchRoute";

const CategoriesCard = ({ props }: any) => {
	const updateUrlParams = useUpdateUrlParams();
	// console.log("yoooo", props);
	return (
		<div
			onClick={() => {
				updateUrlParams({ category_id: props?.id });
			}}
			className=' cursor-pointer '>
			<img
				className='w-[100%] object-cover h-[120px] rounded-sm border'
				src={props?.image}
			/>
			<div className='mt-3 text-center text-sm'>{props?.name}</div>
		</div>
	);
};

export default CategoriesCard;
