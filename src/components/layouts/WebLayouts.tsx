import Header from "../blocks/Header";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "@/components/blocks/Footer";
import HomeSectionAtm from "../HomeSectionAtm";
import { useEffect } from "react";

const WebLayouts = () => {
	const location = useLocation();
	const active = location?.pathname;

	return (
		<div className='flex justify-center items-center flex-col'>
			<Header />
			<div
				className={`w-[${active === "/help&support" ? "100%" : "85%"}] sm:w-[${
					active === "/help&support" ? "100%" : "90%"
				}] min-h-[90vh]`}>
				<Outlet />
				<div
					className={`flex mb-2  ${
						active === "/help&support" ? "hidden" : ""
					}`}>
					<HomeSectionAtm />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default WebLayouts;
