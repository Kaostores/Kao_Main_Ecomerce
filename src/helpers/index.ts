//Capitalize first character
export const capitalizeString = (str: string): string => {
	return str?.charAt(0)?.toUpperCase() + str.slice(1);
};

//Validate Email
export const validateEmail = (email: string): boolean => {
	// Regular expression for basic email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};
// price formatter
export function formatPrice(price: number) {
	return price?.toFixed(1)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Decoded HTML ENTITES
export const decodeHTMLEntities = (text: string) => {
	const doc = new DOMParser().parseFromString(text, "text/html");
	return doc.documentElement.textContent;
};
export const getCurrencyByCountry = (countryCode: any) => {
	const currencyMapping: any = {
		AF: "AFN", // Afghanistan
		AL: "ALL", // Albania
		DZ: "DZD", // Algeria
		AS: "USD", // American Samoa
		AD: "EUR", // Andorra
		AO: "AOA", // Angola
		AI: "XCD", // Anguilla
		AG: "XCD", // Antigua and Barbuda
		AR: "ARS", // Argentina
		AM: "AMD", // Armenia
		AW: "AWG", // Aruba
		AU: "AUD", // Australia
		AT: "EUR", // Austria
		AZ: "AZN", // Azerbaijan
		BS: "BSD", // Bahamas
		BH: "BHD", // Bahrain
		BD: "BDT", // Bangladesh
		BB: "BBD", // Barbados
		BY: "BYN", // Belarus
		BE: "EUR", // Belgium
		BZ: "BZD", // Belize
		BJ: "XOF", // Benin
		BM: "BMD", // Bermuda
		BT: "BTN", // Bhutan
		BO: "BOB", // Bolivia
		BA: "BAM", // Bosnia and Herzegovina
		BW: "BWP", // Botswana
		BR: "BRL", // Brazil
		BN: "BND", // Brunei
		BG: "BGN", // Bulgaria
		BF: "XOF", // Burkina Faso
		BI: "BIF", // Burundi
		CV: "CVE", // Cabo Verde
		KH: "KHR", // Cambodia
		CM: "XAF", // Cameroon
		CA: "CAD", // Canada
		KY: "KYD", // Cayman Islands
		CF: "XAF", // Central African Republic
		TD: "XAF", // Chad
		CL: "CLP", // Chile
		CN: "CNY", // China
		CO: "COP", // Colombia
		KM: "KMF", // Comoros
		CG: "XAF", // Congo (Brazzaville)
		CD: "CDF", // Congo (Kinshasa)
		CR: "CRC", // Costa Rica
		CI: "XOF", // Côte d’Ivoire
		HR: "HRK", // Croatia
		CU: "CUP", // Cuba
		CY: "EUR", // Cyprus
		CZ: "CZK", // Czech Republic
		DK: "DKK", // Denmark
		DJ: "DJF", // Djibouti
		DM: "XCD", // Dominica
		DO: "DOP", // Dominican Republic
		EC: "USD", // Ecuador
		EG: "EGP", // Egypt
		SV: "USD", // El Salvador
		GQ: "XAF", // Equatorial Guinea
		ER: "ERN", // Eritrea
		EE: "EUR", // Estonia
		SZ: "SZL", // Eswatini
		ET: "ETB", // Ethiopia
		FJ: "FJD", // Fiji
		FI: "EUR", // Finland
		FR: "EUR", // France
		GA: "XAF", // Gabon
		GM: "GMD", // Gambia
		GE: "GEL", // Georgia
		DE: "EUR", // Germany
		GH: "GHS", // Ghana
		GR: "EUR", // Greece
		GD: "XCD", // Grenada
		GT: "GTQ", // Guatemala
		GN: "GNF", // Guinea
		GW: "XOF", // Guinea-Bissau
		GY: "GYD", // Guyana
		HT: "HTG", // Haiti
		HN: "HNL", // Honduras
		HK: "HKD", // Hong Kong
		HU: "HUF", // Hungary
		IS: "ISK", // Iceland
		IN: "INR", // India
		ID: "IDR", // Indonesia
		IR: "IRR", // Iran
		IQ: "IQD", // Iraq
		IE: "EUR", // Ireland
		IL: "ILS", // Israel
		IT: "EUR", // Italy
		JM: "JMD", // Jamaica
		JP: "JPY", // Japan
		JO: "JOD", // Jordan
		KZ: "KZT", // Kazakhstan
		KE: "KES", // Kenya
		KI: "AUD", // Kiribati
		KP: "KPW", // North Korea
		KR: "KRW", // South Korea
		KW: "KWD", // Kuwait
		KG: "KGS", // Kyrgyzstan
		LA: "LAK", // Laos
		LV: "EUR", // Latvia
		LB: "LBP", // Lebanon
		LS: "LSL", // Lesotho
		LR: "LRD", // Liberia
		LY: "LYD", // Libya
		LI: "CHF", // Liechtenstein
		LT: "EUR", // Lithuania
		LU: "EUR", // Luxembourg
		MO: "MOP", // Macao
		MG: "MGA", // Madagascar
		MW: "MWK", // Malawi
		MY: "MYR", // Malaysia
		MV: "MVR", // Maldives
		ML: "XOF", // Mali
		MT: "EUR", // Malta
		MH: "USD", // Marshall Islands
		MR: "MRU", // Mauritania
		MU: "MUR", // Mauritius
		MX: "MXN", // Mexico
		FM: "USD", // Micronesia
		MD: "MDL", // Moldova
		MC: "EUR", // Monaco
		MN: "MNT", // Mongolia
		ME: "EUR", // Montenegro
		MA: "MAD", // Morocco
		MZ: "MZN", // Mozambique
		MM: "MMK", // Myanmar (Burma)
		NA: "NAD", // Namibia
		NR: "AUD", // Nauru
		NP: "NPR", // Nepal
		NL: "EUR", // Netherlands
		NZ: "NZD", // New Zealand
		NI: "NIO", // Nicaragua
		NE: "XOF", // Niger
		NG: "NGN", // Nigeria
		NO: "NOK", // Norway
		OM: "OMR", // Oman
		PK: "PKR", // Pakistan
		PW: "USD", // Palau
		PA: "PAB", // Panama
		PG: "PGK", // Papua New Guinea
		PY: "PYG", // Paraguay
		PE: "PEN", // Peru
		PH: "PHP", // Philippines
		PL: "PLN", // Poland
		PT: "EUR", // Portugal
		QA: "QAR", // Qatar
		RO: "RON", // Romania
		RU: "RUB", // Russia
		RW: "RWF", // Rwanda
		WS: "WST", // Samoa
		SM: "EUR", // San Marino
		ST: "STN", // São Tomé and Príncipe
		SA: "SAR", // Saudi Arabia
		SN: "XOF", // Senegal
		RS: "RSD", // Serbia
		SC: "SCR", // Seychelles
		SL: "SLL", // Sierra Leone
		SG: "SGD", // Singapore
		SK: "EUR", // Slovakia
		SI: "EUR", // Slovenia
		SB: "SBD", // Solomon Islands
		SO: "SOS", // Somalia
		ZA: "ZAR", // South Africa
		ES: "EUR", // Spain
		LK: "LKR", // Sri Lanka
		SD: "SDG", // Sudan
		SR: "SRD", // Suriname
		SE: "SEK", // Sweden
		CH: "CHF", // Switzerland
		SY: "SYP", // Syria
		TW: "TWD", // Taiwan
		TJ: "TJS", // Tajikistan
		TZ: "TZS", // Tanzania
		TH: "THB", // Thailand
		TG: "XOF", // Togo
		TO: "TOP", // Tonga
		TT: "TTD", // Trinidad and Tobago
		TN: "TND", // Tunisia
		TR: "TRY", // Turkey
		TM: "TMT", // Turkmenistan
		TV: "AUD", // Tuvalu
		UG: "UGX", // Uganda
		UA: "UAH", // Ukraine
		AE: "AED", // United Arab Emirates
		GB: "GBP", // United Kingdom
		US: "USD", // United States
		UY: "UYU", // Uruguay
		UZ: "UZS", // Uzbekistan
		VU: "VUV", // Vanuatu
		VE: "VES", // Venezuela
		VN: "VND", // Vietnam
		YE: "YER", // Yemen
		ZM: "ZMW", // Zambia
		ZW: "ZWL", // Zimbabwe
	};

	return currencyMapping[countryCode.toUpperCase()] || "USD"; // Default to USD if not found
};

// useLocalStorage.ts
import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
	const storedValue = localStorage.getItem(key);
	const initial = storedValue ? JSON.parse(storedValue) : initialValue;
	const [value, setValue] = useState<T>(initial);

	const setStoredValue = (newValue: T) => {
		setValue(newValue);
		localStorage.setItem(key, JSON.stringify(newValue));
	};

	return [value, setStoredValue] as const;
};

export default useLocalStorage;
