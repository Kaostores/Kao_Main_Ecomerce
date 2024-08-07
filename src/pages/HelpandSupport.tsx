import SideNav from "./SideNav";
import Mobilenav from "./Mobilenav";
import HelpHero from "@/components/HelpHero";

const HelpandSupport = () => {
	return (
		<div className='w-[100%] flex flex-col mt-[15px] mb-[10px] justify-center items-center'>
			<HelpHero />
			<div className='w-[85%] mt-[50px] md:hidden sm:hidden'>
				<SideNav />
			</div>
			<div className='w-[90%] mt-[30px] hidden md:flex sm:flex'>
				<Mobilenav />
			</div>
		</div>
	);
};

export default HelpandSupport;
