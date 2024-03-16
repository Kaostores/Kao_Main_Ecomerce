import React, { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import im2 from "@/assets/watch2.png";
import { HiShieldCheck } from "react-icons/hi";
import { HiPencil } from "react-icons/hi2";
import { RiCoupon2Line } from "react-icons/ri";
import { GoCheckCircleFill } from "react-icons/go";
import UserForm from "@/components/props/AddressForm";

const Checkout = () => {
	const [showAddress, setShowAddress] = useState(true);
	const [showDet, setShowDet] = useState(true);
	const [showCheckOut, setShowCheckout] = useState(false);
	const togleBtn = () => {
		setShowAddress(!showAddress);
	};
	const togleDet = () => {
		setShowDet(!showDet);
	};

	const [items, setItems] = useState([
		{
			id: 1,
			name: "Pay with USDT",
			balance: "Wallet balance",
			price: "NGN 30,000",
			selected: true,
		},
		{
			id: 2,
			name: "Pay with Cards, Bank Transfer or USSD",
			balance: "You will be directed to the payment gateway",
			selected: false,
		},
		{
			id: 3,
			name: "Pay with wallet",
			balance: "The money will be deducted from your wallet balance",
			selected: false,
		},
	]);

	const [selectedItem, setSelectedItem] = useState(items[0]);
	const [showChangeButton, setShowChangeButton] = useState(false);
	const handleChangeItem = () => {
		setShowChangeButton(false);
	};
	const handleSaveSelection = () => {
		setShowChangeButton(!showChangeButton);
		setShow(!show);
		setShowCheckout(!showCheckOut);
		// Handle saving the selected item here, if needed
	};

	const [show, setShow] = React.useState<boolean>(false);
	const priceBtn = () => {
		setShow(!show);
		setShowChangeButton(!showChangeButton);
		setShowCheckout(!showCheckOut);
	};

	return (
		<div className='w-[100%] mb-20 min-h-[100%] flex xl:justify-center items-center '>
			<div className='w-[100%]  flex xl:justify-between lg:justify-between md:justify-between my-[10px] sm:flex-col-reverse'>
				{showAddress ? (
					<div className='xl:w-[700px] sm:w-[100%]'>
						<div className='flex flex-col py-[5px] border-b-[2px] border-b-primary mb-[20px]'>
							<div className='flex w-[100%] justify-between mb-[20px]'>
								<div className='flex justify-center items-center'>
									<div className='mr-[5px] text-primary text-[17px] sm:hidden'>
										<HiShieldCheck />
									</div>
									<div className='font-semibold sm:text-[13px] xl:text-[16px]'>
										Delivery address
									</div>
								</div>
								<div
									className={`flex justify-center items-center ${
										showDet === true ? "flex" : "hidden"
									}`}>
									<div className='xl:text-[14px] sm:text-[10px]  text-primary'>
										<HiPencil />
									</div>
									<div
										className='ml-[5px] text-primary font-semibold text-[15px] sm:hidden cursor-pointer '
										onClick={togleDet}>
										Edit
									</div>
									<div
										onClick={togleDet}
										className='ml-[5px] text-primary font-semibold text-[13px] xl:hidden md:hidden lg:hidden'>
										Edit
									</div>
								</div>
							</div>
							<div className='flex flex-col mb-[10px]'>
								<div className='font-semibold mb-[5px]'>Temiloluwa Johnson</div>
								<div className='text-[13px] text-[#535353]'>
									No 2 asafa raod ikeja, lagos.
								</div>
							</div>
							{showDet ? null : (
								<div className='flex justify-between'>
									<div
										className='flex items-center mb-[10px] cursor-pointer'
										onClick={togleBtn}>
										<div className='font-semibold mr-[5px] text-primary'>+</div>
										<div className='text-[13px] text-primary'>Add address</div>
									</div>
									<div
										className='xl:w-[300px] lg:w-[300px] sm:w-[200px] md:w-[200px] flex justify-center items-center md:text-[13px] lg:text-[14px ] xl:text-[16px] sm:text-[12px] text-white py-[10px] bg-secondary mt-[20px] cursor-pointer'
										onClick={togleDet}>
										<div>confirmed delivery address</div>
									</div>
								</div>
							)}
						</div>

						<div className='flex flex-col pb-[20px] border-b-[2px] border-b-primary mb-[20px]'>
							<div className='flex w-[100%] justify-between mb-[20px]'>
								<div className='flex justify-center items-center'>
									<div className='mr-[5px] text-primary text-[17px] sm:hidden'>
										<HiShieldCheck />
									</div>
									<div className='font-semibold sm:hidden'>
										Delivery item details
									</div>
									<div className='font-semibold xl:hidden text-[13px] md:hidden'>
										Order Summary
									</div>
								</div>
								<div className='flex justify-center items-center'>
									<div className='xl:text-[14px] sm:text-[10px]  text-primary'>
										<HiPencil />
									</div>
									<div className='ml-[5px] text-primary font-semibold text-[15px] sm:hidden'>
										Modify items
									</div>
									<div className='ml-[5px] text-primary font-semibold text-[13px] xl:hidden md:hidden lg:hidden'>
										Edit
									</div>
								</div>
							</div>
							<div className='flex h-[100px] md:w-[300px]'>
								<div className='xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[90px] sm:h-[100px] mr-[10px] overflow-hidden mb-[10px] cursor-pointer flex justify-center items-center border-[2px] border-[#0000ff]'>
									<img
										src={im2}
										alt=''
										className='xl:w-[50px] md:w-[30px] lg:w-[50px] sm:w-[50px]'
									/>
								</div>
								<div className='flex flex-col md:h-[80px]'>
									<div className='xl:text-[20px] sm:text-[14px] md:text-[14px] font-semibold mb-[5px]'>
										Rolex Yatch-Master II
									</div>
									<div className='xl:text-[13px] md:text-[10px] sm:text-[9px]'>
										Brand <span className='text-primary font-bold'>Apple</span>{" "}
										| Similar Product From Apple | 709388838
									</div>
									<div className='xl:hidden sm:flex items-center  md:hidden lg:hidden'>
										<div className='text-[10px]'>
											<FaNairaSign />
										</div>
										<div className='font-semibold text-[13px]'>18,000</div>
									</div>
									<div>
										<div className='w-[100px] sm:flex xl:hidden lg:hidden md:hidden justify-between items-center bg-[#0000ff57] pl-2 pr-2 rounded-sm'>
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
							</div>
						</div>
						<div
							className={` ${
								show
									? "justify-between items-end xl:flex sm:flex-col"
									: "flex-col"
							}`}>
							<div className='flex flex-col'>
								<div className='flex w-[100%] justify-between mb-[20px]'>
									<div className='flex justify-center items-center'>
										{show ? (
											<div className='mr-[5px] text-[#ddd] xl:text-[17px] sm:hidden'>
												<HiShieldCheck />
											</div>
										) : (
											<div className='mr-[5px] text-primary xl:text-[17px] sm:hidden'>
												<HiShieldCheck />
											</div>
										)}
										<div className='font-semibold sm:text-[13px] xl:text-[16px]'>
											Payment Method
										</div>
									</div>
									{show ? null : (
										<div>
											<div
												className=' flex justify-center items-center cursor-pointer'
												onClick={priceBtn}>
												<div className='text-[14px] sm:text-[13px]  text-primary'>
													<HiPencil />
												</div>
												<div
													className='ml-[5px] text-primary font-semibold text-[15px] sm:hidden'
													onClick={handleChangeItem}>
													Change Method
												</div>
												<div className='ml-[5px] text-primary font-semibold text-[14px] xl:hidden md:hidden lg:hidden sm:text-[13px]'>
													Edit
												</div>
											</div>
										</div>
									)}
								</div>
								{showChangeButton ? (
									<div>
										{items.map((item) => (
											<div
												className='flex items-start mb-[10px] cursor-pointer'
												onClick={() => setSelectedItem(item)}>
												<div
													className={`mr-[5px] ${
														selectedItem === item
															? "text-primary"
															: "text-[#ddd]"
													}`}>
													<GoCheckCircleFill />
												</div>
												<div className='flex flex-col mb-[10px] sm:text-[13px]'>
													<div className='font-semibold mb-[5px]'>
														{item.name}
													</div>
													<div className='text-[13px] text-[#535353] flex'>
														<div className='mr-[5px]'>{item.balance}</div>
														<div className='font-semibold text-black'>
															{item.price}
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								) : null}
								{show ? null : (
									<div className='flex items-start mb-[10px]'>
										<div className='flex flex-col mb-[10px] sm:text-[13px]'>
											<div className='font-semibold mb-[5px]'>
												{selectedItem.name}
											</div>
											<div className='text-[13px] text-[#535353] flex'>
												<div className='mr-[5px]'>{selectedItem.balance}</div>
												<div className='font-semibold text-black'>
													{selectedItem.price}
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
							{show ? (
								<div
									className='w-[300px] flex justify-center items-center text-white py-[10px] bg-secondary mt-[20px] cursor-pointer'
									onClick={handleSaveSelection}>
									<div>confirmed payment method</div>
								</div>
							) : null}
							{showCheckOut ? null : (
								<div className='w-[100%] sm:flex justify-center items-center text-white py-[10px] bg-secondary mt-[20px] md:hidden xl:hidden lg:hidden'>
									<div>Checkout</div>
								</div>
							)}
						</div>
					</div>
				) : (
					<div>
						<UserForm togleBtn={togleBtn} />
					</div>
				)}
				<div
					className={`xl:p-[10px] md:p-[10px] xl:h-[300px] md:h-[300px] sm:mb-[30px] flex flex-col xl:bg-[#F0F3FA] md:bg-[#F0F3FA] sm:bg-white  ${
						showAddress !== true ? "sm:hidden" : ""
					}`}>
					<div className='font-semibold mb-[10px] xl:text-[20px] md:text-[17px]'>
						Order Summary
					</div>
					<div className='flex flex-col'>
						<div>
							<div className='xl:w-[320px] md:w-[220px] sm:w-[100%] flex justify-between mb-[15px]'>
								<div className='text-[13px] font-semibold'>Sub Total</div>
								<div className='flex justify-center items-center'>
									<div className='text-[9px]'>
										<FaNairaSign />
									</div>
									<div className='text-[14px] font-semibold'>1,600,700</div>
								</div>
							</div>
							<div className='xl:w-[320px] md:w-[220px] sm:w-[100%] flex justify-between mb-[15px]'>
								<div className='text-[13px] font-semibold'>Delivery fee</div>
								<div className='flex justify-center items-center'>
									<div className='text-[9px]'>
										<FaNairaSign />
									</div>
									<div className='text-[14px] font-semibold'>3,000</div>
								</div>
							</div>
							<div className='xl:w-[320px] md:w-[220px] sm:w-[100%] flex justify-between mb-[15px]'>
								<div className='text-[13px] font-semibold'>Total</div>
								<div className='flex justify-center items-center'>
									<div className='text-[9px]'>
										<FaNairaSign />
									</div>
									<div className='text-[14px] font-semibold'>1,603,000</div>
								</div>
							</div>
							<div className='w-[320px] md:w-[220px] xl:flex lg:flex md:flex justify-between sm:hidden'>
								<div className='text-[13px] font-semibold'>Apply code</div>
								<div className='flex justify-center items-center'>
									<div className='text-[14px] font-semibold border-[2px] md:w-[150px] border-primary rounded-[5px] py-[15px] px-[3px] flex items-center '>
										<div className='mr-[5px]'>
											<RiCoupon2Line />
										</div>
										<input
											type='text'
											placeholder='Apply code'
											className='h-[100%] outline-none border-none bg-transparent'
										/>
									</div>
								</div>
							</div>
						</div>
						<div className='w-[100%] xl:flex lg:flex md:flex justify-center items-center text-white py-[10px] rounded-sm bg-secondary mt-[20px] sm:hidden'>
							<div>Checkout</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Checkout;
