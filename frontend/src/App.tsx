import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./global/Layout";

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [{ path: "/", element: <></> }],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
