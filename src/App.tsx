import { Provider } from "react-redux";
import "./App.css";
// import useLocalStorage from "./helpers";
import { store, persistor } from "./services/store";
import { Toaster } from "@/components/ui/toaster";
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import { ToastContainer } from "react-toastify";
// import { Toaster } from "./components/ui/toaster";

function App() {
	// const [count, setCount] = useLocalStorage<number>("count", 0);

	return (
		<div>
			<ToastContainer />
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<RouterProvider router={createBrowserRouter([...PublicRoute()])} />
				</PersistGate>
			</Provider>
		</div>
	); 
}

export default App;
