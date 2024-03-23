import img from "../../../assets/applephone.png"
import img2 from "../../../assets/lg.png"
import img3 from "../../../assets/adidas.png"
import img4 from "../../../assets/nikeshoe.png"
import img5 from "../../../assets/thermocol.png"
import img6 from "../../../assets/lenovo.png"
import img7 from "../../../assets/techno.png"

const Recomended = () => {
  return (
    <div className="w-[100%] sm:w-[100%] hidden md:flex sm:flex mt-[150px] flex-col">
        <p className="text-[15px] font-[600]">Recommended For You </p>
        
        <div className="w-[100%] flex flex-wrap justify-between mt-[20px]">
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">Apple</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">LG</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">Adidas</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">Nike</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">LG</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img5} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">Thermocol</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img6} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">Lenovo</h3>
                </div>
            </div>
            
            <div className="w-[48%] h-[160px] relative mb-[20px]">
                <img src={img7} alt="" className="w-[100%] h-[100%] object-cover"/>
                <div className="absolute w-[100%] h-[100%] top-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
                    <h3 className="text-[20px] font-[600] text-white">Techno</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recomended