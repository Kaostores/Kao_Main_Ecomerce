import { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { CgFacebook } from "react-icons/cg";
import { BiCheck } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

import CardComp from "@/components/commons/CardComp";
import { useNavigate, useParams } from "react-router-dom";
import {
	useAddCartCustomerMutation,
	useAddNewBookmarkMutation,
	// useDeleteNewBookmarkMutation,
	useRemoveCartCustomerMutation,
	useViewAProductQuery,
	useViewAllCartCustomerQuery,
	useViewAllProductsQuery,
	useViewProductReviewsQuery,
} from "@/services/apiSlice";
import { useSelector } from "react-redux";
import { UseAppDispach } from "@/services/store";
import { addToCart, removeFromCart } from "@/services/reducers";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";

import { decodeHTMLEntities, formatPrice } from "@/helpers";
import ReviewComponent from "@/components/Reviews/ReviewsComp";
import { AccordionDemo } from "@/components/reuse/ProductSummaryAccordion";
import ReviewPage from "./Dashboard/Subpages/ReviewPage";
import TextSanitizer from "@/helpers/TextSanitizer";
import { LoadingSpinner } from "@/components/reuse/Spinner";
import ImagePreviewModal from "@/components/ImagePreviewModal";
import MetaTags from "@/components/MetaTags";
import ShowToast from "@/components/reuse/ShowToast";
import LoadingButton from "@/components/reuse/LoadingButton";

const ProductDetails = () => {
	const navigate = useNavigate();
	const [showLove, setShowLove] = useState<boolean>(true);
	const [showReview, setShowReview] = useState(false);
	const [showVariant, setShowVariant] = useState(false);
	const [selectedImage, setSelectedImage] = useState<any | null>();
	const { id } = useParams();
	const { data: productData, isLoading: isProductLoading } =
		useViewAProductQuery(id);
	const { data: allProductsData, isLoading: isAllProductsLoading } =
		useViewAllProductsQuery({});
	const [selectedId, setSelectedId] = useState("");
	const [imageLoading, setImageLoading] = useState(true);
	const {
		data: userCartData,
		// isLoading: isUserCartLoading,
		isFetching,
	} = useViewAllCartCustomerQuery({});
	const user = useSelector(
		(state: any) => state?.persistedReducer?.currentUser,
	);

	const [addCartFn, { isLoading: loadingIncrease }] =
		useAddCartCustomerMutation();
	const [removeCartFn, { isLoading: loadingDecrease }] =
		useRemoveCartCustomerMutation();

	// const [removeBookMark, { data: removeBookMarkData }] =
	// useDeleteNewBookmarkMutation();
	// console.log("boooookmark", newBookMarkData);
	// const handleDeleteBookMark = () => {
	// if (!removeBookMarkData) {
	// removeBookMark({ product_id: id });
	// toast.success("Bookmarked Removed successfully");
	// } else {
	// toast.error("Already bookmarked");
	// }
	// };

	const dispatch = UseAppDispach();
	const globalstate = useSelector(
		(state: any) => state?.persistedReducer?.cart,
	);

	console.log("user cart", userCartData);

	// const findQuantity = (variantId: any) => {
	// First, ensure the global state and the items array are not null.
	// if (!globalstate || !variantId) return 0;

	// const nonUserCart = globalstate?.find(
	// (item: any) => item?.variant?.id === variantId,
	// );

	// const checkCart = userCartData?.data?.cart?.items?.find(
	// (el: any) => el.variant?.id === variantId,
	// );

	// console.log(item);
	// return nonUserCart
	// ? nonUserCart?.cartQuantity
	// : 0 || (user && checkCart?.variant?.id === variantId)
	// ? checkCart?.quantity
	// : 0;
	// };

	console.log("gloval", globalstate);

	const findQuantity = (variantId: any, productId: any) => {
		// Ensure the global state and the variant or product ID are not null.
		if (!globalstate || (!variantId && !productId)) return 0;

		// Check the global state for the variant or product, even without a user.
		const nonUserCart = variantId
			? globalstate?.find((item: any) => item?.variant === variantId)
			: globalstate?.find((item: any) => item?.productID === productId);

		// Check the user's cart if there is a logged-in user.
		const checkCart = user?.firstname
			? variantId
				? userCartData?.data?.cart?.items?.find(
						(el: any) => el.variant?.id === variantId,
				  )
				: userCartData?.data?.cart?.items?.find(
						(el: any) => el.product?.id === productId,
				  )
			: null;

		// If the user is logged in and their cart contains the item, return that quantity.
		if (user && checkCart) {
			return checkCart.quantity;
		}

		// Otherwise, return the quantity from the global state if it exists.
		return nonUserCart ? nonUserCart.cartQuantity : 0;
	};

	const handleIncrement = (variant: any) => {
		dispatch(
			addToCart({
				id: variant.id,
				productName: productData?.data?.name,
				productID: productData?.data?.id,
				media: productData?.data?.media[0],
				price: productData?.data?.discountPrice,
				variant,
				quantity: 1, // This will be handled in the reducer
			}),
		);
		ShowToast(true, "Added to Cart successfully");
	};

	const handleDecrement = (variantId: any) => {
		console.log(variantId);
		// Get the current quantity of the variant from Redux state
		console.log(variantId);
		const quantity = findQuantity(variantId, null);
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

	const loveBtn = () => {
		setShowLove(!showLove);
	};

	const openVariant = () => {
		setShowVariant(true);
	};
	const closeVariant = () => {
		setShowVariant(false);
	};

	const { data: RatingData, isLoading: RatingLoading } =
		useViewProductReviewsQuery({
			product_id: id,
		});

	useEffect(() => {
		if (productData?.data?.media?.length > 0) {
			setSelectedId(productData?.data?.media[0]?.id);
			setSelectedImage(productData?.data?.media[0]);
		}
		return;
	}, [productData]);

	const [newBookMark, { data: newBookMarkData }] = useAddNewBookmarkMutation();
	const [toggleType, setToggleType] = useState("productdetails");

	// console.log("boooookmark", newBookMarkData);

	const handleNewBookMark = () => {
		if (user?.id) {
			if (!newBookMarkData) {
				newBookMark({ product_id: productData?.data?.id });
				toast.success("Bookmarked successfully");
			} else {
				toast.error("Already bookmarked");
			}
		} else {
			toast.error("Please login to bookmark products");
		}
	};

	const handleAddToCartUser = async (props: any) => {
		console.log("dfuhjgfn", props);
		const response: any = await addCartFn({
			product: props?.product_id,
			quantity: 1,
			variant: props?.variantID ? props?.variantID : null,
		});

		if (response?.data?.success) {
			toast.success("Added to Cart successfully");
		}
	};

	const handleRemoveCartUser = async (props: any) => {
		const response: any = await removeCartFn({
			product_id: props?.product_id,
		});
		if (response?.data?.success) {
			toast.success("Removed from Cart successfully");
		}
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	// const overallRating = 4.0;
	// const totalReviews = 1;
	// const ratingsBreakdown = { 5: 0, 4: 1, 3: 0, 2: 0, 1: 0 };
	// const reviews = [
	// {
	// name: "Philip",
	// date: "July 9, 2024",
	// rating: 4,
	// comment: "Good",
	// },
	// ];

	// const shareOnFacebook = () => {
	// const url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
	// window.open(url, "_blank");
	// };

	// const shareOnTwitter = () => {
	// // const url = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(
	// title,
	// )}`;
	// window.open(url, "_blank");
	// };

	// const shareOnWhatsApp = () => {
	// const message = `${title}\n\n${currentUrl}`;
	// window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
	// };

	useEffect(() => {
		const meta = document.createElement("meta");
		meta.name = "description";
		meta.content = "Some description";
		document.head.appendChild(meta);

		return () => {
			document.head.removeChild(meta);
		};
	}, []);

	const title = `${decodeHTMLEntities(productData?.data?.name)}`;
	const imageUrl = `${productData?.data?.media[0]?.url}`;
	// const currentUrl = window.location.href;

	const updateMetaTags = (
		title: string,
		description: string,
		imageUrl: string,
	) => {
		const ogTitle = document?.querySelector('meta[property="og:title"]');
		const ogDescription = document?.querySelector(
			'meta[property="og:description"]',
		);
		const ogImage = document?.querySelector('meta[property="og:image"]');
		const twitterTitle = document?.querySelector('meta[name="twitter:title"]');
		const twitterDescription = document?.querySelector(
			'meta[name="twitter:description"]',
		);
		const twitterImage = document?.querySelector('meta[name="twitter:image"]');

		if (ogTitle) ogTitle.setAttribute("content", title);
		if (ogDescription) ogDescription.setAttribute("content", description);
		if (ogImage) ogImage.setAttribute("content", imageUrl);
		if (twitterTitle) twitterTitle.setAttribute("content", title);
		if (twitterDescription)
			twitterDescription.setAttribute("content", description);
		if (twitterImage) twitterImage.setAttribute("content", imageUrl);
	};

	// Facebook share
	const shareOnFacebook = () => {
		updateMetaTags(title, "yoo", imageUrl); // Update meta tags before sharing
		const currentUrl = window.location.href;
		const url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
		window.open(url, "_blank");
	};

	// Twitter share
	const shareOnTwitter = () => {
		updateMetaTags(title, "yoo", imageUrl); // Update meta tags before sharing
		const currentUrl = window.location.href;
		const url = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(
			title,
		)}`;
		window.open(url, "_blank");
	};

	// WhatsApp share
	const shareOnWhatsApp = () => {
		updateMetaTags(title, "yooo", imageUrl); // Update meta tags before sharing
		const currentUrl = window.location.href;
		const message = `${title}\n\n${currentUrl}`;
		window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
	};

	console.log("yeah", productData);

	useEffect(() => {}, [selectedId, productData]);
	return (
		<>
			<MetaTags title={title} image={imageUrl} name={title} />

			{isModalOpen && (
				<ImagePreviewModal
					images={productData?.data?.media}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
			<div className='w-[100%] min-h-[100%] flex xl:justify-center items-center'>
				<div className='w-[100%]  flex flex-col my-[10px]'>
					<div className=' xl:min-h-[500px] flex  items-start sm:flex-col sm:overflow-hidden'>
						<div className='w-[500px] sm:w-[100%] md:w-[400px] xxl:w-[40%] sm:justify-start flex  gap-20  sm:flex-col-reverse sm:gap-5'>
							<div className=' xl:flex-col  sm:flex sm:w-[100%]'>
								{productData?.data?.media?.map((props: any) => (
									<div
										className={`xl:w-[100px] xxl:w-[130px] xxl:h-[130px] xl:h-[100px] md:w-[80px] lg:w-[100px] lg:h-[100px] md:h-[80px]  sm:w-[60px] sm:h-[60px] overflow-hidden mb-[10px] cursor-pointer flex justify-center  items-center ${
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
											src={props?.url}
											alt='product-image'
											className='xl:w-[50px] md:w-[50px] lg:w-[50px] sm:w-[30px]'
										/>
									</div>
								))}
							</div>
							<div
								onClick={() => setIsModalOpen(true)}
								className='border sm:flex sm:justify-center sm:items-center sm:w-[100%] sm:h-[250px] cursor-pointer'>
								{imageLoading && (
									<div className='w-[300px] h-[300px] xl:w-[300px] xl:h-[300px] md:w-[250px] md:h-[250px] lg:w-[220px] lg:h-[220px] sm:w-[100%] sm:h-[170px] sm:mb-[20px] bg-gray-200 animate-pulse' />
								)}
								<img
									src={
										selectedImage !== null
											? selectedImage?.url
											: productData?.data?.media[0]?.url
									}
									alt='product-image'
									onLoad={() => setImageLoading(false)}
									className={`xl:w-[300px] md:w-[250px] bg-black lg:w-[220px] sm:w-[170px] first-letter:sm:mb-[20px] ${
										imageLoading ? "hidden" : "block"
									}`}
								/>
							</div>
						</div>
						<div className='flex-1 flex  justify-center'>
							<div
								className={`mr-[50px] xxl:ml-[10px] xl:w-[35px] xxl:w-[45px] xxl:h-[45px] xl:h-[35px] lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] bg-[#b1b0b098] rounded-[50%] xl:flex xxl:flex md:flex lg:flex justify-center items-center text-[18px] xxl:text-[24px] md:text-[15px] cursor-pointer sm:hidden ${
									isProductLoading
										? "text-white"
										: productData?.data?.isBookmarked === false
										? "text-white"
										: "text-[red]"
								}`}
								onClick={() => {
									if (!productData?.data?.isBookmarked) {
										handleNewBookMark();
										loveBtn();
									} else {
										// handleDeleteBookMark();
										handleNewBookMark();
										loveBtn();
									}
								}}>
								<BsHeartFill />
							</div>
							<div className='flex-1'>
								<div className='flex flex-col'>
									{isProductLoading ? (
										<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[20px] w-[500px] mb-[10px] rounded-full'></div>
									) : (
										<div className='text-[25px] sm:text-[20px] font-semibold'>
											{decodeHTMLEntities(productData?.data?.name)}
										</div>
									)}
									{isProductLoading ? (
										<div className='flex flex-col w-[100%] my-[10px]'>
											<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[500px] mb-[10px] rounded-full'></div>
											<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[500px] mb-[10px] rounded-full'></div>
											<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[500px] mb-[10px] rounded-full'></div>
										</div>
									) : (
										<TextSanitizer
											description={productData?.data.description}
											showImages={false}
										/>
									)}
								</div>
								{isProductLoading ? (
									<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full my-[20px]'></div>
								) : (
									<div className='text-[20px] font-semibold my-[5px]'>
										#{formatPrice(productData?.data?.discountPrice)}
									</div>
								)}
								<div className='flex flex-col'>
									{/* <div className='flex items-center'>
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
								</div> */}
									{isProductLoading ? (
										<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full mt-[5px]'></div>
									) : (
										<>
											{productData?.data?.proVariants?.length > 0 && (
												<div className='mt-[15px] flex flex-col mb-[10px]'>
													<div className='flex items-center'>
														<p className='text-[14px]'>Variations</p>
													</div>

													<div className='flex items-center mt-[5px]'>
														{productData.data.proVariants.map(
															(variant: any) => (
																<div
																	onClick={openVariant}
																	key={variant.id}
																	className='min-w-[48px] h-[28px] rounded-sm mr-[5px] border border-[#E0E0E0] p-[3px] cursor-pointer text-[14px]'>
																	<div className='w-[100%] h-[100%] rounded-sm'>
																		{variant?.name}
																	</div>
																</div>
															),
														)}
													</div>
												</div>
											)}
										</>
									)}
									{isProductLoading ? (
										<div className='text-[25px] sm:text-[20px] font-semibold animate-pulse bg-gray-200 h-[10px] w-[130px] mb-[10px] rounded-full mt-[5px]'></div>
									) : (
										<div
											style={{ zIndex: 10 }}
											className='w-[100%] h-[100%] flex flex-col mt-[5px]'>
											{showVariant ? (
												<div className='w-[100%] h-[100%] flex justify-center items-center bg-[rgba(0,0,0,0.5)] fixed left-0 top-0 sm:pl-[15px] sm:pr-[15px]'>
													<div className='w-[43%] sm:w-[100%] md:w-[65%] p-[18px] bg-white rounded-md flex flex-col '>
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

														{productData?.data?.proVariants?.map(
															(variant: any) => (
																<div className='w-[100%] flex flex-col'>
																	<div
																		key={variant?.id}
																		className='w-[100%] flex items-center justify-between mt-[25px] mb-[15px]'>
																		<div className='flex flex-col'>
																			<div className='text-[18px] sm:text-[16px]'>
																				{variant?.name}
																			</div>
																			<div className='text-[14px] sm:text-[12px] mt-[1px] font-bold whitespace-nowrap flex gap-2'>
																				₦{" "}
																				{formatPrice(
																					productData?.data?.discountPrice,
																				)}{" "}
																				<div className='line-through text-gray-400'>
																					{formatPrice(
																						productData?.data?.originalPrice,
																					)}{" "}
																				</div>
																			</div>
																		</div>

																		<div className='flex items-center'>
																			<div
																				onClick={() => {
																					if (user?.id) {
																						handleRemoveCartUser({
																							product_id: productData?.data?.id,
																							product: productData?.data?.id,
																							variantID: variant.id,
																							quantity: 1,
																						});
																					} else {
																						handleDecrement(variant?.id);
																					}
																				}}
																				className='w-[30px] h-[30px] sm:w-[20px]  sm:h-[20px] bg-[#DE801C] shadow-lg rounded-sm flex justify-center items-center text-white mr-[10px] cursor-pointer'>
																				-
																			</div>
																			<div className='w-[30px] h-[30px] rounded-sm flex justify-center items-center mr-[10px]'>
																				{loadingIncrease ||
																				loadingDecrease ||
																				isFetching ? (
																					<LoadingSpinner />
																				) : (
																					<>{findQuantity(variant.id, null)}</>
																				)}
																			</div>
																			<div
																				onClick={() => {
																					if (user?.id) {
																						handleAddToCartUser({
																							product_id: productData?.data?.id,
																							variantID: variant.id,
																							quantity: 1,
																						});

																						console.log("hhhh", productData);
																					} else {
																						handleIncrement(variant);
																					}
																				}}
																				className='w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] bg-[#DE801C] shadow-lg rounded-sm flex justify-center items-center text-white mr-[10px] cursor-pointer'>
																				+
																			</div>
																		</div>
																	</div>
																</div>
															),
														)}
														<div className='w-[100%] h-[1px] bg-[#d6d6d6] mt-[20px]'></div>
														<div className='w-[100%] flex items-center mt-[15px] justify-between sm:flex-wrap'>
															<button
																onClick={closeVariant}
																className='w-[48%] sm:w-[100%] h-[50px] border border-[#DE801C] rounded-sm flex justify-center items-center cursor-pointer'>
																<h3 className='text-[#DE801C] text-[16px] sm:text-[14px]'>
																	CONTINUE SHOPPING
																</h3>
															</button>
															<button
																onClick={() => {
																	navigate("/cart");
																}}
																className='w-[48%] sm:w-[100%] sm:mt-[10px] h-[50px] bg-[#DE801C] rounded-sm flex justify-center items-center cursor-pointer'>
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
										<div className='text-[13px] text-primary'>
											{productData?.data?.store?.phone}
										</div>
									</div>
									<div
										onClick={() => {
											if (user?.id) {
												if (productData?.data?.proVariants?.length > 0) {
													setShowVariant(true);
												} else {
													handleAddToCartUser({
														product_id: productData?.data?.id,
														variantID: null,
														quantity: 1,
													});
												}
											} else {
												if (productData?.data?.proVariants?.length > 0) {
													setShowVariant(true); // Show variant selection popup if variants exist
												} else {
													// If no variants, directly add the product to the cart
													dispatch(
														addToCart({
															productName: productData?.data?.name,
															productID: productData?.data?.id,
															variant: null, // No variants, so set to null
															price: productData?.data?.discountPrice,
															media: productData?.data?.media[0], // Use the main image of the product
															cartQuantity: 1, // Setting initial cart quantity
														}),
													);
													toast.success("Added to Cart successfully"); // Show success message
												}
											}
										}}
										className='xl:w-[300px] xxl:w-[300px] sm:w-full bg-secondary text-white rounded-[5px] flex justify-center items-center py-[10px] my-[20px] cursor-pointer '>
										<div>
											{loadingIncrease ? (
												<LoadingButton w={"100%"} />
											) : (
												"Add to cart"
											)}
										</div>
										{findQuantity(null, productData?.data?.id) > 0 && (
											<span className='ml-2 bold'>
												({findQuantity(null, productData?.data?.id)})
											</span>
										)}
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
											<div
												onClick={shareOnFacebook}
												className='w-[25px] h-[25px] rounded-[50%] flex justify-center items-center text-primary border mr-[20px] cursor-pointer'>
												<CgFacebook />
											</div>
											<div
												onClick={shareOnTwitter}
												className='w-[25px] h-[25px] rounded-[50%] flex justify-center items-center text-black border mr-[20px] cursor-pointer'>
												<BsTwitterX />
											</div>
											<div
												onClick={shareOnWhatsApp}
												className='w-[25px] h-[25px] rounded-[50%] flex justify-center items-center text-[#00ff00] border cursor-pointer'>
												<FaWhatsapp />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='xl:flex flex-col sm:mt-[10px]'>
						<div className='flex  items-center sm:mb-5 '>
							<div className='w-[25px] h-[25px] text-[14px] mr-[10px] rounded-[50%] bg-[#c03434] flex justify-center items-center text-white'>
								{productData?.data?.store?.name?.charAt(0)}
							</div>
							<div className='text-[15px] text-[#535353] mr-[10px]'>
								Sold by
							</div>
							<div className='text-[15px] font-semibold underline text-primary mr-[5px]'>
								{productData?.data?.store?.name}
							</div>
							<div className='w-[25px] h-[25px] text-[16px] mr-[10px] rounded-[50%] bg-[#0000ff77] flex justify-center items-center text-primary'>
								<BiCheck />
							</div>
						</div>
						<div className='hidden sm:block md:block'>
							<AccordionDemo />
						</div>
						<div className='xl:flex lg:flex hidden flex-col my-[20px]  '>
							<div className='flex text-[16px] gap-10 sm:flex-col'>
								<div
									onClick={() => setToggleType("productdetails")}
									className={` font-semibold cursor-pointer ${
										toggleType === "productdetails" ? "text-primary" : null
									}`}>
									Product details
								</div>
								<div
									onClick={() => setToggleType("description")}
									className={` font-semibold cursor-pointer ${
										toggleType === "description" ? "text-primary" : null
									}`}>
									Description
								</div>
								<div
									onClick={() => setToggleType("shipping")}
									className={` font-semibold cursor-pointer ${
										toggleType === "shipping" ? "text-primary" : null
									}`}>
									Shipping
								</div>
								<div
									onClick={() => setToggleType("warranty")}
									className={` font-semibold cursor-pointer ${
										toggleType === "warranty" ? "text-primary" : null
									}`}>
									Warranty
								</div>
								<div
									onClick={() => setToggleType("policy")}
									className={` font-semibold cursor-pointer ${
										toggleType === "policy" ? "text-primary" : null
									}`}>
									Return Policy
								</div>
								<div
									onClick={() => setToggleType("reviews")}
									className={` font-semibold cursor-pointer ${
										toggleType === "reviews" ? "text-primary" : null
									}`}>
									Reviews
								</div>
							</div>
							{toggleType === "productdetails" && (
								<div className='mt-[15px] text-[14px]  '>
									<div>product details product details</div>
								</div>
							)}

							{toggleType === "description" && (
								<div className='mt-[15px] text-[14px] '>
									<TextSanitizer description={productData?.data.description} />
								</div>
							)}

							{toggleType === "shipping" && (
								<div className='mt-[15px] text-[14px] '>
									<div>Shipping</div>
								</div>
							)}

							{toggleType === "warranty" && (
								<div className='mt-[15px] text-[14px] '>
									<div>Warranty</div>
								</div>
							)}

							{toggleType === "policy" && (
								<div className='mt-[15px] text-[14px] '>
									<div>Policy</div>
								</div>
							)}

							{toggleType === "reviews" && (
								<div className='mt-[15px] text-[14px] '>
									<div className='min-h-[20px] bg-ascentBlue p-4'>
										{RatingLoading ? (
											<div>Loading...</div>
										) : (
											<>
												{RatingData?.data?.length >= 1 ? (
													<ReviewComponent
														showReview={showReview}
														setShowReview={setShowReview}
													/>
												) : (
													<div>
														<div> No Reviews for this product</div>

														{productData?.data?.canReview && (
															<h4
																onClick={() => {
																	setShowReview(!showReview);
																}}
																className='text-primary text-[14px] mt-5  cursor-pointer font-[600] '>
																Drop review
															</h4>
														)}

														{showReview && <ReviewPage />}
													</div>
												)}
											</>
										)}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* <div className='hidden sm:block'> */}
					{/* <h3 className='mt-7 font-bold mb-3'>Recomended for you</h3> */}
					{/* <div className='grid  grid-cols-5 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'> */}
					{/* <BrandsComp /> */}
					{/* <BrandsComp /> */}
					{/* <BrandsComp /> */}
					{/*  */}
					{/* </div> */}
					{/* </div> */}

					<div className='xl:flex flex-col mb-20 sm:mb-10'>
						<h3 className='mt-7 font-bold mb-3'>Similar Product</h3>
						<div className='w-[100%]'>
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
								<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
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
		</>
	);
};

export default ProductDetails;
