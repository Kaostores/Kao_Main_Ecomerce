import { useState } from "react";
import pic from "@/assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import SearchInput from "../commons/SearchInput";
import { AiOutlineMenu } from "react-icons/ai";
import MegaMenu from "../commons/MegaMenu";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import { Link, useNavigate } from "react-router-dom";
// import ShowToast from "../reuse/ShowToast";
// import { useAppSelector } from "@/services/store";
import { useSelector } from "react-redux";
import {
	useGetAllAdminCategoryQuery,
	useViewAllCartCustomerQuery,
} from "@/services/apiSlice";
import useUpdateUrlParams from "../SearchRoute";
import { useAppSelector } from "@/services/store";
import CurrencyExchange from "../currency/CurrencyExchange";
const Header = () => {
	const User = useSelector((state: any) => state?.persistedReducer.currentUser);
	const updateUrlParams = useUpdateUrlParams();
	const cart = useAppSelector((state) => state.persistedReducer.cart);

	// const dispatch = useDispatch();

	const show = () => {
		// ShowToast(true, "true");
	};
	const [showMegaMenu, setShowMegaMenu] = useState(false);
	const navigate = useNavigate();
	const [open, setOpen] = useState({
		state: false,
		type: "login",
	});

	const onClose = () => {
		setOpen({
			type: "",
			state: false,
		});
	};

	const onOpenRegister = () => {
		setOpen({
			type: "register",
			state: true,
		});
	};

	const onOpenLogin = () => {
		setOpen({
			type: "login",
			state: true,
		});
	};

	const {
		data: catData,
		isLoading: isCatLoading,
		isFetching,
	} = useGetAllAdminCategoryQuery({});
	const currentUser = useAppSelector(
		(state) => state.persistedReducer.currentUser,
	);

	console.log('this is current', currentUser)

	const isAuthenticated =
		currentUser && Object.keys(currentUser || {}).length !== 0;
	
	const { data: userCartData } = useViewAllCartCustomerQuery(undefined, {
		skip: !isAuthenticated,
	});

	const cartItems = isAuthenticated
		? userCartData?.data?.cart?.items || []
		: cart;

	// if (showMegaMenu) return <MegaMenu />;
	return (
		<div
			style={{
				zIndex: 999,
			}}
			className='w-[100%] bg-white flex flex-col justify-center items-center sticky top-0'>
			<Register open={open} onClose={onClose} onOpenLogin={onOpenLogin} />
			<Login open={open} onClose={onClose} onOpenRegister={onOpenRegister} />
			{showMegaMenu ? (
				<MegaMenu
					setShowMegaMenu={setShowMegaMenu}
					showMegaMenu={showMegaMenu}
				/>
			) : null}
			<div className='w-[85%] sm:w-[90%] flex items-center gap-5 sm:justify-between  '>
				<div className='flex items-center'>
					<div
						onClick={() => setShowMegaMenu(!showMegaMenu)}
						className='text-[30px] hidden sm:block text-primary'>
						<AiOutlineMenu />
					</div>
					<Link to='/'>
						<img onClick={show} src={pic} className='w-[70px]' alt='KAO logo' />
					</Link>
				</div>

				<div className='sm:hidden flex-1'>
					<SearchInput />
				</div>

				<div
					onClick={() => {
						navigate("/help&support");
					}}
					className='flex gap-2 sm:hidden cursor-pointer'>
					<div className='h-[30px] w-[30px] rounded-[50%] bg-ascentGray flex justify-center items-center text-primary'>
						?
					</div>
					<div className='flex items-center text-[14px] '>
						Help <MdKeyboardArrowDown />{" "}
					</div>
				</div>
				<Link to='/cart'>
					<div className='relative inline-block sm:hidden'>
						<div className=' text-[20px] p-2 mt-1 rounded-full focus:outline-none text-primary'>
							<MdOutlineShoppingCart />
						</div>

						<span className='absolute top-3 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
							{cartItems?.length || 0}
						</span>
					</div>
				</Link>

				{User?.id ? (
					<>
						<div className='flex items-center cursor-pointer sm:hidden'>
							<div className='text-primary'>
								<FaRegUser />
							</div>
							<Link to='/dashboard'>
								<div className='text-[14px]  max-w-[70px] overflow-hidden ml-2 sm:hidden'>
									<div className='flex items-start'>
										<h2 className='mr-[8px]  max-w-[70px] overflow-hidden'>
											{User.firstname}
										</h2>
										{/* <h2>{User.lastname}</h2> */}
									</div>
								</div>
							</Link>
						</div>
					</>
				) : (
					<>
						<div
							onClick={() => {
								onOpenLogin();
							}}
							className='flex items-center cursor-pointer sm:hidden'>
							<div className='text-primary'>
								<FaRegUser />
							</div>
							<div className='text-[14px] ml-2 sm:hidden'>Sign in/Sign up</div>
						</div>
					</>
				)}

				<div className='hidden sm:flex gap-3 items-center'>
					{User?.id ? (
						<>
							<div className='hidden items-center cursor-pointer sm:flex'>
								<div className='text-primary'>
									<FaRegUser />
								</div>
								<Link to='/dashboard'>
									<div className='text-[14px] ml-2  max-w-[70px] overflow-hidden sm:flex hidden'>
										<div className='flex items-start'>
											<h2 className='mr-[8px]  max-w-[70px] overflow-ellipsis '>
												{User.firstname}
											</h2>
											{/* <h2>{User.lastname}</h2> */}
										</div>
									</div>
								</Link>
							</div>
						</>
					) : (
						<>
							<div
								onClick={() => {
									onOpenLogin();
								}}
								className=' items-center cursor-pointer sm:flex hidden'>
								<div className='text-primary'>
									<FaRegUser />
								</div>
								<div className='text-[12px] ml-2 sm:flex whitespace-nowrap'>
									Sign in/Sign up
								</div>
							</div>
						</>
					)}
					<Link to='/cart'>
						<div className='relative inline-block  '>
							<div className=' text-[20px] p-2 mt-2 rounded-full focus:outline-none text-primary' aria-label='View cart'>
								<MdOutlineShoppingCart />
							</div>

							<span className='absolute top-4 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
								{cartItems?.length || 0}
							</span>
						</div>
					</Link>
				</div>
				<CurrencyExchange />
			</div>
			<div className='hidden sm:flex flex-1  w-[90%] sm:mb-3'>
				<SearchInput />
			</div>
			{/* Promo GIF banner similar to Jumia */}	
		
			<div className='bg-primary sm:hidden flex justify-center items-center text-white w-[100%] h-[45px]'>
				<div className='w-[85%] text-[14px] md:text-[7px] whitespace-nowrap  h-[100%] flex gap-10 items-center'>
					<div
						onClick={() => setShowMegaMenu(!showMegaMenu)}
						className='flex gap-2 items-center font-bold cursor-pointer'>
						<div className=''>
							<AiOutlineMenu />
						</div>
						Browser Categories
					</div>

					{isCatLoading || isFetching ? (
						<></>
					) : (
						<>
							{catData?.data?.length > 0 ? (
								catData.data?.slice(0, 6)?.map((props: any, index: number) => (
									<div
										key={index}
										onClick={() => {
											updateUrlParams({ category_id: props?.id });
											// navigate("/search");
										}}
										className='text-lightGray cursor-pointer uppercase'>
										{props?.name}
									</div>
								))
							) : (
								<div className='space-y-4'>
									<div className='bg-gray-300 h-4 w-full rounded animate-pulse'></div>
									<div className='bg-gray-300 h-4 w-full rounded animate-pulse'></div>
									<div className='bg-gray-300 h-4 w-full rounded animate-pulse'></div>
								</div>
							)}
						</>
					)}
					<div>{/* <CountrySelector /> */}</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
