import WebLayouts from "@/components/layouts/WebLayouts";
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
	];
};

export default PublicRoute;
