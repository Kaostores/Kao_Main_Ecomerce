import { storeSelectedCurrency } from "@/services/reducers";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Flag URLs for 7 countries
const flags: any = {
	NGN: "https://flagcdn.com/ng.svg", // Nigeria
	USD: "https://flagcdn.com/us.svg", // United States
	GBP: "https://flagcdn.com/gb.svg", // United Kingdom
	EUR: "https://flagcdn.com/eu.svg", // European Union
	JPY: "https://flagcdn.com/jp.svg", // Japan
	CAD: "https://flagcdn.com/ca.svg", // Canada
	AUD: "https://flagcdn.com/au.svg", // Australia
};

// Example currency data for 7 countries
const currencyData: any = [
	{
		currency: "USD",
		name: "US Dollar",
		symbol: "$",
		country: "United States",
		exchange_rate: 1,
		base_currency: "USD",
		is_default: true,
		id: "66f9371e170f9159a299e2f9",
	},
	{
		currency: "NGN",
		name: "Nigerian Naira",
		symbol: "₦",
		country: "Nigeria",
		exchange_rate: 1700,
		base_currency: "USD",
		is_default: false,
		id: "66f9371e170f9159a299e2f8",
	},

	{
		currency: "GBP",
		name: "British Pound",
		symbol: "£",
		country: "United Kingdom",
		exchange_rate: 0.75,
		base_currency: "USD",
		is_default: false,
		id: "66f9371e170f9159a299e2f10",
	},
	{
		currency: "EUR",
		name: "Euro",
		symbol: "€",
		country: "European Union",
		exchange_rate: 0.85,
		base_currency: "USD",
		is_default: false,
		id: "66f9371e170f9159a299e2f11",
	},
	{
		currency: "JPY",
		name: "Japanese Yen",
		symbol: "¥",
		country: "Japan",
		exchange_rate: 110,
		base_currency: "USD",
		is_default: false,
		id: "66f9371e170f9159a299e2f12",
	},
	{
		currency: "CAD",
		name: "Canadian Dollar",
		symbol: "$",
		country: "Canada",
		exchange_rate: 1.25,
		base_currency: "USD",
		is_default: false,
		id: "66f9371e170f9159a299e2f13",
	},
	// {
	// currency: "AUD",
	// name: "Australian Dollar",
	// symbol: "$",
	// country: "Australia",
	// exchange_rate: 1.35,
	// base_currency: "USD",
	// is_default: false,
	// id: "66f9371e170f9159a299e2f14",
	// },
];

const CurrencyExchange = () => {
	const [selectedCurrency, setSelectedCurrency] = useState<any>(
		currencyData[0],
	);
	const dispatch = useDispatch();
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleSelectCurrency = (currency: any) => {
		setSelectedCurrency(currency);
		dispatch(storeSelectedCurrency(currency?.currency));
		setDropdownOpen(false); // Close the dropdown after selection
	};

	return (
		<div className='relative inline-block text-left mt-2'>
			{/* Display selected flag and name */}
			<button
				type='button'
				className='inline-flex justify-center  text-sm font-medium text-gray-700 '
				onClick={() => setDropdownOpen(!dropdownOpen)}>
				<div className='flex items-center '>
					<div className='w-6 h-6 rounded-full overflow-hidden mr-2'>
						<img
							src={flags[selectedCurrency.currency]}
							alt={`${selectedCurrency.name} Flag`}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</button>

			{/* Dropdown menu */}
			{dropdownOpen && (
				<div className='absolute z-10 mt-2 w-56 bg-white rounded-md shadow-lg right-0'>
					<ul className='py-1'>
						{currencyData.map((currency: any) => (
							<li
								key={currency.id}
								onClick={() => handleSelectCurrency(currency)}
								className='flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'>
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
