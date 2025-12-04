import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserDetails {
	firstname?: string;
	lastname?: string;
	email?: string;
	phonenumber?: string;
	password?: string;
}

export interface AddressType {
	id?: string;
	fullname?: string;
	phone?: string;
	address: string;
	state?: string;
	city?: string;
	street?: string; //required
	postalCode?: string; //required
	country?: string; //required
}

const initialState = {
	currentUser: {} as UserDetails | any,
	cart: [] as Array<any>,
	totalPrice: 0,
	totalQuantity: 0,
	cartQuantity: 0,
	addresses: {} as AddressType,
	selectedCurrency: "",
	country: "",
	currency: "",
};

export const Reducers = createSlice({
	name: "Koa-ecomerce",
	initialState,
	reducers: {
		updateUserDetails: (state, action: PayloadAction<UserDetails>) => {
			const { password, ...safe } = (action.payload || {}) as UserDetails;
			state.currentUser = safe;
		},

		logoutUser: () => initialState,
		addAddress: (state, action: PayloadAction<AddressType>) => {
			state.addresses = action.payload;
		},
		setUserLocation: (state, action) => {
			state.country = action.payload.country;
			state.currency = action.payload.currency;
		},
		clearCart: (state) => {
			state.cart = [];
			state.totalQuantity = 0;
			state.totalPrice = 0;
		},

		addToCart: (state, action: PayloadAction<any>) => {
			const itemToAdd = action.payload;

			// removed noisy console logging to prevent leaking user actions
			const existingItem = state.cart.find(
				(item) =>
					item.id === itemToAdd.productID ||
					(item.productID === itemToAdd.productID &&
						(!item.variant || item.variant?.id === itemToAdd.variant?.id)),
			);

			if (existingItem) {
				existingItem.cartQuantity += 1;
			} else {
				state.cart.push({ ...itemToAdd, cartQuantity: 1 });
			}

			state.totalQuantity += 1;
			state.totalPrice += itemToAdd.price;
		},

		removeFromCart: (state, { payload }) => {
			// Find the index of the item in the cart
			const index = state.cart.findIndex((item) =>
				item.variant
					? item.variant.id === payload
					: item.productID === payload.productID,
			);

			if (index !== -1) {
				const item = state.cart[index];
				const itemPrice = item.price || item.originalPrice; // Retrieve the price

				// Check if the item's quantity is greater than 1
				if (item.cartQuantity > 1) {
					// Decrement the quantity of the product in the cart
					item.cartQuantity -= 1;

					// Adjust the total price and total quantity accordingly
					state.totalPrice = Math.max(0, state.totalPrice - itemPrice);
					state.totalQuantity -= 1;
				} else {
					// If the item's quantity is 1, remove it from the cart
					const amountToDeduct = itemPrice * item.cartQuantity;

					// Remove the item from the cart
					state.cart.splice(index, 1);

					// Update the total price and total quantity
					state.totalPrice = Math.max(0, state.totalPrice - amountToDeduct);
					state.totalQuantity -= item.cartQuantity;
				}
			}
		},

		remove: (state, { payload }: PayloadAction<any>) => {
			state.cart = state.cart.filter((el) => el.id !== payload.id);
		},

		storeSelectedCurrency: (state, { payload }) => {
			state.selectedCurrency = payload;
		},
	},
});

export const {
	updateUserDetails,
	logoutUser,
	addToCart,
	clearCart,
	removeFromCart,
	remove,
	addAddress,
	storeSelectedCurrency,
	setUserLocation,
} = Reducers.actions;

export default Reducers.reducer;
