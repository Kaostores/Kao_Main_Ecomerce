import { Provider } from "react-redux";
import "./App.css";
import { store, persistor } from "./services/store";
import { Toaster } from "@/components/ui/toaster";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useState } from "react";

function App() {
	const [dialogState, setDialogState] = useState({ type: "", state: false });
	
	const openLoginDialog = () => {
		setDialogState({ type: "login", state: true });
	}

	const openRegisterDialog = () => {
		setDialogState({ type: "register", state: true });
	};

	const closeDialog = () => {
		setDialogState({ type: "", state: false });
	};

	const routes = PublicRoute({ openLoginDialog, openRegisterDialog });

	return (
		<div>
			<ToastContainer />
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<RouterProvider router={createBrowserRouter(routes)} />
					<Login open={dialogState} onClose={closeDialog} onOpenRegister={openRegisterDialog} />
					<Register open={dialogState} onClose={closeDialog} onOpenLogin={openLoginDialog} />
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
