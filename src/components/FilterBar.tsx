import FilterComponent from "./FilteredSearch";
import { IoIosArrowBack } from "react-icons/io";

const FilterBar = ({ isOpen, toggleSidebar }: any) => {
	return (
		<div
			className={`fixed top-0 left-0 overflow-y-scroll h-full w-full  bg-white transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 ease-in-out z-40`}>
			<div className='p-4'>
				<h5
					onClick={toggleSidebar}
					className='text-sm font-semibold flex gap-3 text-primary mt-3 mb-5'>
					<div>
						<IoIosArrowBack />
					</div>
					<div>Filter</div>
				</h5>

				<div onClick={toggleSidebar} className=''>
					<FilterComponent />
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
