import { IoWallet } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { GoSortDesc } from "react-icons/go";
import WalletHistoryTable from "./Subpages/WalletHistoryTable";

const Dashboardhome = () => {
  return (
    <div className="w-[100%] flex-col p-[15px]">
      
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
  )
}

export default Dashboardhome