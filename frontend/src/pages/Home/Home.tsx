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
              <span className="text-gray-600 text-base">Temperature</span>
              <select
                name="leftInputOne"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option>0.15</option>
                <option>0.25</option>
                <option>0.35</option>
                <option>0.45</option>
                <option>0.55</option>
                <option>0.65</option>
                <option>0.75</option>
                <option>0.85</option>
                <option>0.95</option>
              </select>
            </div>
            <div className="mb-3">
              <span className="text-gray-600 text-base">GPT Models</span>
              <select
                name="leftInputTwo"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="GPT 3" className="py-5">
                  GPT 3
                </option>
                <option value="GPT 3.5" className="py-5">
                  GPT 3.5
                </option>
                <option value="GPT 3.5 Turbo" className="py-5">
                  GPT 3.5 Turbo
                </option>
                <option value="GPT 4" className="py-5">
                  GPT 4
                </option>
              </select>
            </div>
            <div className="mb-3">
              <span className="text-gray-600 text-base">Token</span>
              <input
                type="text"
                name="leftInputThree"
                placeholder="Please enter a number from 1-100"
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
              <span className="text-gray-600 text-base">Temperature</span>
              <select
                name="rightInputOne"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option>0.15</option>
                <option>0.25</option>
                <option>0.35</option>
                <option>0.45</option>
                <option>0.55</option>
                <option>0.65</option>
                <option>0.75</option>
                <option>0.85</option>
                <option>0.95</option>
              </select>
            </div>
            <div className="mb-3">
              <span className="text-gray-600 text-base">GPT Models</span>
              <select
                name="rightInputTwo"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="GPT 3">GPT 3</option>
                <option value="GPT 3.5">GPT 3.5</option>
                <option value="GPT 3.5 Turbo">GPT 3.5 Turbo</option>
                <option value="GPT 4">GPT 4</option>
              </select>
            </div>
            <div className="mb-3">
              <span className="text-gray-600 text-base">Token</span>
              <input
                type="text"
                name="rightInputThree"
                placeholder="Please enter a number from 1-100"
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
      </div>
      <div className="flex space-x-4">
        <div className="bg-white p-5 rounded shadow w-1/2 mt-8 h-64">
          <span className="text-gray-600 text-base">Output</span>
        </div>
        <div className="bg-white p-5 rounded shadow w-1/2 mt-8 h-64">
          <span className="text-gray-600 text-base">Output</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
