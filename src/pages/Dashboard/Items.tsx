import img from "../../assets/watch.png"
import { RiDeleteBin6Line, RiShoppingCartLine } from "react-icons/ri";

const Items = () => {
  return (
    <div className="w-[100%] flex flex-col p-[15px]">
        <div className="w-[100%] flex justify-between">
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
                    <div className="flex items-center mt-[14px]">
                        <div className="flex items-center cursor-pointer">
                          <div className="text-primary text-[20px]"><RiDeleteBin6Line /></div>
                          <p className="text-primary ml-[7px] text-[14px] font-[500]">Remove</p>
                        </div>
                        <div className="flex items-center cursor-pointer ml-[13px]">
                          <div className="text-primary text-[20px]"><RiShoppingCartLine /></div>
                          <p className="text-primary ml-[7px] text-[14px] font-[500]">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center"><p className="text-[10px] font-[700]">₦</p> <h4 className="text-[17px] font-[600] ml-[3px]">1,600,500</h4></div>
        </div>
        
        <div className="w-[100%] flex justify-between mt-[30px]">
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
                    <div className="flex items-center mt-[14px]">
                        <div className="flex items-center cursor-pointer">
                          <div className="text-primary text-[20px]"><RiDeleteBin6Line /></div>
                          <p className="text-primary ml-[7px] text-[14px] font-[500]">Remove</p>
                        </div>
                        <div className="flex items-center cursor-pointer ml-[13px]">
                          <div className="text-primary text-[20px]"><RiShoppingCartLine /></div>
                          <p className="text-primary ml-[7px] text-[14px] font-[500]">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center"><p className="text-[10px] font-[700]">₦</p> <h4 className="text-[17px] font-[600] ml-[3px]">1,600,500</h4></div>
        </div>
        
        <div className="w-[100%] flex justify-between mt-[30px]">
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
                    <div className="flex items-center mt-[14px]">
                        <div className="flex items-center cursor-pointer">
                          <div className="text-primary text-[20px]"><RiDeleteBin6Line /></div>
                          <p className="text-primary ml-[7px] text-[14px] font-[500]">Remove</p>
                        </div>
                        <div className="flex items-center cursor-pointer ml-[13px]">
                          <div className="text-primary text-[20px]"><RiShoppingCartLine /></div>
                          <p className="text-primary ml-[7px] text-[14px] font-[500]">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center"><p className="text-[10px] font-[700]">₦</p> <h4 className="text-[17px] font-[600] ml-[3px]">1,600,500</h4></div>
        </div>
    </div>
  )
}

export default Items