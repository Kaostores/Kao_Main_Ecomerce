"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
// import { useNavigate } from "react-router-dom";
import useUpdateUrlParams from "../SearchRoute";

export function CountrySelector() {
	const [open, setOpen] = React.useState<any>(false);
	const [value, setValue] = React.useState<any>(""); // State for selected country
	const [countries, setCountries] = React.useState<any>([]); // State for fetched countries
	const updateUrlParams = useUpdateUrlParams();

	// Function to handle country change
	const handleCountryChange = (value: string) => {
		// Update searchParams with the selected country code
		updateUrlParams({ country: value });
	};

	React.useEffect(() => {
		const fetchCountries = async () => {
			try {
				const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,currencies");
				const data = await response.json();

				// Map countries to the desired format using cca2 for 2-letter country codes
				const countryOptions = data.map((country: any) => ({
					value: country.cca2, // Using cca2 code (2-letter ISO country code)
					label: country.name.common, // Common name of the country
				}));

				// Manually define Nigeria
				const nigeria = { value: "NG", label: "Nigeria" };

				// Check if Nigeria is already in the list
				if (
					!countryOptions.some(
						(country: any) => country.value === nigeria.value,
					)
				) {
					console.log("Adding Nigeria to the list"); // Log addition of Nigeria
					countryOptions.push(nigeria);
				} else {
					console.log("Nigeria already exists in the list"); // Log if Nigeria already exists
				}

				setCountries(countryOptions);
			} catch (error) {
				console.error("Error fetching countries:", error);
			}
		};

		fetchCountries();
	}, []);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-[170px] justify-between'>
					{value
						? countries.find((country: any) => country.value === value)?.label
						: "Select country..."}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[300px] p-0'>
				<Command>
					<CommandInput placeholder='Search country...' />
					<CommandList>
						<CommandEmpty>No country found.</CommandEmpty>
						<CommandGroup>
							{countries.map((country: any) => (
								<CommandItem
									key={country.value}
									value={country.value}
									onSelect={(currentValue) => {
										// Update the selected country value
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);

										// Call handleCountryChange when a country is selected
										handleCountryChange(
											currentValue === value ? "" : currentValue,
										);
									}}>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === country.value ? "opacity-100" : "opacity-0",
										)}
									/>
									{country.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
