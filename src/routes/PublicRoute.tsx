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

const PublicRoute = () => {
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
					element: <HelpandSupport />
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
							element: <Cart />,
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
					path: "account",
					element: <Account />,
				},
				{
					path: "order",
					element: <Order />,
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
			],
		},
	];
};

export default PublicRoute;
