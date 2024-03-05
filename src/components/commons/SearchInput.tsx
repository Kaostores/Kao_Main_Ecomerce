import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
		<div
			className='h-[40px] p-2 rounded-sm flex flex-1 text-iconGray border-border border items-center  '>
			<div>
				<CiSearch />
			</div>
			<input
				placeholder='search for products and brands...'
				className='flex-1 border-none outline-none ml-2 placeholder:text-[14px]'
			/>
		</div>
	);
}

export default SearchInput