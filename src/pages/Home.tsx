import Hero from "@/components/Hero";
import AdvertComp from "@/components/commons/AdvertComp";
import BrandsComp from "@/components/commons/BrandsComp";
import CardComp from "@/components/commons/CardComp";
import CategoriesCard from "@/components/commons/CategoriesCard";
import { useViewAllProductsQuery } from "@/services/apiSlice";

const Home = () => {

	const {data, isLoading} = useViewAllProductsQuery({})

	return (
		<div>
			<Hero />
			<h3 className='mt-7 font-bold mb-3'>Recommended For You</h3>
			<div className="w-[100%]">
						{isLoading && !data ? (
						<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
						</div>
						) : (
							<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
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
			<div className="w-[100%]">
						{isLoading && !data ? (
						<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
							<div
										role='status'
										className='space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center'>
										<div className='flex items-center justify-center w-full h-48 bg-gray-400 rounded sm:w-96 dark:bg-gray-900'></div>
										<div className='w-full'>
											<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5'></div>
											<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
										</div>
										<span className='sr-only'>Loading...</span>
							</div>
						</div>
						) : (
							<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:hiddden md:grid-cols-2 '>
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
