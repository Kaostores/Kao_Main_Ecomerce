import { IoWallet } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import WalletHistoryTable from "./Subpages/WalletHistoryTable";
import { useLocation, useNavigate } from "react-router-dom";
import { FiBriefcase, FiHome } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import Recomended from "./Subpages/Recomended";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GrLogout } from "react-icons/gr";
import { logoutUser } from "@/services/reducers";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";
import {
	useAddPaymentMutation,
	useGetUserDataQuery,
} from "@/services/apiSlice";
import { FaRocketchat } from "react-icons/fa";
// import { LoadingSpinner } from "@/components/reuse/Spinner";
import LoaderComponent from "@/components/reuse/LoadingComponent";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const Dashboardhome = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const active = location?.pathname;

	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const [isActiveFirst, setIsActiveFirst] = useState(false);
	const [isActiveSecond, setIsActiveSecond] = useState(true);
	const [amount, setAmount] = useState<number>();
	const [openAmount, setOpenAmount] = useState(false);
	// const user = useSelector((state:any)=> state?.persistedReducer?.currentUser)
	const [proccedToPayment, { isLoading: paymentLoading }] =
		useAddPaymentMutation();

	const { data } = useGetUserDataQuery({});

	const onHandlePayment = async () => {
		const response: any = await proccedToPayment({
			amount: amount,
		});

		// console.log("yooooooooo", response);

		if (response?.data?.success) {
			const paymentLink = response?.data?.data?.link;
			// window.open(paymentLink);
			// window.open(paymentLink, "_blank");
			window.open(paymentLink, "_blank", "noopener,noreferrer");
			// window.location.href = paymentLink;
		} else {
		}
	};

	const handleClickFirst = () => {
		setIsActiveFirst(true);
		setIsActiveSecond(false);
	};

	const handleClickSecond = () => {
		setIsActiveFirst(false);
		setIsActiveSecond(true);
	};

	const Toggle = () => {
		setShow(true);
	};
	const Toggle2 = () => {
		setShow2(true);
	};

	const Close = () => {
		setShow(false);
		setShow2(false);
	};

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutUser());
		toast.success("You have logged out successfully", {
			autoClose: 3000,
			closeButton: true,
			onClose: () => {
				navigate("/");
			},
		});
	};

	if (paymentLoading) return <LoaderComponent />;

	return (
		<div className='w-[100%]'>
			<Dialog open={openAmount} onOpenChange={setOpenAmount}>
				<DialogTrigger></DialogTrigger>

				<DialogContent className='w-full'>
					<span className='font-semibold text-xl'>Charge Amount</span>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							onHandlePayment();
						}}
						className='gap-3 flex flex-col'>
						<Label htmlFor='name' className=''>
							Enter Amount
						</Label>
						<Input
							onChange={(e) => {
								setAmount(+e.target.value);
							}}
							required
							type='number'
							placeholder='e.g 100'
						/>
						<Button
							variant='secondary'
							className='w-[120px] text-white text-sm py-7'
							onClick={() => {
								// action();
							}}>
							Procced
						</Button>
					</form>
				</DialogContent>
			</Dialog>
			<div className='w-[100%] flex-col p-[15px] mb-[60px] flex-1 bg-[#F4F4F4] ml-[15px] rounded-[8px] md:ml-0 md:hidden sm:hidden'>
				<div className='w-[100%] flex items-center mt-[14px] justify-between'>
					<div className='flex items-center'>
						<div className='text-[#0030AD]'>
							<IoWallet />
						</div>
						<p className='text-[#0030AD] text-[14px] ml-[5px]'>
							KAO wallet balance:
						</p>
						<h3 className='text-[#0030AD] ml-[5px] font-[500]'>
							NGN {data?.data?.balance?.toLocaleString() || 0}
						</h3>
					</div>
					<div>
						<h3
							onClick={Toggle}
							className='text-[#0030AD] underline font-[500] cursor-pointer'>
							Top up wallet
						</h3>
					</div>
				</div>

				<div className='w-[100%] h-[1px] bg-[#757575] mt-[22px]'></div>

				<WalletHistoryTable />

				{show ? (
					<div className=' fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-8 flex justify-center items-center z-10 transition-all duration-350 ease-in-out'>
						<div className='w-[500px] p-[20px] pt-[55px] pb-[55px] flex bg-[#fff] rounded-md flex-col justify-center items-center relative'>
							<h3 className='text-[18px] font-[500]'>Top up with</h3>
							<div className='w-[80%] mt-[40px] flex flex-col'>
								<div onClick={handleClickSecond} className='flex mb-[35px] '>
									<div>
										<div
											className={`w-[15px] h-[15px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer ${
												isActiveSecond
													? "bg-primary"
													: "bg-white border border-iconGray text-iconGray"
											}`}>
											<IoCheckmarkSharp className='text-[10px]' />
										</div>
									</div>
									<div className='flex flex-col ml-[15px]'>
										<h3 className='text-[16px] mt-[-5px]'>
											Top up with Cards, Bank Transfer or USSD
										</h3>
										<p className='text-[13px] text-iconGray mt-[3px]'>
											You will be directed to the payment gateway{" "}
										</p>
									</div>
								</div>
								<div onClick={handleClickFirst} className='flex '>
									<div>
										<div
											className={`w-[15px] h-[15px] rounded-full flex justify-center 
items-center text-[#fff] cursor-pointer ${
												isActiveFirst
													? "bg-primary"
													: "bg-white border border-iconGray text-iconGray"
											}`}>
											<IoCheckmarkSharp className='text-[10px]' />
										</div>
									</div>
									<div className='flex flex-col ml-[15px]'>
										<h3 className='text-[16px] mt-[-5px]'>Top up with USDT</h3>
										<p className='text-[13px] text-iconGray mt-[3px]'>
											Your balance: 30 NGN
										</p>
									</div>
								</div>
								<button
									onClick={() => {
										if (isActiveSecond) {
											// onHandlePayment();
											setOpenAmount(true);
										}
									}}
									className='w-[100%] h-[40px] text-[#fff] bg-secondary text-[14px] rounded-sm mt-[70px]'>
									Continue
								</button>
							</div>
							<FaXmark
								onClick={Close}
								className='absolute right-[20px] top-[20px] cursor-pointer'
							/>
						</div>
					</div>
				) : null}
			</div>

			<div className='hidden md:flex sm:flex w-[100%] flex-col md:items-center sm:items-center relative'>
				<div className='flex flex-col md:w-[85%] sm:w-[90%]'>
					<h3 className='text-[18px] font-[600]'>
						Hello, {data?.data?.firstname}
					</h3>
					<p className='text-[14px]'>{data?.data?.email}</p>
				</div>
				<div className='h-[1px] w-full bg-[#F1F1F1] mt-[20px]'></div>

				<div className='w-[100%] md:w-[85%] sm:w-[90%] p-[10px] rounded-sm bg-ascentGray mt-[28px] flex items-center justify-between'>
					<div className='flex items-center'>
						<div className='text-primary text-[30px]'>
							<IoWallet />
						</div>
						<p className='text-primary ml-[7px] text-[17px]'>
							Kao wallet balance:
						</p>
					</div>
					<h3 className='text-[16px] font-[600] text-primary'>
						NGN {data?.data?.balance?.toLocaleString() || 0}
					</h3>
				</div>

				<div
					onClick={Toggle2}
					className='w-[100%] md:w-[85%] sm:w-[90%] flex items-center justify-between mt-[20px] cursor-pointer'>
					<p className='text-primary text-[16px]'>Top up wallet</p>
					<div className='text-primary text-[20px]'>
						<IoIosArrowForward />
					</div>
				</div>
				<div className='h-[1px] w-full bg-[#F1F1F1] mt-[20px]'></div>

				<div className='w-[100%] md:w-[85%] sm:w-[90%] flex flex-col mt-[20px]'>
					<div
						onClick={() => {
							navigate("/dashboard/wallet");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/dashboard/wallet"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<FiHome />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>Wallet</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/dashboard/account");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
              ${
								active === "/dashboard/account"
									? "bg-[#0333ae] text-[#fff]"
									: "text-[#757575]"
							}
              }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<FiHome />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>Account</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/dashboard/order");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/dashboard/order"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<FiBriefcase />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>Order</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/dashboard/reviews");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/dashboard/reviews"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<FaRegStar />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>
								My reviews
							</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/dashboard/items");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/dashboard/items"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<IoIosHeartEmpty />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>
								Saved items
							</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/dashboard/voucher");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/dashboard/voucher"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<RiCouponLine />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>Voucher</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/dashboard/messaging");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/dashboard/messaging"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<FaRocketchat />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>
								Messaging
							</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={() => {
							navigate("/help&support");
						}}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] 
cursor-pointer 
         ${
						active === "/help&support"
							? "bg-[#0333ae] text-[#fff]"
							: "text-[#757575]"
					}
         }`}>
						<div className='flex items-center'>
							<div className='text-[20px]  font-bold'>
								<MdOutlineSupportAgent />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] '>
								Help and Support
							</div>
						</div>
						<div className='text-iconGray text-[20px]'>
							<IoIosArrowForward />
						</div>
					</div>

					<div
						onClick={handleLogout}
						className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${
										active === "/help&support"
											? "bg-[#0333ae] text-[#fff]"
											: "text-[#757575]"
									}
                  }`}>
						<div className='flex items-center'>
							<div className='text-[20px] text-[#DA0000] font-bold'>
								<GrLogout />
							</div>
							<div className='font-medium  text-[15px] ml-[15px] text-[#DA0000]'>
								Logout
							</div>
						</div>
					</div>

					{/* <div className="flex items-center pl-[20px] bottom-[40px]">
			<div className='text-[20px] text-[#DA0000]  font-bold'>
				<GrLogout />
			</div>
			<div onClick={handleLogout} className='font-medium cursor-pointer  text-[15px] ml-[20px] text-[#DA0000]'>Logout</div>
		</div> */}
				</div>

				<div className='w-[100%] md:w-[85%] sm:w-[90%]'>
					<Recomended />
				</div>

				{show2 ? (
					<div className=' fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-8 flex justify-center items-center z-10 transition-all duration-350 ease-in-out'>
						<div className='w-[500px] sm:w-[350px] p-[20px] pt-[55px] pb-[55px] flex bg-[#fff] rounded-md flex-col justify-center items-center relative'>
							<h3 className='text-[18px] font-[500]'>Top up with</h3>
							<div className='w-[80%] sm:w-[100%] mt-[40px] flex flex-col'>
								<div onClick={handleClickSecond} className='flex mb-[35px] '>
									<div>
										<div
											className={`w-[15px] h-[15px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer ${
												isActiveSecond
													? "bg-primary"
													: "bg-white border border-iconGray text-iconGray"
											}`}>
											<IoCheckmarkSharp className='text-[10px]' />
										</div>
									</div>
									<div className='flex flex-col ml-[15px]'>
										<h3 className='text-[16px] mt-[-5px] sm:text-[14px] sm:font-[500]'>
											Top up with Cards, Bank Transfer or USSD
										</h3>
										<p className='text-[13px] text-iconGray mt-[3px]'>
											You will be directed to the payment gateway{" "}
										</p>
									</div>
								</div>
								<div onClick={handleClickFirst} className='flex '>
									<div>
										<div
											className={`w-[15px] h-[15px] rounded-full flex justify-center 
items-center text-[#fff] cursor-pointer ${
												isActiveFirst
													? "bg-primary"
													: "bg-white border border-iconGray text-iconGray"
											}`}>
											<IoCheckmarkSharp className='text-[10px]' />
										</div>
									</div>
									<div className='flex flex-col ml-[15px]'>
										<h3 className='text-[16px] mt-[-5px] sm:text-[14px] sm:font-[500]'>
											Top up with USDT
										</h3>
										<p className='text-[13px] text-iconGray mt-[3px]'>
											Your balance: 30 NGN
										</p>
									</div>
								</div>
								<button
									onClick={() => {
										if (isActiveSecond) {
											// onHandlePayment();
											setOpenAmount(true);
										}
									}}
									className='w-[100%] h-[40px] text-[#fff] bg-secondary text-[14px] rounded-sm mt-[70px]'>
									Continue
								</button>
							</div>
							<FaXmark
								onClick={Close}
								className='absolute right-[20px] top-[20px] cursor-pointer'
							/>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Dashboardhome;
