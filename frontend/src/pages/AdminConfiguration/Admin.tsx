import { ChangeEvent,useState } from "react";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // const [temperatureList, setTemperatureList] = useState([]);
  const [tokenList, setTokenList] = useState<string[]>([]);

  const handleAddButtonClick = () => {
    setShowModal(true);
  };

  const handleRemoveButtonClick = () => {
    setShowModal(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setInputValue(""); 
  };

  const handleConfirmAction = () => {
    if (inputValue) {
      const newList = [...tokenList, inputValue];
      setTokenList(newList);
    }
    setShowModal(false);
    setInputValue(""); 
  };

  const handleRemoveToken = (index: number) => {
    const newList = [...tokenList];
    newList.splice(index, 1);
    setTokenList(newList);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-2xl p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
        <h1 className="text-center text-2xl font-bold text-gray-900">
          Admin Configuration
        </h1>
        <div className="space-y-4">
          {/* Modify AI Model list */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify AI Model list
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
          {/* Modify Temperature list */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify Temperature list
            </span>
            <div>
              <button
                onClick={handleAddButtonClick}
                className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Add Temperature
              </button>
              <button
                onClick={handleRemoveButtonClick}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Remove Temperature
              </button>
            </div>
          </div>
          {/* Modify Token list */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify Token list
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
          {/* Display list of tokens */}
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
      {showModal && (
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