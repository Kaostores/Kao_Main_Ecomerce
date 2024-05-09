import { GoChevronRight } from "react-icons/go";
import im2 from "../../src/assets/adidas.png";
import { HiTrash } from "react-icons/hi2";
import { FaNairaSign } from "react-icons/fa6";
// import Product from "@/props/Product";
import { Button } from "@/components/ui/button";
import CardComp from "@/components/commons/CardComp";
import BrandsComp from "@/components/commons/BrandsComp";
import { useNavigate } from "react-router-dom";
import { UseAppDispach, useAppSelector } from "@/services/store";
import { addToCart, clearCart, remove, removeFromCart } from "@/services/reducers";
import { useEffect, useReducer } from "react";
import EmpyCart from "./EmpyCart";

interface CartProps {
    onOpenLogin: () => void; // Assuming no arguments and returns void
    onClose: () => void;    // Assuming no arguments and returns void
}

const Cart: React.FC<CartProps> = ({ onOpenLogin, onClose }) => {

	const currentUser = useAppSelector((state) => state.persistedReducer.currentUser);
	const dispatch = UseAppDispach();
    const cart = useAppSelector((state) => state.persistedReducer.cart);
	const totalQuantity = useAppSelector((state) => state.persistedReducer.totalQuantity);
	const totalPrice = useAppSelector((state) => state.persistedReducer.totalPrice);
	const [, forceUpdate] = useReducer(x => x + 1, 0);

	useEffect(() => {
    forceUpdate(); // This will force the component to re-render on any state change
}, [totalPrice]);

	const readCartQuantity = useAppSelector((state: any) => state.persistedReducer.totalQuantity)
	
	const readFromMyCart = useAppSelector((state: any) => state.persistedReducer.cart)

	const isAuthenticated = currentUser && Object.keys(currentUser || {}).length !== 0;

	 const handleCheckout = () => {
    console.log("handleCheckout called");
    if (!isAuthenticated) {
        console.log("User is not authenticated, opening login...");
        onOpenLogin();
    } else {
        navigate('/cart/checkout');
    }
};



	const navigate = useNavigate()
	return (
		<div className='w-[100%] min-h-[100%] flex xl:justify-center items-center '>
			<div className='w-[100%]  flex flex-col my-[10px]'>
				<div className='flex  items-center mb-[10px] text-[13px]'>
					<div className='flex justify-center items-center '>
						<div>Home</div>
						<div>
							<GoChevronRight />
						</div>
					</div>
					<div className='font-bold text-primary'>Cart</div>
				</div>
				{cart.length === 0 ? (
					<EmpyCart />
				) : (
						<div className='flex justify-between md:h-[250px] sm:flex-col'>
					<div className='flex flex-col'>
						<div className='text-[20px] font-semibold mb-[20px]'>
							My Cart({readCartQuantity})
						</div>

								{/* {readCart.map((product: any) => ( */}
									<div  className='flex w-[100%] justify-between flex-col'>
									{cart.map((product: any) => (
										<div className="w-[100%] flex flex-col h-[100%] sm:hidden">
											<div key={product.variant ? `${product.id}-${product.variant.id}` : `${product.id}-default`} className='flex h-[100px] sm:hidden md:w-[300px] mb-[30px]'>
										<div className='xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] mr-[10px] overflow-hidden mb-[10px] cursor-pointer flex justify-center items-center border-[2px] border-[#0000ff]'>
											<img
												src={product?.media?.length > 0 && product.media[0].link ? product.media[0].link : im2}
												alt=''
												className='xl:w-[50px] md:w-[30px] lg:w-[50px] sm:w-[30px]'
											/>
										</div>
										<div className='flex flex-col justify-between md:h-[80px]'>
											<div className='xl:text-[20px] md:text-[14px] font-semibold'>
												{product.name} - {product.variant?.title || 'No Variant'}
											</div>
											<div className='xl:text-[13px] md:text-[10px]'>
												Brand <span className='text-primary font-bold'>Apple</span>{" "}
												| Similar Product From Apple | 709388838
											</div>
											<div className='flex text-primary items-center font-bold'>
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
											<div className='font-semibold text-[18px]'>{product.variant ? product.variant.price * product.cartQuantity : product.price * product.cartQuantity}</div>
										</div>
										<div className='xl:w-[200px] pl-2 pr-2 rounded-md lg:w-[150px] md:w-[150px] flex justify-between items-center bg-ascentGray '>
											<div onClick={() => dispatch(removeFromCart(product.variant ? product.variant.id : product.id))}
											 className='w-[20px] h-[20px] rounded-[50%] bg-primary text-white flex justify-center items-center cursor-pointer'>
												-
											</div>
											<div>{product.cartQuantity}</div>
											<div onClick={() => dispatch(addToCart({
											...product,
											variant: product.variant || null
											}))} className='w-[20px] h-[20px] rounded-[50%] bg-primary text-white flex justify-center items-center cursor-pointer'>
												+
											</div>
										</div>
									</div>
									</div>
										</div>
									  ))}  
							{/* for mobile start*/}
							<div className='flex flex-col xl:hidden md:hidden lg:hidden'>
								<div className='flex h-[100px]'>
									<div className=' md:w-[80px] md:h-[80px] sm:w-[80px] sm:h-[100px] mr-[10px] overflow-hidden mb-[10px] cursor-pointer flex justify-center items-center border-[2px] border-[#0000ff]'>
										<img
											src={im2}
											alt=''
											className=' md:w-[50px]  sm:w-[40px]'
										/>
									</div>
									<div className='flex flex-col justify-between items-start'>
										<div className=' font-semibold text-[14px]'>
											Rolex Yatch-Master II
										</div>
										<div className='text-[9px]'>
											Brand{" "}
											<span className='text-primary font-bold'>Apple</span> |
											Similar Product From Apple | 709388838
										</div>
										<div className='flex w-[100%] justify-between'>
											<div className='flex flex-col items-start'>
												<div>
													<div className='flex justify-center items-center'>
														<div className='text-[9px]'>
															<FaNairaSign />
														</div>
														<div className='font-semibold text-[14px]'>
															1,600,500
														</div>
													</div>
												</div>
												<div>
													<div className='w-[100px] pl-2 pr-2 rounded-md flex justify-between items-center bg-ascentGray '>
														<div className='w-[14px] h-[14px] rounded-[50%] text-[13px] bg-primary text-white flex justify-center items-center'>
															-
														</div>
														<div>1</div>
														<div className='w-[14px] h-[14px] rounded-[50%] text-[13px] bg-primary text-white flex justify-center items-center'>
															+
														</div>
													</div>
												</div>
											</div>
											<div>
												<div className='flex text-primary items-center font-bold'>
													<div className='text-[14px] mr-[5px]'>
														<HiTrash />
													</div>
													<div className='text-[13px]'>Remove</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='flex flex-col text-[14px]'>
									<div className='w-[100%]  flex justify-between items-center text-primary py-[10px] px-[5px] bg-ascentGray rounded-md mt-[50px] mb-5 font-semibold'>
										<div>Sub Total</div>
										<div>NGN 12,000</div>
									</div>
									<Button
										onClick={() => {
											navigate("/cart/checkout");
										}}
										variant='secondary'
										className='w-full bg-secondary text-white'
										type='submit'>
										Checkout(1)
									</Button>
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
							</div>
							{/* for mobile end*/}
							</div>
								{/* ))} */}

					</div>
					<div>
						<div className='flex justify-start h-[170px] sm:hidden'>
							<div className='p-[20px] min-h-[200px] rounded-sm flex flex-col bg-[#F0F3FA]'>
								<div className='font-semibold text-[25px] mb-[10px]'>
									Summary
								</div>
								<div>
									<div>
										<div className='w-[320px] md:w-[220px] flex justify-between'>
											<div className='text-[13px] font-semibold'>Sub Total</div>
											<div className='flex justify-center items-center'>
												<div className='text-[9px] -mt-1'>
													<FaNairaSign />
												</div>
												<div className='text-[20px] font-semibold'>
													{totalPrice}
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
										Checkout(1)
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				)}
				<div className='xl:flex flex-col mb-20 sm:hidden'>
					<h3 className='mt-[80px] font-bold mb-3'>Saved items</h3>
					<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
						<CardComp deal={true} />
						<CardComp />
						<CardComp />
						<CardComp deal={true} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cart;
