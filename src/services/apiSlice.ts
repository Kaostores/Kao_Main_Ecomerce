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
	tagTypes: ["stores", "products", "product"],
	endpoints: (builder) => ({

		viewAllProducts: builder.query({
			query: () => `/customer/home`,
			providesTags: ["products"],
		}),

		viewAProduct: builder.query({
			query: (id: any) => `/customer/products/${id}`,
			providesTags: ["product"],
		}),
	}),
});

export const {
	useViewAllProductsQuery,
	useViewAProductQuery,
} = api;

