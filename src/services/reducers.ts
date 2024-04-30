import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserDetails {
	firstname?: string;
	lastname?: string;
	email?: string;
	phonenumber?: string;
	password?: string;
}

const initialState = {
	currentUser: {} as UserDetails | any,
	cart: [] as Array<any>,
	totalPrice: 0,
	totalQuantity: 0,
	cartQuantity: 0,
}

export const Reducers = createSlice({
	name: "Koa-ecomerce",
	initialState,
	reducers: {
		updateUserDetails:(state, {payload}:PayloadAction<UserDetails>) => {
			state.currentUser = payload;
		},

		logoutUser: (state) => {
			state.currentUser = null
		},
		clearCart: (state) => {
			state.cart = [];
			state.totalQuantity = 0;
		},
		addToCart: (state, action: PayloadAction<any>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.cartQuantity += 1;
        state.totalPrice += action.payload.variant.price;
        state.totalQuantity += 1;
      } else {
        state.cart.push({ ...action.payload, cartQuantity: 1 });
        state.totalPrice += action.payload.variant.price;
        state.totalQuantity += 1;
      }
    },
		removeFromCart: (state, { payload }: PayloadAction<string>) => {
      const check = state.cart.findIndex((item) => item.variant.id === payload);

      if (check !== -1) {
		  const item = state.cart[check]
		  if (item.variant.quantity && item.variant.quantity > 1) {
			  item.variant.quantity -= 1;
			  state.cartQuantity -= 1;
			  state.totalPrice -= item.variant.price;
		  } else {
			  state.cart.splice(check, 1);
					state.cartQuantity -= item.variant.quantity || 0;
					state.totalPrice -= item.variant.price * (item.variant.quantity || 0);
		  }
      }
	state.totalQuantity -= 1;
		},
		remove: (state, { payload }: PayloadAction<any>) => {
      state.cart = state.cart.filter((el) => el.id !== payload.id);
    },
	}
});

export const {
	updateUserDetails,
	logoutUser,
	addToCart,
	clearCart,
	removeFromCart,
	remove,
} = Reducers.actions;

export default Reducers.reducer;
