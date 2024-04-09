import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { comparisonsService } from "../../services/ComparisonsService";
import { jwtDecode } from "jwt-decode";
import { TrashIcon } from "@heroicons/react/24/solid";

const History = () => {
	const [history, setHistory] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchHistory = async () => {
			try {
				const token = localStorage.getItem("token");
				if (token) {
					const decoded: { userId: string } = jwtDecode(token);
					const userId = decoded.userId;
					const historyData = await comparisonsService.getAllComparisonsById(
						userId
					);
					setHistory(historyData);
				}
			} catch (error) {
				console.error("Error fetching history data:", error);
			}
		};

		fetchHistory();
	}, []);

	const handleDeleteHistory = async (comparisonId: number) => {
		try {
			await comparisonsService.deleteComparison(comparisonId.toString());
			const updatedHistory = history.filter(
				(item) => item.comparison_id !== comparisonId
			);
			setHistory(updatedHistory);
		} catch (error) {
			console.error("Error deleting comparison:", error);
		}
	};

	const handleSelect = (comparison: any) => {
		navigate("/home", { state: { comparison } });
	};

	const formatDate = (dateString: string) => {
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		};
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
			<div className="w-full max-w-4xl p-4 space-y-6 rounded-lg bg-white shadow-lg overflow-x-auto md:overflow-visible">
				<h2 className="text-center text-2xl font-bold text-gray-900">
					Comparison History
				</h2>

				{/* Desktop View */}
				<table className="min-w-full leading-normal hidden md:table">
					<thead>
						<tr>
							<th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Timestamp
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{history.map((item) => (
							<tr
								key={item.comparison_id}
								onClick={() => handleSelect(item)}
								className="cursor-pointer hover:bg-gray-100"
							>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									{formatDate(item.created_at)}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button
										onClick={(e) => {
											e.stopPropagation();
											handleDeleteHistory(item.comparison_id);
										}}
										className="flex items-center justify-center text-red-600 hover:text-red-800"
									>
										<TrashIcon className="h-6 w-6" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				{/* Mobile View */}
				<div className="md:hidden">
					{history.map((item) => (
						<div
							key={item.comparison_id}
							onClick={() => handleSelect(item)}
							className="bg-white p-4 rounded-lg shadow mb-4 space-y-2 cursor-pointer hover:bg-gray-100"
						>
							<div>
								<strong>Timestamp:</strong> {formatDate(item.created_at)}
							</div>
							<div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleDeleteHistory(item.comparison_id);
									}}
									className="flex items-center justify-center text-red-600 hover:text-red-800"
								>
									<TrashIcon className="h-6 w-6" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default History;
