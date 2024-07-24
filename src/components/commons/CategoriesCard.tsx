import pic from "@/assets/cate.svg";

const CategoriesCard = ({ props }: any) => {
	console.log("yoooo", props);
	return (
		<div className='  '>
			<img className='w-[100%] object-cover h-[120px] rounded-sm' src={pic} />
			<div className='mt-3 text-center text-sm'>{props}</div>
		</div>
	);
};

export default CategoriesCard;
