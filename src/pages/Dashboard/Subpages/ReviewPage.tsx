import img from "../../../assets/watch.png"
import { FaRegStar  } from "react-icons/fa";
import {useState} from "react"

const ReviewPage = () => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleStarClick = (index: any) => {
        const selectedStarsCount = index + 1;
        setSelectedStars(selectedStarsCount);
    };
  return (
    <div className="w-[100%] md:w-[85%] flex flex-col mt-[22px] pb-[20px]">
        <div className="w-[90px] h-[90px] flex justify-center items-center border border-primary">
            <img src={img} alt="" className="h-[60px]"/>
        </div>
        <h3 className="text-[14px] font-[600] mt-[15px]">Rolex Yacht-Master II</h3>
        <div className="flex flex-col mt-[15px]">
            <p className="text-[13px] text-iconGray">Please select</p>
            <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <div 
                        key={index}
                        className={`text-[25px] cursor-pointer pr-[8px] mt-[5px] ${index < selectedStars ? 'text-yellow-500' : 'text-iconGray'}`}
                        onClick={() => handleStarClick(index)}
                    >
                        <FaRegStar  />
                    </div>
                ))}
              </div>
        </div>
        <div className="flex flex-col">
            <h3 className="text-[14px] font-[600] mt-[25px]">Drop a review</h3>
            <textarea className="w-[70%] sm:w-[100%] h-[180px] resize-none border border-border rounded-md bg-transparent mt-[12px] outline-none p-[10px]"></textarea>
        </div>
        
        <button className="w-[190px] sm:w-[100%] h-[43px] flex justify-center items-center text-[white] bg-secondary mt-[30px] text-[14px] rounded-sm">Save review</button>
    </div>
  )
}

export default ReviewPage