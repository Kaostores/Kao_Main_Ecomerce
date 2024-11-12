import { useState, useEffect } from "react";
import { convertCurrency } from "@/utils/CurrencyConveter";
import { useAppSelector } from "@/services/store";

interface DiscountPriceProps {
	discountPrice: number;
	currency: string;
}

const DiscountPrice: React.FC<DiscountPriceProps> = ({
	discountPrice,
	currency,
}) => {
	// Retrieve selectedCurrency from Redux state
	const selectedCurrency = useAppSelector(
		(state) => state.persistedReducer.selectedCurrency,
	);

	// State for converted discount price
	const [convertedDiscountPrice, setConvertedDiscountPrice] =
		useState(discountPrice);

	// Convert discount price whenever the currency or selected currency changes
	useEffect(() => {
		const convertedDiscount = convertCurrency(
			discountPrice,
			currency,
			selectedCurrency,
		);

		setConvertedDiscountPrice(convertedDiscount);
	}, [discountPrice, currency, selectedCurrency]);

	return (
		<div className='flex'>
			<div className='text-[10px] mt-2 mr-2 sm:mt-1 '>{selectedCurrency} </div>{" "}
			{convertedDiscountPrice?.toLocaleString()}
		</div>
	);
};

export default DiscountPrice;
