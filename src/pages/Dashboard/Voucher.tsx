import { useState } from "react";
import img from "../../assets/Vector.png";
import { IoCopyOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/services/store";
import { useGetAllCopounQuery } from "@/services/apiSlice";
import EmptyData from "@/components/reuse/EmptyData";
import { FormatDate } from "@/helpers/DateFormater";
import ShowToast from "@/components/reuse/ShowToast";

const Voucher = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(true);
	const [show2, setShow2] = useState(false);
	const user = useAppSelector((state) => state.persistedReducer.currentUser);
	const { data: coupData, isLoading } = useGetAllCopounQuery({});

	const today = new Date();

	const Toggle2 = () => {
		setShow2(true);
		setShow(false);
	};
	const Toggle1 = () => {
		setShow(true);
		setShow2(false);
	};

	const isCouponExpired = (endDate: any) => {
		return new Date(endDate) < today;
	};

	// Function to handle copying the coupon code
	const handleCopyCouponCode = (code: string) => {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				// You can show a toast notification or alert once copied
				ShowToast(true, "Coupon code copied to clipboard!"); // Optional, use react-toastify or similar
				// alert('Coupon code copied to clipboard!');  // Or use a simple alert
			})
			.catch(() => {
				ShowToast(false, "Failed to copy code"); // Optional, handle errors
			});
	};

	// Skeleton Loader component using Tailwind CSS
	const SkeletonLoader = () => (
		<div className='animate-pulse w-[100%] sm:w-[90%] h-[100%] flex items-center sm:items-start justify-center sm:justify-normal pt-[80px] sm:pt-[20px] pb-[80px] flex-col border-b'>
			<div className='w-[60px] h-[60px] rounded-full bg-gray-300'></div>
			<div className='w-[150px] h-[20px] bg-gray-300 mt-[12px]'></div>
			<div className='w-[100px] h-[20px] bg-gray-300 mt-[10px]'></div>
			<div className='w-[180px] h-[20px] bg-gray-300 mt-[7px]'></div>
		</div>
	);

	return (
		<div className='w-[100%] flex flex-col p-[15px] md:items-center sm:items-center md:p-0 md:bg-white sm:p-0 bg-[#F4F4F4] sm:bg-white ml-[15px] md:ml-0 sm:ml-0 rounded-[8px]'>
			<div
				onClick={() => navigate(-1)}
				className='w-[100%] justify-center items-center hidden md:mt-[10px] md:mb-[20px] md:flex sm:flex sm:mb-[20px]'>
				<div className='w-[90%] md:w-[85%] flex items-center'>
					<div className='text-primary text-[20px] cursor-pointer ml-[-4px]'>
						<IoIosArrowBack />
					</div>
					<h3 className='text-primary ml-[12px] text-[17px] font-[600]'>
						Voucher
					</h3>
				</div>
			</div>

			<div className='w-[100%] md:w-[85%] sm:w-[90%] flex items-center'>
				<div
					onClick={Toggle1}
					className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${
						show
							? "border-b-[4px] border-primary text-primary"
							: "text-iconGray"
					}`}>
					<p className='text-[15px]'>Active</p>
				</div>
				<div
					onClick={Toggle2}
					className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${
						show2
							? "border-b-[4px] border-primary text-primary"
							: "text-iconGray"
					}`}>
					<p className='text-[15px]'>Inactive</p>
				</div>
			</div>

			<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]'></div>

			{isLoading ? (
				// Skeleton loader while loading data
				<>
					<SkeletonLoader />
					<SkeletonLoader />
					<SkeletonLoader />
				</>
			) : show ? (
				<>
					{coupData?.data?.filter(
						(coupon: any) => !isCouponExpired(coupon.endDate),
					).length ? (
						coupData.data
							.filter((coupon: any) => !isCouponExpired(coupon.endDate))
							.map((coupon: any) => (
								<div
									key={coupon.id}
									className='w-[100%] sm:w-[90%] h-[100%] flex items-center sm:items-start justify-center sm:justify-normal pt-[80px] sm:pt-[20px] pb-[80px] flex-col border-b'>
									<div className='w-[60px] h-[60px] rounded-full bg-[#de801c5e] flex justify-center items-center'>
										<img src={img} alt='' className='h-[40px]' />
									</div>
									<h3 className='text-primary font-[600] text-[15px] mt-[12px]'>
										Hi, {user?.firstname}, this is your current voucher
									</h3>
									<div
										onClick={() => {
											handleCopyCouponCode(coupon.couponCode);
										}}
										className='flex items-center text-secondary cursor-pointer'>
										<h3 className='font-[600]'>{coupon.couponCode}</h3>
										<div className='text-[10px] ml-[5px]'>
											<IoCopyOutline />
										</div>
									</div>
									<div className='flex items-center text-primary text-[13px] font-[600] mt-[7px] whitespace-nowrap'>
										<span className='text-iconGray text-[13px] mr-[3px]'>
											Expires:
										</span>{" "}
										{FormatDate(coupon.endDate)}
									</div>
									{/* Show applicable product and category */}
									<div className='mt-[10px] text-center'>
										<p className='text-sm'>
											<strong>Category:</strong>{" "}
											{coupon.applicableCategory?.name}
										</p>
										<p className='text-sm'>
											<strong>Product:</strong> {coupon.applicableProduct?.name}
										</p>
										<a
											href={`/product-details/${coupon.applicableProduct?.id}`}
											className='text-primary underline'>
											View Product
										</a>
									</div>
								</div>
							))
					) : (
						<EmptyData title='No Active Coupons' />
					)}
				</>
			) : null}

			{show2 ? (
				<>
					{coupData?.data?.filter((coupon: any) =>
						isCouponExpired(coupon.endDate),
					).length ? (
						coupData.data
							.filter((coupon: any) => isCouponExpired(coupon.endDate))
							.map((coupon: any) => (
								<div
									key={coupon.id}
									className='w-[100%] sm:w-[90%] h-[100%] flex items-center sm:items-start justify-center sm:justify-normal pt-[80px] sm:pt-[20px] pb-[80px] flex-col border-b'>
									<div className='w-[60px] h-[60px] rounded-full bg-[#de801c5e] flex justify-center items-center'>
										<img src={img} alt='' className='h-[40px]' />
									</div>
									<h3 className='text-primary font-[600] text-[15px] mt-[12px]'>
										Hi, {user?.firstname}, this voucher has expired
									</h3>
									<div
										onClick={() => {
											handleCopyCouponCode(coupon.couponCode);
										}}
										className='flex items-center text-secondary cursor-pointer'>
										<h3 className='font-[600]'>{coupon.couponCode}</h3>
										<div className='text-[10px] ml-[5px]'>
											<IoCopyOutline />
										</div>
									</div>
									<div className='flex items-center text-primary text-[13px] font-[600] mt-[7px] whitespace-nowrap'>
										<span className='text-iconGray text-[13px] mr-[3px]'>
											Expired on:
										</span>{" "}
										{FormatDate(coupon.endDate)}
									</div>
									{/* Show applicable product and category */}
									<div className='mt-[10px]'>
										<p className='text-sm'>
											<strong>Category:</strong>{" "}
											{coupon.applicableCategory?.name}
										</p>
										<p className='text-sm'>
											<strong>Product:</strong> {coupon.applicableProduct?.name}
										</p>
										<a
											href={`/product/${coupon.applicableProduct?.id}`}
											className='text-primary underline'>
											View Product
										</a>
									</div>
								</div>
							))
					) : (
						<EmptyData title='No Expired Coupons' />
					)}
				</>
			) : null}
		</div>
	);
};

export default Voucher;
