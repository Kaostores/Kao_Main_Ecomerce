import { FiCheckCircle, FiXCircle } from "react-icons/fi"; // Importing icons for success and cancel
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Instance } from "@/utils/AxiosConfig";

const CheckOutSuccess = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const verifyPayment = async () => {
			const searchParams = new URLSearchParams(location.search);
			const status = searchParams.get("status");
			const tx_ref = searchParams.get("tx_ref");
			const transaction_id = searchParams.get("transaction_id");

			if (status === "cancelled") {
				// No verification needed for cancelled status
				return;
			}

			if (status === "successful" || status === "completed") {
				try {
					const response = await Instance.get(`/carts/payment/verify`, {
						params: { status, tx_ref, transaction_id },
					});

					if (response.data.success) {
						// Handle success case (e.g., display a success message)
					} else {
						// Navigate to failure page if verification fails
						navigate("/payment-failure");
					}
				} catch (error) {
					// Handle any errors during verification
				}
			} else {
				// Navigate to failure page if payment isn't successful or completed
				navigate("/payment-failure");
			}
		};

		verifyPayment();
	}, [location.search, navigate]);

	// Getting the status from URL parameters
	const searchParams = new URLSearchParams(location.search);
	const status = searchParams.get("status");

	// Conditional rendering based on status
	if (status === "cancelled") {
		return (
			<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
				<div className='bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center'>
					<FiXCircle className='text-red-600 text-6xl mb-4 flex justify-center w-full' />
					<h2 className='text-2xl font-bold mb-2'>Order Cancelled</h2>
					<p className='text-gray-600 mb-4'>
						Your order has been cancelled. If you have any questions, please
						contact support.
					</p>
					<button
						onClick={() => {
							window.location.href = "/dashboard";
						}}
						className='bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300'>
						Continue Shopping
					</button>
				</div>
			</div>
		);
	}

	// Default success message
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
			<div className='bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center'>
				<FiCheckCircle className='text-secondary text-6xl mb-4 flex justify-center w-full' />
				<h2 className='text-2xl font-bold mb-2'>Payment Successful!</h2>
				<p className='text-gray-600 mb-4'>
					Thank you for your purchase. Your payment was processed successfully.
				</p>
				<button
					onClick={() => {
						window.location.href = "/dashboard";
					}}
					className='bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300'>
					Continue Shopping
				</button>
			</div>
		</div>
	);
};

export default CheckOutSuccess;
