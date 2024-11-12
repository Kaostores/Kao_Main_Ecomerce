// import { storeSelectedCurrency } from "@/services/reducers";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Flag URLs for relevant currencies and countries
// const flags: any = {
// 	NGN: "https://flagcdn.com/ng.svg", // Nigeria
// 	USD: "https://flagcdn.com/us.svg", // United States
// 	EUR: "https://flagcdn.com/eu.svg", // European Union
// 	GBP: "https://flagcdn.com/gb.svg", // United Kingdom
// 	CAD: "https://flagcdn.com/ca.svg", // Canada
// 	AUD: "https://flagcdn.com/au.svg", // Australia
// 	INR: "https://flagcdn.com/in.svg", // India
// 	ZAR: "https://flagcdn.com/za.svg", // South Africa
// 	JPY: "https://flagcdn.com/jp.svg", // Japan
// 	CNY: "https://flagcdn.com/cn.svg", // China
// 	BRL: "https://flagcdn.com/br.svg", // Brazil
// 	MXN: "https://flagcdn.com/mx.svg", // Mexico
// 	NL: "https://flagcdn.com/nl.svg", // Netherlands
// 	// Add more countries and flags as necessary
// };

// // Function to map country codes to currencies
// const getCurrencyByCountry = (countryCode: string) => {
// 	const currencyMapping: any = {
// 		NG: {
// 			currency: "NGN",
// 			name: "Nigerian Naira",
// 			symbol: "₦",
// 			country: "Nigeria",
// 			id: "1",
// 		},
// 		US: {
// 			currency: "USD",
// 			name: "US Dollar",
// 			symbol: "$",
// 			country: "United States",
// 			id: "2",
// 		},
// 		EU: {
// 			currency: "EUR",
// 			name: "Euro",
// 			symbol: "€",
// 			country: "European Union",
// 			id: "3",
// 		},
// 		GB: {
// 			currency: "GBP",
// 			name: "British Pound",
// 			symbol: "£",
// 			country: "United Kingdom",
// 			id: "4",
// 		},
// 		CA: {
// 			currency: "CAD",
// 			name: "Canadian Dollar",
// 			symbol: "C$",
// 			country: "Canada",
// 			id: "5",
// 		},
// 		AU: {
// 			currency: "AUD",
// 			name: "Australian Dollar",
// 			symbol: "A$",
// 			country: "Australia",
// 			id: "6",
// 		},
// 		IN: {
// 			currency: "INR",
// 			name: "Indian Rupee",
// 			symbol: "₹",
// 			country: "India",
// 			id: "7",
// 		},
// 		ZA: {
// 			currency: "ZAR",
// 			name: "South African Rand",
// 			symbol: "R",
// 			country: "South Africa",
// 			id: "8",
// 		},
// 		JP: {
// 			currency: "JPY",
// 			name: "Japanese Yen",
// 			symbol: "¥",
// 			country: "Japan",
// 			id: "9",
// 		},
// 		CN: {
// 			currency: "CNY",
// 			name: "Chinese Yuan",
// 			symbol: "¥",
// 			country: "China",
// 			id: "10",
// 		},
// 		BR: {
// 			currency: "BRL",
// 			name: "Brazilian Real",
// 			symbol: "R$",
// 			country: "Brazil",
// 			id: "11",
// 		},
// 		MX: {
// 			currency: "MXN",
// 			name: "Mexican Peso",
// 			symbol: "$",
// 			country: "Mexico",
// 			id: "12",
// 		},
// 		NL: {
// 			currency: "EUR",
// 			name: "Euro",
// 			symbol: "€",
// 			country: "Netherlands",
// 			id: "13",
// 		},
// 		// Add more countries and currencies here
// 	};

// 	// Default to USD if country not found
// 	return currencyMapping[countryCode] || currencyMapping["US"];
// };

// const CurrencyExchange = () => {
// 	const dispatch = useDispatch();
// 	const { country }: any = useSelector((state: any) => state?.persistedReducer);

// 	// Set the local currency based on the user's country
// 	const [selectedCurrency, setSelectedCurrency] = useState<any>(
// 		getCurrencyByCountry("US"),
// 	);
// 	const [dropdownOpen, setDropdownOpen] = useState(false);

// 	useEffect(() => {
// 		if (country) {
// 			const localCurrency = getCurrencyByCountry(country);
// 			setSelectedCurrency(localCurrency);
// 		}
// 	}, [country]);

// 	const handleSelectCurrency = (currency: any) => {
// 		setSelectedCurrency(currency);
// 		dispatch(storeSelectedCurrency(currency?.currency)); // Dispatch the selected currency
// 		setDropdownOpen(false); // Close the dropdown
// 	};

// 	// Show only the local currency and USD as options
// 	const dropdownOptions = [
// 		getCurrencyByCountry(country), // Local currency
// 		getCurrencyByCountry("US"), // USD
// 		// Optionally add more currencies to the dropdown if needed
// 	];

// 	return (
// 		<div className='relative inline-block text-left mt-2'>
// 			{/* Display selected flag and name */}
// 			<button
// 				type='button'
// 				className='inline-flex justify-center text-sm font-medium text-gray-700'
// 				onClick={() => setDropdownOpen(!dropdownOpen)}>
// 				<div className='flex items-center'>
// 					<div className='w-6 h-6 rounded-full overflow-hidden mr-2'>
// 						<img
// 							src={flags[selectedCurrency.currency]}
// 							alt={`${selectedCurrency.name} Flag`}
// 							className='w-full h-full object-cover'
// 						/>
// 					</div>
// 					<span>
// 						{selectedCurrency.name} ({selectedCurrency.symbol})
// 					</span>
// 				</div>
// 			</button>

// 			{/* Dropdown menu */}
// 			{dropdownOpen && (
// 				<div className='absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg right-0'>
// 					<ul className='py-1'>
// 						{dropdownOptions.map((currency: any) => (
// 							<li
// 								key={currency.id}
// 								onClick={() => handleSelectCurrency(currency)}
// 								className='flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'>
// 								<div className='w-6 h-6 rounded-full overflow-hidden mr-2'>
// 									<img
// 										src={flags[currency.currency]}
// 										alt={`${currency.name} Flag`}
// 										className='w-full h-full object-cover'
// 									/>
// 								</div>
// 								<span>
// 									{currency.name} ({currency.symbol})
// 								</span>
// 							</li>
// 						))}
// 					</ul>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default CurrencyExchange;

import { storeSelectedCurrency } from "@/services/reducers";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Flag URLs for relevant currencies and countries
const flags: any = {
	NGN: "https://flagcdn.com/ng.svg", // Nigeria
	USD: "https://flagcdn.com/us.svg", // United States
	EUR: "https://flagcdn.com/eu.svg", // European Union
	GBP: "https://flagcdn.com/gb.svg", // United Kingdom
	CAD: "https://flagcdn.com/ca.svg", // Canada
	AUD: "https://flagcdn.com/au.svg", // Australia
	INR: "https://flagcdn.com/in.svg", // India
	ZAR: "https://flagcdn.com/za.svg", // South Africa
	JPY: "https://flagcdn.com/jp.svg", // Japan
	CNY: "https://flagcdn.com/cn.svg", // China
	BRL: "https://flagcdn.com/br.svg", // Brazil
	MXN: "https://flagcdn.com/mx.svg", // Mexico
	NL: "https://flagcdn.com/nl.svg", // Netherlands
	// Add more countries and flags as necessary
};

// Function to map country codes to currencies
const getCurrencyByCountry = (countryCode: string) => {
	const currencyMapping: any = {
		NG: {
			currency: "NGN",
			name: "Nigerian Naira",
			symbol: "₦",
			country: "Nigeria",
			id: "1",
		},
		US: {
			currency: "USD",
			name: "US Dollar",
			symbol: "$",
			country: "United States",
			id: "2",
		},
		EU: {
			currency: "EUR",
			name: "Euro",
			symbol: "€",
			country: "European Union",
			id: "3",
		},
		GB: {
			currency: "GBP",
			name: "British Pound",
			symbol: "£",
			country: "United Kingdom",
			id: "4",
		},
		CA: {
			currency: "CAD",
			name: "Canadian Dollar",
			symbol: "C$",
			country: "Canada",
			id: "5",
		},
		AU: {
			currency: "AUD",
			name: "Australian Dollar",
			symbol: "A$",
			country: "Australia",
			id: "6",
		},
		IN: {
			currency: "INR",
			name: "Indian Rupee",
			symbol: "₹",
			country: "India",
			id: "7",
		},
		ZA: {
			currency: "ZAR",
			name: "South African Rand",
			symbol: "R",
			country: "South Africa",
			id: "8",
		},
		JP: {
			currency: "JPY",
			name: "Japanese Yen",
			symbol: "¥",
			country: "Japan",
			id: "9",
		},
		CN: {
			currency: "CNY",
			name: "Chinese Yuan",
			symbol: "¥",
			country: "China",
			id: "10",
		},
		BR: {
			currency: "BRL",
			name: "Brazilian Real",
			symbol: "R$",
			country: "Brazil",
			id: "11",
		},
		MX: {
			currency: "MXN",
			name: "Mexican Peso",
			symbol: "$",
			country: "Mexico",
			id: "12",
		},
		NL: {
			currency: "EUR",
			name: "Euro",
			symbol: "€",
			country: "Netherlands",
			id: "13",
		},
		// Add more countries and currencies here
	};

	// Default to USD if country not found
	return currencyMapping[countryCode] || currencyMapping["US"];
};

const CurrencyExchange = () => {
	const dispatch = useDispatch();
	const { country }: any = useSelector((state: any) => state?.persistedReducer);

	// Set the local currency based on the user's country
	const [selectedCurrency, setSelectedCurrency] = useState<any>(
		getCurrencyByCountry("US"),
	);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	useEffect(() => {
		if (country) {
			const localCurrency = getCurrencyByCountry(country);
			setSelectedCurrency(localCurrency);
		}
	}, [country]);

	const handleSelectCurrency = (currency: any) => {
		setSelectedCurrency(currency);
		dispatch(storeSelectedCurrency(currency?.currency)); // Dispatch the selected currency
		setDropdownOpen(false); // Close the dropdown
	};

	// Show only the local currency and USD as options
	const isNigeria = country === "NG";
	const dropdownOptions = isNigeria
		? [getCurrencyByCountry(country), getCurrencyByCountry("US")]
		: [getCurrencyByCountry("US")];

	return (
		<div className='relative inline-block text-left mt-2'>
			{/* Display selected flag and name */}
			<button
				type='button'
				className='inline-flex justify-center text-sm font-medium text-gray-700'
				onClick={() => setDropdownOpen(!dropdownOpen)}>
				<div className='flex items-center'>
					<div className='w-6 h-6 rounded-full overflow-hidden mr-2'>
						<img
							src={flags[selectedCurrency.currency]}
							alt={`${selectedCurrency.name} Flag`}
							className='w-full h-full object-cover'
						/>
					</div>
					<span>
						{/* {selectedCurrency.name} ({selectedCurrency.symbol}) */}
					</span>
				</div>
			</button>

			{/* Dropdown menu */}
			{dropdownOpen && (
				<div className='absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg right-0'>
					<ul className='py-1'>
						{dropdownOptions.map((currency: any) => (
							<li
								key={currency.id}
								onClick={() => handleSelectCurrency(currency)}
								className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
									!isNigeria && currency.currency === "NGN"
										? "cursor-not-allowed opacity-50"
										: ""
								}`}>
								<div className='w-6 h-6 rounded-full overflow-hidden mr-2'>
									<img
										src={flags[currency.currency]}
										alt={`${currency.name} Flag`}
										className='w-full h-full object-cover'
									/>
								</div>
								<span>
									{currency.name} ({currency.symbol})
								</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default CurrencyExchange;
