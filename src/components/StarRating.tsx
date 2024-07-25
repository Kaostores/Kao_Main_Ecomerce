import { useViewProductReviewsQuery } from "@/services/apiSlice";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const StarRating = ({ id }: any) => {
	const [rating] = useState(4);

	const { data } = useViewProductReviewsQuery({ product_id: id });
	const [overallRating, setOverallRating] = useState(0);
	const user = useSelector(
		(state: any) => state?.persistedReducer?.currentUser,
	);
	useEffect(() => {
		if (data && data.success) {
			const reviewsData = data.data.map((review: any) => ({
				name: `${user.firstname} ${user.lastname}`, // Assuming user name from Redux store
				date: moment(review.createdAt).calendar(),
				rating: review.rating,
				comment: review.message,
			}));
			// setReviews(reviewsData);
			const totalRatings = reviewsData.reduce(
				(acc: number, review: any) => acc + review.rating,
				0,
			);
			const ratingsCount = reviewsData.length;

			setOverallRating(totalRatings / ratingsCount || 0);
		}
	}, [data, user]);

	return (
		<div className='flex text-[10px] '>
			({overallRating.toFixed(1)})
			<div style={{ overflow: "hidden" }} className='flex overflow-hidden'>
				{[...Array(5)].map((_, index) => {
					return (
						<label key={index} className='cursor-pointer overflow-hidden'>
							<FaStar
								className={`h-3 w-3 ${
									index < Math.round(overallRating)
										? "text-yellow-500"
										: "text-gray-300"
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
