import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
	const [rating, setRating] = useState(4);

	const handleClick = (value: any) => {
		setRating(value);
	};

	return (
		<div style={{ overflow: "hidden" }} className='flex overflow-hidden'>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<label key={index} className='cursor-pointer overflow-hidden'>
						<FaStar
							className={`h-3 w-3 ${
								ratingValue <= rating ? "text-yellow-500" : "text-gray-400"
							}`}
						/>
					</label>
				);
			})}
		</div>
	);
};

export default StarRating;
