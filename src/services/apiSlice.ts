import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://kaostores.onrender.com/api/v1",
		prepareHeaders: (headers) => {
			const token = cookies.get("Kao_cookie_user");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	tagTypes: ["stores", "products", "product", "Orders", "Addresses"],
	endpoints: (builder) => ({
		viewAllProducts: builder.query({
			query: () => `/customer/home`,
			providesTags: ["products"],
		}),

		viewAProduct: builder.query({
			query: (id: any) => `/customer/products/${id}`,
			providesTags: ["product"],
		}),

		createOrder: builder.mutation({
			query: (orderData) => ({
				url: "/customer/orders/create",
				method: "POST",
				body: orderData,
			}),
			invalidatesTags: ["Orders"],
		}),

		fetchOrders: builder.query({
			query: () => "/customer/orders",
			providesTags: ["Orders"],
		}),

		ViewAllAddress: builder.query({
			query: () => "/customer/profile/address",
			providesTags: ["Addresses"],
		}),

		updateAddress: builder.mutation({
			query: (body) => ({
				url: `/customer/profile/address/${body.addressId}/update`,
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["Addresses"],
		}),

		createNewAddress: builder.mutation({
			query: (body) => ({
				url: "/customer/profile/address/create",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["Addresses"],
		}),
	}),
});

export const {
	useViewAllProductsQuery,
	useViewAProductQuery,
	useCreateOrderMutation,
	useFetchOrdersQuery,
	useViewAllAddressQuery,
	useUpdateAddressMutation,
	useCreateNewAddressMutation
} = api;
