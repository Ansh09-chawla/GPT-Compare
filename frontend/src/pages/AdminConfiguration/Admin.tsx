import React from "react";

const Admin = () => {
  // Add any state or functions needed for handling clicks here

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-2xl p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
        <h1 className="text-center text-2xl font-bold text-gray-900">
          Admin Configuration
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify AI Model list
            </span>
            <div>
              <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Model
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Remove Model
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify Temperature list
            </span>
            <div>
              <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Temperature
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Remove Temperature
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              Modify Token list
            </span>
            <div>
              <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add Tokens
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Remove Tokens
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
