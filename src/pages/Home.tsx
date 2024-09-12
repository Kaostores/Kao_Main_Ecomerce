import Hero from "@/components/Hero";
import AdvertComp from "@/components/commons/AdvertComp";

import CardComp from "@/components/commons/CardComp";

import BrandData from "@/components/reuse/BrandData";
import CategoriesData from "@/components/reuse/CategoriesData";

import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import {
	useGetHotSalesQuery,
	useViewAllPostersQuery,
	useViewAllProductsQuery,
} from "@/services/apiSlice";

const Home = () => {
	const { data, isLoading } = useViewAllProductsQuery({});
	const { data: HotData, isLoading: isHotLoading } = useGetHotSalesQuery({});

	const { data: posterData } = useViewAllPostersQuery({});
	console.log("fgtjrk", posterData);

	// const sortElectronics = data?.data?.sort((a:any, b:any)=>{
	// return a.category['electronics'] - b.category['electronics']
	// })

	const electronicsProducts = data?.data?.filter((product: any) => {
		return product.proCategoryId.name.toLowerCase() === "electronics";
	});

	console.log("electronics", electronicsProducts);

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
						{data?.data?.slice(0, 8).map((props: any) => (
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
			<CategoriesData />

			<div>
				<div className='flex gap-5 mb-5'>
					<AdvertComp data={posterData?.data[0]?.image} />
					<AdvertComp />
				</div>
				<AdvertComp />
			</div>

			<h3 className='mt-7 font-bold mb-3'>Electronics/Appliances</h3>
			<div className='w-[100%]'>
				{isLoading && !data ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{electronicsProducts?.slice(0, 4).map((props: any) => (
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
			<h3 className='mt-7 font-bold mb-3'>Hot Sales</h3>
			<div className='w-[100%]'>
				{isHotLoading && !HotData ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{HotData?.data?.map((props: any) => (
							<CardComp
								key={props.id}
								deal={true}
								isLoading={isLoading}
								{...props?.productDetails}
								productId={props?.productId}
							/>
						))}
					</div>
				)}
			</div>
			<h3 className='mt-7 font-bold mb-3'>Brand Sportlight</h3>
			<BrandData />
		</div>
	);
};

export default Home;
