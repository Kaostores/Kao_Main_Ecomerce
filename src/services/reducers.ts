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
  fullname: string;
  phone: string;
  address: string; 
  state?: string;
  city?: string;
}

const initialState = {
	currentUser: {} as UserDetails | any,
	cart: [] as Array<any>,
	totalPrice: 0,
	totalQuantity: 0,
	cartQuantity: 0,
	addresses: {} as AddressType
}




export const Reducers = createSlice({
	name: "Koa-ecomerce",
	initialState,
	reducers: {
		updateUserDetails: (state, action: PayloadAction<UserDetails>) => {
      		state.currentUser = action.payload;
    	},

		logoutUser: () => initialState, 
		addAddress: (state, action: PayloadAction<AddressType>) => {
			state.addresses = action.payload;
        },
		clearCart: (state) => {
			state.cart = [];
			state.totalQuantity = 0;
			state.totalPrice = 0;
		},
		addToCart: (state, action: PayloadAction<any>) => {
		const itemToAdd = action.payload;
		const existingItem = state.cart.find(item => item.id === itemToAdd.id && item.variant.id === itemToAdd.variant.id);

		if (existingItem) {
			existingItem.cartQuantity += 1;
		} else {
			state.cart.push({ ...itemToAdd, cartQuantity: 1 });
		}

		state.totalPrice += itemToAdd.variant ? itemToAdd.variant.price : itemToAdd.price;
		state.totalQuantity += 1;
		},

		removeFromCart: (state, { payload }: PayloadAction<string>) => {
  const index = state.cart.findIndex((item) => item.variant ? item.variant.id === payload : item.id === payload);

  if (index !== -1) {
    const item = state.cart[index];
    if (item.cartQuantity > 1) {
      item.cartQuantity -= 1; 
      const amountToDeduct = item.variant ? item.variant.price : item.price;
      state.totalPrice = Math.max(0, state.totalPrice - amountToDeduct);
      state.totalQuantity -= 1; 
    } else {
      const amountToDeduct = (item.variant ? item.variant.price : item.price) * item.cartQuantity;
      state.cart.splice(index, 1);
      state.totalPrice = Math.max(0, state.totalPrice - amountToDeduct);
      state.totalQuantity -= item.cartQuantity; 
    }
  }
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
	addAddress,
} = Reducers.actions;

export default Reducers.reducer;
