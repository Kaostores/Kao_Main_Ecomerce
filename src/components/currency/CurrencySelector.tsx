import { useState, useEffect } from "react";

const CurrencySelector = ({
  setSelectedCurrency,
  selectedCurrency,
  setSelectedCountry,
}: any) => {
  const [currencies, setCurrencies] = useState<any>([]);
  const [currencyToCountryMap, setCurrencyToCountryMap] = useState<any>({});

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        // Request only needed fields to reduce payload
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,currencies",
        );
        const data = await response.json();
        const currencyMap: any = {};

        // Map currency code to country name and 2-letter country code (cca2)
        data.forEach((country: any) => {
          if (country.currencies) {
            for (let currencyCode in country.currencies) {
              if (!currencyMap[currencyCode]) {
                currencyMap[currencyCode] = {
                  countryName: country.name?.common,
                  countryCode: country.cca2, // e.g. "NG"
                  currencyCode, // e.g. "NGN"
                };
              }
            }
          }
        });

        setCurrencies(Object.keys(currencyMap).sort());
        setCurrencyToCountryMap(currencyMap);
      } catch (error) {
        // Silently fail; consumer can handle UI message if needed
        console.error("Error fetching countries:", error);
      }
    };

    fetchCurrencies();
  }, []);

  const handleCurrencyChange = (event: any) => {
    const currencyCode = event.target.value;
    const selectedData = currencyToCountryMap[currencyCode];
    setSelectedCurrency(currencyCode);
    // Provide 2-letter country code expected by backend
    setSelectedCountry(selectedData?.countryCode);
  };

  return (
    <div>
      <label className='font-bold' htmlFor='currency'>
        Select Your Currency
      </label>
      <select
        className='flex h-10  w-full rounded-md border outline-none 
border-input bg-background px-3 py-2 text-sm 
ring-offset-background file:border-0 file:bg-transparent 
file:text-sm file:font-medium 
placeholder:text-muted-foreground 
focus-visible:outline-none mt-2 disabled:cursor-not-allowed 
disabled:opacity-50'
        id='currency'
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        <option value='' disabled>
          Select a currency
        </option>
        {currencies.map((currency: any) => (
          <option key={currency} value={currency}>
            {currencyToCountryMap[currency]?.countryName} - {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
