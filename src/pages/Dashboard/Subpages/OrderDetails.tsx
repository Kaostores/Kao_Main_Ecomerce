import img from "../../../assets/watch.png"

const OrderDetails = () => {
  return (
    <div className="w-[100%] md:items-center sm:items-center flex flex-col mt-[25px] pb-[30px]">
        <div className="flex flex-col md:w-[85%] sm:w-[90%]">
            <div className="flex items-center text-[14px] font-[500] sm:font-[600]"><h3>Order ID:</h3><h3 className="ml-[4px]">209HJUFJ</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px] sm:font-[600]"><h3>Quantity:</h3><h3 className="ml-[4px]">1</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px] sm:font-[600]"><h3>Date placed:</h3><h3 className="ml-[4px]">25th March 2024</h3>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[25px]"></div>
        
        <div className="w-[100%] md:w-[85%] sm:w-[90%] flex justify-between mt-[20px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px] sm:flex-wrap">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:ml-0 sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <div className="flex-col items-end hidden sm:flex">
                          <p className="text-primary text-[13px]">Delivered on</p>
                          <div className="flex items-center text-[14px] text-primary font-[600] sm:text-[12px]"><h3>02/02/2024</h3> <h3 className="ml-[5px]">02:32</h3></div>
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
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[25px]"></div>
        
        <div className="flex flex-col mt-[25px] md:w-[85%] sm:w-[90%]">
            <p className="text-[13px] sm:text-[17px]">Payment information</p>
            <div className="flex flex-col mt-[22px]">
            <div className="flex items-center text-[14px] font-[500] sm:font-[600]"><h3>Payment method:</h3><h3 className="ml-[4px]">Wallet</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px] sm:font-[600]"><h3>Item price:</h3><h3 className="ml-[4px]">NGN 20,000</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px] sm:font-[600]"><h3>Delivery price:</h3><h3 className="ml-[4px]">NGN 6,000</h3>
            </div>
        </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[25px]"></div>
        
        <div className="flex flex-col mt-[25px] md:w-[85%] sm:w-[90%]">
            <p className="text-[13px] sm:text-[17px]">Delivery Details</p>
            <div className="flex flex-col mt-[22px]">
            <div className="flex items-center text-[14px] font-[500] sm:w-[100%] sm:flex-wrap"><h3 className="sm:w-[100%] sm:text-[15px] sm:font-[600]">Delivery method:</h3><h3 className="ml-[4px] sm:text-[15px] sm:ml-0 sm:mt-[4px]">Door Delivery</h3>
            </div>
            <div className="sm:mt-[35px] flex items-center text-[14px] font-[500] mt-[7px] sm:w-[100%] sm:flex-wrap"><h3 className=" sm:text-[15px] sm:font-[600]">Delivery Address:</h3><div className="flex flex-col ml-[4px]">
                <p className="text-[12px] mt-[13px] sm:text-[15px]">Temiloluwa Morafa</p>
                <p className="text-[12px] sm:text-[15px]">No 6, Alafia street, Olota, Surulere, Lagos State.</p>
            </div>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px] sm:w-[100%] sm:flex-wrap sm:mt-[35px]"><h3 className="sm:w-[100%] sm:text-[15px] sm:font-[600]">Shipping Method:</h3><div className="flex flex-col ml-[4px]">
                <p className="text-[12px] mt-[13px] sm:text-[15px]">GIG Logistics</p>
                <p className="text-[12px] sm:text-[15px]">No 6, Alafia street, Olota, Surulere, Lagos State.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OrderDetails