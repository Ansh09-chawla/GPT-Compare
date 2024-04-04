import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersService } from "../../services/UsersService";

const SignUp = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		verifyPassword: "",
		email: "",
		role: "user", // Assuming a default role, update as necessary
	});
	const [error, setError] = useState(""); // Optional: Manage error state

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// Check if passwords match
		if (formData.password !== formData.verifyPassword) {
			setError("Passwords do not match.");
			return;
		}

		try {
			console.log(formData);
			const { success, user } = await usersService.signUp(
				formData.username,
				formData.password,
				formData.email,
				formData.role
			);

			if (success) {
				navigate("/"); // Navigate to the homepage or dashboard upon successful signup
			} else {
				setError("Failed to create an account.");
			}
		} catch (error) {
			console.error("Signup error:", error);
			setError("An error occurred during signup.");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
			<div className="w-full max-w-xs p-8 space-y-6 rounded-lg bg-white shadow-md font-inter">
				<h1 className="text-center text-3xl font-bold text-gray-900 mb-4">
					GPT Compare
				</h1>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Username"
						className="w-full px-3 py-2 border border-gray-300 rounded-md"
						value={formData.username}
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						className="w-full px-3 py-2 border border-gray-300 rounded-md"
						value={formData.password}
						onChange={handleChange}
					/>
					<input
						type="password"
						name="verifyPassword"
						placeholder="Verify Password"
						className="w-full px-3 py-2 border border-gray-300 rounded-md"
						value={formData.verifyPassword}
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email account"
						className="w-full px-3 py-2 border border-gray-300 rounded-md"
						value={formData.email}
						onChange={handleChange}
					/>
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Create Account
					</button>
					<p className="text-center text-sm">
						Already have an account?
						<a href="/" className="text-blue-600 hover:underline">
							{" "}
							Sign In
						</a>
					</p>
				</form>
			</div>
			{error && <p className="text-red-500">{error}</p>}
		</div>
	);
};

export default SignUp;
