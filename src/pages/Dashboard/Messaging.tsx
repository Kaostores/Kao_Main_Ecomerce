import {
	useFetchMessagesQuery,
	useFetchOrdersQuery,
	usePostMessagesMutation,
} from "@/services/apiSlice";

import { useEffect, useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";
// import axios from "axios";
import io from "socket.io-client";
import ShowToast from "@/components/reuse/ShowToast";
import { ImUsers } from "react-icons/im";

const Messaging = () => {
	const cookies = new Cookies();
	const tokenValue = cookies.get("Kao_cookie_user") || "";
	const [mobileShow, setMobileShow] = useState(false);
	const [selectedChat, setSelectedChat] = useState<any>();
	const user = useSelector(
		(state: any) => state?.persistedReducer?.currentUser,
	);

	const url = "https://kaostores.onrender.com";

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const { data: messageData } = useFetchMessagesQuery({
		vendor_uuid: selectedChat?.store?.vendor,
	});
	const { data: orders } = useFetchOrdersQuery({});
	const [message, setMessage] = useState("");
	const [addMessage, { isLoading: loadingChat }] = usePostMessagesMutation();
	//
	const postMessage = async () => {
		const response: any = await addMessage({
			store_uuid: selectedChat?.store?.id,
			to: selectedChat?.store?.vendor,
			message: message,
		});
		if (response?.success) {
			setMessage("");
		}

		setMessage("");
	};

	const [, setMessages] = useState<any>([]);

	const socket = io(url, {
		query: { token: tokenValue },
	});

	useEffect(() => {
		socket.on("new-message", (msg) => {
			setMessages((prevMessages: any) => [...prevMessages, msg]);
			ShowToast(true, "New Message");
		});

		return () => {
			socket.off("new-message");
		};
	}, []);

	const sendMessage = () => {
		socket.emit("message", {
			storeId: selectedChat?.store?.id,
			to: selectedChat?.store?.vendor,
			message: message,
		});
	};

	// useEffect(() => {
	// fetchChat();
	//
	// }, []);

	// Update isMobile state on window resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
			// Reset mobileShow when not in mobile view
			if (window.innerWidth > 768) {
				setMobileShow(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleMobileShow = () => {
		if (isMobile) {
			setMobileShow(!mobileShow);
		}
	};

	return (
		<div className='flex h-screen w-[100%] ml-[15px] bg-[#E6E6E6] sm:ml-0 md:ml-0  overflow-hidden'>
			<div
				className={`w-[30%] sm:w-full  ${
					isMobile && mobileShow ? "hidden" : "block"
				}    bg-white border-r border-gray-300 `}>
				{/* header */}
				<header className='p-4 border-b border-gray-300 flex justify-between items-center bg-primary text-white '>
					<h1 className='text-2xl font-semibold font-poppins'>KAO Chat</h1>
					<div className='relative'>
						<button id='menuButton' className='focus:outline-none'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5 text-gray-100'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
								<path d='M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z' />
							</svg>
						</button>

						<div
							id='menuDropdown'
							className='absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden'>
							<ul className='py-2 px-3'>
								<li>
									<a
										href='#'
										className='block px-4 py-2 text-gray-800 hover:text-gray-400'>
										Option 1
									</a>
								</li>
								<li>
									<a
										href='#'
										className='block px-4 py-2 text-gray-800 hover:text-gray-400'>
										Option 2
									</a>
								</li>
							</ul>
						</div>
					</div>
				</header>
				{/* Chats */}

				{orders?.data?.length > 0 ? (
					<div
						className={`overflow-y-auto h-screen ${
							mobileShow ? "hidden" : ""
						} p-3 mb-9 pb-20 sms:w-full`}>
						{Array.from(
							new Map(
								orders?.data.map((order: any) => [order.store.name, order]),
							).values(),
						).map((props: any) => (
							<div key={props.id}>
								<div
									onClick={() => {
										toggleMobileShow();
										setSelectedChat(props);
									}}
									className={`flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md ${
										selectedChat?.store?.id === props?.store?.id
											? "bg-gray-100"
											: ""
									}`}>
									<div className='w-12 h-12 bg-gray-300 rounded-full mr-3'>
										<img
											src={`https://placehold.co/200x/DE801C/ffffff.svg?text=${props?.store?.name?.charAt(
												0,
											)}&font=Lato`}
											alt='User Avatar'
											className='w-12 h-12 rounded-full'
										/>
									</div>
									<div className='flex-1'>
										<h2 className='text-lg font-semibold'>
											{props?.store?.name}
										</h2>
										<p className='text-gray-600'>Hoorayy!!</p>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className='h-full flex mt-10 sm:justify-center items-center flex-col sm:h-[200px]'>
						<span className='text-[50px] mb-2'>
							<ImUsers />
						</span>
						<p className='text-lg font-semibold text-center'>
							You currently have no users.
						</p>
						<p className='text-gray-600 text-center'>
							Please checkout to start chatting with your vendor.
						</p>
					</div>
				)}
			</div>
			{/* messages */}
			<div
				className={`flex-1 relative   ${
					isMobile && !mobileShow ? "hidden" : "block"
				}  `}>
				{/* messaging */}

				{selectedChat?.store && (
					<header className='bg-white p-4 text-gray-700 border-b flex gap-3 items-center'>
						<span
							onClick={toggleMobileShow}
							className='text-bold hidden text-[25px] sm:block md:block'>
							<IoReturnUpBack />
						</span>{" "}
						<h1 className='text-2xl font-semibold'>
							{selectedChat?.store?.name}
						</h1>
					</header>
				)}

				{selectedChat?.store ? (
					<div className='h-screen overflow-y-auto flex-1 p-4 pb-36'>
						{messageData?.data?.messages?.map((props: any) =>
							props?.isMine ? (
								<div className='flex justify-end mb-4 cursor-pointer'>
									<div className='flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3'>
										<p>{props?.message}</p>
									</div>
									<div className='w-9 h-9 rounded-full flex items-center justify-center ml-2'>
										<img
											src={`https://placehold.co/200x/b7a8ff/ffffff.svg?text=${user?.firstname?.charAt(
												0,
											)}&font=Lato`}
											alt='My Avatar'
											className='w-8 h-8 rounded-full'
										/>
									</div>
								</div>
							) : (
								<div className='flex mb-4 cursor-pointer'>
									<div className='w-9 h-9 rounded-full flex items-center justify-center mr-2'>
										<img
											src={`https://placehold.co/200x/DE801C/ffffff.svg?text=${selectedChat?.store?.name?.charAt(
												0,
											)}&font=Lato`}
											alt='User Avatar'
											className='w-8 h-8 rounded-full'
										/>
									</div>
									<div className='flex max-w-96 bg-white rounded-lg p-3 gap-3'>
										<p className='text-gray-700'>{props?.message}</p>
									</div>
								</div>
							),
						)}
					</div>
				) : (
					<div className=' h-full flex justify-center items-center flex-col'>
						<span className='text-[50px] mb-2'>
							<FaRocketchat />
						</span>
						Click on the User to start Conversation
					</div>
				)}

				{selectedChat?.store && (
					<footer className='bg-white border-t border-gray-300 p-4 absolute bottom-0 w-full sm:w-full md:w-full'>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								postMessage();
								sendMessage();
							}}
							className='flex items-center '>
							<textarea
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
								required
								placeholder='Type a message...'
								className='w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500 h-[45px] resize-none'
							/>
							{loadingChat ? (
								<button
									disabled
									className='bg-indigo-500 text-white px-4 py-2 rounded-md ml-2'>
									Loading...
								</button>
							) : (
								<button className='bg-indigo-500 text-white px-4 py-2 rounded-md ml-2'>
									Send
								</button>
							)}
						</form>
					</footer>
				)}
			</div>
		</div>
	);
};

export default Messaging;
