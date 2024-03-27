import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    verifyPassword: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform validations and handle the sign up logic
    // ...

    // Redirect to login or other appropriate page on successful sign up
    navigate("/"); // Adjust the path as needed
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xs p-8 space-y-6 rounded-lg bg-white shadow-md font-inter">
        <h1 className="text-center text-2xl font-bold text-gray-900 mb-4">
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
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
