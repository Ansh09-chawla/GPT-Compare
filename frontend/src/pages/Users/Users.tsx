import { useState } from "react";

// Example users data
const initialUsers = [
	{
		id: 1,
		username: "UserOne",
		email: "userone@example.com",
		accountType: "Admin",
	},
	{
		id: 2,
		username: "UserTwo",
		email: "usertwo@example.com",
		accountType: "User",
	},
];

const Users = () => {
	const [users, setUsers] = useState(initialUsers);

	const handleAccountTypeChange = (userId: number, newType: string) => {
		const updatedUsers = users.map((user) =>
			user.id === userId ? { ...user, accountType: newType } : user
		);
		setUsers(updatedUsers);
	};

	const handleDeleteUser = (userId: number) => {
		const updatedUsers = users.filter((user) => user.id !== userId);
		setUsers(updatedUsers);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
			<div className="w-full max-w-4xl p-4 space-y-6 rounded-lg bg-white shadow-lg overflow-x-auto md:overflow-visible">
				<h2 className="text-center text-2xl font-bold text-gray-900">
					Users List
				</h2>
				<table className="min-w-full leading-normal hidden md:table">
					<thead>
						<tr>
							<th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Username
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Email
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Account Type
							</th>
							<th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									{user.username}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									{user.email}
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<select
										value={user.accountType}
										onChange={(e) =>
											handleAccountTypeChange(user.id, e.target.value)
										}
										className="p-1 border border-gray-300 rounded"
									>
										<option>Admin</option>
										<option>User</option>
									</select>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button
										onClick={() => handleDeleteUser(user.id)}
										className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
					{users.map((user) => (
						<div
							key={user.id}
							className="bg-white p-4 rounded-lg shadow mb-4 space-y-2"
						>
							<div>
								<strong>Username:</strong> {user.username}
							</div>
							<div>
								<strong>Email:</strong> {user.email}
							</div>
							<div>
								<strong>Account Type: </strong>
								<select
									value={user.accountType}
									onChange={(e) =>
										handleAccountTypeChange(user.id, e.target.value)
									}
									className="p-1 border border-gray-300 rounded"
								>
									<option>Admin</option>
									<option>User</option>
								</select>
							</div>
							<div className="mt-2">
								<button
									onClick={() => handleDeleteUser(user.id)}
									className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

export default Users;
