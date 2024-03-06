import { useLocation, useNavigate } from "react-router-dom";
import { IoWalletOutline } from "react-icons/io5";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;
  return (
    <div className="w-[25%] h-[80vh] bg-[#F4F4F4] rounded-[8px] flex-col overflow-hidden">
        <div
			onClick={() => {
				navigate("/dashboard");
			}}
			className={`w-full min-h-[55px] flex justify-start  items-center pl-[20px] mb-[5px] cursor-pointer 
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
    </div>
  )
}

export default Sidebar