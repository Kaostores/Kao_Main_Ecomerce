import { MdModeEditOutline } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Recomended from "./Subpages/Recomended";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex-col p-[15px] sm:p-0 bg-[#F4F4F4] ml-[15px] rounded-[8px] sm:ml-0 sm:bg-white">
      <h3 className="font-[500] sm:hidden">Account Overview</h3>
      <NavLink to="/dashboard" style={{textDecoration: "none", backgroundColor: "transparent"}}>
        <div className="w-[100%] items-center hidden sm:flex">
        <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
        <h3 className="text-primary ml-[12px] text-[17px] font-[600]">Account</h3>
      </div>
      </NavLink>

      <div className="bg-[#E6E6E6] w-[100%] h-[2px] mt-[15px] sm:hidden"></div>

      <div className="w-[100%] flex flex-col mt-[15px] sm:mt-[30px]">
        <div className="w-[100%] flex flex-col">
          <div className="items-center sm:flex hidden sm:mb-[20px]"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] sm:font-[600] font-[500] ml-[5px]">Edit Account</h3></div>
          
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Name</p>
            <div className="flex items-center sm:hidden"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] font-[500] ml-[5px]">Edit Account</h3></div>
          </div>
          <h3 className="mt-[10px] font-[500]">Temiloluwa Morafa</h3>
        </div>
        <div className="w-[100%] flex flex-col mt-[20px]">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Email</p>
          </div>
          <h3 className="mt-[10px] font-[500]">temiloluwamorafa@gmail.com</h3>
        </div>
        <div className="w-[100%] flex flex-col mt-[20px]">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Phone number</p>
          </div>
          <h3 className="mt-[10px] font-[500]">+234 812 8738 389</h3>
        </div>
      </div>

      <div className="bg-[#E6E6E6] w-[100%] h-[2px] mt-[18px]"></div>

      <div className="w-[100%] flex flex-col mt-[25px]">
        <div className="items-center sm:flex hidden sm:mb-[20px]"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] sm:font-[600] font-[500] ml-[5px]">Change Address</h3></div>
        
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Default Address</p>
            <div className="flex items-center sm:hidden"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] font-[500] ml-[5px]">Change Address</h3></div>
          </div>
          <h3 className="mt-[10px] font-[500]">Temiloluwa Morafa</h3>
          <h3 className="mt-[8px] font-[500]">No 6, Alafia street, Olota, Surulere, Lagos State.</h3>
      </div>
      
      <div className="bg-[#E6E6E6] w-[100%] h-[2px] mt-[22px]"></div>

      <div className="w-[100%] flex flex-col mt-[25px]">
        <div className="items-center sm:flex hidden sm:mb-[20px]"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] sm:font-[600] font-[500] ml-[5px]">Change Password</h3></div>
        
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Password</p>
            <div className="flex items-center sm:hidden"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] font-[500] ml-[5px]">Change Password</h3></div>
          </div>
          <h3 className="mt-[10px] font-[500]">****************</h3>
      </div>
    </div>
    
    <Recomended />
    </div>
  )
}

export default Account