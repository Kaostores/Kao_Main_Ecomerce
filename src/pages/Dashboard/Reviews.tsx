import {useState} from "react"
import img from "../../assets/watch.png"
import { IoIosArrowBack } from "react-icons/io";
import ReviewPage from "./Subpages/ReviewPage";
import { FaRegStar } from "react-icons/fa";
import Recomended from "./Subpages/Recomended";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(false)
  const [pending, setPending] = useState(true)
  const [review, setReview] = useState(false)
  const [selectedStars, setSelectedStars] = useState(0);

  const Navigate = useNavigate()

    const handleStarClick = (index: any) => {
        const selectedStarsCount = index + 1;
        setSelectedStars(selectedStarsCount);
    };

  const Reviewpage = () => {
    setReview(true)
    setPending(false)
  }
  const Pendingpage = () => {
    setPending(true)
    setReview(false)
  }
  const Toggle2 = () => {
    setShow(false)
    setShow2(true)
  }
  const Toggle1 = () => {
    setShow(true)
    setShow2(false)
  }
  return (
    <>
      <div className="w-[100%] flex flex-col sm:items-center bg-[#F4F4F4] sm:bg-white ml-[15px] rounded-[8px]">
        {pending ? (
        <div className="w-[100%] flex flex-col p-[15px] sm:p-0 sm:items-center">
          <div onClick={()=>Navigate(-1)} className="w-[100%] justify-center items-center hidden sm:flex sm:mb-[20px]">
        <div className="w-[90%] flex items-center">
          <div className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
          <h3 className="text-primary ml-[12px] text-[17px] font-[600]">My reviews</h3>
        </div>
      </div>
      <div className="w-[100%] sm:w-[90%] flex items-center">
        <div onClick={Toggle1} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Pending reviews</p>
        </div>
        <div onClick={Toggle2} className={`pl-[7px] pr-[5px] h-[35px] flex items-center cursor-pointer ${show2 ? 'border-b-[4px] border-primary text-primary' : 'text-iconGray'}`}>
          <p className="text-[15px]">Reviews</p>
        </div>
      </div>

      <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[2px]"></div>

      {show ? (
        <div className="w-[100%] flex flex-col items-center">
          <div className="w-[100%] sm:w-[90%] flex justify-between mt-[20px] sm:mt-[30px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <h4 onClick={Reviewpage} className="text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex">Drop review</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h4 onClick={Reviewpage} className="text-primary text-[14px] cursor-pointer font-[600] sm:hidden">Drop review</h4>
        </div>
          <div className="w-[100%] sm:w-[90%] flex justify-between mt-[20px] sm:mt-[30px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <h4 onClick={Reviewpage} className="text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex">Drop review</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h4 onClick={Reviewpage} className="text-primary text-[14px] cursor-pointer font-[600] sm:hidden">Drop review</h4>
        </div>
          <div className="w-[100%] sm:w-[90%] flex justify-between mt-[20px] sm:mt-[30px]">
            <div className="flex items-center sm:w-[100%]">
                <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
                    <img src={img} alt="" className="h-[60px]"/>
                </div>
                <div className="flex flex-col ml-[15px] sm:flex-1 sm:hiden">
                    <h3 className="text-[15px] font-[600]">Rolex Yacht-Master II</h3>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-iconGray text-[13px]">Brand:</p>
                        <p className="text-[13px] font-[500] ml-[4px] sm:text-[11px]"><span className="text-primary">Apple</span>  | Similar Product From Apple | 793979398</p>
                    </div>
                    <div className="flex items-center mt-[12px]">
                        <p className="text-[13px]">Price:</p>
                        <span className="flex items-center text-[13px] font-[600] ml-[4px]">NGN</span>
                        <div className="w-[100%] flex items-center sm:justify-between">
                          <h3 className="text-[15px] ml-[3px] font-[600]">20,000</h3>
                          <h4 onClick={Reviewpage} className="text-primary text-[14px] hidden cursor-pointer font-[600] sm:flex">Drop review</h4>
                        </div>
                    </div>
                </div>
            </div>
            <h4 onClick={Reviewpage} className="text-primary text-[14px] cursor-pointer font-[600] sm:hidden">Drop review</h4>
        </div>
        </div>
        
      ) : null}

      {show2 ? (
        <div className="w-[100%] flex flex-col">
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
              <p className="text-primary text-[14px] font-[600] cursor-pointer">Edit review</p>
            </div>
        </div>
          </div>
          <div className="w-[100%] flex flex-col mt-[13px]">
            <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <div 
                        key={index}
                        className={`text-[16px] cursor-pointer pr-[8px] mt-[5px] ${index < selectedStars ? 'text-yellow-500' : 'text-iconGray'}`}
                        onClick={() => handleStarClick(index)}
                    >
                        <FaRegStar  />
                    </div>
                ))}
              </div>
              <p className="text-[12px] text-iconGray mt-[10px]">What do you mean review?</p>
              <p className="text-[12px] w-[85%] text-iconGray">A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer.</p>
          </div>
          
          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]"></div>
          
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
              <p className="text-primary text-[14px] font-[600] cursor-pointer">Edit review</p>
            </div>
        </div>
          </div>
          <div className="w-[100%] flex flex-col mt-[13px]">
            <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <div 
                        key={index}
                        className={`text-[16px] cursor-pointer pr-[8px] mt-[5px] ${index < selectedStars ? 'text-yellow-500' : 'text-iconGray'}`}
                        onClick={() => handleStarClick(index)}
                    >
                        <FaRegStar  />
                    </div>
                ))}
              </div>
              <p className="text-[12px] text-iconGray mt-[10px]">What do you mean review?</p>
              <p className="text-[12px] w-[85%] text-iconGray">A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer.</p>
          </div>
          
          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[22px]"></div>
        </div>
      ) : null}
    </div>
      ) : null}

      {review ? (
        <div className="w-[90%] flex flex-col p-[15px] sm:p-0">
          <div className="w-[100%] flex items-center">
            <div onClick={Pendingpage} className="text-primary text-[20px] cursor-pointer"><IoIosArrowBack /></div>
            <h3 className="text-primary ml-[12px] text-[15px] font-[500] sm:font-[600]">Rate and Review</h3>
          </div>

          <div className="w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:hidden"></div>

          <ReviewPage />
        </div>
      ) : null}
      
      <div className="w-[90%]">
        <Recomended />
      </div>
      </div>
    </>
  )
}

export default Reviews