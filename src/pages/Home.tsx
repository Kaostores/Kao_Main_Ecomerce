import Hero from "@/components/Hero";
import CardComp from "@/components/commons/CardComp";
import React from "react";

const Home = () => {
	return (
		<div>
			<Hero />
			<h3 className='mt-7 font-bold'>Recommended For You</h3>
			<div className="flex gap-5 flex-wrap">
				<CardComp deal = {true} />
				<CardComp />
				<CardComp />
				<CardComp />
				<CardComp />
			</div>
		</div>
	);
};

export default Home;
