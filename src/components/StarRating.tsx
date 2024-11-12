import { FaStar } from "react-icons/fa";

const StarRating = ({ id }: any) => {
	return (
		<div className='flex text-[10px] '>
			({id.toFixed(1)})
			<div style={{ overflow: "hidden" }} className='flex overflow-hidden'>
				{[...Array(5)].map((_, index) => {
					return (
						<label key={index} className='cursor-pointer overflow-hidden'>
							<FaStar
								className={`h-3 w-3 ${
									index < Math.round(id) ? "text-yellow-500" : "text-gray-300"
								}`}
							/>
						</label>
					);
				})}
			</div>
		</div>
	);
};

export default StarRating;
