import img from "../../../assets/watch.png"

const CancelledOrders = () => {
  return (
    <div className="w-[100%] flex flex-col">
        <div className="w-[100%] flex justify-between mt-[20px] sm:mt-[30px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px] sm:w-[100%] sm:flex-wrap">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <div className="flex-col items-end hidden sm:flex">
                          <p className="text-primary text-[13px]">Cancelled on</p>
                          <div className="flex items-center text-[14px] sm:text-[12px] text-primary font-[600]"><h3>02/02/2024</h3> <h3 className="ml-[5px]">02:32</h3></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end sm:hidden">
              <p className="text-primary text-[13px]">Delivered on</p>
              <div className="flex items-center text-[14px] text-primary font-[600]"><h3>02/02/2024</h3> <h3 className="ml-[5px]">02:32</h3></div>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px] sm:hidden"></div>
        
        <div className="w-[100%] flex justify-between mt-[20px] sm:mt-[30px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px] sm:w-[100%] sm:flex-wrap">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <div className="hidden sm:flex flex-col items-end">
                          <p className="text-primary text-[13px]">Cancelled on</p>
                          <div className="flex items-center text-[14px] sm:text-[12px] text-primary font-[600]"><h3>02/02/2024</h3> <h3 className="ml-[5px]">02:32</h3></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end sm:hidden">
              <p className="text-primary text-[13px]">Delivered on</p>
              <div className="flex items-center text-[14px] text-primary font-[600]"><h3>02/02/2024</h3> <h3 className="ml-[5px]">02:32</h3></div>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px] sm:hidden"></div>
    </div>
  )
}

export default CancelledOrders