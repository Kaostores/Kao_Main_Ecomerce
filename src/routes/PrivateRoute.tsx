import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register";
import { Navigate } from "react-router-dom"
import Cookies from "universal-cookie";

export const PrivateRoute = () => {
    const cookies = new Cookies();
    const user = cookies.get("Kao_cookie")
    return [
        {
            path: "/",
            element: user ? <Navigate to='/dashboard' /> : <Register />,
        },
        {
            path: "/Login",
            element: user ? <Navigate to='/dashboard' /> : <Login />
        },
        {
			path: "*",
			element: <Navigate to='/Login' />,
		},
    ]
}
