import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Here you would handle user authentication
		// ...

		// Redirect to dashboard or another appropriate page on successful login
		navigate("/home"); // Adjust the path as needed
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
					<button
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
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
