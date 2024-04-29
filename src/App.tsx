import { Provider } from "react-redux";
import "./App.css";
// import useLocalStorage from "./helpers";
import { store } from "./services/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
// import { Toaster } from "./components/ui/toaster";

function App() {
	// const [count, setCount] = useLocalStorage<number>("count", 0);

	return (
		<div>
			<ToastContainer />
			<Provider store={store}>
				<RouterProvider router={createBrowserRouter([...PublicRoute()])} />
			</Provider>
		</div>
	); 
}

export default App;
