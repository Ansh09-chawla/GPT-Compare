import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
	return (
		<div className="flex flex-1 overflow-hidden">
			<Sidebar />
			<main className="flex-1 overflow-auto mb-24 lg:mb-0 px-2 py-2 sm:px-12 sm:py-12">
				<Outlet />
			</main>
		</div>
	);
}
