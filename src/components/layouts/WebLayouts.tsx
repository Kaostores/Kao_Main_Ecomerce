import Header from "../blocks/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/blocks/Footer";
import HomeSectionAtm from "../HomeSectionAtm";
import ScrollToTop from "@/utils/ScrollToTop";
import Breadcrumbs from "@/routes/BreadCrumb";

const WebLayouts = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const active = location?.pathname;
	return (
		<ScrollToTop>
			<div className='flex justify-center items-center flex-col'>
				<Header />
				<div className='w-[85%] sm:w-[90%] min-h-[90vh]'>
					{active !== "/" ? <Breadcrumbs /> : null}

					<Outlet />
					<div className='flex mb-2'>
						<HomeSectionAtm />
					</div>
				</div>
				<Footer />
			</div>
		</ScrollToTop>
	);
};

export default WebLayouts;
