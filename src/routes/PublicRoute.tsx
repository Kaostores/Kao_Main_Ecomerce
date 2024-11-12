import DashboardLayout from "@/components/layouts/DashboardLayout";
import WebLayouts from "@/components/layouts/WebLayouts";
import Account from "@/pages/Dashboard/Account";
import Dashboardhome from "@/pages/Dashboard/Dashboardhome";
import Items from "@/pages/Dashboard/Items";
import Order from "@/pages/Dashboard/Order";
import Reviews from "@/pages/Dashboard/Reviews";
import Voucher from "@/pages/Dashboard/Voucher";
import Home from "@/pages/Home";
import Inbox from "@/pages/Dashboard/Inbox";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Dashboard/CheckOut";
import HelpandSupport from "@/pages/HelpandSupport";
import Contact from "@/pages/Contact";
import SearchPage from "@/pages/Search";
import OrderDetails from "@/pages/Dashboard/Subpages/OrderDetails";
import PaymentSuccess from "@/pages/Dashboard/PaymentSuccess";
import Messaging from "@/pages/Dashboard/Messaging";
import CheckOutSuccess from "@/pages/Dashboard/CheckoutSuccess";
import MobileWallet from "@/pages/Dashboard/MobileWallet";

type PublicRouteProps = {
	openLoginDialog: () => void;
	openRegisterDialog: () => void;
};

const PublicRoute = ({
	openLoginDialog,
	openRegisterDialog,
}: PublicRouteProps) => {
	return [
		{
			path: "/",
			element: <WebLayouts />,
			children: [
				{
					index: true,
					element: <Home />,
				},

				{
					path: "product-details/:id",
					element: <ProductDetails />,
				},
				{
					path: "help&support",
					element: <HelpandSupport />,
				},

				{
					path: "contact",
					element: <Contact />,
				},
				{
					path: "search",
					element: <SearchPage />,
				},

				{
					path: "cart",
					children: [
						{
							index: true,
							element: (
								<Cart
									openLoginDialog={openLoginDialog}
									openRegisterDialog={openRegisterDialog}
								/>
							),
						},

						{
							path: "checkout",
							element: <Checkout />,
						},
					],
				},
			],
		},

		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					index: true,
					element: <Dashboardhome />,
				},

				{
					path: "wallet",
					element: <MobileWallet />,
				},
				{
					path: "account",
					element: <Account />,
				},
				{
					path: "order",
					element: <Order />,
				},
				{
					path: "orderdetails/:id",
					element: <OrderDetails />,
				},
				{
					path: "reviews",
					element: <Reviews />,
				},
				{
					path: "items",
					element: <Items />,
				},
				{
					path: "voucher",
					element: <Voucher />,
				},
				{
					path: "inbox",
					element: <Inbox />,
				},
				{
					path: "messaging",
					element: <Messaging />,
				},
			],
		},

		{
			path: "/payment-success",
			element: <PaymentSuccess />,
		},

		{
			path: "/checkout-success",
			element: <CheckOutSuccess />,
		},
	];
};

export default PublicRoute;
