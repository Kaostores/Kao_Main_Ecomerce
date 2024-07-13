import CardComp from "@/components/commons/CardComp";
import BrandsComp from "@/components/commons/BrandsComp";
import { useViewAllProductsQuery } from "@/services/apiSlice";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import FilterComponent from "@/components/FilteredSearch";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";
import FilterBar from "@/components/FilterBar";

const SearchPage = () => {
	const { data, isLoading, isFetching } = useViewAllProductsQuery({});
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<FilterBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
			<div className='w-[100%] min-h-[100%] flex xl:justify-center md:justify-center items-center sm:overflow-hidden'>
				<div className='w-[100%]  flex flex-col my-[10px]'>
					<div className='hidden sm:flex mb-7 items-center gap-5 '>
						<div onClick={toggleSidebar} className='text-primary text-[20px]'>
							<IoFilterSharp />
						</div>
						<div className='h-[40px] justify-center items-center flex w-full bg-primary rounded-md text-white font-bold'>
							Electronics
						</div>
					</div>
					<div className='w-[100%] flex justify-between '>
						<FilterComponent classNames={"sm:hidden"} />

						<div className='w-[100%] sm:min-w-[100%] md:w-[80%] lg:w-[79%] overflow-hidden  '>
							<div className='w-[100%] xl:flex sm:flex md:flex'>
								<div className='w-[100%]'>
									{isLoading || isFetching ? (
										<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
											{[...Array(6)].map((_, index) => (
												<ProductSkeleton key={index} />
											))}
										</div>
									) : (
										<div className='grid grid-cols-3 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
											{data?.data?.map((props: any) => (
												<CardComp
													key={props.id}
													deal={true}
													isLoading={isLoading}
													{...props}
												/>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>

					<h3 className='mt-7 font-bold mb-3'>Brand Sportlight</h3>
					<div className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
						<BrandsComp />
					</div>
				</div>
			</div>
		</>
	);
};
export default SearchPage;
