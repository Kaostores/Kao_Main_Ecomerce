import CardComp from "@/components/commons/CardComp";
import {
	useGetSingleCategoryQuery,
	useSearchProductQuery,
	useViewAllProductsQuery,
} from "@/services/apiSlice";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import FilterComponent from "@/components/FilteredSearch";
import { IoFilterSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import FilterBar from "@/components/FilterBar";
import BrandData from "@/components/reuse/BrandData";
import EmptyData from "@/components/reuse/EmptyData";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
	const {
		data: allProducts,
		isLoading: isAllLoading,
		isFetching: isAllFetching,
	} = useViewAllProductsQuery({});

	const [searchParams] = useSearchParams();

	const query = searchParams.get("search") || "";
	const categoryID = searchParams.get("category_id") || "";
	const subCategoryID = searchParams.get("sub_category_id") || "";
	const minPrice = searchParams.get("minPrice") || "";
	const maxPrice = searchParams.get("maxPrice") || "";
	const rating = searchParams.get("rating") || "";
	const gender = searchParams.get("gender") || "";
	const brand_id = searchParams.get("brand_id") || "";
	const country = searchParams.get("country") || "";

	const { data: catData } = useGetSingleCategoryQuery({
		categoryID: categoryID,
	});

	useEffect(() => {
		if (
			query ||
			categoryID ||
			subCategoryID ||
			minPrice ||
			maxPrice ||
			rating ||
			brand_id ||
			country ||
			gender
		) {
			// dispatch(fetchProducts({ query, categoryID }));
		}
	}, [
		query,
		categoryID,
		subCategoryID,
		minPrice,
		maxPrice,
		rating,
		gender,
		brand_id,
		country,
	]);

	const {
		data: searchData,
		isLoading: isSearchLoading,
		isFetching: isSearchFetching,
	} = useSearchProductQuery({
		query,
		categoryID,
		subCategoryID,
		minPrice,
		maxPrice,
		rating,
		gender,
		brand_id,
		country,
	});

	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	// Update isSearching to reflect the presence of any search parameters
	const isSearching =
		query?.length > 0 ||
		categoryID?.length > 0 ||
		subCategoryID?.length > 0 ||
		minPrice?.length > 0 ||
		rating?.length > 0 ||
		gender?.length > 0 ||
		brand_id?.length > 0 ||
		country?.length > 0 ||
		maxPrice?.length > 0;
	const isLoading = isAllLoading || (isSearching && isSearchLoading);
	const isFetching = isAllFetching || (isSearching && isSearchFetching);
	const products = isSearching ? searchData?.data : allProducts?.data;

	return (
		<>
			<FilterBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<div className='w-[100%] min-h-[100%] flex xl:justify-center md:justify-center items-center sm:overflow-hidden'>
				<div className='w-[100%] flex flex-col my-[10px]'>
					<div className='hidden sm:flex mb-7 items-center gap-5'>
						<div onClick={toggleSidebar} className='text-primary text-[20px]'>
							<IoFilterSharp />
						</div>
						<div className='h-[40px] justify-center items-center flex w-full bg-primary rounded-md text-white font-bold'>
							{catData?.data?.name ? catData?.data?.name : "General"}
						</div>
					</div>
					<div className='w-[100%] flex justify-between'>
						<FilterComponent classNames={"sm:hidden"} />
						<div className='w-[100%] sm:min-w-[100%] md:w-[80%] lg:w-[79%] overflow-hidden'>
							<div className='w-[100%] xl:flex sm:flex md:flex'>
								<div className='w-[100%]'>
									{isLoading || isFetching ? (
										<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
											{[...Array(6)].map((_, index) => (
												<ProductSkeleton key={index} />
											))}
										</div>
									) : (
										<div className='grid grid-cols-3 gap-4 sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1'>
											{products?.length > 0 ? (
												products.map((props: any) => (
													<CardComp
														key={props.id}
														deal={true}
														isLoading={isLoading}
														{...props}
													/>
												))
											) : (
												<div className='col-span-3 text-center'>
													<EmptyData title='No Product found' />
												</div>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<h3 className='mt-7 font-bold mb-3'>Brand Spotlight</h3>
					<BrandData />
				</div>
			</div>
		</>
	);
};

export default SearchPage;
