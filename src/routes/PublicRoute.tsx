import DashboardLayout from "@/components/layouts/DashboardLayout";
import WebLayouts from "@/components/layouts/WebLayouts";
import Dashboardhome from "@/pages/Dashboard/Dashboardhome";
import Home from "@/pages/Home";

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
			],
		},
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					index: true,
					element: <Dashboardhome />
				}
			]
		}
	];
};

export default PublicRoute;
