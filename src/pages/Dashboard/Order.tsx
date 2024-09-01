import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import TrackSteps from "./Subpages/TrackSteps";
import OrderDetails from "./Subpages/OrderDetails";
import Recomended from "./Subpages/Recomended";
import { NavLink, useNavigate } from "react-router-dom";
import {
	useCancelOrderMutation,
	useFetchOrdersQuery,
} from "@/services/apiSlice";
import moment from "moment";
import NoOngoingOrders from "./Subpages/NoOngoingOrders";
import NoCompletedOrders from "./Subpages/NoCompletedOrders";
import NoCancelledOrders from "./Subpages/NoCancelledOrders";
import { formatPrice } from "@/helpers";
import AreYouSure from "@/components/AreYouSure";
import ShowToast from "@/components/reuse/ShowToast";
import LoaderComponent from "@/components/reuse/LoadingComponent";

const Order = () => {
	const [show, setShow] = useState(true);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [view, setView] = useState(true);
	const [track, setTrack] = useState(false);
	const [details, setDetails] = useState(false);
	const [orderDetail, setOrderDetail] = useState<any>();
	const [selectedOrderID, setSelectedOrderID] = useState<any>("");

	const { data: orders, isLoading } = useFetchOrdersQuery({});
	console.log("getting orders", orders);
	const [cancelingOrder, { isLoading: isCancelLoading }] =
		useCancelOrderMutation();

	console.log("selectedOrderID:", selectedOrderID);

	const Navigate = useNavigate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleConfirmAction = async () => {
		const response: any = await cancelingOrder({
			order_uuid: selectedOrderID,
		});
		if (response?.data?.success) {
			ShowToast(true, "Order cancelled successfully");
			// Navigate(-1);
		}
		// Perform the action you want to confirm
		console.log("Confirmed action!", response);
		// Close the modal after the action
		handleCloseModal();
	};

	const orderDetails = () => {
		setDetails(true);
		setTrack(false);
		setView(false);
	};
	const TrackView = (variant: any, order: any) => {
		console.log("ggggg", variant);
		setTrack(true);
		setView(false);
		setDetails(false);
		setOrderDetail(order);
	};
	console.log("Orderdetail", orderDetail);
	const ToggleView = () => {
		setView(true);
		setTrack(false);
		setDetails(false);
	};

	const Toggle1 = () => {
		setShow(true);
		setShow2(false);
		setShow3(false);
	};

	const Toggle2 = () => {
		setShow(false);
		setShow2(true);
		setShow3(false);
	};

	const Toggle3 = () => {
		setShow(false);
		setShow2(false);
		setShow3(true);
	};

	if (isCancelLoading) return <LoaderComponent />;
	return (
		<>
			<AreYouSure
				open={isModalOpen}
				close={handleCloseModal}
				action={handleConfirmAction}
				text='Are you sure you want to Cancel this order?'
			/>
			{view ? (
				<div className='w-[100%] flex flex-col md:items-center sm:items-center'>
					<div className='flex-1 md:w-[100%] sm:w-[100%] sm:items-center flex-col p-[15px] md:p-0 sm:p-0 bg-[#F4F4F4] sm:bg-white md:bg-white ml-[15px] md:ml-0 rounded-[8px] sm:ml-0'>
						<div
							onClick={() => Navigate(-1)}
							className='w-[100%] justify-center items-center hidden md:flex sm:flex sm:mb-[20px]'>
							<div className='w-[90%] md:w-[85%] flex items-center md:mb-[20px]'>
								<div className='text-primary text-[20px] cursor-pointer md:ml-[-4px]'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary ml-[12px] text-[17px] font-[600]'>
									Order
								</h3>
							</div>
						</div>

						<div className='w-[100%] flex justify-center'>
							<div className='w-[90%] md:w-[85%] flex items-center'>
								<div
									onClick={Toggle1}
									className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${
										show
											? "border-b-[4px] border-primary text-primary"
											: "text-iconGray"
									}`}>
									<p className='text-[15px] sm:text-[12px] sm:font-[600]'>
										Ongoing Orders
									</p>
								</div>
								<div
									onClick={Toggle2}
									className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${
										show2
											? "border-b-[4px] border-primary text-primary"
											: "text-iconGray"
									}`}>
									<p className='text-[15px] sm:text-[12px] sm:font-[600]'>
										Completed Orders
									</p>
								</div>
								<div
									onClick={Toggle3}
									className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${
										show3
											? "border-b-[4px] border-primary text-primary"
											: "text-iconGray"
									}`}>
									<p className='text-[15px] sm:text-[12px] sm:font-[600]'>
										Cancelled Orders
									</p>
								</div>
							</div>
						</div>

						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]'></div>

						{show ? (
							<div className='w-[100%] flex justify-center'>
								<div className='w-[100%] sm:w-[90%] md:w-[85%] flex mt-[30px]'>
									<div className='w-[100%] flex flex-col'>
										{isLoading && !orders ? (
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
										) : (
											<>
												{!orders?.data?.some(
													(order: any) => order.orderStatus === "pending",
												) ? (
													<NoOngoingOrders />
												) : (
													orders?.data?.map((order: any) => {
														if (order.orderStatus === "pending") {
															return (
																<div
																	key={order.id}
																	className='w-[100%] flex flex-col'>
																	{order?.items?.map((item: any) => (
																		<div
																			key={item.id}
																			className='flex items-center sm:w-[100%] flex-col'>
																			<div className='flex items-center w-full justify-between  sm:flex-col  sm:border-b'>
																				<NavLink
																					to={`/dashboard/orderdetails/${order.id}`}>
																					<div className='flex'>
																						<div className='w-[90px] h-[90px] flex justify-center items-center border border-primary'>
																							<img
																								src={
																									item?.product?.media[0]?.url
																								}
																								alt=''
																								className='h-[60px]'
																							/>
																						</div>

																						<div className='flex flex-col ml-[15px] sm:flex-1'>
																							<h3 className='text-[15px] font-[600]'>
																								{item?.product?.name}
																							</h3>

																							<div className='flex items-center mt-[12px] sm:w-[100%]  sm:mt-[2px] sm:whitespace-nowrap sm:w-[250px] sm:overflow-hidden'>
																								<p className='text-iconGray text-[13px]'>
																									Brand:
																								</p>
																								<p className='text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]'>
																									<span className='text-primary'>
																										Apple
																									</span>{" "}
																									| Similar Product From Apple |
																									793979398
																								</p>
																							</div>

																							<div className='flex items-center mt-[12px]'>
																								<p className='text-[13px]'>
																									Price:
																								</p>
																								<span className='flex items-center text-[13px] font-[600] ml-[4px]'>
																									NGN
																								</span>
																								<div className='w-[100%] flex items-center sm:justify-between'>
																									<h3 className='text-[15px] ml-[3px] font-[600]'>
																										{formatPrice(
																											item?.price *
																												item?.quantity,
																										)}
																									</h3>
																								</div>
																							</div>
																						</div>
																					</div>
																				</NavLink>

																				<div>
																					<h4
																						onClick={() => {
																							TrackView(item, order);
																							// setOrderStatus(order);
																						}}
																						className='text-primary text-[14px] cursor-pointer font-[600] sm:hidden mb-10'>
																						Track delivery
																					</h4>
																					<div
																						className=' text-[14px] cursor-pointer font-[600]  '
																						onClick={() => {
																							handleOpenModal();
																							setSelectedOrderID(order?.id);

																							console.log("here is it", item);
																						}}>
																						Cancel Order
																					</div>
																				</div>
																			</div>
																			<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[18px] mb-[18px] md:hidden sm:hidden'></div>
																		</div>
																	))}
																</div>
															);
														}
														return null;
													})
												)}
											</>
										)}
									</div>
								</div>
							</div>
						) : null}

						{show2 ? (
							<div className='w-[100%] flex justify-center'>
								<div className='w-[100%] sm:w-[90%] md:w-[85%] flex mt-[30px]'>
									<div className='w-[100%] flex flex-col'>
										{isLoading && !orders ? (
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
										) : (
											<>
												{!orders?.data?.some(
													(order: any) => order.orderStatus === "delivered",
												) ? (
													<NoCompletedOrders />
												) : (
													orders?.data?.map((order: any) => {
														if (order.orderStatus === "delivered") {
															return (
																<div
																	key={order.id}
																	className='w-[100%] flex flex-col'>
																	{order?.items?.map((item: any) => (
																		<div
																			key={item.id}
																			className='flex items-center sm:w-[100%] flex-col'>
																			<div className='flex items-center w-full justify-between'>
																				<NavLink
																					to={`/dashboard/orderdetails/${order.id}`}>
																					<div className='flex'>
																						<div className='w-[90px] h-[90px] flex justify-center items-center border border-primary'>
																							<img
																								src={
																									item?.product?.media[0]?.url
																								}
																								alt=''
																								className='h-[60px]'
																							/>
																						</div>

																						<div className='flex flex-col ml-[15px] sm:flex-1'>
																							<h3 className='text-[15px] font-[600]'>
																								{item?.product?.name}
																							</h3>

																							<div className='flex items-center mt-[12px] sm:w-[100%] sm:flex-wrap'>
																								<p className='text-iconGray text-[13px]'>
																									Brand:
																								</p>
																								<p className='text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]'>
																									<span className='text-primary'>
																										Apple
																									</span>{" "}
																									| Similar Product From Apple |
																									793979398
																								</p>
																							</div>

																							<div className='flex items-center mt-[12px]'>
																								<p className='text-[13px]'>
																									Price:
																								</p>
																								<span className='flex items-center text-[13px] font-[600] ml-[4px]'>
																									NGN
																								</span>
																								<div className='w-[100%] flex items-center sm:justify-between'>
																									<h3 className='text-[15px] ml-[3px] font-[600]'>
																										{formatPrice(
																											item?.price *
																												item?.quantity,
																										)}
																									</h3>
																								</div>
																							</div>
																						</div>
																					</div>
																				</NavLink>
																				<div className='flex-col items-end sm:flex'>
																					<p className='text-primary text-[13px]'>
																						Delivered on
																					</p>
																					<div className='flex items-center text-[14px] text-primary font-[600] sm:text-[12px]'>
																						<h3>02/02/2024</h3>{" "}
																						<h3 className='ml-[5px]'>02:32</h3>
																					</div>
																				</div>
																			</div>
																			<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[18px] mb-[18px] md:hidden sm:hidden'></div>
																		</div>
																	))}
																</div>
															);
														}
														return null;
													})
												)}
											</>
										)}
									</div>
								</div>
							</div>
						) : null}

						{show3 ? (
							<div className='w-[100%] flex justify-center'>
								<div className='w-[100%] sm:w-[90%] md:w-[85%] flex mt-[30px]'>
									<div className='w-[100%] flex flex-col'>
										{isLoading && !orders ? (
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
										) : (
											<>
												{!orders?.data?.some(
													(order: any) => order.orderStatus === "cancelled",
												) ? (
													<NoCancelledOrders />
												) : (
													orders?.data?.map((order: any) => {
														if (order.orderStatus === "cancelled") {
															return (
																<div
																	key={order.id}
																	className='w-[100%] flex flex-col'>
																	{order?.items?.map((item: any) => (
																		<div
																			key={item.id}
																			className='flex items-center sm:w-[100%] flex-col'>
																			<div className='flex items-center w-full justify-between'>
																				<div className='flex'>
																					<div className='w-[90px] h-[90px] flex justify-center items-center border border-primary'>
																						<img
																							src={item?.product?.media[0]?.url}
																							alt=''
																							className='h-[60px]'
																						/>
																					</div>

																					<div className='flex flex-col ml-[15px] sm:flex-1'>
																						<h3 className='text-[15px] font-[600]'>
																							{item?.product?.name}
																						</h3>

																						<div className='flex items-center mt-[12px] sm:w-[100%] sm:flex-wrap'>
																							<p className='text-iconGray text-[13px]'>
																								Brand:
																							</p>
																							<p className='text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]'>
																								<span className='text-primary'>
																									Apple
																								</span>{" "}
																								| Similar Product From Apple |
																								793979398
																							</p>
																						</div>

																						<div className='flex items-center mt-[12px]'>
																							<p className='text-[13px]'>
																								Price:
																							</p>
																							<span className=' items-center text-[13px] font-[600] ml-[4px]'>
																								NGN
																							</span>
																							<div className='w-[100%] flex items-center sm:justify-between'>
																								<h3 className='text-[15px] ml-[3px] font-[600]'>
																									{formatPrice(
																										item?.price *
																											item?.quantity,
																									)}
																								</h3>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div
																					onClick={orderDetails}
																					className='flex-col items-end hidden sm:flex'>
																					<p className='text-primary text-[13px]'>
																						Delivered on
																					</p>
																					<div className='flex items-center text-[14px] text-primary font-[600] sm:text-[12px]'>
																						<h3>02/02/2024</h3>{" "}
																						<h3 className='ml-[5px]'>02:32</h3>
																					</div>
																				</div>
																			</div>
																			<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[18px] mb-[18px] md:hidden sm:hidden'></div>
																		</div>
																	))}
																</div>
															);
														}
														return null;
													})
												)}
											</>
										)}
									</div>
								</div>
							</div>
						) : null}
					</div>

					<div className='w-[90%] md:w-[85%]'>
						<Recomended />
					</div>
				</div>
			) : null}

			{track ? (
				<div className='w-[100%] md:items-center sm:items-center flex flex-col p-[15px] md:p-0 sm:p-0 bg-[#F4F4F4] md:bg-white sm:bg-white ml-[15px] md:ml-0 sm:ml-0 rounded-[8px]'>
					<div className='w-[100%] md:w-[85%] sm:w-[90%] flex items-center md:mt-[15px]'>
						<div
							onClick={ToggleView}
							className='text-primary text-[20px] cursor-pointer ml-[-4px]'>
							<IoIosArrowBack />
						</div>
						<h3 className='text-primary ml-[12px] text-[15px] font-[500]'>
							Track Delivery
						</h3>
					</div>

					<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-[10px]'></div>

					<div className='flex w-[100%] md:w-[85%] sm:w-[90%] justify-start mt-[30px]'>
						<TrackSteps currentStep={orderDetail?.orderStatus} />
						<div className='flex flex-col md:ml-[15px] sm:ml-[15px]'>
							<div className='flex flex-col mb-[35px]'>
								<h3 className='text-[14px] text-primary font-[500]'>
									Order placed
								</h3>
								<p className='text-[11px] text-iconGray'>
									{moment(orderDetail.createdAt).calendar()}
								</p>
							</div>
							<div className='flex flex-col mb-[37px]'>
								<h3 className='text-[14px] text-primary font-[500]'>
									Processing order confirmation
								</h3>
								<p className='text-[11px] text-iconGray'>25th of March 2024</p>
							</div>
							<div className='flex flex-col mb-[37px]'>
								<h3 className='text-[14px] text-primary font-[500]'>
									Shipping
								</h3>
								<p className='text-[11px] text-iconGray'>25th of March 2024</p>
							</div>
							<div className='flex flex-col'>
								<h3 className='text-[14px] text-primary font-[500]'>
									Delivered
								</h3>
								<p className='text-[11px] text-iconGray'>25th of March 2024</p>
							</div>
						</div>
					</div>
					<div className='w-[100%] md:w-[85%] sm:w-[90%]'>
						<Recomended />
					</div>
				</div>
			) : null}

			{details ? (
				<div className='w-[100%] md:items-center sm:items-center flex flex-col p-[15px] md:p-0 sm:p-0 bg-[#F4F4F4] md:bg-white sm:bg-white ml-[15px] md:ml-0 sm:ml-0 rounded-[8px]'>
					<div className='w-[100%] flex flex-col md:items-center sm:items-center p-[15px] md:p-0 sm:p-0'>
						<div
							onClick={ToggleView}
							className='w-[90%] flex items-center md:mt-[20px] md:w-[85%]'>
							<div className='text-primary text-[20px] cursor-pointer ml-[-4px]'>
								<IoIosArrowBack />
							</div>
							<h3 className='text-primary ml-[12px] text-[15px] font-[500] sm:text-[17px]'>
								Order details
							</h3>
						</div>

						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px]'></div>

						<OrderDetails />
					</div>

					<div className='w-[90%] md:w-[85%]'>
						<Recomended />
					</div>
				</div>
			) : null}
		</>
	);
};

export default Order;
