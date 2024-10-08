import { Outlet } from "react-router-dom";
import Sidebar from "../blocks/Sidebar";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import ScrollToTop from "@/utils/ScrollToTop";

const DashboardLayout = () => {
	return (
		<ScrollToTop>
			<div className='w-full h-screen'>
				<Header />
				<div className='w-full flex justify-center'>
					<div className='flex w-[85%] mt-[15px] sm:w-[100%] md:w-[100%]'>
						<Sidebar />
						{/* <div className="ml-[15px] flex-1 bg-[#F4F4F4] rounded-[8px] w-[75%] h-[100%]">
						 */}
						<Outlet />
						{/* </div> */}
					</div>
				</div>
				<Footer />
			</div>
		</ScrollToTop>
	);
};

export default DashboardLayout;
