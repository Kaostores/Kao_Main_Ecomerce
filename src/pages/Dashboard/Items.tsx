import { RiDeleteBin6Line, RiShoppingCartLine } from "react-icons/ri";
import Recomended from "./Subpages/Recomended";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
	useDeleteNewBookmarkMutation,
	useViewAllBookmarksQuery,
} from "@/services/apiSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewSkeleton from "@/components/skeleton/ReviewsSkeleton";
import EmptyData from "@/components/reuse/EmptyData";

const Items = () => {
	const Navigate = useNavigate();
	const { data, isLoading, isFetching } = useViewAllBookmarksQuery({});

	const [removeBookMark, { data: newBookMarkData }] =
		useDeleteNewBookmarkMutation();
	// console.log("boooookmark", newBookMarkData);
	const handleDeleteBookMark = (id: any) => {
		if (!newBookMarkData) {
			removeBookMark({ product_id: id });
			toast.success("Bookmarked Removed successfully");
		} else {
			toast.error("Already bookmarked");
		}
	};

	return (
		<div className='w-[100%] flex flex-col p-[15px] md:items-center sm:items-center md:p-0 sm:p-0 bg-[#F4F4F4] md:bg-white sm:bg-[#fff] ml-[15px] sm:ml-0 md:ml-0 rounded-[8px]'>
			<div
				onClick={() => Navigate(-1)}
				className='w-[100%] sm:w-[90%] md:w-[85%] justify-center items-center hidden md:flex sm:flex sm:mb-[20px] md:mb-[20px] mt-[10px]'>
				<div className='w-[100%] flex items-center'>
					<div className='text-primary text-[20px] cursor-pointer ml-[-4px]'>
						<IoIosArrowBack />
					</div>
					<h3 className='text-primary ml-[12px] text-[17px] font-[600]'>
						My reviews
					</h3>
				</div>
			</div>

			<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-0'></div>

			{isLoading || isFetching ? (
				<div className='w-full sm:w-[80%]'>
					<ReviewSkeleton />
					<ReviewSkeleton />
				</div>
			) : (
				<>
					{data?.data?.favorites?.length >= 1 ? (
						<>
							<br />
							{data?.data?.favorites?.map((props: any) => (
								<div className='w-[100%] mb-7 sm:w-[90%] md:w-[85%] flex justify-between md:mt-[40px] sm:mt-[40px]'>
									<div className='flex items-center'>
										<div className='w-[90px] h-[90px] flex justify-center items-center border border-primary'>
											<img
												src={props?.media && props?.media[0]?.url}
												alt=''
												className='h-[60px]'
											/>
										</div>
										<div className='flex flex-col ml-[15px]'>
											<h3 className='text-[15px] font-[600]'>{props?.name}</h3>
											<div className='flex items-center mt-[12px] sm:flex-wrap'>
												<p className='text-iconGray text-[13px]'>Brand:</p>
												<p className='text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]'>
													<span className='text-primary'>Apple</span> | Similar
													Product From Apple | 793979398
												</p>
											</div>
											<div className='flex items-center mt-[14px] sm:w-[100%] sm:justify-between'>
												<div className='flex items-center'>
													<p className='text-[11px]'>price:</p>
													<div className='items-center hidden sm:flex ml-[3px]'>
														<p className='text-[11px] font-[700]'>NGN</p>{" "}
														<h4 className='text-[12px] font-[600] ml-[3px]'>
															{props?.discountPrice?.toLocaleString()}
														</h4>
													</div>
												</div>
												<div className='flex items-center'>
													<div
														onClick={() => {
															handleDeleteBookMark(props?.id);
														}}
														className='flex items-center cursor-pointer'>
														<div className='text-primary text-[20px] sm:text-[16px]'>
															<RiDeleteBin6Line />
														</div>
														<p
															className='text-primary ml-[7px] text-[14px] sm:text-[11px] font-[500]
'>
															Remove
														</p>
													</div>
													<Link to={`/product-details/${props?.id}`}>
														<div className='flex items-center cursor-pointer ml-[13px]'>
															<div className='text-primary text-[20px] sm:text-[16px]'>
																<RiShoppingCartLine />
															</div>
															<p
																className='text-primary ml-[7px] text-[14px] font-[500] sm:text-[11px]
'>
																View Item
															</p>
														</div>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className='flex items-center sm:hidden'>
										<p className='text-[10px] font-[700]'>₦</p>{" "}
										<h4 className='text-[17px] font-[600] ml-[3px]'>
											{props?.discountPrice?.toLocaleString()}
										</h4>
									</div>
								</div>
							))}
						</>
					) : (
						<>
							<EmptyData title={"You have no Saved Item"} />
						</>
					)}
				</>
			)}

			<div className='w-[100%] md:w-[85%] sm:w-[90%]'>
				<Recomended />
			</div>
		</div>
	);
};

export default Items;
