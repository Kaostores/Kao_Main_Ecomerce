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
	return price?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Decoded HTML ENTITES
export const decodeHTMLEntities = (text: string) => {
	const doc = new DOMParser().parseFromString(text, "text/html");
	return doc.documentElement.textContent;
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
