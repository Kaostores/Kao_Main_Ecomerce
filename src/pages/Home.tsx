import Hero from "@/components/Hero";
import AdvertComp from "@/components/commons/AdvertComp";

import CardComp from "@/components/commons/CardComp";

import BrandData from "@/components/reuse/BrandData";
import CategoriesData from "@/components/reuse/CategoriesData";

import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import {
	useAddCartCustomerMutation,
	useGetHotSalesQuery,
	useViewAllPostersQuery,
	useViewAllProductsQuery,
} from "@/services/apiSlice";
import { updateUserDetails } from "@/services/reducers";
import { useAppSelector } from "@/services/store";
import { Instance } from "@/utils/AxiosConfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const Home = () => {
	const { data, isLoading } = useViewAllProductsQuery({});
	const { data: HotData, isLoading: isHotLoading } = useGetHotSalesQuery({});
	const cookies = new Cookies();
	const dispatch = useDispatch();
	const { data: posterData } = useViewAllPostersQuery({});
	const expiryDate = new Date();
	expiryDate.setDate(expiryDate.getDate() + 7);

	const cart = useAppSelector((state) => state.persistedReducer.cart);
	//
	const [addCartFn] = useAddCartCustomerMutation();
	//
	const handleAddToCartUser = async (props: any) => {
		try {
			const response: any = await addCartFn({
				product: props?.product_id,
				quantity: 1,
				variant: props?.variantID ? props?.variantID : null,
			});
			if (response?.data?.success) {
				toast.success("cart added");
			} else {
				toast.error("Failed to add item to Cart");
			}
		} catch (error) {
			toast.error("An error occurred while adding to the cart");
		}
	};

	// const sortElectronics = data?.data?.sort((a:any, b:any)=>{
	// return a.category['electronics'] - b.category['electronics']
	// })

	const electronicsProducts = data?.data?.filter((product: any) => {
		return product.proCategoryId.name.toLowerCase() === "electronics";
	});
	const location = useLocation();
	useEffect(() => {
		// Utility function to get query parameters
		const getQueryParam = (param: any) => {
			const urlParams = new URLSearchParams(location.search);
			return urlParams.get(param);
		};

		// Extract the "code" parameter
		const code = getQueryParam("code");

		if (code) {
			exchangeCodeForToken(code);
		}
	}, [location]);
	const exchangeCodeForToken = async (code: any) => {
		try {
			const response = await Instance.get(`/user/auth/google`, {
				params: { code },
			});

			console.log("this is the response", response);
			if (response.data.success) {
				cookies.set("Kao_cookie_user", response?.data?.token, {
					expires: expiryDate,
					path: "/",
				});
				// Dispatch user details to the store
				dispatch(updateUserDetails(response?.data?.data));

				// Now proceed to handle the cart after registration
				if (cart.length > 0) {
					for (const cartItem of cart) {
						// Sequentially add each cart item
						await handleAddToCartUser({
							product_id: cartItem.productID,
							variantID: cartItem.variant ? cartItem.variant.id : null,
							quantity: cartItem.quantity,
						});
					}
				}
				// Clear the URL query parameters (code)
				window.history.replaceState({}, document.title, "/");
				console.log("Token received:", response.data.token);
				// Store token (e.g., localStorage) and redirect to protected route
			} else {
				console.error("Failed to get token");
			}
		} catch (error) {
			console.error("Error exchanging code for token", error);
		}
	};

	console.log("thissn sn", data);

	return (
		<div className='overflow-hidden'>
			<Hero />
			<h3 className='mt-7 font-bold mb-3'>Recommended For You</h3>
			<div className='w-[100%]'>
				{isLoading && !data ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{data?.data?.slice(0, 8).map((props: any) => (
							<CardComp
								key={props.id}
								deal={true}
								isLoading={isLoading}
								{...props}
							/>
						))}
					</div>
				)}
			</div>

			<h3 className='mt-7 font-bold mb-3'>Categories</h3>
			<CategoriesData />

			<div>
				<div className='flex gap-5 mb-5'>
					<AdvertComp data={posterData?.data[0]?.image} />
					<AdvertComp data={posterData?.data[2]?.image} />
				</div>
				<AdvertComp data={'https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-0-1-holiday-sales/Brand-days/04-poco/POCO-HOLIDAY-SALE-brands-top-strip-.gif'} />
			</div>

			<h3 className='mt-7 font-bold mb-3'>Electronics/Appliances</h3>
			<div className='w-[100%]'>
				{isLoading && !data ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{electronicsProducts?.slice(0, 4).map((props: any) => (
							<CardComp
								key={props.id}
								deal={true}
								isLoading={isLoading}
								{...props}
							/>
						))}
					</div>
				)}
			</div>
			<h3 className='mt-7 font-bold mb-3'>Hot Sales</h3>
			<div className='w-[100%]'>
				{isHotLoading && !HotData ? (
					<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
						{[...Array(6)].map((_, index) => (
							<ProductSkeleton key={index} />
						))}
					</div>
				) : (
					<div className='grid grid-cols-4 gap-4  sm:justify-center sm:grid sm:items-center sm:grid-cols-2 md:grid-cols-2 sm:flex-col flex-1 '>
						{HotData?.data?.map((props: any) => (
							<CardComp
								key={props.id}
								deal={true}
								isLoading={isLoading}
								{...props?.productDetails}
								productId={props?.productId}
							/>
						))}
					</div>
				)}
			</div>
			<h3 className='mt-7 font-bold mb-3'>Brand Sportlight</h3>
			<BrandData />
		</div>
	);
};

export default Home;
