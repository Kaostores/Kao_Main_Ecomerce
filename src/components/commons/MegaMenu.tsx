import pic from "@/assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

import {
	useGetAllAdminCategoryAndSubCategoryQuery,
	useViewAllCartCustomerQuery,
} from "@/services/apiSlice";

import useUpdateUrlParams from "../SearchRoute";
import { useAppSelector } from "@/services/store";
import { useState, useEffect } from "react";

// Skeleton Component
const Skeleton = ({ count }: { count: number }) => (
	<>
		{[...Array(count)].map((_, i) => (
			<div
				key={i}
				className='animate-pulse bg-gray-200 h-6 w-full rounded mb-2'
			/>
		))}
	</>
);

const MegaMenu = ({ setShowMegaMenu }: any) => {
	const updateUrlParams = useUpdateUrlParams();

	// Fetch category data
	const { data: catData, isLoading } =
		useGetAllAdminCategoryAndSubCategoryQuery({});

	const cart = useAppSelector((state) => state.persistedReducer.cart);
	const currentUser = useAppSelector(
		(state) => state.persistedReducer.currentUser,
	);
	const isAuthenticated =
		currentUser && Object.keys(currentUser || {}).length !== 0;
	const { data: userCartData } = useViewAllCartCustomerQuery({});
	const cartItems = isAuthenticated
		? userCartData?.data?.cart?.items || []
		: cart;

	const [selectedCategory, setSelectedCategory] = useState<any>(null);

	// Auto-select the first category when loading completes
	useEffect(() => {
		if (!isLoading && catData?.data?.length) {
			setSelectedCategory(catData.data[0]);
		}
	}, [isLoading, catData]);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: "rgba(0,0,0,0.6)",
				display: "flex",
				justifyContent: "center",
				zIndex: 99999,
			}}>
			<div className='w-[85%] h-[90vh] sm:w-[100%] sm:h-[100%] overflow-y-scroll bg-white grid grid-cols-4 sm:grid-cols-1 p-4 rounded-sm sm:flex sm:flex-col relative'>
				{/* Cancel Icon (Top Right) */}
				<div
					onClick={() => setShowMegaMenu(false)}
					className='absolute top-4 right-4 cursor-pointer text-[30px] text-primary sm:hidden'>
					<MdOutlineClear />
				</div>
				{/* Top Section */}
				<div className='hidden sm:flex w-[100%] items-center gap-5 sm:justify-between mb-3'>
					<div className='flex items-center'>
						<div
							onClick={() => setShowMegaMenu(false)}
							className='text-[30px] text-primary '>
							<MdOutlineClear />
						</div>
						<img src={pic} className='w-[70px]' />
					</div>

					<div className='flex gap-2 sm:hidden'>
						<div className='h-[30px] w-[30px] rounded-[50%] bg-ascentGray flex justify-center items-center text-primary'>
							?
						</div>
						<div className='flex items-center text-[14px]'>
							Help <MdKeyboardArrowDown />
						</div>
					</div>
					<div className='relative inline-block sm:hidden'>
						<div className='text-[20px] p-2 rounded-full focus:outline-none text-primary'>
							<MdOutlineShoppingCart />
						</div>
						<span className='absolute top-2 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
							{cartItems?.length || 0}
						</span>
					</div>
					<div className='flex items-center cursor-pointer sm:hidden'>
						<div className='text-primary'>
							<FaRegUser />
						</div>
						<div className='text-[14px] ml-2 sm:hidden'>Sign in/Sign up</div>
					</div>
					<div className='hidden sm:flex gap-3 items-center'>
						<div className='relative inline-block'>
							<div className='text-[20px] p-2 rounded-full focus:outline-none text-primary'>
								<MdOutlineShoppingCart />
							</div>
							<span className='absolute top-2 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
								{cartItems?.length || 0}
							</span>
						</div>
					</div>
				</div>

				{/* Left - Categories */}
				<div className='col-span-1'>
					{isLoading ? (
						<Skeleton count={10} />
					) : (
						<ul className='space-y-3'>
							{catData?.data?.map((category: any, i: number) => (
								<li
									key={i}
									onClick={() => {
										setSelectedCategory(category);
										console.log(category);
									}}
									className={`p-2 cursor-pointer w-[80%] hover:bg-gray-100 rounded ${
										selectedCategory?.id === category.id
											? "bg-gray-200 font-bold"
											: ""
									}`}>
									{category?.name}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Right - Subcategories */}
				<div className='col-span-3 sm:flex sm:flex-col sm:mt-5'>
					{isLoading ? (
						<Skeleton count={6} />
					) : selectedCategory ? (
						<div>
							<h3 className='text-lg font-bold mb-3'>
								{selectedCategory?.name}
							</h3>
							<div className='grid grid-cols-3 gap-4 sm:flex sm:flex-col'>
								{selectedCategory?.sub_categories?.map(
									(subCategory: any, index: number) => (
										<div
											key={index}
											onClick={() => {
												updateUrlParams({
													sub_category_id: subCategory?.id,
												});
											}}
											className='cursor-pointer hover:underline'>
											{subCategory?.name}
										</div>
									),
								)}
							</div>
						</div>
					) : (
						<div>Please select a category to see the subcategories.</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default MegaMenu;
