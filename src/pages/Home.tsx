import Hero from "@/components/Hero";
import HomeSectionAtm from "@/components/HomeSectionAtm";
import AdvertComp from "@/components/commons/AdvertComp";
import BrandsComp from "@/components/commons/BrandsComp";
import CardComp from "@/components/commons/CardComp";
import CategoriesCard from "@/components/commons/CategoriesCard";
import React from "react";

const Home = () => {
	return (
		<div>
			<Hero />
			<h3 className='mt-7 font-bold mb-3'>Recommended For You</h3>
			<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:overflow-x-auto md:grid-cols-2 '>
				<CardComp deal={true} />
				<CardComp />
				<CardComp />
				<CardComp deal={true} />
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
			<div className='grid  grid-cols-4 gap-4 sm:grid-cols-none sm:flex sm:overflow-x-auto md:grid-cols-2 '>
				<CardComp deal={true} />
				<CardComp />
				<CardComp />
				<CardComp deal={true} />
				<CardComp deal={true} />
				<CardComp />
				<CardComp deal={true} />
				<CardComp />
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
			<div className="flex mb-7">
				<HomeSectionAtm  />
			</div>
		</div>
	);
};

export default Home;