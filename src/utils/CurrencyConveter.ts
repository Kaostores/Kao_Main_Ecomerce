const conversionRates: any = {
	NGN: {
		USD: 0.0006, // 1 NGN = 0.00060 USD
		CAD: 0.00061, // 1 NGN = 0.00061 CAD
		EUR: 0.00057, // 1 NGN = 0.00057 EUR
		GBP: 0.00048, // 1 NGN = 0.00048 GBP
		JPY: 0.089, // 1 NGN = 0.089 JPY
	},
	USD: {
		NGN: 1672.0, // 1 USD = 1,672 NGN
		CAD: 1.27, // 1 USD = 1.27 CAD
		EUR: 0.85, // 1 USD = 0.85 EUR
		GBP: 0.77, // 1 USD = 0.77 GBP
		JPY: 149.6, // 1 USD = 149.60 JPY
	},
	CAD: {
		NGN: 978.88, // 1 CAD = 978.88 NGN
		USD: 0.79, // 1 CAD = 0.79 USD
		EUR: 0.67, // 1 CAD = 0.67 EUR
		GBP: 0.61, // 1 CAD = 0.61 GBP
		JPY: 118.1, // 1 CAD = 118.10 JPY
	},
	EUR: {
		NGN: 1745.0, // 1 EUR = 1,745 NGN
		USD: 1.18, // 1 EUR = 1.18 USD
		CAD: 1.49, // 1 EUR = 1.49 CAD
		GBP: 0.9, // 1 EUR = 0.90 GBP
		JPY: 175.8, // 1 EUR = 175.80 JPY
	},
	GBP: {
		NGN: 2050.0, // 1 GBP = 2,050 NGN
		USD: 1.29, // 1 GBP = 1.29 USD
		CAD: 1.65, // 1 GBP = 1.65 CAD
		EUR: 1.11, // 1 GBP = 1.11 EUR
		JPY: 195.7, // 1 GBP = 195.70 JPY
	},
	JPY: {
		NGN: 11.24, // 1 JPY = 11.24 NGN
		USD: 0.0067, // 1 JPY = 0.0067 USD
		CAD: 0.0085, // 1 JPY = 0.0085 CAD
		EUR: 0.0057, // 1 JPY = 0.0057 EUR
		GBP: 0.0051, // 1 JPY = 0.0051 GBP
	},
};

// Utility function to handle the conversion
export const convertCurrency = (
	amount: any,
	baseCurrency: any,
	targetCurrency: any,
) => {
	// If base currency is the same as target currency, return the original price
	if (baseCurrency === targetCurrency) {
		return amount;
	}

	// Check if conversion rate is available
	if (
		!conversionRates[baseCurrency] ||
		!conversionRates[baseCurrency][targetCurrency]
	) {
		console.error(
			`Conversion rate not available for ${baseCurrency} to ${targetCurrency}`,
		);
		return null; // Return null if conversion is not available
	}

	const rate = conversionRates[baseCurrency][targetCurrency];
	return amount * rate;
};
