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
		"chats",
		"card",
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

		PostMessages: builder.mutation({
			query: (body) => ({
				url: `/messages/send/${body.store_uuid}`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["chats"],
		}),

		fetchMessages: builder.query({
			query: (body) => `/messages/get/${body.vendor_uuid}`,
			providesTags: ["chats"],
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

		CancelOrder: builder.mutation({
			query: (body) => ({
				url: `/orders/cancel/${body.order_uuid}`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["Orders"],
		}),

		RemoveRating: builder.mutation({
			query: (body) => ({
				url: `/reviews/delete/${body.review_uuid}`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["reviews"],
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

		getSingleCategory: builder.query({
			query: (body) => `/categories/${body.categoryID}`,
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
			invalidatesTags: ["bookmark", "product"],
		}),

		DeleteNewBookmark: builder.mutation({
			query: (body) => ({
				url: `/bookmarks/delete/${body.product_id}`,
				method: "DELETE",
				body: body,
			}),
			invalidatesTags: ["bookmark", "products", "product"],
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
				const brand_id = encodeURIComponent(body.brand_id || "");
				const country = encodeURIComponent(body.country || "");

				return `/products/search/all?search=${search}&category_id=${categoryID}&sub_category_id=${subCategoryID}&filter=&minPrice=${minPrice}&maxPrice=${maxPrice}&rating=${rating}&gender=${gender}&brand_id=${brand_id}&country=${country}`;
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

		viewAllSpotlight: builder.query({
			query: () => "/brands",
			// providesTags: [""],
		}),

		viewAllPosters: builder.query({
			query: () => "/posters",
			// providesTags: [""],
		}),

		GetAllCopoun: builder.query({
			query: () => "/coupons?type=",
			// providesTags: [""],
		}),

		ChangeCustomerPassword: builder.mutation({
			query: (body) => ({
				url: `/user/password/update`,
				method: "POST",
				body: body,
			}),
			// invalidatesTags: ["cart"],
		}),

		AddCardCharge: builder.mutation({
			query: (body) => ({
				url: `/transactions/add/card`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["card"],
		}),

		FetchCard: builder.query({
			query: () => "/transactions/charge/card",
			providesTags: ["card"],
		}),

		AddPayment: builder.mutation({
			query: (body) => ({
				url: `/transactions/payment/link`,
				method: "POST",
				body: body,
			}),
			// invalidatesTags: ["card"],
		}),

		CheckOutPayment: builder.query({
			query: () => ({
				url: `/carts/checkout`,
				method: "GET",
			}),
		}),
		getNotifications: builder.query({
			query: () => ({
				url: `/notifications`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useViewAllProductsQuery,
	useGetNotificationsQuery,
	useCheckOutPaymentQuery,
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
	useCancelOrderMutation,
	useViewAllSpotlightQuery,
	useGetSingleCategoryQuery,
	useRemoveRatingMutation,
	useViewAllPostersQuery,
	useGetAllCopounQuery,
	usePostMessagesMutation,
	useFetchMessagesQuery,
	useChangeCustomerPasswordMutation,
	useAddCardChargeMutation,
	useFetchCardQuery,
	useAddPaymentMutation,
} = api;
