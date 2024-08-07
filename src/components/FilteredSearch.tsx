import React, { useState } from "react";

import { BsStarFill } from "react-icons/bs";
import { IoStarOutline } from "react-icons/io5";
import { useGetAllAdminCategoryQuery } from "@/services/apiSlice";
import { useSearchParams } from "react-router-dom";
import useUpdateUrlParams from "./SearchRoute";

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
		<div className='mr-[5px]'>
			<input
				type='radio'
				checked={isChecked}
				onChange={onChange}
				className='form-radio cursor-pointer'
				aria-label={label}
			/>
		</div>
		<div className='text-[13px] text-[#535353]'>{label}</div>
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
				{" "}
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
				type='radio'
				checked={isChecked}
				onChange={onChange}
				className='form-radio cursor-pointer'
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
			<div className='text-[13px] ml-[2px]'>& Above</div>
		</div>
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
		{[4, 3, 2, 1].map((stars) => (
			<RatingOption
				key={stars}
				stars={stars}
				isChecked={activeOption === `opt${stars + 11}`}
				onChange={() => onChange(`opt${stars + 11}`)}
			/>
		))}
	</div>
);

const FilterComponent: React.FC<any> = ({ classNames }: any) => {
	const [searchParams] = useSearchParams();
	const activeCategoryID = searchParams.get("category_id") || "";

	const [isActive2, setIsActive2] = useState<string>("opt4");
	const [isActive3, setIsActive3] = useState<string>("opt9");
	const [isActive4, setIsActive4] = useState<string>("opt12");

	const { data: catData } = useGetAllAdminCategoryQuery({});

	const categoryOptions =
		catData?.data?.length > 0
			? catData?.data?.map((key: any) => ({
					label: key?.name,
					value: key?.id,
			  }))
			: null;

	const priceOptions = [
		{ label: "NGN 1,000 - NGN 10,000", value: "opt4" },
		{ label: "NGN 10,000 - NGN 20,000", value: "opt5" },
		{ label: "NGN 30,000 - NGN 40,000", value: "opt6" },
		{ label: "NGN 40,000 - NGN 50,000", value: "opt7" },
		{ label: "NGN 50,000 - NGN 60,000", value: "opt8" },
	];

	const genderOptions = [
		{ label: "Male", value: "opt9" },
		{ label: "Female", value: "opt10" },
		{ label: "Unisex", value: "opt11" },
	];

	const updateUrlParams = useUpdateUrlParams();

	const handleCategoryChange = (value: string) => {
		console.log("Selected Category:", value);
		updateUrlParams({ category_id: value });
	};

	return (
		<div
			className={`flex flex-col ${classNames} mr-5 md:w-[32%] lg:w-[20%] xl:min-w-[17%]`}>
			<FilterSection
				title='Category'
				options={categoryOptions}
				activeOption={activeCategoryID}
				onChange={handleCategoryChange}
			/>
			<FilterSection
				title='Price Range'
				options={priceOptions}
				activeOption={isActive2}
				onChange={setIsActive2}
			/>
			<FilterSection
				title='Gender'
				options={genderOptions}
				activeOption={isActive3}
				onChange={setIsActive3}
			/>
			<RatingSection activeOption={isActive4} onChange={setIsActive4} />
		</div>
	);
};

export default FilterComponent;
