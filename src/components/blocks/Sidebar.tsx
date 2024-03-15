import { useLocation, useNavigate } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";
import { FiBriefcase, FiHome } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar, FaRegBell } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrLogout } from "react-icons/gr";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;
  return (
    <div className="w-[25%] h-[90vh] bg-[#F4F4F4] rounded-[8px] flex-col overflow-hidden relative sm:hidden">
        <div
			onClick={() => {
				navigate("/dashboard");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<IoWalletOutline />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Wallet</div>
		  </div>

        <div
			onClick={() => {
				navigate("/dashboard/account");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/account" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<FiHome />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Account</div>
		</div>
		
        <div
			onClick={() => {
				navigate("/dashboard/order");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/order" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<FiBriefcase />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Order</div>
		</div>
		
        <div
			onClick={() => {
				navigate("/dashboard/reviews");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/reviews" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<FaRegStar />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>My reviews</div>
		</div>
		
        <div
			onClick={() => {
				navigate("/dashboard/items");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/items" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<IoIosHeartEmpty />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Saved items</div>
		</div>
		
        <div
			onClick={() => {
				navigate("/dashboard/voucher");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/voucher" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<RiCouponLine />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Voucher</div>
		</div>
		
        <div
			onClick={() => {
				navigate("/dashboard/inbox");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/inbox" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<FaRegBell />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Inbox</div>
		</div>
		
        <div
			onClick={() => {
				navigate("/dashboard/support");
			}}
			className={`w-full min-h-[45px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
             ${
				active === "/dashboard/support" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"
			}
             }
             `}>
			<div className='text-[20px]  font-bold'>
				<MdOutlineSupportAgent />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] '>Help and Support</div>
		</div>
		
        <div className="flex items-center pl-[20px] absolute bottom-[40px]">
			<div className='text-[20px] text-[#DA0000]  font-bold'>
				<GrLogout />
			</div>
			<div className='font-medium  text-[15px] ml-[20px] text-[#DA0000]'>Logout</div>
		</div>
    </div>
  )
}

export default Sidebar