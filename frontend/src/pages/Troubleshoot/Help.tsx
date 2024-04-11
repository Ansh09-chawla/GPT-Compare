const Help = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-6">
			<div className="w-full min-h-screen p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
				<h2 className="text-left text-2xl font-bold text-gray-900">
					Help & Troubleshooting
				</h2>
				<br />
				<div className="space-y-8">
					<div>
						<h2 className="text-xl font-bold text-gray-900 py-6">
							FAQ Questions
						</h2>
						<div className="ml-4">
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								Q: What are AI Models?
							</p>
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								A: You can start by exploring the available AI models on
								AIModels.com
							</p>
						</div>
					</div>
					<div>
						<div className="mt-8 ml-4">
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								Q: What is AI model temperature?
							</p>
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								A: The parameter temperature refers to controlling the level of
								randomness and creativity of the output. Low temperature allows
								for more predictable and consistent results, and high
								temperature allows for more freedom and creativity in the
								output.
							</p>
						</div>
						<div className="mt-8 ml-4">
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								Q: What are Tokens?
							</p>
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								A: Tokens are small individual units of text. Tokens are
								distinct elements of text that the model processes.
							</p>
						</div>
					</div>

					<div>
						<h2 className="text-xl font-bold text-gray-900 py-6">FAQs Link</h2>
						<div className="ml-4">
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								GPTCompare.com
							</p>
						</div>
					</div>
					<div>
						<h2 className="text-xl font-bold text-gray-900 py-6">
							AI models link
						</h2>
						<div className="ml-4">
							<p className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
								AIModels.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Help;
