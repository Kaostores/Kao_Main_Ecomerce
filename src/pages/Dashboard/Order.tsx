import { IoIosArrowBack } from "react-icons/io";
import CompletedOrders from "./Subpages/CompletedOrders"
import CancelledOrders from "./Subpages/CancelledOrders"
import { useState } from "react"
import img from "../../assets/watch.png"
import TrackSteps from "./Subpages/TrackSteps";

const Order = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [view, setView] = useState(true)
  const [track, setTrack] = useState(false)

  const TrackView = () => {
    setTrack(true)
    setView(false)
  }
  const ToggleView = () => {
    setView(true)
    setTrack(false)
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
        <div className="w-[100%] flex flex-col p-[15px]">
      <div className="w-[100%] flex items-center">
        <div onClick={Toggle1} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Ongoing Orders</p>
        </div>
        <div onClick={Toggle2} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show2 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Completed Orders</p>
        </div>
        <div onClick={Toggle3} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show3 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Cancelled Orders</p>
        </div>
      </div>

      <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]"></div>

      {show ? (
        <div className="w-[100%] flex mt-[30px]">
          <div className="w-[100%] flex flex-col">
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
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                    </div>
                </div>
            </div>
            <h4 onClick={TrackView} className="text-primary text-[14px] cursor-pointer font-[600]">Track delivery</h4>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]"></div>
        
        <div className="w-[100%] flex justify-between mt-[20px]">
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
            <h4 className="text-primary text-[14px] cursor-pointer font-[600]">Track delivery</h4>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]"></div>
        
        <div className="w-[100%] flex justify-between mt-[20px]">
            <div className="flex items-center">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px]">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                    </div>
                </div>
            </div>
            <h4 className="text-primary text-[14px] cursor-pointer font-[600]">Track delivery</h4>
        </div>
    </div>
      </div>
      ) : null}
      {show2 ? (
        <div className="w-[100%] flex mt-[30px]">
        <CompletedOrders />
      </div>
      ) : null}
      {show3 ? (
        <div className="w-[100%] flex mt-[30px]">
        <CancelledOrders />
      </div>
      ) : null}
    </div>
      ) : null}

      {track ? (
        <div className="w-[100%] flex flex-col p-[15px]">
          <div className="w-[100%] flex items-center">
            <div onClick={ToggleView} className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
            <h3 className="text-primary ml-[12px] text-[15px] font-[500]">Track Delivery</h3>
          </div>

          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px]"></div>

          <div className="flex w-[100%] justify-start mt-[30px]">
            <TrackSteps />
            <div className="flex flex-col">
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
        </div>
      ) : null}
    </>
  )
}

export default Order