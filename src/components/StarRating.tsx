import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
	const [rating, setRating] = useState(4);

	const handleClick = (value:any) => {
		setRating(value);
	};

	return (
		<div className='flex'>
			{[...Array(5)].map((_, index) => {
				const ratingValue = index + 1;
				return (
					<label key={index} className='cursor-pointer'>
						<input
							type='radio'
							name='rating'
							value={ratingValue}
							onClick={() => handleClick(ratingValue)}
							className='sr-only'
						/>
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
