import img from "../assets/frame.png"
import { IoSearchOutline } from "react-icons/io5";
import SideNav from "./SideNav";
import Mobilenav from "./Mobilenav";

const HelpandSupport = () => {
  return (
    <div className="w-[100%] flex flex-col mt-[15px] mb-[70px] justify-center items-center">
        <div className="w-full pt-[170px] sm:pt-[100px] pb-[170px] sm:pb-[100px] relative  flex justify-center items-center md:mt-[70px] sm:mt-[60px]">
            <img src={img} alt="" className=" w-[100%] h-[100%] absolute object-cover"/>
            <div className="z-10 flex flex-col items-center">
             <h3 className="text-white font-[600] text-[18px]">How Can We Help You?</h3>
                <div className="flex h-[40px] w-[350px] sm:w-[300px] bg-[#fff] mt-[5px] rounded-sm items-center overflow-hidden">
                 <div className="w-[35px] h-[100%] flex justify-center items-center text-[18px] text-primary">
                    <IoSearchOutline />
                    </div>
                    <input placeholder="Search the knowledge base" type="text" className="placeholder-primary::placeholder text-[14px] text-primary flex-1 h-[100%] outline-none pl-[10px]"/>
                 </div>
            </div>
        </div>
        <div className="w-[100%] mt-[140px] md:hidden sm:hidden">
            <SideNav />
        </div>
        <div className="w-[100%] mt-[30px] hidden md:flex sm:flex">
            <Mobilenav />
        </div>
    </div>
  )
}

export default HelpandSupport