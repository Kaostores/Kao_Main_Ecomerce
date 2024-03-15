import { IoWallet } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import WalletHistoryTable from "./Subpages/WalletHistoryTable";
import { useLocation, useNavigate } from "react-router-dom";
import { FiBriefcase, FiHome } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import Recomended from "./Subpages/Recomended";

const Dashboardhome = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;
  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex-col p-[15px] mb-[60px] flex-1 bg-[#F4F4F4] ml-[15px] rounded-[8px] md:ml-0 sm:hidden">
        <div className="w-[100%] flex items-center mt-[14px] justify-between">
        <div className="flex items-center">
          <div className="text-[#0030AD]"><IoWallet /></div>
          <p className="text-[#0030AD] text-[14px] ml-[5px]">KAO wallet balance:</p>
          <h3 className="text-[#0030AD] ml-[5px] font-[500]">NGN 30,000</h3>
        </div>
        <div>
          <h3 className="text-[#0030AD] underline font-[500]">Top up wallet</h3>
        </div>
      </div>

      <div className="w-[100%] h-[1px] bg-[#757575] mt-[22px]"></div>

      <div className="w-[100%] flex items-center mt-[22px] justify-between">
        <h3 className="font-[500]">Payment History</h3>
        <div className="flex items-center">
          <input type="checkbox" />
          <p className="text-[13px] ml-[10px]">Date</p>
          <div className="cursor-pointer"><IoIosArrowDown /></div>
        </div>
      </div>

      <div className="w-[100%] flex items-center mt-[20px] justify-between">
        <div className="flex items-center">
          <div className="w-[85px] h-[25px] flex justify-center items-center bg-[#fff] text-[12px] rounded-[3px] cursor-pointer">
            All
          </div>
          <div className="w-[65px] h-[25px] flex justify-center items-center bg-[#fff] text-[12px] rounded-[3px] ml-[5px] cursor-pointer">
            Top up
          </div>
          <div className="w-[65px] h-[25px] flex justify-center items-center bg-[#fff] text-[12px] rounded-[3px] ml-[5px] cursor-pointer">
            Payment
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[270px] h-[27px] flex items-center pl-[10px] bg-[white] text-[12px] rounded-sm ml-[5px] pr-[5px]">
            <div className="text-[17px]"><CiSearch /></div>
            <input placeholder="Search by ID" type="text" className="ml-[5px] outline-none flex-1" />
          </div>
          <div className="pl-[10px] pr-[10px] h-[27px] flex justify-center items-center bg-[white] text-[12px] rounded-sm ml-[10px] cursor-pointer">
            <div className="mr-[7px] text-iconGray"><IoFilterOutline /></div>
            Filter
          </div>
          <div className="pl-[10px] pr-[10px] h-[27px] flex justify-center items-center bg-[white] text-[12px] rounded-sm ml-[10px] cursor-pointer">
            <div className="mr-[7px] text-iconGray text-[17px]"><GoSortDesc /></div>
            Sort by
            <div className="text-iconGray ml-[7px]"><IoIosArrowDown /></div>
          </div>
        </div>
      </div>

      <WalletHistoryTable />
      </div>

      <div className="hidden sm:flex w-[100%] flex-col">
        <div className="flex flex-col">
          <h3 className="text-[18px] font-[600]">Hello, Temiloluwa</h3>
          <p className="text-[14px]">temiloluwamorafa@gmail.com</p>
        </div>
        <div className="h-[1px] w-full bg-[#F1F1F1] mt-[20px]"></div>

        <div className="w-[100%] p-[10px] rounded-sm bg-ascentGray mt-[28px] flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary text-[30px]"><IoWallet /></div>
            <p className="text-primary ml-[7px] text-[17px]">Kao wallet balance:</p>
          </div>
          <h3 className="text-[16px] font-[600] text-primary">NGN 36,000</h3>
        </div>

        <div className="w-[100%] flex items-center justify-between mt-[20px] cursor-pointer">
          <p className="text-primary text-[16px]">Top up wallet</p>
          <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        <div className="h-[1px] w-full bg-[#F1F1F1] mt-[20px]"></div>

        <div className="w-[100%] flex flex-col mt-[20px]">
          <div onClick={() => {navigate("/dashboard/account");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/dashboard/account" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
                  }`}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <FiHome />
            </div>
            <div className='font-medium  text-[15px] ml-[15px] '>Account</div>
           </div>
           <div className="text-iconGray text-[20px]"><IoIosArrowForward /></div>
          </div>

          <div onClick={() => {navigate("/dashboard/order");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/dashboard/order" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
                  }`}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <FiBriefcase />
            </div>
            <div className='font-medium  text-[15px] ml-[15px] '>Order</div>
           </div>
           <div className="text-iconGray text-[20px]"><IoIosArrowForward /></div>
          </div>

          <div onClick={() => {navigate("/dashboard/reviews");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/dashboard/reviews" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
                  }`}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <FaRegStar />
            </div>
            <div className='font-medium  text-[15px] ml-[15px] '>My reviews</div>
           </div>
           <div className="text-iconGray text-[20px]"><IoIosArrowForward /></div>
          </div>

          <div onClick={() => {navigate("/dashboard/items");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/dashboard/items" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
                  }`}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <IoIosHeartEmpty />
            </div>
            <div className='font-medium  text-[15px] ml-[15px] '>Saved items</div>
           </div>
           <div className="text-iconGray text-[20px]"><IoIosArrowForward /></div>
          </div>

          <div onClick={() => {navigate("/dashboard/voucher");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/dashboard/voucher" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
                  }`}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <RiCouponLine />
            </div>
            <div className='font-medium  text-[15px] ml-[15px] '>Voucher</div>
           </div>
           <div className="text-iconGray text-[20px]"><IoIosArrowForward /></div>
          </div>

          <div onClick={() => {navigate("/dashboard/support");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/dashboard/support" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
                  }`}>
           <div className="flex items-center">
             <div className='text-[20px]  font-bold'>
              <MdOutlineSupportAgent />
            </div>
            <div className='font-medium  text-[15px] ml-[15px] '>Help and Support</div>
           </div>
           <div className="text-iconGray text-[20px]"><IoIosArrowForward /></div>
          </div>
        </div>

        <Recomended />
      </div>
    </div>
  )
}

export default Dashboardhome