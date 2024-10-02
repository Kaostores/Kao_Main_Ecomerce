import { BsStars } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";
import pic3 from "../../assets/lenovo.png";
import { decodeHTMLEntities } from "@/helpers";
import { convertCurrency } from "@/utils/CurrencyConveter";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/services/store";

const CardComp = ({ deal, productId, isLoading, ...props }: any) => {
	const selectedCurrency = useAppSelector(
		(state) => state.persistedReducer.selectedCurrency,
	);

	// Start with the product's base currency
	const [convertedOriginalPrice, setConvertedOriginalPrice] = useState(
		props.originalPrice,
	);
	const [convertedDiscountPrice, setConvertedDiscountPrice] = useState(
		props.discountPrice,
	);

	useEffect(() => {
		const priceInSelectedCurrency = convertCurrency(
			props.originalPrice,
			props.currency,
			selectedCurrency,
		);
		const priceInSelectedCurrency2 = convertCurrency(
			props.discountPrice,
			props.currency,
			selectedCurrency,
		);
		setConvertedOriginalPrice(priceInSelectedCurrency);
		setConvertedDiscountPrice(priceInSelectedCurrency2);
	}, [selectedCurrency, props.originalPrice, props.currency]);

	return (
		<div className='h-[370px]  sm:w-[100%]  pb-3  flex-shrink-0  bg-ascentBlue rounded-sm'>
			<Link to={`/product-details/${productId ? productId : props.id}`}>
				<div className='h-[260px] relative w-[100%]'>
					<img
						className='w-[100%] h-[100%] object-cover pt-10 rounded-sm'
						src={
							props?.media?.length > 0 && props.media[0].url
								? props.media[0].url
								: pic3
						}
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
								{/* <div className='flex bg-[#F7CDBB] p-1 rounded-sm text-[12px]'> */}
								{/* Hot */}
								{/* <img src={pic2} /> */}
								{/* </div> */}
							</div>
						)}

						<div className='absolute bg-white border-border shadow h-[30px] w-[30px] rounded-[50%] flex justify-center items-center top-[200px] right-2'>
							<MdOutlineShoppingCart />
						</div>
					</div>
				</div>

				<h2 className='ml-[10px] text-nowrap  text-[16px] sm:text-[12px] font-[600] mt-[15px] overflow-hidden whitespace-nowrap truncate '>
					{decodeHTMLEntities(props?.name)}
				</h2>

				<div className='p-2'>
					<div
						className='flex justify-between sm:flex-col sm:pb-3
				  '>
						<StarRating id={props?.totalRatings?.sumOfRatings || 0} />
						{/* <Rating  size={10}   initialValue={ratingValue} /> */}

						<div className='text-right  '>
							<div className='flex font-bold'>
								<div className='text-[10px] mt-2 mr-2 sm:mt-1 '>
									{selectedCurrency}{" "}
								</div>
								{convertedDiscountPrice?.toLocaleString()}
							</div>
							<div className='line-through text-[12px] text-cardBrown font-bold'>
								{convertedOriginalPrice.toLocaleString()}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CardComp;
