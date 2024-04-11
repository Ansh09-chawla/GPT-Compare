import React, { useState } from "react";

const Help = () => {
  // State to track the visibility of each FAQ answer
  const [faqVisibility, setFaqVisibility] = useState({});

  // Function to toggle the visibility of an FAQ answer
  const toggleVisibility = (index) => {
    setFaqVisibility({
      ...faqVisibility,
      [index]: !faqVisibility[index]
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-6">
      <div className="w-full min-h-screen p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
        <h2 className="text-left text-2xl font-bold text-gray-900">
          Help & Troubleshooting
        </h2>
        <br />
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 py-4">
              Frequently Asked Questions
            </h2>
            <div className="bg-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-bold cursor-pointer">
                  Q: What are AI Models?
                </p>
                <button
                  onClick={() => toggleVisibility(1)}
                  className="focus:outline-none"
                >
                  {faqVisibility[1] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {faqVisibility[1] && (
                <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300 mt-2">
                  A: You can start by exploring the available AI models on
                  AIModels.com
                </p>
              )}
            </div>
          </div>

          {/* Add other FAQ sections similarly */}
          <div>
            <div className="bg-gray-200 rounded-md p-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-bold cursor-pointer">
                  Q: What are AI Models?
                </p>
                <button
                  onClick={() => toggleVisibility(2)}
                  className="focus:outline-none"
                >
                  {faqVisibility[2] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {faqVisibility[2] && (
                <p className="text-gray-600 hover:text-gray-900 transition-colors duration-300 mt-2">
                  A: Meep
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;