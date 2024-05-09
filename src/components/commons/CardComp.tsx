import React from "react";
import pic1 from "@/assets/pngegg (84) 1.png";
import { BsStars } from "react-icons/bs";
import pic2 from "@/assets/noto_fire.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";
import pic3 from "../../assets/lenovo.png"


const CardComp = ({ deal, isLoading, ...props }: any) => {
	console.log(props)
	// const [ratingValue, setRatingValue] = useState(5);
	console.log(props.media); 

	return (
		<div className='h-[270px]   pb-3 sm:w-[250px]  flex-shrink-0  bg-ascentBlue rounded-sm'>
			<div className='h-[170px] relative w-[100%] '>
				<img
					className='w-[100%] h-[100%] object-contain pt-10 rounded-sm'
					src={props?.media?.length > 0 && props.media[0].link ? props.media[0].link : pic3}
				/>
				<div className='absolute top-2 pl-3 pr-3 flex justify-between w-full'>
					<div className='h-[25px] w-[25px] bg-white rounded-[50%]'></div>
					{deal && (
						<div className='flex gap-3'>
							<div className='flex bg-ascentGray p-1 rounded-sm text-[12px]'>
								New{" "}
								<BsStars
									style={{
										color: "#FFC700",
									}}
								/>{" "}
							</div>
							<div className='flex bg-[#F7CDBB] p-1 rounded-sm text-[12px]'>
								Hot
								<img src={pic2} />
							</div>
						</div>
					)}

					<div className='absolute bg-white border-border shadow h-[30px] w-[30px] rounded-[50%] flex justify-center items-center top-32 right-2'>
						<MdOutlineShoppingCart />
					</div>
				</div>
			</div>
			<Link to={`/product-details/${props.id}`}>
				<h2 className='ml-[10px] text-nowrap  text-[16px] font-[600] mt-[15px] overflow-hidden whitespace-nowrap truncate '>
					{props.name} 
				</h2>
			</Link>
			<div className='p-2'>
				<div className='flex justify-between overflow-hidden '>
					<div className='flex text-[10px] '>
						(12)
						<StarRating />
						{/* <Rating  size={10}   initialValue={ratingValue} /> */}
					</div>
					<div className='text-right'>
						<div className='flex font-bold'>
							<div className='text-[10px] mt-2 mr-2'>NGN </div>
							{props.price}
						</div>
						<div className='line-through text-[12px] text-cardBrown font-bold'>
							35,000
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComp;
