import pic from "@/assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import SearchInput from "../commons/SearchInput";
import { AiOutlineMenu } from "react-icons/ai";

const Dashboardhead = () => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
			<div className='w-[85%] sm:w-[90%] flex items-center gap-5 sm:justify-between  '>
				<img src={pic} className='w-[70px]' />

				<div className='sm:hidden flex-1'>
					<SearchInput />
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
			<div className='hidden sm:flex flex-1  w-[90%] sm:mb-3'>
				<SearchInput />
			</div>
			<div className='bg-primary sm:hidden flex justify-center items-center text-white w-[100%] h-[45px]'>
				<h3>FREE delivery for orders above KAO 40,000</h3>
			</div>
		</div>
  )
}

export default Dashboardhead