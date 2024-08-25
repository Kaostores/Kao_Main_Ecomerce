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
		"cart",
	],
	endpoints: (builder) => ({
		viewAllProducts: builder.query({
			query: () => `/products`,
			providesTags: ["products"],
		}),

		viewAProduct: builder.query({
			query: (id: any) => `/products/${id}`,
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
			query: () => "/orders/user",
			providesTags: ["Orders"],
		}),

		fetchOrderById: builder.query({
			query: (orderId: any) => `/orders/details//${orderId}`,
			providesTags: ["Orders"],
		}),

		ViewAllAddress: builder.query({
			query: () => "/user/address",
			providesTags: ["Addresses"],
		}),

		updateAddress: builder.mutation({
			query: (body) => ({
				url: `/user/update/address/${body.addressId}`,
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["Addresses"],
		}),

		createNewAddress: builder.mutation({
			query: (body) => ({
				url: "/user/create/address",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["Addresses"],
		}),

		getUserData: builder.query({
			query: () => "/user/userdata",
		}),

		fetchAddressById: builder.query({
			query: (addressId) => `/user/address/${addressId}`,
		}),

		getBrandsSpootlight: builder.query({
			query: () => "/settings/home/spotlights",
		}),

		getAllCategory: builder.query({
			query: () => "/categories",
		}),
		getAllAdminCategory: builder.query({
			query: () => "/categories",
		}),

		getAllSubCategory: builder.query({
			query: (categoryId) => `/category/subcategories/${categoryId}`,
		}),

		getHotSales: builder.query({
			query: () => "/settings/home/hot/sales",
		}),

		getAllAdminCategoryAndSubCategory: builder.query({
			query: () => "/categories/with/subcategories",
		}),

		AddNewBookmark: builder.mutation({
			query: (body) => ({
				url: `/bookmarks/create/${body.product_id}`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["bookmark"],
		}),

		DeleteNewBookmark: builder.mutation({
			query: (body) => ({
				url: `/bookmarks/delete/${body.product_id}`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["bookmark"],
		}),

		ViewAllBookmarks: builder.query({
			query: () => "/bookmarks",
			providesTags: ["bookmark"],
		}),

		ViewAllMyReviews: builder.query({
			query: () => "/reviews",
			providesTags: ["reviews"],
		}),

		DropReview: builder.mutation({
			query: (body) => ({
				url: `/reviews/create/${body.product_id}`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["reviews"],
		}),

		viewProductReviews: builder.query({
			query: (body) => `/reviews/product/${body.product_id}`,
			providesTags: ["reviews"],
		}),

		SearchProduct: builder.query({
			query: (body) => {
				const minPrice = Number(body.minPrice) || "";
				const maxPrice = Number(body.maxPrice) || "";
				const rating = Number(body.rating) || "";
				const search = encodeURIComponent(body.query || "");
				const gender = encodeURIComponent(body.gender || "");
				const categoryID = encodeURIComponent(body.categoryID || "");
				const subCategoryID = encodeURIComponent(body.subCategoryID || "");

				return `/products/search/all?search=${search}&category_id=${categoryID}&sub_category_id=${subCategoryID}&filter=&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${rating}&gender=${gender}`;
			},
		}),

		AddCartCustomer: builder.mutation({
			query: (body) => ({
				url: `/carts/add/product`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["cart"],
		}),
		RemoveCartCustomer: builder.mutation({
			query: (body) => ({
				url: `/carts/remove/product/${body.product_id}`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["cart"],
		}),

		UpdateCartCustomer: builder.mutation({
			query: (body) => ({
				url: `/carts/update/product`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["cart"],
		}),

		ViewAllCartCustomer: builder.query({
			query: () => "/carts",
			providesTags: ["cart"],
		}),

		ApplyCoupon: builder.mutation({
			query: (body) => ({
				url: `/carts/apply/coupon`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["cart"],
		}),

		verifyPay: builder.mutation({
			query: (body) => ({
				url: `/carts/payment/verify`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["cart"],
		}),

		ShippmentAddress: builder.mutation({
			query: (body) => ({
				url: `/carts/update/address`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["cart"],
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
	useAddCartCustomerMutation,
	useViewAllCartCustomerQuery,
	useRemoveCartCustomerMutation,
	useUpdateCartCustomerMutation,
	useApplyCouponMutation,
	useVerifyPayMutation,
	useShippmentAddressMutation,
} = api;
