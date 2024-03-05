import React from "react";
import pic from '@/assets/cate.svg'

const CategoriesCard = () => {
	return (
		<div className='  '>
		
				<img className='w-[100%] object-cover h-[120px] rounded-sm' src={pic} />
		
			<div className='mt-3 text-center text-sm'>Electronics</div>
		</div>
	);
};

export default CategoriesCard;
