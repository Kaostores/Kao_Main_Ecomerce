import { IoIosArrowBack } from "react-icons/io";

const Inbox = () => {
  return (
    <div className="w-[100%] flex flex-col p-[15px]">
      <div className="w-[100%] flex items-center">
            <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
            <h3 className="text-primary ml-[12px] text-[15px] font-[500]">Inbox</h3>
          </div>

          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[10px]"></div>
          
      <div className="flex mt-[20px] w-[100%] mb-[20px]">
        <div className="w-[10px] mt-[5px]">
          <div className="h-[7px] w-[7px] bg-secondary rounded-full"></div>
        </div>
        <div className="flex flex-col ml-[20px]">
          <h3 className="text-primary text-[15px] font-[600]">Transaction Confirmed</h3>
          <p className="text-primary text-[12px]">25th March 2024</p>
          <p className="text-[11px] w-[97%] mt-[7px]">To make reference to or speak about briefly but specifically the lecturer noted several sources where listeners could go for further information. mention. notice. specify. cite to make reference to or speak about briefly but specifically the lecturer noted several sources where listeners could go for further information. mention. notice. specify. cite</p>
        </div>
      </div>

      <div className="flex mt-[20px] w-[100%] mb-[20px]">
        <div className="w-[10px] mt-[5px]">
          <div className="h-[7px] w-[7px] bg-secondary rounded-full"></div>
        </div>
        <div className="flex flex-col ml-[20px]">
          <h3 className="text-primary text-[15px] font-[600]">Transaction Confirmed</h3>
          <p className="text-primary text-[12px]">25th March 2024</p>
          <p className="text-[11px] w-[97%] mt-[7px]">To make reference to or speak about briefly but specifically the lecturer noted several sources where listeners could go for further information. mention. notice. specify. cite to make reference to or speak about briefly but specifically the lecturer noted several sources where listeners could go for further information. mention. notice. specify. cite</p>
        </div>
      </div>

      <div className="flex mt-[20px] w-[100%] mb-[20px]">
        <div className="w-[10px] mt-[5px]">
          <div className="h-[7px] w-[7px] bg-secondary rounded-full"></div>
        </div>
        <div className="flex flex-col ml-[20px]">
          <h3 className="text-primary text-[15px] font-[600]">Transaction Confirmed</h3>
          <p className="text-primary text-[12px]">25th March 2024</p>
          <p className="text-[11px] w-[97%] mt-[7px]">To make reference to or speak about briefly but specifically the lecturer noted several sources where listeners could go for further information. mention. notice. specify. cite to make reference to or speak about briefly but specifically the lecturer noted several sources where listeners could go for further information. mention. notice. specify. cite</p>
        </div>
      </div>
    </div>
  )
}

export default Inbox