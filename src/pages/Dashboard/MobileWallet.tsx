import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import WalletHistoryTable from "./Subpages/WalletHistoryTable";
// import { toast } from "react-toastify";

const MobileWallet = () => {
	const [show] = useState(true);

	const Navigate = useNavigate();

	return (
		<>
			{show ? (
				<div className=' ml-[15px] md:ml-0 w-[100%] flex sm:justify-center flex-col items-center sm:ml-0'>
					<div className='w-[100%] flex-col sm:items-center p-[15px] sm:p-0 md:p-0 bg-[#F4F4F4] rounded-[8px] sm:ml-0 sm:bg-white md:bg-white'>
						<h3 className='font-[500] md:hidden sm:hidden'>Wallet Overview</h3>

						<div
							onClick={() => Navigate(-1)}
							className='w-[100%] justify-center items-center hidden md:flex sm:flex'>
							<div className='w-[90%] md:w-[85%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary ml-[12px] text-[17px] font-[600]'>
									Wallet
								</h3>
							</div>
						</div>
					</div>
					<div className=' w-[90%] md:w-[85%] mt-5'>
						<WalletHistoryTable />
					</div>
				</div>
			) : null}
		</>
	);
};

export default MobileWallet;
