import OngoingOrders from "./Subpages/OngoingOrders"
import CompletedOrders from "./Subpages/CompletedOrders"
import CancelledOrders from "./Subpages/CancelledOrders"
import {useState} from "react"

const Order = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

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
        <OngoingOrders />
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
  )
}

export default Order