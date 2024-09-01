import SideNav from "./SideNav";
import Mobilenav from "./Mobilenav";
import HelpHero from "@/components/HelpHero";
import { useState } from "react";

import { sections } from "@/components/json/SupportData.json";

const HelpandSupport = () => {
	const [selectedSection, setSelectedSection] = useState<any>(sections[0]);
	const [selectedItem] = useState<any>(sections[0].items[0]);
	const [filteredSections, setFilteredSections] = useState<any>(sections);

	const handleSearch = (query: any) => {
		if (!query) {
			setFilteredSections(sections);
			return;
		}

		const filtered = sections
			.map((section) => {
				const filteredItems = section.items.filter(
					(item) =>
						item.subTitle.toLowerCase().includes(query.toLowerCase()) ||
						item.content.toLowerCase().includes(query.toLowerCase()),
				);

				return {
					...section,
					items: filteredItems,
				};
			})
			.filter((section) => section.items.length > 0);

		setFilteredSections(filtered);
	};
	return (
		<div className='w-[100%] flex flex-col mt-[15px] mb-[10px] justify-center items-center'>
			<HelpHero handleSearch={handleSearch} />
			<div className='w-[85%] mt-[50px] md:hidden sm:hidden'>
				<SideNav
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
					filteredSections={filteredSections}
					selectedItem={selectedItem}
				/>
			</div>
			<div className='w-[90%] mt-[30px] hidden md:flex sm:flex'>
				<Mobilenav />
			</div>
		</div>
	);
};

export default HelpandSupport;
