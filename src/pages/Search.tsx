import react from "react";
import { BsStarFill } from "react-icons/bs";
import { IoStarOutline } from "react-icons/io5";
import CardComp from "@/components/commons/CardComp";
import BrandsComp from "@/components/commons/BrandsComp";
import { useViewAllProductsQuery } from "@/services/apiSlice";

const SearchPage = () => {
	const [isActive, setIsActive] = react.useState(null);
	const [isActive2, setIsActive2] = react.useState(null);
	const [isActive3, setIsActive3] = react.useState(null);
	const [isActive4, setIsActive4] = react.useState(null);

	const { data, isLoading } = useViewAllProductsQuery({});

	console.log("Fetching data", data);

	const handleChange = (value: any) => {
		setIsActive(value);
	};
	const handleChange2 = (value: any) => {
		setIsActive2(value);
	};
	const handleChange3 = (value: any) => {
		setIsActive3(value);
	};
	const handleChange4 = (value: any) => {
		setIsActive4(value);
	};

	return (
		<div className='w-[100%] min-h-[100%] flex xl:justify-center md:justify-center items-center sm:overflow-hidden'>
			<div className='w-[100%]  flex flex-col my-[10px]'>
				<div className='w-[100%] flex justify-between '>
					<div className='flex flex-col sm:hidden mr-5 md:w-[32%] lg:w-[20%] xl:min-w-[17%]'>
						<div className='flex flex-col items-start mb-[20px]'>
							<div className='text-[13px] font-bold mb-[5px]'>Category</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive === "opt1"}
										onClick={() => handleChange("opt1")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>
									Phone and Tablet
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive === "opt2"}
										onClick={() => handleChange("opt2")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>Electronic</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive === "opt3"}
										onClick={() => handleChange("opt3")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>Accessories</div>
							</div>
						</div>
						<div className='flex flex-col items-start mb-[20px]'>
							<div className='text-[13px] font-bold mb-[5px]'>Price Range</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive2 === "opt4"}
										onClick={() => handleChange2("opt4")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>
									NGN 1,000 - NGN 10,000
								</div>
							</div>

							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive2 === "opt5"}
										onClick={() => handleChange2("opt5")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>
									NGN 10,000 - NGN 20000
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive2 === "opt6"}
										onClick={() => handleChange2("opt6")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>
									NGN 30,000 - NGN 40,000
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive2 === "opt7"}
										onClick={() => handleChange2("opt7")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>
									NGN 40,000 - NGN 50,000
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive2 === "opt8"}
										onClick={() => handleChange2("opt8")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>
									NGN 50,000 - NGN 60,000
								</div>
							</div>
						</div>
						<div className='flex flex-col items-start mb-[20px]'>
							<div className='text-[13px] font-bold mb-[5px]'>Gender</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive3 === "opt9"}
										onClick={() => handleChange3("opt9")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>Male</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive3 === "opt10"}
										onClick={() => handleChange3("opt10")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>Female</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive3 === "opt11"}
										onClick={() => handleChange3("opt11")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='text-[13px] text-[#535353]'>Unisex</div>
							</div>
						</div>
						<div className='flex flex-col items-start'>
							<div className='text-[13px] font-bold mb-[5px]'>Rating</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive4 === "opt12"}
										onClick={() => handleChange4("opt12")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='flex'>
									<div className='text-[13px] text-[#535353] flex items-center'>
										<div className='text-[gold] flex'>
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
										</div>
										<div className=''>
											<IoStarOutline />
										</div>
									</div>
									<div className='text-[13px] ml-[2px]'>& Above</div>
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive4 === "opt13"}
										onClick={() => handleChange4("opt13")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='flex'>
									<div className='text-[13px] text-[#535353] flex items-center'>
										<div className='text-[gold] flex'>
											<BsStarFill />
											<BsStarFill />
											<BsStarFill />
										</div>
										<div className='flex'>
											<IoStarOutline />
											<IoStarOutline />
										</div>
									</div>
									<div className='text-[13px] ml-[2px]'>& Above</div>
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive4 === "opt14"}
										onClick={() => handleChange4("opt14")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='flex'>
									<div className='text-[13px] text-[#535353] flex items-center'>
										<div className='text-[gold] flex'>
											<BsStarFill />
											<BsStarFill />
										</div>
										<div className='flex'>
											<IoStarOutline />
											<IoStarOutline />
											<IoStarOutline />
										</div>
									</div>
									<div className='text-[13px] ml-[2px]'>& Above</div>
								</div>
							</div>
							<div className='flex justify-center items-center mb-[3px]'>
								<div className='mr-[5px]'>
									<input
										type='radio'
										checked={isActive4 === "opt15"}
										onClick={() => handleChange4("opt15")}
										className='form-radio cursor-pointer'
									/>
								</div>
								<div className='flex'>
									<div className='text-[13px] text-[#535353] flex items-center'>
										<div className='text-[gold] flex'>
											<BsStarFill />
										</div>
										<div className='flex'>
											<IoStarOutline />
											<IoStarOutline />
											<IoStarOutline />
											<IoStarOutline />
										</div>
									</div>
									<div className='text-[13px] ml-[2px]'>& Above</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-[100%] sm:min-w-[100%] md:w-[80%] lg:w-[79%] overflow-hidden  '>
						<div className='w-[100%] xl:flex sm:flex md:flex'>
							<div className='w-[100%]'>
								{isLoading && !data ? (
									<div className='grid grid-cols-3 gap-4  sm:justify-center sm:flex sm:items-center sm:grid-cols-1 md:grid-cols-2 sm:flex-col flex-1 '>
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
									<div className='grid grid-cols-3 gap-4  sm:justify-center sm:flex sm:items-center sm:grid-cols-1 md:grid-cols-2 sm:flex-col flex-1 '>
										{data?.data?.map((props: any) => (
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
						</div>
					</div>
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
		</div>
	);
};
export default SearchPage;
