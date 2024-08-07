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
	tagTypes: [
		"stores",
		"products",
		"product",
		"Orders",
		"Addresses",
		"bookmark",
		"reviews",
	],
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

		fetchOrderById: builder.query({
			query: (orderId: any) => `/customer/orders/${orderId}`,
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

		getUserData: builder.query({
			query: () => "/customer/userdata",
		}),

		fetchAddressById: builder.query({
			query: (addressId) => `/customer/profile/address/${addressId}`,
		}),

		getBrandsSpootlight: builder.query({
			query: () => "/settings/home/spotlights",
		}),

		getAllCategory: builder.query({
			query: () => "/categories",
		}),
		getAllAdminCategory: builder.query({
			query: () => "/admin/category",
		}),

		getAllSubCategory: builder.query({
			query: (categoryId) => `/sub/category?category=${parseInt(categoryId)}`,
		}),

		getHotSales: builder.query({
			query: () => "/settings/home/hot/sales",
		}),

		getAllAdminCategoryAndSubCategory: builder.query({
			query: () => "/admin/category/subs",
		}),

		AddNewBookmark: builder.mutation({
			query: (body) => ({
				url: `/customer/product/bookmark/add/${body.product_id}`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["bookmark"],
		}),

		DeleteNewBookmark: builder.mutation({
			query: (body) => ({
				url: `/customer/product/bookmark/remove/${body.product_id}`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["bookmark"],
		}),

		ViewAllBookmarks: builder.query({
			query: () => "/customer/bookmarks",
			providesTags: ["bookmark"],
		}),

		ViewAllMyReviews: builder.query({
			query: () => "/customer/reviews",
			providesTags: ["reviews"],
		}),

		DropReview: builder.mutation({
			query: (body) => ({
				url: `/customer/product/${body.product_id}/reviews/add`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["reviews"],
		}),

		viewProductReviews: builder.query({
			query: (body) => `/customer/product/${body.product_id}/reviews`,
			providesTags: ["reviews"],
		}),

		SearchProduct: builder.query({
			query: (body) =>
				`/customer/product/search?search=${body.query}&category_id=${body.categoryID}&sub_category_id=${body.subCategoryID}`,
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
	useCreateNewAddressMutation,
	useGetUserDataQuery,
	useFetchAddressByIdQuery,
	useFetchOrderByIdQuery,
	useGetBrandsSpootlightQuery,
	useGetAllCategoryQuery,
	useGetAllSubCategoryQuery,
	useGetHotSalesQuery,
	useGetAllAdminCategoryAndSubCategoryQuery,
	useAddNewBookmarkMutation,
	useViewAllBookmarksQuery,
	useDeleteNewBookmarkMutation,
	useViewAllMyReviewsQuery,
	useDropReviewMutation,
	useViewProductReviewsQuery,
	useSearchProductQuery,
	useGetAllAdminCategoryQuery,
} = api;
