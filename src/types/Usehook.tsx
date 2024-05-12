// import flutterwaveIcon from "@/assets/flut.png";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { useDispatch, useSelector } from "react-redux";
// import ShowToast from "@/components/reuse/ShowToast";
// import { Button } from "@/components/ui/button";
// import { useFundWalletMutation } from "@/services/apiSlice";
// import { FundOwnerStoreWallet } from "@/utils/ApiCalls";

// interface RootState {
//   persistedReducer: {
//     currentUser: {
//       email?: string;
//       phone?: string;
//       name?: string;
//     };
//   };
// }

// interface IProps {
//   amount: number; // Added type for 'amount'
// }

// export const FlutterWavePayment: React.FC<IProps> = ({ amount }) => {
//   const storeid = localStorage.getItem("selectedStore") || ''; // Fallback if not present
//   const dispatch = useDispatch();
// const readUser = useSelector(
//   (state: RootState) => state.persistedReducer.currentUser,
// );

//   const [addFund] = useFundWalletMutation();
//   const config = {
//     public_key: import.meta.env.VITE_REACT_APP_RAVE_KEY as string, // Ensuring string type
//     tx_ref: `KAO-${Math.ceil(Math.random() * 10e13)}`,
//     amount: amount,
//     currency: "NGN",
//     payment_options: "card",
//     customer: {
//       email: readUser?.email ?? '',
//       phone_number: readUser?.phone ?? '',
//       name: readUser?.name ?? '',
//     },
//     customizations: {
//       title: "Kao Stores",
//       description: "Funding Wallet",
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   };

//   const VerifyingPayment = async () => {
//     console.log(parseInt(String(amount), 10));
//     const body = { amount: parseInt(String(amount), 10) };
//     try {
//       const response = await addFund({
//         id: storeid,
//         ...body,
//       });
//       const response2 = await FundOwnerStoreWallet(body, storeid);
//       console.log("payment made", response);
//       console.log("payment made22", response2);
//       if (response?.data?.status === 201) {
//         // assuming response.data holds the actual response
//       } else {
//         ShowToast(false, "Please try again, something happened");
//       }
//     } catch (err) {
//       console.error(err);
//       throw err;
//     }
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//     <div className='w-[100%] mt-2'>
//       <Button
//         className='w-full'
//         onClick={() => {
//           if (amount >= 100) {
//             handleFlutterPayment({
//               callback: (response) => {
//                 VerifyingPayment();
//                 console.log(response);
//                 closePaymentModal(); // This might need to be called inside VerifyingPayment
//               },
//               onClose: () => {
//                 ShowToast(false, "Transaction terminated");
//               },
//             });
//           } else {
//             ShowToast(false, "Amount should be at least 100");
//           }
//         }}>
//         Proceed With FlutterWave <img src={flutterwaveIcon} className='w-[50px]' alt="FlutterWave Icon" />
//       </Button>
//     </div>
//   );
// };

// import React from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { useSelector } from "react-redux";
// import { useCreateOrderMutation } from "@/services/apiSlice";
// import ShowToast from "@/components/reuse/ShowToast";

// interface RootState {
//   persistedReducer: {
//     currentUser: {
//       email?: string;
//       phone?: string;
//       name?: string;
//     };
//   };
// }

// interface CartItem {
//   variant: {
//     id: string;
//     price: number;
//   };
//   quantity: number;
//   coupon?: string;
// }

// interface FlutterWavePaymentProps {
//   amount: number;
//   cartItems: CartItem[];
//   addressId: string;
// }

// export const FlutterWavePayment: React.FC<FlutterWavePaymentProps> = ({ amount, cartItems, addressId }) => {
//   const [createOrder] = useCreateOrderMutation();
//   const readUser = useSelector((state: RootState) => state.persistedReducer.currentUser);

//   // Prepare the configuration for Flutterwave
//   const config = {
//     public_key: "FLWPUBK_TEST-0822da2514e8dd6f0d0441f20d18337a-X",
//     tx_ref: `KAO-${Date.now()}`,
//     amount,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: readUser?.email ?? '',
//       phone_number: readUser?.phone ?? '',
//       name: readUser?.name ?? '',
//     },
//     customizations: {
//       title: "Payment",
//       description: "Payment for items in cart",
//       logo: "https://example.com/path/to/logo.png",
//     },
//   };

//   // Handle Flutterwave payment success
//   const handlePaymentSuccess = async (response: any) => {
//     console.log("Flutterwave payment response:", response);

//     if (response.status === 'successful') {
//       const orderData = {
//         items: cartItems.map(item => ({
//           variant: item.variant.id,
//           quantity: item.quantity,
//           coupon: item.coupon || ""
//         })),
//         address: addressId,
//         notes: "Order created after successful payment",
//         tx_ref: response.transaction_id,
//       };

//       try {
//         const orderResponse = await createOrder(orderData).unwrap();
//         console.log('Order created successfully:', orderResponse);
//         ShowToast(true, "Order created successfully!");
//       } catch (error) {
//         console.error('Failed to create order:', error);
//         ShowToast(false, "Failed to create order");
//       }
//     } else {
//       console.error('Payment was not successful:', response);
//       ShowToast(false, "Payment failed");
//     }

//     closePaymentModal();
//   };

//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//     <button onClick={() => {
//       if (amount >= 100) {  // Check for minimum amount to ensure transaction validity
//         handleFlutterPayment({
//           callback: handlePaymentSuccess,
//           onClose: () => {
//             console.log('Payment widget closed');
//             ShowToast(false, "Transaction terminated");
//           }
//         });
//       } else {
//         ShowToast(false, "Amount should be at least 100");
//       }
//     }}>
//       Pay with Flutterwave
//     </button>
//   );
// };

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
}

export const FlutterWavePayment: React.FC<FlutterWavePaymentProps> = ({
	amount,
	addressId,
}) => {
	const [createOrder] = useCreateOrderMutation();
	const { user, cartItems } = useSelector((state: RootState) => ({
		user: state.persistedReducer.currentUser,
		cartItems: state.persistedReducer.cart,
	}));

	const dispatch = useDispatch();

	console.log("this are cat itemdfghjhgfs", cartItems);

	const config = {
		public_key: "FLWPUBK_TEST-0822da2514e8dd6f0d0441f20d18337a-X",
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
			console.log("Flutterwave payment response:", response);
			// Check the correct response field for successful payment
			if (
				response.status === "successful" ||
				response.charge_response_code === "00"
			) {
				const orderData = {
					items: cartItems.map((cart) => ({
						variant: cart.variant.id,
						quantity: cart.quantity,
						coupon: cart.coupon || "",
					})),

					address: addressId,
					notes: "Order created after successful payment",
					tx_ref: response.transaction_id,
				};

				createOrder(orderData)
					.unwrap()
					.then((orderResponse) => {
						console.log("Order created successfully:", orderResponse);
						ShowToast(true, "Order created successfully!");
						dispatch(clearCart());
					})
					.catch((error) => {
						console.error("Failed to create order:", error);
						ShowToast(false, "Failed to create order");
					});
			} else {
				console.error("Payment was not successful:", response);
				ShowToast(false, "Payment failed");
			}
			closePaymentModal();
		},

		onClose: () => {
			console.log("Payment widget closed");
			ShowToast(false, "Transaction terminated");
		},
	};

	return (
		<div className='w-full mt-2'>
			<FlutterWaveButton
				className='w-[100%] xl:flex lg:flex md:flex justify-center items-center text-white py-[10px] rounded-sm bg-secondary mt-[20px] sm:hidden'
				text='Checkout'
				{...config}
				disabled={amount < 100}>
				{/* <img src={flutterwaveIcon} className='w-12' alt="FlutterWave Icon" /> */}
			</FlutterWaveButton>
			{amount < 100 && <p>Amount should be at least 100.</p>}
		</div>
	);
};
