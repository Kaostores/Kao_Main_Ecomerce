import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";

import { useNavigate } from "react-router-dom";
import useUpdateUrlParams from "../SearchRoute";

const SearchInput = () => {
	const dispatch = useDispatch();
	const updateUrlParams = useUpdateUrlParams();
	const { query } = useSelector((state: any) => state.persistedReducer);
	const [searchValue, setSearchValue] = useState(query);
	const navigate = useNavigate();

	useEffect(() => {
		setSearchValue(query);
	}, [query]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			updateUrlParams({ query: searchValue });
			navigate(`/search/?search=${searchValue}`);
			// Optionally, trigger any search-related API call or action here
		}
	};

	return (
		<div className='h-[40px] p-2 rounded-sm flex flex-1 text-iconGray border-border border items-center'>
			<div>
				<CiSearch />
			</div>
			<input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder='Search products...'
				className='flex-1 border-none outline-none ml-2 placeholder:text-[14px]'
				type='search'
			/>
		</div>
	);
};

export default SearchInput;
