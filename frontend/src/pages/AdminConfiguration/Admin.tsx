import { ChangeEvent, useEffect, useState } from "react";
import { aiModelsService } from "../../services/AiModelsService";
import { temperaturesService } from "../../services/TemperaturesService";
import { tokensService } from "../../services/TokensService";

interface AiModel {
	model_id: string;
	model_name: string;
}

const Admin = () => {
	const [showModel, setShowModel] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [aiModels, setAiModels] = useState<AiModel[]>([]);
	const [temperatures, setTemperatures] = useState<number[]>([]);
	const [minTokenValue, setMinTokenValue] = useState<number>(0);
	const [maxTokenValue, setMaxTokenValue] = useState<number>(0);
	const [modalAction, setModalAction] = useState<"add" | "remove" | "">("");
	const [modalEntity, setModalEntity] = useState<
		"aiModel" | "temperature" | ""
	>("");

	useEffect(() => {
		const fetchInitialData = async () => {
			try {
				const modelsData = await aiModelsService.getAllAiModels();
				setAiModels(modelsData);

				const temperaturesData = await temperaturesService.getAllTemperatures();
				setTemperatures(temperaturesData);

				const tokenRangeData = await tokensService.getTokenRange();
				setMinTokenValue(tokenRangeData.min_value);
				setMaxTokenValue(tokenRangeData.max_value);
			} catch (error) {
				console.error("Failed to fetch initial data:", error);
			}
		};

		fetchInitialData();
	}, []);

	const handleAddModel = async (modelName: string) => {
		try {
			const newModelData = await aiModelsService.addAiModel({
				modelName: modelName,
				description: modelName,
			});
			setAiModels([
				...aiModels,
				{ model_id: newModelData.id, model_name: newModelData.model_name },
			]);
		} catch (error) {
			console.error("Failed to add AI model:", error);
		}
	};

	const handleDeleteModel = async (modelName: string) => {
		try {
			const modelId = aiModels.find(
				(model) => model.model_name === modelName
			)?.model_id;
			await aiModelsService.deleteAiModel(Number(modelId));
			setAiModels(aiModels.filter((model) => model.model_id !== modelId));
		} catch (error) {
			console.error("Failed to delete AI model:", error);
		}
	};

	const handleAddTemperature = async (temperature: number) => {
		try {
			await temperaturesService.addTemperature(temperature);
			setTemperatures([...temperatures, temperature]);
		} catch (error) {
			console.error("Failed to add temperature:", error);
		}
	};

	const handleDeleteTemperature = async (temperature: number) => {
		try {
			await temperaturesService.deleteTemperature(temperature);
			setTemperatures(temperatures.filter((t) => t !== temperature));
		} catch (error) {
			console.error("Failed to delete temperature:", error);
		}
	};

	const handleUpdateTokenRange = async () => {
		try {
			await tokensService.updateTokenRange(minTokenValue, maxTokenValue);
		} catch (error) {
			console.error("Failed to update token range:", error);
		}
	};

	const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMinTokenValue(Number(event.target.value));
	};

	const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMaxTokenValue(Number(event.target.value));
	};

	const handleAddModelClick = () => {
		setShowModel(true);
		setModalAction("add");
		setModalEntity("aiModel");
	};

	const handleRemoveModelClick = () => {
		setShowModel(true);
		setModalAction("remove");
		setModalEntity("aiModel");
	};

	const handleAddTemperatureClick = () => {
		setShowModel(true);
		setModalAction("add");
		setModalEntity("temperature");
	};

	const handleRemoveTemperatureClick = () => {
		setShowModel(true);
		setModalAction("remove");
		setModalEntity("temperature");
	};

	const handleConfirmModalAction = async () => {
		if (modalEntity === "aiModel") {
			if (modalAction === "add") {
				await handleAddModel(inputValue);
			} else if (modalAction === "remove") {
				await handleDeleteModel(inputValue);
			}
		} else if (modalEntity === "temperature") {
			const temperatureValue = parseFloat(inputValue);
			if (modalAction === "add") {
				await handleAddTemperature(temperatureValue);
			} else if (modalAction === "remove") {
				await handleDeleteTemperature(temperatureValue);
			}
		}

		handleModalClose();
	};

	const handleModalClose = () => {
		setShowModel(false);
		setInputValue("");
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
			<div className="w-full max-w-2xl p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
				<h1 className="text-center text-2xl font-bold text-gray-900">
					Configuration
				</h1>
				<div className="space-y-4">
					<div className="flex justify-between items-center flex-col md:flex-row">
						<span className="text-lg font-semibold text-gray-900 mb-2 md:mb-0">
							AI Model List:
						</span>
						<div>
							<button
								onClick={handleAddModelClick}
								className="mb-2 md:mb-0 mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add
							</button>
							<button
								onClick={handleRemoveModelClick}
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Remove
							</button>
						</div>
					</div>
					<div className="flex flex-wrap justify-center">
						{aiModels.map((model, index) => (
							<div
								key={index}
								className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2"
							>
								{model.model_name}
							</div>
						))}
					</div>
					<div className="flex justify-between items-center flex-col md:flex-row">
						<span className="text-lg font-semibold text-gray-900 mb-2 md:mb-0">
							Temperature List:
						</span>
						<div>
							<button
								onClick={handleAddTemperatureClick}
								className="mb-2 md:mb-0 mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Add
							</button>
							<button
								onClick={handleRemoveTemperatureClick}
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
							>
								Remove
							</button>
						</div>
					</div>
					<div className="flex flex-wrap justify-center">
						{temperatures
							.slice() // create a copy of the array to avoid mutating the original array
							.sort((a, b) => a - b) // sort the temperatures in ascending order
							.map((temp, index) => (
								<div
									key={index}
									className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2"
								>
									{temp}
								</div>
							))}
					</div>

					<div className="flex flex-col md:flex-row justify-between items-center">
						<span className="text-lg font-semibold text-gray-900">
							Token Range:
						</span>

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
								value={minTokenValue}
								onChange={handleMinChange}
								className="mt-1 justify-center px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full md:w-40"
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
								value={maxTokenValue}
								onChange={handleMaxChange}
								className="mt-1 justify-center px-2 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full md:w-40"
							></input>
						</div>
						<button
							onClick={handleUpdateTokenRange}
							className="mt-4 md:mt-0 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							Update
						</button>
					</div>
				</div>
			</div>
			{showModel && (
				<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-white p-8 rounded-lg">
						<h2 className="text-lg font-semibold mb-4">
							{modalAction === "add" ? "Add" : "Remove"}{" "}
							{modalEntity === "aiModel" ? "AI Model" : "Temperature"}
						</h2>
						<input
							type="text"
							className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
							placeholder={
								modalEntity === "aiModel" ? "Model Name" : "Temperature Value"
							}
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
								onClick={handleConfirmModalAction}
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
