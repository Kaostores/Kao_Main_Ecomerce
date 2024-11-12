import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { IoStarOutline } from "react-icons/io5";
import {
	useGetAllAdminCategoryQuery,
	useViewAllSpotlightQuery,
} from "@/services/apiSlice";
import { useSearchParams } from "react-router-dom";
import useUpdateUrlParams from "./SearchRoute";
import { CountrySelector } from "./country/CountrySelector";

interface FilterOptionProps {
	label: string;
	isChecked: boolean;
	onChange: () => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({
	label,
	isChecked,
	onChange,
}) => (
	<div className='flex justify-center items-center mb-[3px]'>
		<div className='mr-[5px] '>
			<input
				type='checkbox' // Changed from 'radio' to 'checkbox'
				checked={isChecked}
				onChange={onChange}
				className='form-checkbox cursor-pointer'
				aria-label={label}
			/>
		</div>
		<div className='text-[13px] sm:text-[16px] text-[#535353]'>{label}</div>
	</div>
);

interface FilterSectionProps {
	title: string;
	options: Array<{ label: string; value: string }>;
	activeOption: string;
	onChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
	title,
	options,
	activeOption,
	onChange,
}) => (
	<div className='flex flex-col items-start mb-[20px]'>
		<div className='text-[17px] font-bold mb-[5px]'>{title}</div>
		{options?.length > 0 ? (
			<>
				{options.map((option) => (
					<FilterOption
						key={option.value}
						label={option.label}
						isChecked={activeOption === option.value}
						onChange={() => onChange(option.value)}
					/>
				))}
			</>
		) : (
			<div className='animate-pulse'>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4'></div>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4'></div>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4'></div>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4'></div>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4'></div>
			</div>
		)}
	</div>
);

interface RatingOptionProps {
	stars: number;
	isChecked: boolean;
	onChange: () => void;
}

const RatingOption: React.FC<RatingOptionProps> = ({
	stars,
	isChecked,
	onChange,
}) => (
	<div className='flex justify-center items-center mb-[3px]'>
		<div className='mr-[5px]'>
			<input
				type='checkbox' // Changed from 'radio' to 'checkbox'
				checked={isChecked}
				onChange={onChange}
				className='form-checkbox cursor-pointer'
				aria-label={`${stars} stars and above`}
			/>
		</div>
		<div className='flex'>
			<div className='text-[13px] text-[#535353] flex items-center'>
				<div className='text-[gold] flex'>
					{[...Array(stars)].map((_, i) => (
						<BsStarFill key={i} />
					))}
					{[...Array(5 - stars)].map((_, i) => (
						<IoStarOutline key={i} />
					))}
				</div>
			</div>
			<div className='text-[13px] ml-[2px]'></div>
		</div>
	</div>
);

const CountrySection = () => (
	<div className='flex flex-col items-start'>
		<div className='text-[17px] font-bold mb-[5px]'>Country</div>

		<CountrySelector />
		<br />
	</div>
);

interface RatingSectionProps {
	activeOption: string;
	onChange: (value: string) => void;
}

const RatingSection: React.FC<RatingSectionProps> = ({
	activeOption,
	onChange,
}) => (
	<div className='flex flex-col items-start'>
		<div className='text-[17px] font-bold mb-[5px]'>Rating</div>
		{[5, 4, 3, 2, 1].map((stars) => (
			<RatingOption
				key={stars}
				stars={stars}
				isChecked={activeOption === `${stars}`}
				onChange={() => onChange(`${stars}`)}
			/>
		))}
	</div>
);

const FilterComponent: React.FC<any> = ({ classNames }: any) => {
	const [searchParams] = useSearchParams();
	const activeCategoryID = searchParams.get("category_id") || "";

	const [isActive2, setIsActive2] = useState<string>("");
	const [isActive3, setIsActive3] = useState<string>("");
	const [isActive4, setIsActive4] = useState<string>("");
	const [isActive5, setIsActive5] = useState<string>("");

	const { data: catData } = useGetAllAdminCategoryQuery({});
	const { data: brandData } = useViewAllSpotlightQuery({});

	const categoryOptions =
		catData?.data?.length > 0
			? catData?.data?.map((key: any) => ({
					label: key?.name,
					value: key?.id,
			  }))
			: null;

	const brandOptions =
		brandData?.data?.length > 0
			? brandData?.data?.map((key: any) => ({
					label: key?.name,
					value: key?.id,
			  }))
			: null;

	const priceOptions = [
		{
			label: "NGN 1,000 - NGN 10,000",
			value: "opt4",
			minPrice: 1000,
			maxPrice: 10000,
		},
		{
			label: "NGN 10,000 - NGN 20,000",
			value: "opt5",
			minPrice: 10000,
			maxPrice: 20000,
		},
		{
			label: "NGN 20,000 - NGN 30,000",
			value: "opt6",
			minPrice: 20000,
			maxPrice: 30000,
		},
		{
			label: "NGN 30,000 - NGN 40,000",
			value: "opt7",
			minPrice: 30000,
			maxPrice: 40000,
		},
		{
			label: "NGN 40,000 - NGN 50,000",
			value: "opt8",
			minPrice: 40000,
			maxPrice: 50000,
		},
	];

	const genderOptions = [
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
		{ label: "Unisex", value: "unisex" },
	];

	const updateUrlParams = useUpdateUrlParams();

	const handleCategoryChange = (value: string) => {
		if (activeCategoryID === value) {
			updateUrlParams({ category_id: "" }); // Uncheck: clear the parameter
		} else {
			updateUrlParams({ category_id: value });
		}
	};

	const handlePriceChange = (value: string) => {
		const selectedOption = priceOptions.find(
			(option) => option.value === value,
		);
		if (isActive2 === value) {
			updateUrlParams({
				filter: "",
				minPrice: "",
				maxPrice: "",
			});
			setIsActive2("");
		} else if (selectedOption) {
			updateUrlParams({
				filter: "",
				minPrice: selectedOption.minPrice,
				maxPrice: selectedOption.maxPrice,
			});
			setIsActive2(value);
		}
	};

	const handleGenderChange = (value: string) => {
		if (isActive3 === value) {
			updateUrlParams({
				gender: "",
			});
			setIsActive3("");
		} else {
			updateUrlParams({
				gender: value,
			});
			setIsActive3(value);
		}
	};

	const handleRatingChange = (value: string) => {
		if (isActive4 === value) {
			updateUrlParams({
				rating: "",
			});
			setIsActive4("");
		} else {
			updateUrlParams({
				rating: value,
			});
			setIsActive4(value);
		}
	};

	const handleBrandChange = (value: string) => {
		if (isActive5 === value) {
			updateUrlParams({
				brand_id: "",
			});
			setIsActive5("");
		} else {
			updateUrlParams({
				brand_id: value,
			});
			setIsActive5(value);
		}
	};

	return (
		<div
			className={`flex flex-col ${classNames} mr-5 md:w-[32%] lg:w-[20%] xl:min-w-[17%] `}>
			<FilterSection
				title='Category'
				options={categoryOptions}
				activeOption={activeCategoryID}
				onChange={handleCategoryChange}
			/>
			<CountrySection />
			<FilterSection
				title='Price Range'
				options={priceOptions}
				activeOption={isActive2}
				onChange={handlePriceChange}
			/>
			<FilterSection
				title='Brands'
				options={brandOptions}
				activeOption={isActive5}
				onChange={handleBrandChange}
			/>
			<FilterSection
				title='Gender'
				options={genderOptions}
				activeOption={isActive3}
				onChange={handleGenderChange}
			/>
			<RatingSection activeOption={isActive4} onChange={handleRatingChange} />
		</div>
	);
};

export default FilterComponent;
