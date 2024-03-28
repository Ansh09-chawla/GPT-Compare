import { ChangeEvent, useState } from "react";

const Admin = () => {
	const [showModel, setShowModel] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [tokenList, setTokenList] = useState<string[]>([]);
	const [temperatureList, setTemperatureList] = useState<number[]>([]);
	const defaultModelList = ["GPT-3", "GPT-3.5", "GPT-3.5 Turbo", "GPT-4"];
	const defaultTemperatureList = [
		"0.15",
		"0.25",
		"0.35",
		"0.45",
		"0.55",
		"0.65",
		"0.75",
		"0.85",
		"0.95",
	];
	const [selectedModel, setSelectedModel] = useState("");

	const [minValue, setMinValue] = useState("");
	const [maxValue, setMaxValue] = useState("");

	const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMinValue(event.target.value);
	};

	const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(event.target.value);
	};

	const handleAddButtonClick = () => {
		setShowModel(true);
	};

	const handleRemoveButtonClick = () => {
		setShowModel(true);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleModalClose = () => {
		setShowModel(false);
		setInputValue("");
	};

	const handleConfirmAction = () => {
		if (inputValue) {
			const newList = [...tokenList, inputValue];
			setTokenList(newList);
		}
		setShowModel(false);
		setInputValue("");
	};

	const handleRemoveToken = (index: number) => {
		const newList = [...tokenList];
		newList.splice(index, 1);
		setTokenList(newList);
	};

	const handleAddTemperature = () => {
		setShowModel(true);
	};

	const handleRemoveTemperature = () => {
		setShowModel(true);
	};

	const handleConfirmTemperature = () => {
		if (inputValue) {
			const newTemperatureList = [...temperatureList, parseFloat(inputValue)];
			setTemperatureList(newTemperatureList);
		}
		setShowModel(false);
		setInputValue("");
	};

	const handleRemoveTemperatureItem = (index: number) => {
		const newTemperatureList = [...temperatureList];
		newTemperatureList.splice(index, 1);
		setTemperatureList(newTemperatureList);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
			<div className="w-full max-w-2xl p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
				<h1 className="text-center text-2xl font-bold text-gray-900">
					Configuration
				</h1>
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<span className="text-lg font-semibold text-gray-900">
							AI Model List :
						</span>
						<div>
							<button
								onClick={handleAddButtonClick}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add
							</button>
							<button
								onClick={handleRemoveButtonClick}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Remove
							</button>
						</div>
					</div>
					<div className="flex flex-wrap">
						{defaultModelList.map((model, index) => (
							<div
								key={index}
								className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-10"
							>
								{model}
							</div>
						))}
					</div>
					<div className="flex justify-between items-center">
						<span className="text-lg font-semibold text-gray-900">
							Temperature List :
						</span>
						<div>
							<button
								onClick={handleAddTemperature}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add
							</button>
							<button
								onClick={handleRemoveTemperature}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Remove
							</button>
						</div>
					</div>
					<div className="flex flex-wrap">
						{defaultTemperatureList.map((temp, index) => (
							<div
								key={index}
								className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-10"
							>
								{temp}
							</div>
						))}
					</div>
					<div className="flex flex-wrap">
						{temperatureList.map((temperature, index) => (
							<div
								key={index}
								className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2"
							>
								{temperature}
							</div>
						))}
					</div>
					<div className="flex justify-between items-center">
						<span className="text-lg font-semibold text-gray-900">
							Token Range :
						</span>
						<div className="flex gap-5">
							<div className="flex flex-col">
								<label
									htmlFor="min"
									className="text-sm font-medium text-gray-700"
								>
									Min
								</label>
								<input
									id="min"
									type="number"
									value={minValue}
									onChange={handleMinChange}
									className="mt-1 justify-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								></input>
							</div>
							<div className="flex flex-col">
								<label
									htmlFor="max"
									className="text-sm font-medium text-gray-700"
								>
									Max
								</label>
								<input
									id="max"
									type="number"
									value={maxValue}
									onChange={handleMaxChange}
									className="mt-1 justify-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								></input>
							</div>
						</div>
					</div>

					{tokenList.map((token, index) => (
						<div key={index} className="flex justify-between items-center">
							<span className="text-lg font-semibold text-gray-900">
								{token}
							</span>
							<button
								onClick={() => handleRemoveToken(index)}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Remove
							</button>
						</div>
					))}
				</div>
			</div>
			{showModel && (
				<div className="fixed top-0 left-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white p-8 rounded-lg">
						<h2 className="text-lg font-semibold mb-4">
							{inputValue
								? `Confirm action: ${inputValue}`
								: "Enter modification"}
						</h2>

						<input
							type="text"
							className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
							placeholder="Type here"
							value={inputValue}
							onChange={handleInputChange}
						/>
						<div className="flex justify-end">
							<button
								onClick={handleModalClose}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
							>
								Cancel
							</button>
							<button
								onClick={handleConfirmAction}
								className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Admin;
