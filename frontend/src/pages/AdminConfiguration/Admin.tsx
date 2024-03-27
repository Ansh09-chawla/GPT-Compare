import { ChangeEvent, useState } from "react";

const Admin = () => {
  const [showModel, setShowModel] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tokenList, setTokenList] = useState<string[]>([]);
  const [temperatureList, setTemperatureList] = useState<number[]>([]);
  const defaultModelList = ["GPT-3", "GPT-3.5", "GPT-3.5 Turbo", "GPT-4"];
  const [selectedModel, setSelectedModel] = useState("");

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
          Admin Configuration
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify AI Model list :
            </span>
            <div>
              <button
                onClick={handleAddButtonClick}
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add Model
              </button>
              <button
                onClick={handleRemoveButtonClick}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Remove Model
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {defaultModelList.map((model, index) => (
              <div key={index} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2">
                {model}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify Temperature list :
            </span>
            <div>
              <button
                onClick={handleAddTemperature}
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add Temperature
              </button>
              <button
                onClick={handleRemoveTemperature}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Remove Temperature
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {temperatureList.map((temperature, index) => (
              <div key={index} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 mr-2 mb-2">
                {temperature}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify Token list :
            </span>
            <div>
              <button
                onClick={handleAddButtonClick}
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add Token
              </button>
              <button
                onClick={handleRemoveButtonClick}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Remove Token
              </button>
            </div>
          </div>
          {tokenList.map((token, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">
                {token}
              </span>
              <button
                onClick={() => handleRemoveToken(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      {showModel && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">
              {inputValue ? `Confirm action: ${inputValue}` : "Enter modification"}
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
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmAction}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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