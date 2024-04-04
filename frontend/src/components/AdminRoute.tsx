import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../contexts/AuthContext";
import { ReactNode } from "react";

const AdminRoute = ({ children }: { children: ReactNode }) => {
	const { token, userRole } = useAuth();
	// Check if authenticated and role is either 'user' or 'admin'
	if (token && userRole === "admin") {
		return <Outlet />;
	} else {
		return <Navigate to="/home" />;
	}
};

export default AdminRoute;
