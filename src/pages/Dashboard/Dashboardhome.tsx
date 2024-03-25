import { IoWallet } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import WalletHistoryTable from "./Subpages/WalletHistoryTable";
import { useLocation, useNavigate } from "react-router-dom";
import { FiBriefcase, FiHome } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import Recomended from "./Subpages/Recomended";
import { useState } from "react"
import { FaXmark } from "react-icons/fa6";

const Dashboardhome = () => {
  const location = useLocation();
    const navigate = useNavigate();
    const active = location?.pathname;

  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [isActiveFirst, setIsActiveFirst] = useState(true);
  const [isActiveSecond, setIsActiveSecond] = useState(false);

  const handleClickFirst = () => {
    setIsActiveFirst(true);
    setIsActiveSecond(false);
  };

  const handleClickSecond = () => {
    setIsActiveFirst(false);
    setIsActiveSecond(true);
  };

    const Toggle = () => {
      setShow(true)
    }
    const Toggle2 = () => {
      setShow2(true)
    }
    
    const Close = () => {
      setShow(false)
      setShow2(false)
    }
  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex-col p-[15px] mb-[60px] flex-1 bg-[#F4F4F4] ml-[15px] rounded-[8px] md:ml-0 md:hidden sm:hidden">
        <div className="w-[100%] flex items-center mt-[14px] justify-between">
        <div className="flex items-center">
          <div className="text-[#0030AD]"><IoWallet /></div>
          <p className="text-[#0030AD] text-[14px] ml-[5px]">KAO wallet balance:</p>
          <h3 className="text-[#0030AD] ml-[5px] font-[500]">NGN 30,000</h3>
        </div>
        <div>
          <h3 onClick={Toggle} className="text-[#0030AD] underline font-[500] cursor-pointer">Top up wallet</h3>
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

      

      <WalletHistoryTable />

      {show ? (
        <div className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-8 flex justify-center items-center z-10 transition-all duration-350 ease-in-out">
          <div className="w-[500px] p-[20px] pt-[55px] pb-[55px] flex bg-[#fff] rounded-md flex-col justify-center items-center relative">
            <h3 className="text-[18px] font-[500]">Top up with</h3>
            <div className="w-[80%] mt-[40px] flex flex-col">
              <div className="flex mb-[35px]">
                <div>
                  <div onClick={handleClickFirst} className={`w-[15px] h-[15px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer ${isActiveFirst ? 'bg-primary' : 'bg-white border border-iconGray text-iconGray'}`}>
                    <IoCheckmarkSharp className="text-[10px]"/>
                  </div>
                </div>
              <div className="flex flex-col ml-[15px]">
                  <h3 className="text-[16px] mt-[-5px]">Top up with USDT</h3>
                  <p className="text-[13px] text-iconGray mt-[3px]">Your balance: 30 NGN</p>
              </div>
              </div>
              <div className="flex ">
                <div>
                  <div onClick={handleClickSecond} className={`w-[15px] h-[15px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer ${isActiveSecond ? 'bg-primary' : 'bg-white border border-iconGray text-iconGray'}`}>
                    <IoCheckmarkSharp className="text-[10px]"/>
                  </div>
                </div>
              <div className="flex flex-col ml-[15px]">
                  <h3 className="text-[16px] mt-[-5px]">Top up with Cards, Bank Transfer or USSD</h3>
                  <p className="text-[13px] text-iconGray mt-[3px]">You will be directed to the payment gateway </p>
              </div>
              </div>
              <button className="w-[100%] h-[40px] text-[#fff] bg-secondary text-[14px] rounded-sm mt-[70px]">Continue</button>
            </div>
            <FaXmark onClick={Close} className="absolute right-[20px] top-[20px] cursor-pointer"/>
          </div>
        </div>
      ) : null}
      </div>

      <div className="hidden md:flex sm:flex w-[100%] flex-col md:items-center sm:items-center relative">
        <div className="flex flex-col md:w-[85%] sm:w-[90%]">
          <h3 className="text-[18px] font-[600]">Hello, Temiloluwa</h3>
          <p className="text-[14px]">temiloluwamorafa@gmail.com</p>
        </div>
        <div className="h-[1px] w-full bg-[#F1F1F1] mt-[20px]"></div>

        <div className="w-[100%] md:w-[85%] sm:w-[90%] p-[10px] rounded-sm bg-ascentGray mt-[28px] flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-primary text-[30px]"><IoWallet /></div>
            <p className="text-primary ml-[7px] text-[17px]">Kao wallet balance:</p>
          </div>
          <h3 className="text-[16px] font-[600] text-primary">NGN 36,000</h3>
        </div>

        <div onClick={Toggle2} className="w-[100%] md:w-[85%] sm:w-[90%] flex items-center justify-between mt-[20px] cursor-pointer">
          <p className="text-primary text-[16px]">Top up wallet</p>
          <div className="text-primary text-[20px]"><IoIosArrowForward /></div>
        </div>
        <div className="h-[1px] w-full bg-[#F1F1F1] mt-[20px]"></div>

        <div className="w-[100%] md:w-[85%] sm:w-[90%] flex flex-col mt-[20px]">
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

          <div onClick={() => {navigate("/help&support");}}
            className={`w-full min-h-[45px] flex justify-between items-center mb-[5px] cursor-pointer 
                  ${active === "/help&support" ? "bg-[#0333ae] text-[#fff]" : "text-[#757575]"}
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

        <div className="w-[100%] md:w-[85%] sm:w-[90%]">
          <Recomended />
        </div>

        {show2 ? (
        <div className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-8 flex justify-center items-center z-10 transition-all duration-350 ease-in-out">
          <div className="w-[500px] sm:w-[350px] p-[20px] pt-[55px] pb-[55px] flex bg-[#fff] rounded-md flex-col justify-center items-center relative">
            <h3 className="text-[18px] font-[500]">Top up with</h3>
            <div className="w-[80%] sm:w-[100%] mt-[40px] flex flex-col">
              <div className="flex mb-[35px]">
                <div>
                  <div onClick={handleClickFirst} className={`w-[15px] h-[15px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer ${isActiveFirst ? 'bg-primary' : 'bg-white border border-iconGray text-iconGray'}`}>
                    <IoCheckmarkSharp className="text-[10px]"/>
                  </div>
                </div>
              <div className="flex flex-col ml-[15px]">
                  <h3 className="text-[16px] mt-[-5px] sm:text-[14px] sm:font-[500]">Top up with USDT</h3>
                  <p className="text-[13px] text-iconGray mt-[3px]">Your balance: 30 NGN</p>
              </div>
              </div>
              <div className="flex ">
                <div>
                  <div onClick={handleClickSecond} className={`w-[15px] h-[15px] rounded-full flex justify-center items-center text-[#fff] cursor-pointer ${isActiveSecond ? 'bg-primary' : 'bg-white border border-iconGray text-iconGray'}`}>
                    <IoCheckmarkSharp className="text-[10px]"/>
                  </div>
                </div>
              <div className="flex flex-col ml-[15px]">
                  <h3 className="text-[16px] mt-[-5px] sm:text-[14px] sm:font-[500]">Top up with Cards, Bank Transfer or USSD</h3>
                  <p className="text-[13px] text-iconGray mt-[3px]">You will be directed to the payment gateway </p>
              </div>
              </div>
              <button className="w-[100%] h-[40px] text-[#fff] bg-secondary text-[14px] rounded-sm mt-[70px]">Continue</button>
            </div>
            <FaXmark onClick={Close} className="absolute right-[20px] top-[20px] cursor-pointer"/>
          </div>
        </div>
      ) : null}
      </div>
    </div>
  )
}

export default Dashboardhome