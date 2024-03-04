import Header from "../blocks/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/blocks/Footer";

const WebLayouts = () => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<Header />
			<div className='w-[85%] sm:w-[90%] min-h-[90vh]'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default WebLayouts;
