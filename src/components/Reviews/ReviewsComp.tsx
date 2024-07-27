import { useEffect, useState } from "react";
import { useViewProductReviewsQuery } from "@/services/apiSlice";
import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewPage from "@/pages/Dashboard/Subpages/ReviewPage";

const ReviewComponent = ({ showReview, setShowReview }: any) => {
	const { id } = useParams();

	const [overallRating, setOverallRating] = useState(0);
	const [totalReviews, setTotalReviews] = useState(0);
	const [ratingsBreakdown, setRatingsBreakdown] = useState<any>({
		5: 0,
		4: 0,
		3: 0,
		2: 0,
		1: 0,
	});
	const [reviews, setReviews] = useState([]);

	const { data } = useViewProductReviewsQuery({ product_id: id });
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
			setReviews(reviewsData);

			const totalRatings = reviewsData.reduce(
				(acc: number, review: any) => acc + review.rating,
				0,
			);
			const ratingsCount = reviewsData.length;
			const breakdown = reviewsData.reduce(
				(acc: any, review: any) => {
					acc[review.rating] = (acc[review.rating] || 0) + 1;
					return acc;
				},
				{ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
			);

			setOverallRating(totalRatings / ratingsCount);
			setTotalReviews(ratingsCount);
			setRatingsBreakdown(breakdown);
		}
	}, [data, user]);

	return (
		<div className='p-4 max-w-4xl mx-auto '>
			<div className='flex flex-col md:flex-row justify-between items-center mb-6'>
				<div className='flex items-center'>
					<span className='text-6xl font-bold'>{overallRating.toFixed(1)}</span>
					<div className='ml-4'>
						<p className='text-xl'>out of 5</p>
						<div className='flex items-center'>
							<div className='flex'>
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className={`w-6 h-6 ${
											i < Math.round(overallRating)
												? "text-yellow-500"
												: "text-gray-300"
										}`}
										fill='currentColor'
										viewBox='0 0 20 20'>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.54 1.118l-3.377-2.455a1 1 0 00-1.176 0l-3.377 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.964a1 1 0 00-.364-1.118L2.05 9.39c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.964z' />
									</svg>
								))}
							</div>
							<span className='ml-2 text-gray-600'>{totalReviews} Reviews</span>
						</div>
					</div>
				</div>
			</div>
			<div className='space-y-2'>
				{[...Array(5)].map((_, i) => (
					<div key={i} className='flex items-center whitespace-nowrap'>
						<span className='w-12 text-sm'>{5 - i} Star</span>
						<div className='w-full bg-gray-200 rounded-full h-4 mx-2'>
							<div
								className={`bg-blue-600 h-4 rounded-full`}
								style={{
									width: `${(ratingsBreakdown[5 - i] / totalReviews) * 100}%`,
								}}></div>
						</div>
						<span className='w-8 text-sm'>{ratingsBreakdown[5 - i]}</span>
					</div>
				))}
			</div>
			<h4
				onClick={() => {
					setShowReview(!showReview);
				}}
				className='text-primary text-[14px] mt-10  cursor-pointer font-[600] '>
				Drop review
			</h4>
			{showReview && <ReviewPage />}
			<div className='mt-6'>
				{reviews.map((review: any, index: any) => (
					<div
						key={index}
						className='flex flex-col md:flex-row border-t pt-4 mt-4'>
						<div className='flex items-center mb-2 md:mb-0'>
							<div className='bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center capitalize'>
								{user.firstname.charAt(0)}
							</div>
							<div className='ml-4'>
								<p className='font-semibold capitalize'>
									{`${user?.firstname} ${user?.lastname}`}
								</p>
								<p className='text-gray-600'>{review.date}</p>
							</div>
						</div>
						<div className='md:ml-4'>
							<div className='flex items-center'>
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										className={`w-4 h-4 ${
											i < review.rating ? "text-yellow-500" : "text-gray-300"
										}`}
										fill='currentColor'
										viewBox='0 0 20 20'>
										<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.54 1.118l-3.377-2.455a1 1 0 00-1.176 0l-3.377 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.964a1 1 0 00-.364-1.118L2.05 9.39c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.964z' />
									</svg>
								))}
							</div>
							<p>{review.comment}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReviewComponent;
