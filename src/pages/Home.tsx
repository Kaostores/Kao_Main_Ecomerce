import Hero from "@/components/Hero";
import AdvertComp from "@/components/commons/AdvertComp";
import BrandsComp from "@/components/commons/BrandsComp";
import CardComp from "@/components/commons/CardComp";
import CategoriesCard from "@/components/commons/CategoriesCard";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import { useViewAllProductsQuery } from "@/services/apiSlice";

const Home = () => {
	const { data, isLoading } = useViewAllProductsQuery({});

	return (
		<div className='overflow-hidden'>
			<Hero />
			<h3 className='mt-7 font-bold mb-3'>Recommended For You</h3>
			<div className='w-[100%]'>
				{isLoading && !data ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{data?.data.slice(0, 4).map((props: any) => (
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

			<h3 className='mt-7 font-bold mb-3'>Categories</h3>
			<div className='grid  grid-cols-5 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
				<CategoriesCard />
			</div>
			<div>
				<div className='flex gap-5 mb-5'>
					<AdvertComp />
					<AdvertComp />
				</div>
				<AdvertComp />
			</div>
			<h3 className='mt-7 font-bold mb-3'>Hot Sales</h3>
			<div className='w-[100%]'>
				{isLoading && !data ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{data?.data.slice(0, 8).map((props: any) => (
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
	);
};

export default Home;
