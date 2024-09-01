import React, { useState, useEffect } from "react";
import { FaNairaSign } from "react-icons/fa6";
import im2 from "@/assets/watch2.png";
import { HiShieldCheck } from "react-icons/hi";
import { HiPencil } from "react-icons/hi2";
import { RiCoupon2Line } from "react-icons/ri";
import { GoCheckCircleFill } from "react-icons/go";
import UserForm from "@/components/props/AddressForm";
import { useAppSelector } from "@/services/store";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import {
	useViewAllAddressQuery,
	useUpdateAddressMutation,
	useViewAllCartCustomerQuery,
	useVerifyPayMutation,
	useShippmentAddressMutation,
	useApplyCouponMutation,
} from "@/services/apiSlice";
import { MdModeEdit } from "react-icons/md";
import ShowToast from "@/components/reuse/ShowToast";
import { formatPrice } from "@/helpers";

const Checkout = () => {
	const [showAddress, setShowAddress] = useState(true);
	const [showDet, setShowDet] = useState(true);
	const [load, setLoad] = useState(false);
	const [showCheckOut, setShowCheckout] = useState(false);
	const { data: userCartData } = useViewAllCartCustomerQuery({});

	const { data: addressData } = useViewAllAddressQuery({});
	const [selectedAddressId, setSelectedAddressId] = useState("");
	const [editAddressId, setEditAddressId] = useState("");
	const [addressFormData, setAddressFormData] = useState(null);
	const [actionType, setActionType] = useState("");
	const [addrData, setAddrData] = useState<any>();
	const [isEditing, setIsEditing] = useState(false);
	const [showAllAddresses, setShowAllAddresses] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [couponCode, setCouponCode] = useState("");

	const ToggleModal = () => {
		if (selectedAddressId === "") {
			ShowToast(false, "You have not selected an address");
		} else {
			setShowModal(!showModal);
		}
	};

	const CloseModal = () => {
		setShowModal(false);
	};

	const toggleAddressesVisibility = () => {
		setShowAllAddresses(!showAllAddresses);
	};

	console.log("all addresss", addressData);

	const navigate = useNavigate();
	const [updateAddress] = useUpdateAddressMutation();
	const [verifyPayFn] = useVerifyPayMutation();
	const [shippmentFn] = useShippmentAddressMutation();
	const [applycoupFn] = useApplyCouponMutation();

	const handleAddressSave = async (formData: any) => {
		try {
			await updateAddress({ addressId: editAddressId, addressData: formData });
			setEditAddressId("");
			setAddressFormData(null);
			setShowAddress(true);
			setIsEditing(true);
		} catch (error) {
			console.error("Error updating address:", error);
		}
	};

	const toggleBtn = () => {
		setShowAddress(!showAddress);
		setIsEditing(false);
	};

	useEffect(() => {
		let timer: any;
		if (showModal) {
			timer = setTimeout(() => {
				setShowModal(false);
			}, 10000);
		}
		return () => clearTimeout(timer);
	}, [showModal]);

	useEffect(() => {
		if (addressData?.data?.length > 0) {
			setSelectedAddressId(addressData.data[0].id);
		}
	}, [addressData]);

	const user = useAppSelector((state) => state.persistedReducer.currentUser);
	const cartItems = useAppSelector((state) => state.persistedReducer.cart);
	const addresses = useAppSelector((state) => state.persistedReducer.addresses);
	console.log("addresses", addresses);
	const totalPrice = useAppSelector(
		(state) => state.persistedReducer.totalPrice,
	);

	const handleAddressSelect = (id: any) => {
		setSelectedAddressId(id);
	};

	// console.log("carrrrrrrrrrrrt", cartItems);

	const [showAllItems, setShowAllItems] = useState(false);

	const toggleItemsVisibility = () => {
		setShowAllItems(!showAllItems);
	};

	const togleBtn = () => {
		setShowAddress(!showAddress);
	};
	const togleDet = () => {
		setShowDet(!showDet);
	};

	const [items] = useState([
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

	const handlePaymentCheckout = async () => {
		setLoad(true);
		try {
			// Step 1: Apply coupon if the code is provided
			let applyCouponResponse: any;
			if (couponCode) {
				applyCouponResponse = await applycoupFn({ couponCode });
			}

			// Step 2: Proceed to shipment
			const shipmentResponse: any = await shippmentFn({
				addressId: selectedAddressId,
			});

			// Step 3: Verify payment
			const verifyPaymentResponse: any = await verifyPayFn({
				tx_ref: "1234",
				customer: user.id,
			});

			console.log("verifypp", verifyPaymentResponse);

			// Handle the outcome
			if (
				couponCode &&
				applyCouponResponse?.data?.status &&
				shipmentResponse?.data?.status &&
				verifyPaymentResponse
			) {
				navigate("/payment-success");
				setLoad(false);
			} else if (
				!couponCode &&
				shipmentResponse?.data?.status &&
				verifyPaymentResponse
			) {
				// alert("Payment successful, your delivery will arrive in 30 minutes.");
				navigate("/payment-success");
				setLoad(false);
			} else {
				navigate("/payment-success");
				setLoad(false);
				// alert("Payment successful, your delivery will arrive in 30 minutes.");
			}
		} catch (error) {
			console.error("Error during checkout:", error);
			alert("An error occurred during the checkout process. Please try again.");
		}
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
									className='flex items-center mb-[10px] cursor-pointer'
									onClick={() => {
										setActionType("new");
										togleBtn();
										setIsEditing(true);
									}}>
									<div className='font-semibold mr-[5px] text-primary'>+</div>
									<div className='text-[13px] text-primary'>Add address</div>
								</div>
							</div>

							{addressData?.data?.length >= 1 ? (
								<>
									{addressData?.data
										?.slice(0, showAllAddresses ? addressData?.data?.length : 1)
										.map((address: any) => (
											<div
												key={address.id}
												className='flex cursor-pointer mb-[10px] justify-between'>
												<div className='flex'>
													<div>
														<input
															type='radio'
															value={address.id}
															checked={selectedAddressId === address.id}
															onChange={() => handleAddressSelect(address.id)}
														/>
													</div>
													<div className='flex flex-col ml-[15px]'>
														<div className='font-semibold mb-[5px] '>
															{address.fullname}
														</div>
														<div className='text-[13px] text-[#535353]'>
															{`${address.address}, ${address.city}, ${address.state}`}
														</div>
													</div>
												</div>
												<div
													// onClick={() => handleEditAddress(address.id)}
													onClick={() => {
														setActionType("edit");
														setAddrData(address);
														toggleBtn();
														setIsEditing(true);
													}}
													className='ml-[5px] text-primary font-semibold text-[16px]'>
													<MdModeEdit />
												</div>
											</div>
										))}
									<div className='w-[100%] flex justify-center items-center'>
										{addressData?.data?.length > 1 && (
											<button
												onClick={toggleAddressesVisibility}
												className='w-[110px] mt-[10px] h-[35px] text-[15px] rounded-sm cursor-pointer bg-secondary text-white'>
												{showAllAddresses ? "See Less" : "See More"}
											</button>
										)}
									</div>
								</>
							) : (
								<div>No Address found</div>
							)}

							{showDet ? null : (
								<div className='flex justify-between'>
									{/* <div
										className='flex items-center mb-[10px] cursor-pointer'
										onClick={togleBtn}>
										<div className='font-semibold mr-[5px] text-primary'>+</div>
										<div className='text-[13px] text-primary'>Add address</div>
									</div> */}
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
									<div
										onClick={() => navigate(-1)}
										className='ml-[5px] text-primary font-semibold text-[15px] sm:hidden cursor-pointer'>
										Modify items
									</div>
									<div
										onClick={() => navigate(-1)}
										className='ml-[5px] text-primary font-semibold text-[13px] xl:hidden md:hidden lg:hidden'>
										Edit
									</div>
								</div>
							</div>
							{userCartData?.data?.cart?.items
								?.slice(0, showAllItems ? cartItems.length : 1)
								.map((item: any) => (
									<div
										key={
											item.variant
												? `${item.id}-${item.variant.id}`
												: `${item.id}-default`
										}
										className='flex h-[100px] md:w-[300px] mb-[15px]'>
										<div className='xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[90px] sm:h-[100px] mr-[10px] overflow-hidden mb-[10px] cursor-pointer flex justify-center items-center border-[2px] border-[#0000ff]'>
											<img
												src={
													item?.product?.media
														? item?.product?.media[0]?.url
														: im2
												}
												alt=''
												className='xl:w-[50px] md:w-[30px] lg:w-[50px] sm:w-[50px]'
											/>
										</div>
										<div className='flex flex-col md:h-[80px]'>
											<div className='xl:text-[20px] sm:text-[14px] md:text-[14px] font-semibold mb-[5px]'>
												{item?.product?.name} -{" "}
												{item.variant?.name || "No Variant"}
											</div>
											<div className='xl:text-[13px] md:text-[10px] sm:text-[9px]'>
												Brand{" "}
												<span className='text-primary font-bold'>Apple</span> |
												Similar Product From Apple | 709388838
											</div>
											<div className='mt-[12px] text-[16px] font-[500]'>
												QTY: {item.quantity}
											</div>
											<div className='xl:hidden sm:hidden items-center  md:hidden lg:hidden'>
												<div className='text-[10px]'>
													<FaNairaSign />
												</div>
												<div className='font-semibold text-[13px]'>18,000</div>
											</div>
											<div>
												<div className='w-[100px] sm:hidden xl:hidden lg:hidden md:hidden justify-between items-center bg-[#0000ff57] pl-2 pr-2 rounded-sm'>
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
								))}
							<div className='w-[100%] flex justify-center items-center'>
								{cartItems.length > 1 && (
									<button
										onClick={toggleItemsVisibility}
										className='w-[110px] mt-[10px] h-[35px] text-[15px] rounded-sm cursor-pointer bg-secondary text-white'>
										{showAllItems ? "See Less" : "See More"}
									</button>
								)}
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
							<div className='w-[320px] md:w-[220px] hidden justify-between sm:flex sm:flex-col'>
								<div className='text-[13px] font-semibold'>Apply code</div>
								<div className=''>
									<div
										className='text-[14px] font-semibold border-[2px] md:w-[150px] 
border-primary rounded-[5px] py-[15px] px-[3px] flex items-center '>
										<div className='mr-[5px]'>
											<RiCoupon2Line />
										</div>
										<input
											onChange={(e) => {
												setCouponCode(e.target.value);
											}}
											type='text'
											placeholder='Apply code'
											className='h-[100%] outline-none border-none bg-transparent'
										/>
									</div>
								</div>
							</div>
							{show ? (
								<div
									className='w-[300px] flex justify-center items-center text-white py-[10px] bg-secondary mt-[20px] cursor-pointer'
									onClick={handleSaveSelection}>
									<div>confirmed payment method</div>
								</div>
							) : null}
							{showCheckOut ? null : (
								<div
									onClick={ToggleModal}
									className='w-[100%] sm:flex justify-center items-center text-white py-[10px] bg-secondary mt-[20px] md:hidden xl:hidden lg:hidden'>
									<div>Checkout</div>
								</div>
							)}
						</div>
					</div>
				) : (
					<div className='w-[100%] mr-7 sm:mr-0'>
						<UserForm
							togleBtn={toggleBtn}
							initialFormData={addressFormData} // Pass the address form data
							onSave={handleAddressSave}
							addrData={addrData}
							actionType={actionType}
						/>
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
									<div className='text-[14px] font-semibold'>
										{formatPrice(userCartData?.data?.cart?.totalPrice)}
									</div>
								</div>
							</div>
							<div className='xl:w-[320px] md:w-[220px] sm:w-[100%] flex justify-between mb-[15px]'>
								<div className='text-[13px] font-semibold'>Delivery fee</div>
								<div className='flex justify-center items-center'>
									<div className='text-[9px]'>
										<FaNairaSign />
									</div>
									<div className='text-[14px] font-semibold'>0.00</div>
								</div>
							</div>
							<div className='xl:w-[320px] md:w-[220px] sm:w-[100%] flex justify-between mb-[15px]'>
								<div className='text-[13px] font-semibold'>Total</div>
								<div className='flex justify-center items-center'>
									<div className='text-[9px]'>
										<FaNairaSign />
									</div>
									<div className='text-[14px] font-semibold'>{totalPrice}</div>
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
											onChange={(e) => {
												setCouponCode(e.target.value);
											}}
											type='text'
											placeholder='Apply code'
											className='h-[100%] outline-none border-none bg-transparent'
										/>
									</div>
								</div>
							</div>
						</div>

						<button
							disabled={userCartData?.data?.cartEmpty}
							onClick={ToggleModal}
							className={`w-[100%] xl:flex lg:flex md:flex justify-center items-center text-white sm:hidden py-[10px] rounded-sm mt-[30px] ${
								userCartData?.data?.cartEmpty
									? "bg-gray-400 cursor-not-allowed"
									: isEditing
									? "bg-[#B4B4B4] cursor-not-allowed"
									: "bg-secondary cursor-pointer"
							}`}>
							Checkout
						</button>
					</div>
				</div>
			</div>

			{showModal ? (
				<div className='w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] sm:pl-[20px] sm:pr-[20px] flex justify-center items-center fixed top-0 left-0'>
					<div className='w-[35%] md:w-[55%] sm:w-[100%] relative p-[20px] pt-[40px] pb-[40px] bg-[#fff] rounded-md flex flex-col justify-center items-center'>
						<h3 className='text-[16px] sm:text-[14px] text-center font-[600]'>
							Are you sure you want to CheckOut❓
						</h3>

						<div className='w-[100%] flex sm:flex-wrap items-center mt-[30px] justify-between'>
							<button
								onClick={ToggleModal}
								className={`w-[45%] sm:w-[100%] sm:mb-[10px] xl:flex lg:flex md:flex justify-center items-center text-white bg-secondary cursor-pointer py-[10px] rounded-sm mt-[30px] sm:mt-0`}>
								No
							</button>
							<button
								onClick={handlePaymentCheckout}
								disabled={load}
								className={`w-[45%] sm:w-[100%] sm:mb-[10px] xl:flex lg:flex md:flex 
justify-center items-center text-white bg-secondary cursor-pointer py-[10px] 
rounded-sm mt-[30px] sm:mt-0`}>
								{load ? "loading..." : "Yes"}
							</button>
						</div>
						<IoMdClose
							onClick={CloseModal}
							className='absolute top-[20px] sm:top-[10px] right-[30px] sm:right-[10px] text-[20px]'
						/>
					</div>
				</div>
			) : null}
		</div>
	);
};
export default Checkout;

//
{
	/* <div className='w-[45%] mt-[10px] sm:mt-0 sm:w-[100%]'> */
}
{
	/* <FlutterWavePayment */
}
// amount={totalPrice}
// cartItems={cartItems}
// addressId={selectedAddressId}
// disabled={isEditing}
// />
{
	/* </div>; */
}
