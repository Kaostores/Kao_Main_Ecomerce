import img from "../../../assets/watch.png"

const OrderDetails = () => {
  return (
    <div className="w-[100%] flex flex-col mt-[25px] pb-[30px]">
        <div className="flex flex-col">
            <div className="flex items-center text-[14px] font-[500]"><h3>Order ID:</h3><h3 className="ml-[4px]">209HJUFJ</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px]"><h3>Quantity:</h3><h3 className="ml-[4px]">1</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px]"><h3>Date placed:</h3><h3 className="ml-[4px]">25th March 2024</h3>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[25px]"></div>
        
        <div className="w-[100%] flex justify-between mt-[25px]">
            <div className="flex items-center">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px]">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end cursor-pointer">
              <p className="text-[13px]">Delivered on</p>
              <div className="flex items-center text-[14px] font-[600]"><h3>02/02/2024</h3> <h3 className="ml-[5px]">02:32</h3></div>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[25px]"></div>
        
        <div className="flex flex-col mt-[25px]">
            <p className="text-[13px]">Payment information</p>
            <div className="flex flex-col mt-[22px]">
            <div className="flex items-center text-[14px] font-[500]"><h3>Payment method:</h3><h3 className="ml-[4px]">Wallet</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px]"><h3>Item price:</h3><h3 className="ml-[4px]">NGN 20,000</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px]"><h3>Delivery price:</h3><h3 className="ml-[4px]">NGN 6,000</h3>
            </div>
        </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[25px]"></div>
        
        <div className="flex flex-col mt-[25px]">
            <p className="text-[13px]">Delivery Details</p>
            <div className="flex flex-col mt-[22px]">
            <div className="flex items-center text-[14px] font-[500]"><h3>Delivery method:</h3><h3 className="ml-[4px]">Door Delivery</h3>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px]"><h3>Delivery Address:</h3><div className="flex flex-col ml-[4px]">
                <p className="text-[12px] mt-[13px]">Temiloluwa Morafa</p>
                <p className="text-[12px]">No 6, Alafia street, Olota, Surulere, Lagos State.</p>
            </div>
            </div>
            <div className="flex items-center text-[14px] font-[500] mt-[7px]"><h3>Shipping Method:</h3><div className="flex flex-col ml-[4px]">
                <p className="text-[12px] mt-[13px]">GIG Logistics</p>
                <p className="text-[12px]">No 6, Alafia street, Olota, Surulere, Lagos State.</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default OrderDetails