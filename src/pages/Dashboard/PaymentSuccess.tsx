import { FiCheckCircle } from "react-icons/fi";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Instance } from "@/utils/AxiosConfig";

const PaymentSuccess = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		const verifyPayment = async () => {
			const searchParams = new URLSearchParams(location.search);
			const status = searchParams.get("status");
			const tx_ref = searchParams.get("tx_ref");
			const transaction_id = searchParams.get("transaction_id");
			if (status === "successful" || "completed") {
				try {
					const response = await Instance.get(
						`/transactions/wallet/funding/payment/verify`,
						{
							params: { status, tx_ref, transaction_id },
						},
					);
					if (response.data.success) {
					} else {
						// Navigate to failure page if needed
					}
				} catch (error) {
					// Navigate to failure page in case of error
				}
			} else {
				// Navigate to failure page if payment isn't successful
			}
		};
		verifyPayment();
	}, [location.search, navigate]);

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<div className='bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center'>
				<FiCheckCircle className='text-secondary text-6xl mb-4 flex justify-center w-full' />
				<h2 className='text-2xl font-bold mb-2'>Wallet Funding Successful!</h2>
				<p className='text-gray-600 mb-4'>
					Your wallet has been funded successfully. The amount has been added to
					your balance.
				</p>
				<button
					onClick={() => {
						window.location.href = "/dashboard";
					}}
					className='bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300'>
					View wallet
				</button>
			</div>
		</div>
	);
};

export default PaymentSuccess;
