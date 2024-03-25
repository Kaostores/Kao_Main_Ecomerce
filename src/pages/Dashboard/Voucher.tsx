import { useState } from "react"
import img from "../../assets/Vector.png"
import { IoCopyOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Voucher = () => {
  const Navigate = useNavigate()
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)

  const Toggle2 = () => {
    setShow2(true)
    setShow(false)
  }
  const Toggle1 = () => {
    setShow(true)
    setShow2(false)
  }
  return (
    <div className="w-[100%] flex flex-col p-[15px] md:items-center sm:items-center md:p-0 md:bg-white sm:p-0 bg-[#F4F4F4]  sm:bg-white ml-[15px] md:ml-0 sm:ml-0 rounded-[8px]">
      <div onClick={()=>Navigate(-1)} className="w-[100%] justify-center items-center hidden md:mt-[10px] md:mb-[20px] md:flex sm:flex sm:mb-[20px]">
        <div className="w-[90%] md:w-[85%] flex items-center">
          <div className="text-primary text-[20px] cursor-pointer ml-[-4px]"><IoIosArrowBack /></div>
          <h3 className="text-primary ml-[12px] text-[17px] font-[600]">Voucher</h3>
        </div>
      </div>

      <div className="w-[100%] md:w-[85%] sm:w-[90%] flex items-center">
        <div onClick={Toggle1} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Active</p>
        </div>
        <div onClick={Toggle2} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show2 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Inactive</p>
        </div>
      </div>

      <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]"></div>

      {show ? (
        <div className="w-[100%] sm:w-[90%] h-[100%] flex items-center sm:items-start justify-center sm:justify-normal pt-[80px] sm:pt-[20px] pb-[80px] flex-col">
          <div className="w-[60px] h-[60px] rounded-full bg-[#de801c5e] flex justify-center items-center">
            <img src={img} alt="" className="h-[40px]"/>
          </div>
          <h3 className="text-primary font-[600] text-[15px] mt-[12px]">Hi, Temiloluwa this is your current voucher</h3>

          <div className="flex items-center text-secondary"><h3 className="font-[600]">AVBVBUU34</h3><div className="text-[10px] ml-[5px]"><IoCopyOutline /></div>
          </div>
          <div className="flex items-center text-primary text-[13px] font-[600] mt-[7px]"><span className="text-iconGray text-[13px] mr-[3px]">Expires:</span> 03/02/2024  <p className="font-[600] ml-[4px]">08:00AM</p></div>
        </div>
      ) : null}

      {show2 ? (
        <div></div>
      ) : null}
    </div>
  )
}

export default Voucher