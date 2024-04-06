import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersService } from "../../services/UsersService";
import useAuth from "../../contexts/AuthContext";

const SignIn = () => {
	const navigate = useNavigate();
	const { signIn } = useAuth();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		// Attempt to sign in with the provided credentials
		try {
			const response = await usersService.signIn(
				formData.username,
				formData.password
			);
			if (response.success) {
				// Use signIn from AuthContext to update global state
				signIn(response.token, response.user, response.role);
				navigate("/home"); // Navigate to home page or dashboard upon successful login
			} else {
				// Handle unsuccessful sign-in attempts
				setError("Invalid login credentials.");
			}
		} catch (err) {
			console.error("Login error:", err);
			setError("An error occurred during sign-in.");
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
					<div className="flex justify-between">
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="w-full px-3 py-2 border border-gray-300 rounded-md"
							value={formData.password}
							onChange={handleChange}
						/>
						<a
							href="#forgot-password"
							className="text-sm text-blue-600 hover:underline ml-3 pt-2"
						>
							Forgot Password?
						</a>
					</div>
					{error && <p className="text-red-500">{error}</p>}
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Login
					</button>
					<p className="text-center text-sm">
						Don’t have an account?
						<a href="/sign-up" className="text-blue-600 hover:underline">
							{" "}
							Create Account
						</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignIn;
