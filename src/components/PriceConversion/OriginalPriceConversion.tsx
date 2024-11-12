import { useState, useEffect } from "react";
import { convertCurrency } from "@/utils/CurrencyConveter";
import { useAppSelector } from "@/services/store";

interface OriginalPriceProps {
	originalPrice: number;
	currency: string;
}

const OriginalPrice: React.FC<OriginalPriceProps> = ({
	originalPrice,
	currency,
}) => {
	// Retrieve selectedCurrency from Redux state
	const selectedCurrency = useAppSelector(
		(state) => state.persistedReducer.selectedCurrency,
	);

	// State for converted original price
	const [convertedOriginalPrice, setConvertedOriginalPrice] =
		useState(originalPrice);

	// Convert original price whenever the currency or selected currency changes
	useEffect(() => {
		const convertedOriginal = convertCurrency(
			originalPrice,
			currency,
			selectedCurrency,
		);

		setConvertedOriginalPrice(convertedOriginal);
	}, [originalPrice, currency, selectedCurrency]);

	return (
		<div className='line-through text-[12px] text-cardBrown font-bold'>
			{convertedOriginalPrice?.toLocaleString()}
		</div>
	);
};

export default OriginalPrice;
