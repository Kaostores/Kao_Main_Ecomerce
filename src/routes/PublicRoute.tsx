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
import Support from "@/pages/Dashboard/Support";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";

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
					path: "product-details",
					element: <ProductDetails />,
				},

				{
					path: "cart",
					element: <Cart />,
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
				{
					path: "support",
					element: <Support />,
				},
			],
		},
	];
};

export default PublicRoute;
