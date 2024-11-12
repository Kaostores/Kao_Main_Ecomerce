import { BsStars } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";
import pic3 from "../../assets/lenovo.png";
import { decodeHTMLEntities } from "@/helpers";
import DiscountPrice from "../PriceConversion/DiscountPriceConversion";
import OriginalPrice from "../PriceConversion/OriginalPriceConversion";
import { useAppSelector } from "@/services/store";
import { handlePriceDisplay } from "@/utils/FallbackPrice";

const CardComp = ({ deal, productId, isLoading, ...props }: any) => {
	// Determine the price to show based on currency selection and availability of converted price

	// console.log("this is props", selectedCurrency);
	const selectedCurrency = useAppSelector(
		(state) => state.persistedReducer.selectedCurrency,
	);

	// Determine the price to display based on currency support and fallback mechanism
	const priceToShow = handlePriceDisplay(
		selectedCurrency,
		props?.convertedPrices,
		props?.discountPrice,
	);

	return (
		<div className='h-[370px] sm:w-[100%] pb-3 flex-shrink-0 bg-ascentBlue rounded-sm'>
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
							</div>
						)}

						<div className='absolute bg-white border-border shadow h-[30px] w-[30px] rounded-[50%] flex justify-center items-center top-[200px] right-2'>
							<MdOutlineShoppingCart />
						</div>
					</div>
				</div>

				<h2 className='ml-[10px] text-nowrap text-[16px] sm:text-[12px] font-[600] mt-[15px] overflow-hidden whitespace-nowrap truncate'>
					{decodeHTMLEntities(props?.name)}
				</h2>

				<div className='p-2'>
					<div className='flex justify-between sm:flex-col sm:pb-3'>
						<StarRating id={props?.totalRatings?.sumOfRatings || 0} />

						<div className='text-right'>
							<div className='flex font-bold'>
								{/* Show the price based on currency */}
								<DiscountPrice
									discountPrice={priceToShow}
									currency={selectedCurrency}
								/>
							</div>
							<OriginalPrice
								originalPrice={priceToShow * 2}
								currency={selectedCurrency}
							/>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CardComp;
