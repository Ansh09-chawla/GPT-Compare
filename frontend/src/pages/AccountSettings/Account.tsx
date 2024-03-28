import { useState } from "react";

const AccountSettings = () => {
	const [showModal, setShowModal] = useState(false);
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handlePasswordChange = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setCurrentPassword("");
		setNewPassword("");
		setConfirmPassword("");
	};

	const handleChangePassword = () => {
		setShowModal(false);
		setCurrentPassword("");
		setNewPassword("");
		setConfirmPassword("");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
			<div className="w-full max-w-md p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
				<h2 className="text-center text-2xl font-bold text-gray-900">
					Account Details
				</h2>
				<form className="space-y-4">
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700"
						>
							Username:
						</label>
						<input
							type="text"
							id="username"
							className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password:
						</label>
						<input
							type="password"
							id="password"
							className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div>
						<label
							htmlFor="role"
							className="block text-sm font-medium text-gray-700"
						>
							Role:
						</label>
						<input
							type="text"
							id="role"
							className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email:
						</label>
						<input
							type="email"
							id="email"
							className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						/>
					</div>
					<div className="flex justify-center">
						<button
							type="button"
							onClick={handlePasswordChange}
							className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Change Password
						</button>
						<button
							type="button"
							className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Save
						</button>
					</div>
					{showModal && (
						<div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center lg:mr-[-250px]">
							<div
								className="fixed inset-0 transition-opacity"
								aria-hidden="true"
							>
								<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
							</div>
							<div className="z-20 bg-white rounded-lg shadow-lg p-6 mx-auto max-w-md">
								<div className="mb-4">
									<h3 className="text-lg font-bold mb-2">Change Password</h3>
									<div className="mb-4">
										<label
											htmlFor="currentPassword"
											className="block text-sm font-medium text-gray-700"
										>
											Current Password:
										</label>
										<input
											type="password"
											id="currentPassword"
											className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											value={currentPassword}
											onChange={(e) => setCurrentPassword(e.target.value)}
										/>
									</div>
									<div className="mb-4">
										<label
											htmlFor="newPassword"
											className="block text-sm font-medium text-gray-700"
										>
											New Password:
										</label>
										<input
											type="password"
											id="newPassword"
											className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											value={newPassword}
											onChange={(e) => setNewPassword(e.target.value)}
										/>
									</div>
									<div className="mb-4">
										<label
											htmlFor="confirmPassword"
											className="block text-sm font-medium text-gray-700"
										>
											Confirm New Password:
										</label>
										<input
											type="password"
											id="confirmPassword"
											className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
										/>
									</div>
								</div>
								<div className="flex justify-end">
									<button
										type="button"
										onClick={handleCloseModal}
										className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
									>
										Cancel
									</button>
									<button
										type="button"
										onClick={handleChangePassword}
										className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default AccountSettings;
