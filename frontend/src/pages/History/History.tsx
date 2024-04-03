import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Example comparison history data
const initialHistory = [
	{
		id: 1,
		timestamp: "2024-03-31 14:00",
	},
	{
		id: 2,
		timestamp: "2024-04-01 09:30",
	},
];

const History = () => {
	const [history, setHistory] = useState(initialHistory);
	const navigate = useNavigate();

	const handleDeleteHistory = (historyId: number) => {
		const updatedHistory = history.filter((item) => item.id !== historyId);
		setHistory(updatedHistory);
	};

	const handleSelect = () => {
		navigate("/home");
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
							<tr key={item.id}>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									{item.timestamp}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex justify-start space-x-3">
									<button
										onClick={handleSelect}
										className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									>
										Select
									</button>
									<button
										onClick={() => handleDeleteHistory(item.id)}
										className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
									>
										Delete
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
							key={item.id}
							className="bg-white p-4 rounded-lg shadow mb-4 space-y-2"
						>
							<div>
								<strong>Timestamp:</strong> {item.timestamp}
							</div>
							<div className="flex justify-between items-center">
								<button
									onClick={handleSelect}
									className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
								>
									Select
								</button>
								<button
									onClick={() => handleDeleteHistory(item.id)}
									className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
								>
									Delete
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
