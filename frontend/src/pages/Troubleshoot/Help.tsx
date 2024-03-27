import React from "react";

const Help = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-lg p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
        <h1 className="text-center text-2xl font-bold text-gray-900">
          Help & Troubleshooting
        </h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900">
              FAQs Link:
            </span>
            <a
              href="http://GPTCompare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              GPTCompare.com
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900">
              AI models link:
            </span>
            <a
              href="http://AIModels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              AIModels.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
