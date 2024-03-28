import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./global/Layout";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import Account from "./pages/AccountSettings/Account";
import Admin from "./pages/AdminConfiguration/Admin";
import Help from "./pages/Troubleshoot/Help";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

function App() {
	const router = createBrowserRouter([
		{
			path: "/", // Root path
			children: [
				{
					index: true,
					element: <SignIn />, // The default route (homepage) is the SignIn component
				},
				{
					path: "sign-up",
					element: <SignUp />, // SignUp route
				},
				{
					path: "home",
					element: <Layout />, // Layout route, which includes nested routes
					children: [
						{
							index: true,
							element: <Home />, // Account Settings component inside 'home'
						},
						{
							path: "account-settings",
							element: <Account />, // Account Settings component inside 'home'
						},
						{
							path: "admin-settings",
							element: <Admin />, // Admin Configuration component inside 'home'
						},
						{
							path: "users",
							element: <Users />, // Users component inside 'home'
						},
						{
							path: "help-page",
							element: <Help />, // Help & Troubleshooting component inside 'home'
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
