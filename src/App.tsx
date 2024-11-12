import { Provider } from "react-redux";
import "./App.css";
import { store, persistor } from "./services/store";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { getCurrencyByCountry } from "./helpers";
import { useDispatch } from "react-redux";
import { setUserLocation, storeSelectedCurrency } from "./services/reducers";

function App() {
	const [dialogState, setDialogState] = useState({ type: "", state: false });
	const dispatch = useDispatch();

	const openLoginDialog = () => {
		setDialogState({ type: "login", state: true });
	};

	const openRegisterDialog = () => {
		setDialogState({ type: "register", state: true });
	};

	const closeDialog = () => {
		setDialogState({ type: "", state: false });
	};

	const routes = PublicRoute({ openLoginDialog, openRegisterDialog });

	// capture and stores the user location
	const getUserLocation = async () => {
		try {
			const response = await fetch(
				"https://ipinfo.io/105.113.78.7?token=2b0dcb56466f87",
			);
			const data = await response.json();
			return {
				country: data.country,
				currency: getCurrencyByCountry(data.country), // You may need to adjust this based on your logic
			};
		} catch (error) {
			console.error("Error fetching user location:", error);
			return null;
		}
	};

	useEffect(() => {
		const fetchAndStoreLocation = async () => {
			const locationData = await getUserLocation();
			console.log("my location", locationData);
			if (locationData) {
				dispatch(setUserLocation(locationData));
				if (locationData.country === "NG") {
					dispatch(storeSelectedCurrency(locationData?.currency));
				} else {
					dispatch(storeSelectedCurrency("USD"));
				}
			}
		};

		fetchAndStoreLocation();
	}, []);

	return (
		<HelmetProvider>
			<ToastContainer />
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<RouterProvider router={createBrowserRouter(routes)} />
					<Login
						open={dialogState}
						onClose={closeDialog}
						onOpenRegister={openRegisterDialog}
					/>
					<Register
						open={dialogState}
						onClose={closeDialog}
						onOpenLogin={openLoginDialog}
					/>
				</PersistGate>
			</Provider>
		</HelmetProvider>
	);
}

export default App;
