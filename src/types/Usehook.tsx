import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "@/services/apiSlice";
import ShowToast from "@/components/reuse/ShowToast";
import { useDispatch } from "react-redux";
import { clearCart } from "@/services/reducers";

interface RootState {
	persistedReducer: {
		currentUser: {
			email?: string;
			phone?: string;
			name?: string;
		};
		cart: CartItem[];
		addresses: AddressType;
	};
}

interface CartItem {
	variant: {
		id: string;
		price: number;
	};
	quantity: number;
	coupon?: string;
	productID: any;
	id: any;
	productName: any;
	price: any;
}

interface AddressType {
	fullname: string;
	phone: string;
	address: string;
	state?: string;
	city?: string;
}

interface FlutterWavePaymentProps {
	amount: number;
	cartItems: CartItem[];
	addressId: any;
	disabled: boolean;
}

export const FlutterWavePayment: React.FC<FlutterWavePaymentProps> = ({
	amount,
	addressId,
	disabled,
}) => {
	const [createOrder] = useCreateOrderMutation();
	const { user, cartItems } = useSelector((state: RootState) => ({
		user: state.persistedReducer.currentUser,
		cartItems: state.persistedReducer.cart,
	}));

	const dispatch = useDispatch();

	const publicKey = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY as string | undefined;
	const config = {
		public_key: publicKey ?? "",
		tx_ref: `KAO-${Date.now()}`,
		amount,
		currency: "NGN",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: user?.email ?? "",
			phone_number: user?.phone ?? "",
			name: user?.name ?? "",
		},
		customizations: {
			title: "Payment",
			description: "Payment for items in cart",
			logo: "https://example.com/path/to/logo.png",
		},
		callback: (response: any) => {
			// Check the correct response field for successful payment
			if (
				response.status === "successful" ||
				response.charge_response_code === "00"
			) {
				const orderData = {
					cart: cartItems.map((cart) => ({
						variant: cart.variant === null ? null : cart.id,
						productID: cart?.productID,
						productName: cart?.productName,
						quantity: cart.quantity,
						price: cart?.price,
					})),

					tx_ref: response?.tx_ref,
					totalPrice: amount,
					orderTotal: amount,
					paymentMethod: "prepaid",
					couponCode: "",
					shippingAddress: addressId, //This is the id of the one of the customer addressses
					orderNote: "Additional notes about the order",
				};

				createOrder(orderData)
					.unwrap()
					.then(() => {
						ShowToast(true, "Order created successfully!");
						dispatch(clearCart());
					})
					.catch(() => {
						ShowToast(false, "Failed to create order");
					});
			} else {
				ShowToast(false, "Payment failed");
			}
			closePaymentModal();
		},

		onClose: () => {
			ShowToast(false, "Transaction terminated");
		},
	};

	return (
		<div className='w-full mt-2'>
			<FlutterWaveButton
				className={`w-[100%] xl:flex lg:flex md:flex justify-center items-center text-white py-[10px] rounded-sm mt-[20px] sm:mt-[0px] ${
					disabled || amount < 100
						? "bg-[#B4B4B4] cursor-not-allowed"
						: "bg-secondary cursor-pointer"
				}`}
				text='yes'
				{...config}
				disabled={disabled || amount < 100}></FlutterWaveButton>
			{amount < 100 && <p>Amount should be at least 100.</p>}
		</div>
	);
};
