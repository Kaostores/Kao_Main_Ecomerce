import img from "../assets/emptycart.png"
import { Link } from "react-router-dom"

const EmpyCart = () => {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col pt-[30px] pb-[30px]">
        <img src={img} alt="" className="h-[130px]"/>
        <h3 className="text-[17px] mt-[10px] font-[500]">Your cart is empty!</h3>
        <p className="text-[14px] mt-[12px]">Browse our categories and discover our best deals!</p>
        <Link to="/search">
            <button className="w-[170px] h-[45px] flex justify-center items-center cursor-pointer bg-secondary text-[15px] mt-[20px] rounded-sm text-white">START SHOPPING</button>
        </Link>
    </div>
  )
}

export default EmpyCart