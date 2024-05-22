import megaData from "@/components/json/MegaMenu.json";
import pic from "@/assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MegaMenu = ({ setShowMegaMenu }: any) => {

	const navigate = useNavigate()

	return (
		<div
			onClick={() => setShowMegaMenu(false)}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				background: "rgba(0,0,0,0.6)",
				display: "flex",
				justifyContent: "center",
				// alignItems: "center",
				zIndex: 99999,
			}}>
			<div className='w-[85%] h-[90vh] sm:w-[100%] sm:h-[100%] overflow-y-scroll  bg-white grid grid-cols-4 justify-center  mt-5 sm:mt-0 p-4 rounded-sm pb-5 sm:grid-cols-1'>
				<div className='hidden sm:flex w-[100%]  items-center gap-5 sm:justify-between mb-3 '>
					<div className='flex items-center'>
						<div
							onClick={() => setShowMegaMenu(false)}
							className='text-[30px] text-primary '>
							<MdOutlineClear />
						</div>
						<img src={pic} className='w-[70px]' />
					</div>

					<div className='flex gap-2 sm:hidden'>
						<div className='h-[30px] w-[30px] rounded-[50%] bg-ascentGray flex justify-center items-center text-primary'>
							?
						</div>
						<div className='flex items-center text-[14px] '>
							Help <MdKeyboardArrowDown />{" "}
						</div>
					</div>
					<div className='relative inline-block sm:hidden'>
						<div className=' text-[20px] p-2 rounded-full focus:outline-none text-primary'>
							<MdOutlineShoppingCart />
						</div>
						<span className='absolute top-2 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
							0
						</span>
					</div>
					<div className='flex items-center cursor-pointer sm:hidden'>
						<div className='text-primary'>
							<FaRegUser />
						</div>
						<div className='text-[14px] ml-2 sm:hidden'>Sign in/Sign up</div>
					</div>
					<div className='hidden sm:flex gap-3 items-center'>
						<div className='text-primary'>
							<FaRegUser />
						</div>
						<div className='relative inline-block '>
							<div className=' text-[20px] p-2 rounded-full focus:outline-none text-primary'>
								<MdOutlineShoppingCart />
							</div>
							<span className='absolute top-2 right-2 -mt-1 -mr-1 bg-secondary text-white w-3 h-3 flex items-center justify-center rounded-full text-[10px]'>
								0
							</span>
						</div>
					</div>
				</div>
				{megaData?.map((props, i) => (
					<div key={i} className='text-[15px] md:text-[13px]'>
						<div className='font-bold mb-2'>{props?.title}</div>
						{props?.sub?.map((el) => (
							<div onClick={() => {
							navigate("/search");
						}} className='mb-3 hover:underline transition ease-in-out delay-150 cursor-pointer'>
								{el?.name}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default MegaMenu;
