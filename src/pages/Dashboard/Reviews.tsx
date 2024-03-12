import {useState} from "react"
import img from "../../assets/watch.png"

const Reviews = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)

  const Toggle2 = () => {
    setShow(false)
    setShow2(true)
  }
  const Toggle1 = () => {
    setShow(true)
    setShow2(false)
  }
  return (
    <div className="w-[100%] flex flex-col p-[15px]">
      <div className="w-[100%] flex items-center">
        <div onClick={Toggle1} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Pending reviews</p>
        </div>
        <div onClick={Toggle2} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show2 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Reviews</p>
        </div>
      </div>

      <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]"></div>

      {show ? (
        <div className="w-[100%] flex flex-col">
          <div className="w-[100%] flex justify-between mt-[30px]">
            <div className="flex items-center">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px]">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[12px]">Delivered on:</p>
                        <p className="text-[12px] ml-[4px] text-iconGray"><span>2/2/2024 </span> | Order no:</p>
                        <p className="text-[12px] text-iconGray ml-[3px]">7879489857</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-primary text-[14px] font-[600]">Drop review</p>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]"></div>
        
        <div className="w-[100%] flex justify-between mt-[30px]">
            <div className="flex items-center">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px]">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[12px]">Delivered on:</p>
                        <p className="text-[12px] ml-[4px] text-iconGray"><span>2/2/2024 </span> | Order no:</p>
                        <p className="text-[12px] text-iconGray ml-[3px]">7879489857</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-primary text-[14px] font-[600]">Drop review</p>
            </div>
        </div>
        
        <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]"></div>
        
        <div className="w-[100%] flex justify-between mt-[30px]">
            <div className="flex items-center">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px]">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[12px]">Delivered on:</p>
                        <p className="text-[12px] ml-[4px] text-iconGray"><span>2/2/2024 </span> | Order no:</p>
                        <p className="text-[12px] text-iconGray ml-[3px]">7879489857</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-primary text-[14px] font-[600]">Drop review</p>
            </div>
        </div>
        </div>
      ) : null}

      {show2 ? (
        <div>hghghg</div>
      ) : null}
    </div>
  )
}

export default Reviews