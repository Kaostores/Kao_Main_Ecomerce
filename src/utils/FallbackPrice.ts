// List of supported currencies in your system
const supportedCurrencies = ["USD", "NGN", "EUR"]; // Example currencies

// Function to determine if a currency is supported
const isCurrencySupported = (currency: string) => {
	return supportedCurrencies.includes(currency);
};

// Function to get the fallback currency if the detected one is unsupported
const getFallbackCurrency = () => {
	return "USD"; // Default fallback currency
};

export const handlePriceDisplay = (
	userCurrency: string,
	convertedPrices: any,
	discountPrice: number,
) => {
	// Ensure convertedPrices is at least an empty object to prevent errors
	const prices = convertedPrices || {}; // Fallback to an empty object if undefined

	// If user's currency is not supported, use the fallback currency
	if (!isCurrencySupported(userCurrency)) {
		const fallbackCurrency = getFallbackCurrency();

		// Notify user that their currency is not supported
		console.log(
			`Currency ${userCurrency} is not supported. Prices will be shown in ${fallbackCurrency}.`,
		);

		// Use the fallback currency prices
		return prices[fallbackCurrency] || discountPrice; // Fallback to discount price if no conversion available
	}

	// Use the user's currency prices if supported
	return prices[userCurrency] || discountPrice;
};
