import React from "react";
import BrandsCompSkeleton from "../skeleton/BrandCompSkeleton";
import { useGetAllCategoryQuery } from "@/services/apiSlice";
import CategoriesCard from "../commons/CategoriesCard";

const CategoriesData = () => {
	const { data: categoryData, isLoading: isLoading } = useGetAllCategoryQuery(
		{},
	);

	// console.log("category", Object?.values(categoryData?.data));
	return (
		<div>
			{isLoading && !categoryData ? (
				<div className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
					{[...Array(6)].map((_, index) => (
						<BrandsCompSkeleton key={index} />
					))}
				</div>
			) : (
				<div className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
					{Object?.values(categoryData?.data)?.map((props: any) => (
						<CategoriesCard key={props.id} props={props} />
					))}
				</div>
			)}
		</div>
	);
};

export default CategoriesData;
