import { useState } from "react";
import img from "../../assets/watch.png";
import { IoIosArrowBack } from "react-icons/io";
import ReviewPage from "./Subpages/ReviewPage";
import { FaRegStar } from "react-icons/fa";
import Recomended from "./Subpages/Recomended";
import { useNavigate } from "react-router-dom";
import { useViewAllMyReviewsQuery } from "@/services/apiSlice";

const Reviews = () => {
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(true);
	const [pending, setPending] = useState(true);
	const [review, setReview] = useState(false);
	const [selectedStars, setSelectedStars] = useState(0);

	const { data, isLoading, isFetching } = useViewAllMyReviewsQuery({});

	console.log("this is my review", data);

	const Navigate = useNavigate();

	const handleStarClick = (index: any) => {
		const selectedStarsCount = index + 1;
		setSelectedStars(selectedStarsCount);
	};

	const Reviewpage = () => {
		setReview(true);
		setPending(false);
	};
	const Pendingpage = () => {
		setPending(true);
		setReview(false);
	};
	const Toggle2 = () => {
		setShow(false);
		setShow2(true);
	};
	const Toggle1 = () => {
		setShow(true);
		setShow2(false);
	};
	return (
		<>
			<div className='w-[100%] flex flex-col md:items-center sm:items-center bg-[#F4F4F4] md:bg-white sm:bg-white ml-[15px] md:ml-0 sm:ml-0 rounded-[8px]'>
				{pending ? (
					<div className='w-[100%] flex flex-col p-[15px] md:p-0 sm:p-0 md:items-center sm:items-center'>
						<div
							onClick={() => Navigate(-1)}
							className='w-[100%] justify-center items-center hidden md:flex sm:flex md:mb-[20px] sm:mb-[20px] md:mt-[10px]'>
							<div className='w-[90%] md:w-[85%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer ml-[-4px]'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary ml-[12px] text-[17px] font-[600]'>
									My reviews
								</h3>
							</div>
						</div>
						<div className='w-[100%] md:w-[85%] sm:w-[90%] flex items-center'>
							<div
								onClick={Toggle2}
								className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer border-b-[4px] border-primary text-primary`}>
								<p className='text-[15px]'>Reviews</p>
							</div>
						</div>

						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]'></div>

						{show ? (
							<div className='w-[100%] flex flex-col items-center'>
								<div className='w-[100%] md:w-[85%] sm:w-[90%] flex justify-between mt-[20px] sm:mt-[30px]'>
									<div className='flex items-center sm:w-[100%]'>
										<div className='w-[90px] h-[90px] flex justify-center items-center border border-primary'>
											<img src={img} alt='' className='h-[60px]' />
										</div>
										<div className='flex flex-col ml-[15px] sm:flex-1'>
											<h3 className='text-[15px] font-[600]'>
												Rolex Yacht-Master II
											</h3>
											<div className='flex items-center mt-[12px] sm:flex-wrap'>
												<p className='text-iconGray text-[13px]'>Brand:</p>
												<p className='text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]'>
													<span className='text-primary'>Apple</span> | Similar
													Product From Apple | 793979398
												</p>
											</div>
											<div className='flex items-center mt-[12px]'>
												<p className='text-[13px]'>Price:</p>
												<span className='flex items-center text-[13px] font-[600] ml-[4px]'>
													NGN
												</span>
												<div className='w-[100%] flex items-center sm:justify-between'>
													<h3 className='text-[15px] ml-[3px] font-[600]'>
														20,000
													</h3>
													<h4
														onClick={Reviewpage}
														className='text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex'>
														Drop review
													</h4>
												</div>
											</div>
										</div>
									</div>
									<h4
										onClick={Reviewpage}
										className='text-primary text-[14px] cursor-pointer font-[600] sm:hidden'>
										Drop review
									</h4>
								</div>
								- -
							</div>
						) : null}

						{isLoading || isFetching ? (
							<div>Loading...</div>
						) : (
							<>
								{data?.data?.length >= 1 ? (
									<>
										{data?.data?.map((props: any) => (
											<div className='w-[100%] flex flex-col md:items-center md:mt-[20px] sm:items-center'>
												<div className='w-[90%] md:w-[85%] flex-col'>
													<div className='w-[100%] flex flex-col'>
														<div className='w-[100%] flex justify-between mt-[30px]'>
															<div className='flex items-center'>
																<div className='w-[90px] h-[90px] flex justify-center items-center border border-primary'>
																	<img
																		src={
																			props?.product?.media &&
																			props?.product?.media[0]?.link
																		}
																		alt=''
																		className='h-[60px]'
																	/>
																</div>
																<div className='flex flex-col ml-[15px] sm:hidden'>
																	<h3 className='text-[15px] font-[600]'>
																		{props?.product?.name}
																	</h3>
																	<div className='flex items-center mt-[12px]'>
																		<p className='text-iconGray text-[12px]'>
																			Delivered on:
																		</p>
																		<p className='text-[12px] ml-[4px] text-iconGray'>
																			<span>2/2/2024 </span> | Order no:
																		</p>
																		<p className='text-[12px] text-iconGray ml-[3px]'>
																			7879489857
																		</p>
																	</div>
																	<div className='flex items-center mt-[12px]'>
																		<p className='text-[13px]'>Price:</p>
																		<span className='flex items-center text-[13px] font-[600] ml-[4px]'>
																			NGN
																		</span>
																		<h3 className='text-[15px] ml-[3px] font-[600]'>
																			{props?.product?.price?.toLocaleString()}
																		</h3>
																	</div>
																</div>
															</div>
															<div className='flex flex-col items-end sm:hidden'>
																<p className='text-primary text-[14px] font-[600] cursor-pointer'>
																	Edit review
																</p>
															</div>
														</div>
													</div>
													<div className='w-[100%] flex flex-col mt-[13px]'>
														<div className='flex items-center'>
															<div className='flex'>
																{[...Array(5)].map((_, i) => (
																	<svg
																		key={i}
																		className={`w-4 h-6=4 ${
																			i < Math.round(props?.rating)
																				? "text-yellow-500"
																				: "text-gray-300"
																		}`}
																		fill='currentColor'
																		viewBox='0 0 20 20'>
																		<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.964c.3.921-.755 1.688-1.54 1.118l-3.377-2.455a1 1 0 00-1.176 0l-3.377 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.964a1 1 0 00-.364-1.118L2.05 9.39c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.964z' />
																	</svg>
																))}
															</div>
														</div>
														{/* <h3 className='text-[15px] font-[600] mt-[10px] hidden sm:flex'> */}
														{/* Tayo Shobowale */}
														{/* </h3> */}

														<p className='text-[12px] w-[85%] text-iconGray'>
															{props?.message}
														</p>
													</div>
													<div className='flex-col hidden sm:flex mt-[15px]'>
														<p className='text-primary text-[14px] font-[600] cursor-pointer underline'>
															Edit review
														</p>
													</div>
												</div>
												<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]'></div>
											</div>
										))}
									</>
								) : (
									<div>No Review</div>
								)}
							</>
						)}
					</div>
				) : null}

				{review ? (
					<div className='w-[90%] md:w-[100%] flex flex-col md:items-center p-[15px] md:p-0 sm:p-0'>
						<div
							onClick={Pendingpage}
							className='w-[100%] md:w-[85%] flex items-center md:mt-[10px]'>
							<div className='text-primary text-[20px] md:ml-[-4px] sm:ml-[-4px] cursor-pointer'>
								<IoIosArrowBack />
							</div>
							<h3 className='text-primary ml-[12px] text-[15px] font-[500] sm:font-[600]'>
								Rate and Review
							</h3>
						</div>

						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:hidden'></div>

						<ReviewPage />
					</div>
				) : null}

				<div className='w-[90%] md:w-[85%]'>
					<Recomended />
				</div>
			</div>
		</>
	);
};

export default Reviews;

//
{
	/* <div */
}
// onClick={Toggle1}
// className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${
// show ? "border-b-[4px] border-primary text-primary" : "text-iconGray"
// }`}>
{
	/* <p className='text-[15px]'>Pending reviews</p> */
}
{
	/* </div>; */
}
