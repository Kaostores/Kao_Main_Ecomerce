// import img from "../../../assets/watch.png";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { useDropReviewMutation } from "@/services/apiSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingButton from "@/components/reuse/LoadingButton";

const ReviewPage = () => {
	const [selectedStars, setSelectedStars] = useState(0);
	const [message, setMessage] = useState("");
	const { id } = useParams();

	const handleStarClick = (index: number) => {
		const selectedStarsCount = index + 1;
		setSelectedStars(selectedStarsCount);
	};

	const [addReview, { data, isLoading, reset }] = useDropReviewMutation();

	const handleMessageChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setMessage(event.target.value);
	};

	const onRatingSubmit = () => {
		if (selectedStars === 0 || message === "") {
			toast.error("Please fill in all the required fields");
			return;
		}
		const reviewData = {
			product_id: id,
			rating: selectedStars,
			message,
		};
		addReview(reviewData);

		console.log("na data be this", data);
		if (data) {
			toast.success("Review submitted successfully");
			reset();
			setMessage("");
			setSelectedStars(0);
		} else {
			// toast.error("You have already reviewed this product.");
			toast.success("Review submitted successfully");
			setMessage("");
			setSelectedStars(0);
		}
	};

	return (
		<div className='w-[100%] md:w-[85%] flex flex-col mt-[22px] pb-[20px]'>
			<div className='flex flex-col mt-[px]'>
				<p className='text-[13px] text-iconGray'>Please select</p>
				<div className='flex items-center'>
					{[...Array(5)].map((_, index) => (
						<div
							key={index}
							className={`text-[25px] cursor-pointer pr-[8px] mt-[5px] ${
								index < selectedStars ? "text-yellow-500" : "text-iconGray"
							}`}
							onClick={() => handleStarClick(index)}>
							<FaRegStar />
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col'>
				<h3 className='text-[14px] font-[600] mt-[25px]'>Drop a review</h3>
				<textarea
					className='w-[70%] sm:w-[100%] h-[180px] resize-none border border-border rounded-md bg-transparent mt-[12px] outline-none p-[10px]'
					value={message}
					onChange={handleMessageChange}></textarea>
			</div>

			{isLoading ? (
				<div className='mt-7'>
					<LoadingButton w={"190px"} />
				</div>
			) : (
				<button
					onClick={onRatingSubmit}
					className='w-[190px] sm:w-[100%] h-[43px] flex justify-center items-center text-[white] 
bg-secondary mt-[30px] text-[14px] rounded-sm'>
					Save review
				</button>
			)}
		</div>
	);
};

export default ReviewPage;
