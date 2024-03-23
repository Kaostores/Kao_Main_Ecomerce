import { IoIosArrowBack } from "react-icons/io";
import CancelledOrders from "./Subpages/CancelledOrders"
import { useState } from "react"
import img from "../../assets/watch.png"
import TrackSteps from "./Subpages/TrackSteps";
import OrderDetails from "./Subpages/OrderDetails";
import Recomended from "./Subpages/Recomended";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [view, setView] = useState(true)
  const [track, setTrack] = useState(false)
  const [details, setDetails] = useState(false)

  const Navigate = useNavigate()

  const orderDetails = () => {
    setDetails(true)
    setTrack(false)
    setView(false)
  }
  const TrackView = () => {
    setTrack(true)
    setView(false)
    setDetails(false)
  }
  const ToggleView = () => {
    setView(true)
    setTrack(false)
    setDetails(false)
  }

  const Toggle1 = () => {
    setShow(true)
    setShow2(false)
    setShow3(false)
  }

  const Toggle2 = () => {
    setShow(false)
    setShow2(true)
    setShow3(false)
  }

  const Toggle3 = () => {
    setShow(false)
    setShow2(false)
    setShow3(true)
  }
  return (
    <>
      {view ? (
        <div className="w-[100%] flex flex-col sm:items-center">
          <div className="flex-1 sm:w-[100%] sm:items-center flex-col p-[15px] sm:p-0 bg-[#F4F4F4] sm:bg-white ml-[15px] rounded-[8px] sm:ml-0">

        <div onClick={()=>Navigate(-1)} className="w-[100%] justify-center items-center hidden sm:flex sm:mb-[20px]">
        <div className="w-[90%] flex items-center">
          <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
          <h3 className="text-primary ml-[12px] text-[17px] font-[600]">Order</h3>
        </div>
      </div>

      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] flex items-center">
        <div onClick={Toggle1} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px] sm:text-[12px] sm:font-[600]">Ongoing Orders</p>
        </div>
        <div onClick={Toggle2} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show2 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px] sm:text-[12px] sm:font-[600]">Completed Orders</p>
        </div>
        <div onClick={Toggle3} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show3 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px] sm:text-[12px] sm:font-[600]">Cancelled Orders</p>
        </div>
      </div>
      </div>

      <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]"></div>

      {show ? (
        <div className="w-[100%] flex justify-center">
          <div className="w-[100%] sm:w-[90%] flex mt-[30px]">
          <div className="w-[100%] flex flex-col">
        <div className="w-[100%] flex justify-between">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px] sm:w-[100%] sm:flex-wrap">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <h4 onClick={TrackView} className="text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex">Track delivery</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h4 onClick={TrackView} className="text-primary text-[14px] cursor-pointer font-[600] sm:hidden">Track delivery</h4>
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
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <h4 onClick={TrackView} className="text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex">Track delivery</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h4 onClick={TrackView} className="text-primary text-[14px] cursor-pointer font-[600] sm:hidden">Track delivery</h4>
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
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <h4 onClick={TrackView} className="text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex">Track delivery</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h4 onClick={TrackView} className="text-primary text-[14px] cursor-pointer font-[600] sm:hidden">Track delivery</h4>
        </div>
    </div>
      </div>
        </div>
      ) : null}
      {show2 ? (
        <div className="w-[100%] flex justify-center">
          <div className="w-[100%] sm:w-[90%] flex mt-[30px] sm:mt-[15px]">
        <div className="w-[100%] flex">
          <div className="w-[100%] flex flex-col">
        <div className="w-[100%] flex justify-between mt-[20px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px] sm:w-[100%] sm:flex-wrap">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <div onClick={orderDetails} className="flex flex-col items-end">
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
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <div className="flex flex-col items-end">
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
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <div className="flex flex-col items-end">
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
    </div>
      </div>
      </div>
        </div>
      ) : null}
      {show3 ? (
        <div className="w-[100%] flex justify-center">
          <div className="w-[90%] flex">
        <CancelledOrders />
      </div>
        </div>
      ) : null}
    </div>
    <div className="w-[90%]">
      <Recomended />
    </div>
        </div>
      ) : null}

      {track ? (
        <div className="w-[100%] flex flex-col p-[15px] bg-[#F4F4F4] sm:bg-white ml-[15px]">
          <div className="w-[100%] flex items-center">
            <div onClick={ToggleView} className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
            <h3 className="text-primary ml-[12px] text-[15px] font-[500]">Track Delivery</h3>
          </div>

          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-[10px]"></div>

          <div className="flex w-[100%] justify-start mt-[30px]">
            <TrackSteps />
            <div className="flex flex-col sm:ml-[15px]">
              <div className="flex flex-col mb-[35px]">
                <h3 className="text-[14px] text-primary font-[500]">Order placed</h3>
                <p className="text-[11px] text-iconGray">25th of March 2024</p>
              </div>
              <div className="flex flex-col mb-[37px]">
                <h3 className="text-[14px] text-primary font-[500]">Processing order confirmation</h3>
                <p className="text-[11px] text-iconGray">25th of March 2024</p>
              </div>
              <div className="flex flex-col mb-[37px]">
                <h3 className="text-[14px] text-primary font-[500]">Shipping</h3>
                <p className="text-[11px] text-iconGray">25th of March 2024</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[14px] text-primary font-[500]">Delivered</h3>
                <p className="text-[11px] text-iconGray">25th of March 2024</p>
              </div>
            </div>
          </div>
          <Recomended />
        </div>
      ) : null}

      {details ? (
        <div className="w-[100%] flex flex-col sm:items-center">
          <div className="w-[100%] flex flex-col sm:items-center p-[15px] sm:p-0">
          <div className="w-[90%] flex items-center">
            <div onClick={ToggleView} className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
            <h3 className="text-primary ml-[12px] text-[15px] font-[500] sm:text-[17px]">Order details</h3>
          </div>

          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px]"></div>

          <OrderDetails />
        </div>
        
          <div className="w-[90%]">
            <Recomended />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Order