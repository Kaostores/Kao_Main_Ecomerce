import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
	const navigate = useNavigate();
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
						navigate("/");
					}}
					className='bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary transition duration-300'>
					Continue Shopping
				</button>
			</div>
		</div>
	);
};

export default PaymentSuccess;
