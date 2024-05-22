import React, { useState } from "react";
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
import ShowToast from "../reuse/ShowToast";
import { useAppSelector } from "@/services/store";
import { useDispatch } from "react-redux";

const Header = () => {
	const User = useAppSelector((state) => state.persistedReducer.currentUser);

	console.log('thjis the user', User);
	const dispatch = useDispatch();

	const readCartQuantity = useAppSelector(
		(state: any) => state.persistedReducer.totalQuantity,
	);

	const show = () => {
		ShowToast(true, "true");
	};
	const [showMegaMenu, setShowMegaMenu] = useState(false);
	const navigate = useNavigate();
	const [open, setOpen] = useState({
		state: false,
		type: "register",
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

	// if (showMegaMenu) return <MegaMenu />;
	return (
		<div className='w-[100%] flex flex-col justify-center items-center'>
			<Register open={open} onClose={onClose} onOpenLogin={onOpenLogin} />
			<Login open={open} onClose={onClose} onOpenRegister={onOpenRegister} />
			{showMegaMenu ? <MegaMenu setShowMegaMenu={setShowMegaMenu} /> : null}
			<div className='w-[85%] sm:w-[90%] flex items-center gap-5 sm:justify-between  '>
				<div className='flex items-center'>
					<div
						onClick={() => setShowMegaMenu(!showMegaMenu)}
						className='text-[30px] hidden sm:block text-primary'>
						<AiOutlineMenu />
					</div>
					<Link to='/'>
						<img onClick={show} src={pic} className='w-[70px]' />
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
						<div className=' text-[20px] p-2 rounded-full focus:outline-none text-primary'>
							<MdOutlineShoppingCart />
						</div>

						<span className='absolute top-2 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
							{readCartQuantity}
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
								<div className='text-[14px] ml-2 sm:hidden'>
									<div className='flex items-start'>
										<h2 className='mr-[8px]'>{User.firstname}</h2>
										<h2>{User.lastname}</h2>
									</div>
								</div>
							</Link>
						</div>
					</>
				) : (
					<>
						<div
							onClick={() => {
								onOpenRegister();
								console.log(open);
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
					<div onClick={onOpenRegister} className='text-primary -mt-2'>
						<FaRegUser />
					</div>
					<Link to='/cart'>
						<div className='relative inline-block '>
							<div className=' text-[20px] p-2 rounded-full focus:outline-none text-primary'>
								<MdOutlineShoppingCart />
							</div>

							<span className='absolute top-2 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
								{readCartQuantity}
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className='hidden sm:flex flex-1  w-[90%] sm:mb-3'>
				<SearchInput />
			</div>
			<div className='bg-primary sm:hidden flex justify-center items-center text-white w-[100%] h-[45px]'>
				<div className='w-[85%] text-[14px] md:text-[7px]  h-[100%] flex gap-10 items-center'>
					<div
						onClick={() => setShowMegaMenu(!showMegaMenu)}
						className='flex gap-2 items-center font-bold cursor-pointer'>
						<div className=''>
							<AiOutlineMenu />
						</div>
						Browser Categories
					</div>
					<div
						onClick={() => {
							navigate("/search");
						}}
						className='text-lightGray cursor-pointer'>
						Computer and Accessories
					</div>
					<div
						onClick={() => {
							navigate("/search");
						}}
						className='text-lightGray cursor-pointer'>
						Phones and Tablets
					</div>
					<div
						onClick={() => {
							navigate("/search");
						}}
						className='text-lightGray cursor-pointer'>
						Electronics
					</div>
					<div
						onClick={() => {
							navigate("/search");
						}}
						className='text-lightGray cursor-pointer'>
						Baby kits
					</div>
					<div
						onClick={() => {
							navigate("/search");
						}}
						className='text-lightGray cursor-pointer'>
						Gaming
					</div>
					<div
						onClick={() => {
							navigate("/search");
						}}
						className='text-lightGray cursor-pointer'>
						Groceries
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
