import React, { useState } from "react";

const Home = () => {
	const [formState, setFormState] = useState({
		leftInputOne: "",
		leftInputTwo: "",
		leftInputThree: "",
		rightInputOne: "",
		rightInputTwo: "",
		rightInputThree: "",
		leftTextArea: "",
		rightTextArea: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle the form submission
		console.log(formState);
	};

	return (
		<div className="bg-gray-100 p-5">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-inter">
				<div className="bg-white p-5 rounded shadow">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input
								type="text"
								name="leftInputOne"
								placeholder="Your first input"
								value={formState.leftInputOne}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="leftInputTwo"
								placeholder="Your second input"
								value={formState.leftInputTwo}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="leftInputThree"
								placeholder="Your third input"
								value={formState.leftInputThree}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-3">
							<textarea
								name="leftTextArea"
								placeholder="Your text area"
								value={formState.leftTextArea}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
								rows={parseInt("4")}
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
						>
							Submit
						</button>
					</form>
				</div>
				<div className="bg-white p-5 rounded shadow">
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<input
								type="text"
								name="rightInputOne"
								placeholder="Your first input"
								value={formState.rightInputOne}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="rightInputTwo"
								placeholder="Your second input"
								value={formState.rightInputTwo}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-3">
							<input
								type="text"
								name="rightInputThree"
								placeholder="Your third input"
								value={formState.rightInputThree}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
							/>
						</div>
						<div className="mb-3">
							<textarea
								name="rightTextArea"
								placeholder="Your text area"
								value={formState.rightTextArea}
								onChange={handleInputChange}
								className="w-full p-2 border border-gray-300 rounded"
								rows={parseInt("4")}
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
						>
							Submit
						</button>
					</form>
				</div>
				{/* Second column, if there's a need for two separate columns */}
				<div className="bg-white p-5 rounded shadow space-y-2 md:col-span-2">
					{/* Placeholder content for results or additional info */}
					<div className="h-4 bg-gray-300 rounded"></div>
					<div className="h-4 bg-gray-300 rounded"></div>
					<div className="h-4 bg-gray-300 rounded"></div>
					{/* Repeat as needed */}
				</div>
			</div>
		</div>
	);
};

export default Home;
