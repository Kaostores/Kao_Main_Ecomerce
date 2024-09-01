import im2 from "../../src/assets/adidas.png";
import { HiTrash } from "react-icons/hi2";
import { FaNairaSign } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import CardComp from "@/components/commons/CardComp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UseAppDispach, useAppSelector } from "@/services/store";
import { addToCart, removeFromCart } from "@/services/reducers";
import { useEffect, useReducer } from "react";
import EmpyCart from "./EmpyCart";
import {
	useAddCartCustomerMutation,
	useRemoveCartCustomerMutation,
	useUpdateCartCustomerMutation,
	useViewAllCartCustomerQuery,
	useViewAllProductsQuery,
} from "@/services/apiSlice";
import { formatPrice } from "@/helpers";
import CartSkeleton from "@/components/skeleton/CartSkeleton";

type CartProps = {
	openLoginDialog: () => void;
	openRegisterDialog: () => void;
};

const Cart: React.FC<CartProps> = ({ openLoginDialog }) => {
	const currentUser = useAppSelector(
		(state) => state.persistedReducer.currentUser,
	);
	const dispatch = UseAppDispach();
	const navigate = useNavigate();
	const [addCartFn] = useAddCartCustomerMutation();
	const [removeCartFn] = useRemoveCartCustomerMutation();
	const [updateCartFn] = useUpdateCartCustomerMutation();

	const cart = useAppSelector((state) => state.persistedReducer.cart);
	const totalPrice = useAppSelector(
		(state) => state.persistedReducer.totalPrice,
	);

	const isAuthenticated =
		currentUser && Object.keys(currentUser || {}).length !== 0;

	const { data: userCartData, isLoading: isUserCartLoading } =
		useViewAllCartCustomerQuery({});
	const { data, isLoading: isProductDataLoading } = useViewAllProductsQuery({});

	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	useEffect(() => {
		forceUpdate(); // This will force the component to re-render on any state change
	}, [totalPrice]);

	const handleCheckout = () => {
		if (isAuthenticated) {
			navigate("/cart/checkout");
		} else {
			openLoginDialog();
		}
	};

	const cartItems = isAuthenticated
		? userCartData?.data?.cart?.items || []
		: cart;

	const isLoading = isUserCartLoading || isProductDataLoading;

	const handleAddToCartUser = async (props: any) => {
		const response: any = await addCartFn({
			product: props?.product_id,
			quantity: 1,
			variant: props?.variantID ? props?.variantID : null,
		});
		if (response?.data?.success) {
			toast.success("Added to Cart successfully");
		}
		console.log("this is response to adding cart", response);
	};
	const handleRemoveCartUser = async (props: any) => {
		console.log(props);
		const response: any = await removeCartFn({
			product_id: props?.product_id,
		});
		if (response?.data?.success) {
			toast.success("Removed from Cart successfully");
		}
		console.log("this is response to remove cart", response);
	};

	const handleUpdateCartUser = async (props: any) => {
		console.log(props);
		const response: any = await updateCartFn({
			productId: props?.product_id,
			quantity: 1,
		});
		if (response?.data?.success) {
			toast.success("Removed from Cart successfully");
		}
		console.log("this is response to remove cart", response);
	};

	console.log("here is the cart items", userCartData);

	return (
		<>
			<div className='w-[100%] min-h-[100%] flex xl:justify-center items-center'>
				<div className='w-[100%] flex flex-col my-[10px]'>
					{isLoading ? (
						<>
							<CartSkeleton />
						</>
					) : (
						<>
							{cartItems.length === 0 ? (
								<EmpyCart />
							) : (
								<div className='flex justify-between gap-5 sm:gap-0 md:h-[250px] sm:flex-col'>
									<div className='flex flex-col'>
										<div className='text-[20px] font-semibold mb-[20px]'>
											My Cart({cartItems?.length})
										</div>
										<div className='flex w-[100%] justify-between flex-col'>
											{cartItems.map((product: any) => (
												<div
													key={product.id}
													className='w-[100%] flex flex-col h-[100%] sm:hidden'>
													<div className='flex h-[100px] sm:hidden md:w-[300px] mb-[30px]'>
														<div
															className='xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] 
md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] mr-[10px] 
overflow-hidden mb-[10px] cursor-pointer flex justify-center 
items-center border-[2px] border-[#0000ff]'>
															<img
																src={
																	product?.media?.url || // If product.media.url exists, use it
																	product?.product?.media?.[0]?.url || // Otherwise, check for product.product.media[0]?.url
																	im2 // Fallback to the default image if neither is available
																}
																alt=''
																className='xl:w-[50px] md:w-[30px] lg:w-[50px] sm:w-[30px]'
															/>
														</div>
														<div
															className='flex  max-w-[350px] flex-col justify-between md:h-
[80px]'>
															<div className='xl:text-[20px] md:text-[14px] font-semibold'>
																{product.productName || product?.product?.name}{" "}
																-{" "}
																{product.variant?.name ||
																	product?.product?.variant?.name ||
																	"No Variant"}
															</div>
															<div className='xl:text-[13px] md:text-[10px]'>
																Brand{" "}
																<span className='text-primary font-bold'>
																	Apple
																</span>{" "}
																| Similar Product From Apple | 709388838
															</div>
															<div
																onClick={() => {
																	if (isAuthenticated) {
																		handleRemoveCartUser({
																			product_id: product?.product?.id,
																			variant: product?.variant,
																		});
																	} else {
																		dispatch(
																			removeFromCart(
																				product.variant
																					? product.variant.id
																					: product.id,
																			),
																		);
																	}
																}}
																className='flex text-primary cursor-pointer items-center 
font-bold'>
																<div className='xl:text-[20px] md:text-[15px] mr-[5px]'>
																	<HiTrash />
																</div>
																<div className='md:text-[13px]'>Remove</div>
															</div>
														</div>
														<div className='flex flex-col justify-end items-end ml-[70px]'>
															<div className='flex justify-center items-center'>
																<div className='text-[9px]'>
																	<FaNairaSign />
																</div>
																<div className='font-semibold text-[18px]'>
																	{formatPrice(
																		product.price * product.cartQuantity ||
																			product.price * product?.quantity,
																	)}
																</div>
															</div>
															<div
																className='xl:w-[200px] pl-2 pr-2 rounded-md lg:w-[150px] 
md:w-[150px] flex justify-between items-center bg-ascentGray'>
																<div
																	onClick={() => {
																		if (isAuthenticated) {
																			handleUpdateCartUser({
																				product_id: product?.product?.id,
																			});
																		} else {
																			dispatch(
																				removeFromCart(
																					product.variant
																						? product.variant.id
																						: product.id,
																				),
																			);
																		}
																	}}
																	className='w-[20px] h-[20px] rounded-[50%] bg-primary 
text-white flex justify-center items-center 
cursor-pointer'>
																	-
																</div>
																<div>
																	{product?.quantity || product.cartQuantity}
																</div>
																<div
																	onClick={() => {
																		if (isAuthenticated) {
																			handleAddToCartUser({
																				product_id: product?.product?.id,
																				variantID: product.variant?.id,
																				quantity: 1,
																			});
																		} else {
																			dispatch(
																				addToCart({
																					...product,
																					variant: product.variant || null,
																				}),
																			);
																		}
																	}}
																	className='w-[20px] h-[20px] rounded-[50%] bg-primary 
text-white flex justify-center items-center 
cursor-pointer'>
																	+
																</div>
															</div>
														</div>
													</div>
												</div>
											))}
											{/* for mobile start */}
											<div className='flex flex-col xl:hidden  md:hidden lg:hidden'>
												{cartItems.map((product: any) => (
													<div
														key={product.id}
														className='flex h-[100px] mb-[18px] gap-3'>
														<div
															className='md:w-[80px] md:h-[80px] sm:w-[80px] sm:h-[100px] mr-
[10px] overflow-hidden mb-[10px] cursor-pointer flex justify-center 
items-center border-[2px] border-[#0000ff]'>
															<img
																src={
																	product?.media?.url || // If product.media.url exists, use it
																	product?.product?.media?.[0]?.url || // Otherwise, check for product.product.media[0]?.url
																	im2 // Fallback to the default image if neither is available
																}
																alt=''
																className='md:w-[50px] sm:w-[40px]'
															/>
														</div>
														<div className='flex flex-col justify-between items-start'>
															<div className='font-semibold text-[14px]'>
																{product.productName || product?.product?.name}{" "}
																-{" "}
																{product.variant?.name ||
																	product?.product?.variant?.name ||
																	"No Variant"}
															</div>
															<div className='text-[9px]'>
																Brand{" "}
																<span className='text-primary font-bold'>
																	Apple
																</span>{" "}
																| Similar Product From Apple | 709388838
															</div>
															<div className='flex w-[100%] justify-between'>
																<div className='flex flex-col items-start'>
																	<div>
																		<div className='flex justify-center items-center'>
																			<div className='text-[9px]'>
																				<FaNairaSign />
																			</div>
																			<div className='font-semibold text-[14px]'>
																				{formatPrice(
																					product.price *
																						product.cartQuantity ||
																						product?.price * product?.quantity,
																				)}
																			</div>
																		</div>
																	</div>
																	<div>
																		<div
																			className='w-[100px] pl-2 pr-2 rounded-md flex 
justify-between items-center bg-ascentGray'>
																			<div
																				onClick={() => {
																					if (isAuthenticated) {
																						handleUpdateCartUser({
																							product_id: product?.product?.id,
																						});
																					} else {
																						dispatch(
																							removeFromCart(
																								product.variant
																									? product.variant.id
																									: product.id,
																							),
																						);
																					}
																				}}
																				className='w-[14px] h-[14px] rounded-[50%] 
text-[13px] bg-primary text-white flex 
justify-center items-center'>
																				-
																			</div>
																			<div>
																				{product?.quantity ||
																					product.cartQuantity}
																			</div>
																			<div
																				onClick={() => {
																					if (isAuthenticated) {
																						handleAddToCartUser({
																							product_id: product?.product?.id,
																							variantID: product.variant?.id,
																							quantity: 1,
																						});
																					} else {
																						dispatch(
																							addToCart({
																								...product,
																								variant:
																									product.variant || null,
																							}),
																						);
																					}
																				}}
																				className='w-[14px] h-[14px] rounded-[50%] 
text-[13px] bg-primary text-white flex 
justify-center items-center'>
																				+
																			</div>
																		</div>
																	</div>
																</div>
																<div
																	onClick={() => {
																		if (isAuthenticated) {
																			handleRemoveCartUser({
																				product_id: product?.product?.id,
																				variant: product?.variant,
																			});
																		} else {
																			dispatch(
																				removeFromCart(
																					product.variant
																						? product.variant.id
																						: product.id,
																				),
																			);
																		}
																	}}
																	className='cursor-pointer text-primary font-bold'>
																	Remove
																</div>
															</div>
														</div>
													</div>
												))}
												<div className='flex flex-col text-[14px] mb-10 sm:mb-1'>
													<div
														className='w-[100%]  flex justify-between items-center text-primary 
py-[10px] px-[5px] bg-ascentGray rounded-md mt-[50px] mb-5 font-semibold'>
														<div>Sub Total</div>
														<div className='flex justify-center items-center'>
															<div className='text-[9px] -mt-1'>
																<FaNairaSign />
															</div>
															<div className='text-[17px] font-semibold'>
																{formatPrice(
																	userCartData?.data?.cart?.totalPrice ||
																		totalPrice,
																)}
															</div>
														</div>
													</div>
													<Button
														onClick={() => {
															navigate("/cart/checkout");
														}}
														variant='secondary'
														className='w-full bg-secondary text-white'
														type='submit'>
														Checkout({cartItems?.length})
													</Button>
												</div>
											</div>
											{/* for mobile end */}
										</div>
									</div>
									<div className='flex justify-start h-[170px] sm:hidden'>
										<div className='p-[20px] min-h-[200px] rounded-sm flex flex-col bg-[#F0F3FA]'>
											<div className='font-semibold text-[25px] mb-[10px]'>
												Summary
											</div>
											<div>
												<div>
													<div className='w-[320px] md:w-[220px] flex justify-between'>
														<div className='text-[13px] font-semibold'>
															Sub Total
														</div>
														<div className='flex justify-center items-center'>
															<div className='text-[9px] -mt-1'>
																<FaNairaSign />
															</div>
															<div className='text-[20px] font-semibold'>
																{formatPrice(
																	userCartData?.data?.cart?.totalPrice ||
																		totalPrice,
																)}
															</div>
														</div>
													</div>
													<div className='text-[13px] font-semibold my-[5px]'>
														Delivery fee not added
													</div>
												</div>
												<Button
													onClick={handleCheckout}
													variant='secondary'
													className='w-full mt-4 bg-[#de801c] text-white'
													type='submit'>
													Checkout({cartItems?.length})
												</Button>
											</div>
										</div>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>

			<div className='xl:flex flex-col mb-20 sm:mb-10 '>
				{data?.data?.length > 0 && (
					<h3 className='mt-[50px] font-bold mb-3'>Saved items</h3>
				)}
				<div className='w-[100%]'>
					{isLoading && !data ? (
						<div
							className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden 
md:grid-cols-2 '>
							<div
								role='status'
								className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 
rtl:space-x-reverse md:flex md:items-center'>
								<div
									className='flex items-center justify-center w-full h-48 bg-gray-400 
rounded sm:w-96 dark:bg-gray-900'></div>
								<div className='w-full'>
									<div
										className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 
mb-4'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[480px] mb-2.5'></div>
									<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[440px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[460px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[360px]'></div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
							<div
								role='status'
								className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 
rtl:space-x-reverse md:flex md:items-center'>
								<div
									className='flex items-center justify-center w-full h-48 bg-gray-400 
rounded sm:w-96 dark:bg-gray-900'></div>
								<div className='w-full'>
									<div
										className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 
mb-4'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[480px] mb-2.5'></div>
									<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[440px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[460px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[360px]'></div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
							<div
								role='status'
								className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 
rtl:space-x-reverse md:flex md:items-center'>
								<div
									className='flex items-center justify-center w-full h-48 bg-gray-400 
rounded sm:w-96 dark:bg-gray-900'></div>
								<div className='w-full'>
									<div
										className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 
mb-4'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[480px] mb-2.5'></div>
									<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[440px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[460px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[360px]'></div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
							<div
								role='status'
								className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 
rtl:space-x-reverse md:flex md:items-center'>
								<div
									className='flex items-center justify-center w-full h-48 bg-gray-400 
rounded sm:w-96 dark:bg-gray-900'></div>
								<div className='w-full'>
									<div
										className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 
mb-4'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[480px] mb-2.5'></div>
									<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[440px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[460px] mb-2.5'></div>
									<div
										className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-
[360px]'></div>
								</div>
								<span className='sr-only'>Loading...</span>
							</div>
						</div>
					) : (
						<div
							className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center 
sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
							{data?.data.slice(0, 4).map((props: any) => (
								<CardComp
									key={props.id}
									deal={true}
									isLoading={isLoading}
									{...props}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
