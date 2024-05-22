import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgFacebook } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import CardComp from "@/components/commons/CardComp";
import BrandsComp from "@/components/commons/BrandsComp";
import { useParams } from "react-router-dom";
import { useViewAProductQuery, useViewAllProductsQuery } from "@/services/apiSlice";
import { useSelector } from "react-redux";
import { UseAppDispach } from "@/services/store";
import { addToCart, removeFromCart } from "@/services/reducers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";

const ProductDetails = () => {
	const [showContent, setContent] = useState<boolean>(false);
	const [showLove, setShowLove] = useState<boolean>(true);
	const [showVariant, setShowVariant] = useState(false);
	const [selectedImage, setSelectedImage] = useState<any | null>();
	const { id } = useParams();
	const { data: productData, isLoading: isProductLoading } = useViewAProductQuery(id);
	const { data: allProductsData, isLoading: isAllProductsLoading } = useViewAllProductsQuery({});
	const [selectedId, setSelectedId] = useState('');
	const [imageLoading, setImageLoading] = useState(true);

	const dispatch = UseAppDispach();
	const globalstate = useSelector((state: any) => state.persistedReducer.cart);

	const findQuantity = (variantId: any) => {
    // First, ensure the global state and the items array are not null.
    if (!globalstate || !variantId) return 0;

    const item = globalstate.find((item: any) => item?.variant?.id === variantId);
    console.log(item);
    return item ? item.cartQuantity : 0;
};

	const handleIncrement = (variant: any) => {
		dispatch(
			addToCart({
				id: variant.id,
				productName: productData?.data?.name,
				variant,
				quantity: 1, // This will be handled in the reducer
			}),
		);
		toast.success("Added to Cart successfully");
	};

	const handleDecrement = (variantId: any) => {
    // Get the current quantity of the variant from Redux state
    const quantity = findQuantity(variantId);
    // Only dispatch removeFromCart if quantity is greater than 1
    if (quantity > 1) {
        dispatch(removeFromCart(variantId));
    } else if (quantity === 1) {
        // If quantity is exactly 1, you may want to ask users if they want to remove the item completely
        if (window.confirm("Do you want to remove this item from the cart?")) {
            dispatch(removeFromCart(variantId));
        }
    }
};

	const togContent = () => {
		setContent(!showContent);
	};

	
	const loveBtn = () => {
		setShowLove(!showLove);
	};

	const openVariant = () => {
		setShowVariant(true);
	};
	const closeVariant = () => {
		setShowVariant(false);
	};

	
	
useEffect(() => {
	if (productData?.data?.media?.length > 0) {
		setSelectedId(productData.data?.media[0].id);
		setSelectedImage(productData?.data?.media[0])
	}
}, [productData]);
	

	// console.log("dfghyjdkhghj", selectedId);


	useEffect(() => {}, [selectedId, productData]);
	return (
		<div className='w-[100%] min-h-[100%] flex xl:justify-center items-center'>
			<div className='w-[100%]  flex flex-col my-[10px]'>
				<div className='flex  items-center mb-[10px]'>
					<div className='flex justify-center items-center'>
						<div>Home</div>
						<div>
							<GoChevronRight />
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<div>Jewelleries</div>
						<div>
							<GoChevronRight />
						</div>
					</div>
					<div>Watch</div>
				</div>
				<div className=' xl:min-h-[500px] flex  items-start sm:flex-col sm:overflow-hidden'>
					<div className='w-[500px] sm:justify-start flex  gap-20  sm:flex-col-reverse'>
						<div className=' xl:flex-col sm:flex sm:w-[100%]'>
							{productData?.data?.media?.map((props: any) => (
								<div
									className={`xl:w-[100px] xl:h-[100px] md:w-[80px] lg:w-[100px] lg:h-[100px] md:h-[80px]  sm:w-[60px] sm:h-[60px] overflow-hidden mb-[10px] cursor-pointer flex justify-center  items-center ${
										selectedId === props?.id
											? "border-[2px] border-[#0000ff]"
											: null
									}`}
									onClick={() => {
										setSelectedImage(props);
										setSelectedId(props?.id);
										setImageLoading(true);
										// console.log("this is it", props);
									}}>
									<img
										src={props?.link}
										alt=''
										className='xl:w-[50px] md:w-[50px] lg:w-[50px] sm:w-[30px]'
									/>
								</div>
							))}
						</div>
						<div>
							{imageLoading && (
								<div className='w-[300px] h-[300px] xl:w-[300px] xl:h-[300px] md:w-[250px] md:h-[250px] lg:w-[220px] lg:h-[220px] sm:w-[100%] sm:h-[170px] sm:mb-[20px] bg-gray-200 animate-pulse' />
							)}
							<img
								src={
									selectedImage !== null
										? selectedImage?.link
										: productData?.data?.media[0]?.link
								}
								alt=''
								onLoad={() => setImageLoading(false)}
								className={`xl:w-[300px] md:w-[250px] lg:w-[220px] sm:w-[170px] sm:mb-[20px] ${
									imageLoading ? 'hidden' : 'block'
								}`}
							/>
						</div>
					</div>
					<div className='flex-1 flex  justify-center'>
						<div
							className={`mr-[50px] xl:w-[35px] xl:h-[35px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] bg-[#b1b0b098] rounded-[50%] xl:flex md:flex lg:flex justify-center items-center text-[18px] md:text-[15px] cursor-pointer sm:hidden ${
								showLove ? "text-white" : "text-[red]"
							}`}
							onClick={loveBtn}>
							<BsHeartFill />
						</div>
						<div className='flex-1'>
							<div className='flex flex-col'>
								{isProductLoading ? (
								<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[20px] w-[500px] mb-[10px] rounded-full'></div>
							) : (
								<div className='text-[25px] sm:text-[20px] font-semibold'>{productData?.data?.name}</div>
							)}
								{isProductLoading ? (
									<div className='flex flex-col w-[100%] my-[10px]'>
										<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[500px] mb-[10px] rounded-full'></div>
										<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[500px] mb-[10px] rounded-full'></div>
										<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[500px] mb-[10px] rounded-full'></div>
									</div>
								) : (
									<div className='text-[13px] my-[10px]'>
									{productData?.data.description}
								</div>
								)}
							</div>
							{isProductLoading ? (
								<div className="text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full my-[20px]"></div>
							) : (
								<div className='text-[20px] font-semibold my-[20px]'>
								N{productData?.data.price}
							</div>
							)}
							<div className='flex flex-col'>
								<div className='flex items-center'>
									<div className='mr-[10px] text-[14px]'>Quantity</div>
									<div className='flex justify-center items-center border border-[#ddd]'>
										<div className='px-[15px] py-[5px] border-r border-[#ddd]'>
											-
										</div>
										<div className='p-[15px] py-[5px]  border-r border-[#ddd]'>
											1
										</div>
										<div className='p-[15px] py-[5px] border-r border-[#ddd]'>
											+
										</div>
									</div>
								</div>

									{isProductLoading ? (
										<div className="text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full mt-[5px]"></div>
									) : (
										<>
											{productData?.data?.variants && productData.data.variants.some((variant: any) => variant.color) && (
								<div className="mt-[15px] flex flex-col mb-[10px]">
									<div className="flex items-center">
										<p className="text-[14px]">Color</p>
									</div>

										<div className="flex items-center mt-[5px]">
											{productData.data.variants.map((variant: any) => (
												variant.color && (
													<div
														onClick={openVariant}
														key={variant.id}
														className="w-[48px] h-[28px] rounded-sm mr-[5px] border border-[#E0E0E0] p-[3px] cursor-pointer"
													>
														<div
															className="w-[100%] h-[100%] rounded-sm"
															style={{ backgroundColor: variant.color }}
														></div>
													</div>
												)
											))}
										</div>
								</div>
									)}
										</>
									)}


								{isProductLoading ? (
									<div className="text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full mt-[5px]"></div>
								) : (
									<>
										{productData?.data?.variants && productData.data.variants.some((variant: any) => variant.size) && (
									<div className="mt-[15px] flex flex-col">
										<div className="flex items-center">
											<p className="text-[14px]">Size</p>
										</div>
										<div className="flex items-center mt-[5px]">
											{productData.data.variants.map((variant: any) => (
												variant.size && (
													<div
														onClick={openVariant}
														key={variant.id}
														className="w-[48px] h-[28px] rounded-sm mr-[5px] border border-[#E0E0E0] p-[3px] cursor-pointer"
													>
														<div className="w-[100%] h-[100%] flex justify-center items-center rounded-sm">
															{variant.size}
														</div>
													</div>
												)
											))}
										</div>
									</div>
								)}
									</>
								)}

								{isProductLoading ? (
									<div className="text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full mt-[5px]"></div>
								) : (
									<div className='w-[100%] h-[100%] flex flex-col mt-[5px]'>

									{showVariant ? (
										<div className='w-[100%] h-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.5)] fixed left-0 top-0 sm:pl-[15px] sm:pr-[15px]'>
											<div className='w-[43%] sm:w-[100%] md:w-[65%] p-[18px] bg-white rounded-md flex flex-col'>
												<div className='w-[100%] flex items-center justify-between'>
													<h2 className='text-[19px] sm:text-[16px] font-[500]'>
														Please select a variation
													</h2>
													<div
														onClick={closeVariant}
														className='text-[25px] sm:text-[20px] cursor-pointer'>
														<IoMdClose />
													</div>
												</div>

												{productData?.data?.variants?.map((variant: any) => (
													<div className='w-[100%] flex flex-col'>
														<div
															key={variant.id}
															className='w-[100%] flex items-center justify-between mt-[25px] mb-[15px]'>
															<div className='flex flex-col'>
																<div className='text-[18px] sm:text-[16px]'>
																	{variant.title}
																</div>
																<div className='text-[14px] sm:text-[12px] mt-[1px]'>
																	₦ {variant.price}
																</div>
															</div>

															<div
																onClick={() => handleDecrement(variant)}
																className='flex items-center'>
																<div className='w-[30px] h-[30px] bg-[#DE801C] shadow-lg rounded-sm flex justify-center items-center text-white mr-[10px] cursor-pointer'>
																	-
																</div>
																<div className='w-[30px] h-[30px] rounded-sm flex justify-center items-center mr-[10px]'>
																	{findQuantity(variant.id)}
																</div>
																<div
																	onClick={() => handleIncrement(variant)}
																	className='w-[30px] h-[30px] bg-[#DE801C] shadow-lg rounded-sm flex justify-center items-center text-white mr-[10px] cursor-pointer'>
																	+
																</div>
															</div>
														</div>
													</div>
												))}
												<div className='w-[100%] h-[1px] bg-[#d6d6d6] mt-[20px]'></div>
												<div className='w-[100%] flex items-center mt-[15px] justify-between sm:flex-wrap'>
													<button className='w-[48%] sm:w-[100%] h-[50px] border border-[#DE801C] rounded-sm flex justify-center items-center cursor-pointer'>
														<h3 className='text-[#DE801C] text-[16px] sm:text-[14px]'>
															CONTINUE SHOPPING
														</h3>
													</button>
													<button className='w-[48%] sm:w-[100%] sm:mt-[10px] h-[50px] bg-[#DE801C] rounded-sm flex justify-center items-center cursor-pointer'>
														<h3 className='text-[#fff] text-[16px] sm:text-[14px]'>
															VIEW CART
														</h3>
													</button>
												</div>
											</div>
										</div>
									) : null}
								</div>
								)}

								<div className='px-[10px] py-[5px] bg-[#8686863a] rounded-[5px] my-[10px] w-[200px]'>
									<div className='text-[13px]'>Call us for Bulk Purchase</div>
									<div className='text-[13px] text-primary'>0905729875</div>
								</div>
								

								<div
								onClick={() => {
									if (productData?.data?.variants?.length > 0) {
										setShowVariant(true); // Show variant selection popup if variants exist
									} else {
										// If no variants, directly add the product to the cart
										dispatch(addToCart({
											id: productData?.data?.id,
											name: productData?.data?.name,
											variant: null, // No variants, so set to null
											price: productData?.data?.price,
											image: productData?.data?.mainImage, // Use the main image of the product
											cartQuantity: 1 // Setting initial cart quantity
										}));
										toast.success("Added to Cart successfully"); // Show success message
									}
								}}
								className='xl:w-[300px] sm:w-full bg-secondary text-white rounded-[5px] flex justify-center items-center py-[10px] my-[20px] cursor-pointer'
							>
								<div>Add to cart</div>
							</div>


								<div className='flex items-center mb-[20px]'>
									<div className='text-[25px] text-primary mr-[20px]'>
										<CiDeliveryTruck />
									</div>
									<div className='text-[11px]'>
										Pickup & Pay on Collection Available
									</div>
								</div>
								<div className=''>
									<div className='text-[13px]'>Share With Friends</div>
									<div className='flex items-center mt-[10px]'>
										<div className='w-[25px] h-[25px] rounded-[50%] flex justify-center items-center text-primary border mr-[20px]'>
											<CgFacebook />
										</div>
										<div className='w-[25px] h-[25px] rounded-[50%] flex justify-center items-center text-black border mr-[20px]'>
											<BsTwitterX />
										</div>
										<div className='w-[25px] h-[25px] rounded-[50%] flex justify-center items-center text-[#00ff00] border'>
											<FaWhatsapp />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='xl:flex flex-col sm:mt-[10px]'>
					<div className='flex  items-center sm:hidden '>
						<div className='w-[25px] h-[25px] text-[14px] mr-[10px] rounded-[50%] bg-[#c03434] flex justify-center items-center text-white'>
							O
						</div>
						<div className='text-[15px] text-[#535353] mr-[10px]'>Sold by</div>
						<div className='text-[15px] font-semibold underline text-primary mr-[5px]'>
							Olatunde
						</div>
						<div className='w-[25px] h-[25px] text-[16px] mr-[10px] rounded-[50%] bg-[#0000ff77] flex justify-center items-center text-primary'>
							<BiCheck />
						</div>
					</div>
					<div className='xl:flex flex-col my-[20px] sm:hidden '>
						<div className='flex text-[16px]'>
							<div className='mr-[40px] font-semibold text-primary'>
								Product details
							</div>
							<div className='flex justify-center items-center'>
								<div className='mr-[40px] font-semibold'>Description</div>
								<div className='mr-[40px] font-semibold '>Shipping</div>
								<div className='mr-[40px] font-semibold '>Warranty</div>
								<div className='mr-[40px] font-semibold '>Return Policy</div>
								<div className='mr-[40px] font-semibold'>Reviews</div>
							</div>
						</div>
						<div className='mt-[15px] text-[14px]'>
							<div>
								In the Box <br /> Handset USB-C to Lighting Cable Documentation
							</div>
						</div>
					</div>
					<div className='xl:hidden flex-col my-[20px] sm:flex w-[100%]'>
						<div className='flex text-[16px] flex-col'>
							<div className='sm:flex sm:justify-between sm:w-[100%] sm:items-center md:hidden lg:hidden'>
								<div className='mr-[40px] font-semibold text-primary'>
									Product details
								</div>
								<div className='text-[20px] text-primary' onClick={togContent}>
									{showContent ? <GoChevronDown /> : <GoChevronRight />}
								</div>
							</div>
							{showContent ? (
								<div className='flex flex-col justify-center items-start'>
									<div className='mt-[15px] text-[14px] mb-[20px]'>
										<div>
											In the Box <br /> Handset USB-C to Lighting Cable
											Documentation
										</div>
									</div>
									<div className='mb-[40px] font-semibold'>Description</div>
									<div className='mb-[40px] font-semibold '>Shipping</div>
									<div className='mb-[40px] font-semibold '>Warranty</div>
									<div className='mb-[40px] font-semibold '>Return Policy</div>
									<div className='mb-[40px] font-semibold'>Reviews</div>
								</div>
							) : null}
						</div>
					</div>
				</div>

				<div className='hidden sm:block'>
					<h3 className='mt-7 font-bold mb-3'>Recomended for you</h3>
					<div className='grid  grid-cols-5 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
					</div>
				</div>

				<div className='xl:flex flex-col mb-20 sm:hidden'>
					<h3 className='mt-7 font-bold mb-3'>Similar Product</h3>
					<div className="w-[100%]">
						{isAllProductsLoading && !allProductsData ? (
						<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
						</div>
						) : (
							<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
								{allProductsData?.data.slice(0, 4).map((props: any) => (
											<CardComp
												key={props.id}
												deal={true}
												isLoading={isAllProductsLoading}
												{...props}
											/>
										))}
							</div>	
					)}
					</div>
				</div>

				<div></div>
			</div>
		</div>
	);
};

export default ProductDetails;
