import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Assuming these services are properly typed in their respective files
import { aiModelsService } from "../../services/AiModelsService";
import { temperaturesService } from "../../services/TemperaturesService";
import { tokensService } from "../../services/TokensService";

interface AiModel {
  model_id: string;
  model_name: string;
}

interface FormState {
  leftInputOne: string;
  leftInputTwo: string;
  leftInputThree: string;
  rightInputOne: string;
  rightInputTwo: string;
  rightInputThree: string;
  leftTextArea: string;
  rightTextArea: string;
}

const Home = () => {
  const [formState, setFormState] = useState<FormState>({
    leftInputOne: "",
    leftInputTwo: "",
    leftInputThree: "",
    rightInputOne: "",
    rightInputTwo: "",
    rightInputThree: "",
    leftTextArea: "",
    rightTextArea: "",
  });
  const [aiModels, setAiModels] = useState<AiModel[]>([]);
  const [temperatures, setTemperatures] = useState<string[]>([]);
  const [responseTokens, setResponseTokens] = useState<{
    max_value: number;
    min_value: number;
  }>({ min_value: 10, max_value: 100 });

  // const [selectedAiModel1, setSelectedAiModel1] = useState<
  //   string | undefined
  // >();
  // const [selectedTemperature1, setTemperatures1] = useState<
  //   string | undefined
  // >();
  // const [responseTokenValue1, setResponseTokenValue1] = useState<number>(1);

  // const [selectedAiModel2, setSelectedAiModel2] = useState<
  //   string | undefined
  // >();
  // const [selectedTemperature2, setTemperatures2] = useState<
  //   string | undefined
  // >();
  // const [responseTokenValue2, setResponseTokenValue2] = useState<number>(1);

  const formik = useFormik({
    initialValues: {
      rightInputThree: "",
      leftInputThree: "",
      rightTextArea: "",
      leftTextArea: "",
    },
    validationSchema: Yup.object({
      rightInputThree: Yup.number()
        .typeError("Please enter a valid positive number") // Custom message for non-numeric input
        .positive("Please enter a valid positive number") // Ensures the number is positive
        .min(
          responseTokens.min_value,
          `Please enter a number more than ${responseTokens.min_value}`
        ) // Minimum value validation
        .max(
          responseTokens.max_value,
          `Please enter a number less than ${responseTokens.max_value}`
        ) // Maximum value validation
        .required("Required"), // Marks the field as required

      leftInputThree: Yup.number()
        .typeError("Please enter a valid positive number") // Custom message for non-numeric input
        .positive("Please enter a valid positive number") // Ensures the number is positive
        .min(
          responseTokens.min_value,
          `Please enter a number more than ${responseTokens.min_value}`
        ) // Minimum value validation
        .max(
          responseTokens.max_value,
          `Please enter a number less than ${responseTokens.max_value}`
        ) // Maximum value validation
        .required("Required"), // Marks the field as required

      rightTextArea: Yup.string().required("Required"),
      leftTextArea: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const fetchAiModels = async () => {
      try {
        const models = await aiModelsService.getAllAiModels();
        setAiModels(models);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchTemperatures = async () => {
      try {
        const temps = await temperaturesService.getAllTemperatures();
        setTemperatures(temps);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchResponseTokens = async () => {
      try {
        const tokens = await tokensService.getTokenRange();
        setResponseTokens(tokens);
        console.log(tokens);
      } catch (err) {
        console.error(err);
      }
    };

    // Execute all fetch functions
    fetchAiModels();
    fetchTemperatures();
    fetchResponseTokens();
  }, []);

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormState({ ...formState, [name]: value });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
                {temperatures.map((temperature, index) => (
                  <option key={index} value={temperature}>
                    {temperature}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <span className="text-gray-600 text-base">GPT Models</span>
              <select
                name="aiModelSelect"
                className="w-full p-2 border border-gray-300 rounded"
              >
                {aiModels.map((model) => (
                  <option key={model.model_id} value={model.model_id}>
                    {model.model_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <form>
                <span className="text-gray-600 text-base">Token</span>
                <input
                  type="text"
                  name="leftInputThree"
                  placeholder={`Please enter a number from ${responseTokens.min_value} to  ${responseTokens.max_value}`}
                  value={formik.values.leftInputThree}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // This ensures validation on touch
                  className={`w-full p-2 border ${
                    formik.touched.leftInputThree &&
                    formik.errors.leftInputThree
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                />
                {formik.touched.leftInputThree &&
                formik.errors.leftInputThree ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.leftInputThree}
                  </div>
                ) : null}
              </form>
            </div>
            <div className="mb-3">
              <form>
                <textarea
                  name="leftTextArea"
                  placeholder="Your text area"
                  value={formik.values.leftTextArea}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${
                    formik.touched.leftTextArea && formik.errors.leftTextArea
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                  rows={parseInt("4")}
                ></textarea>
                {formik.touched.leftTextArea && formik.errors.leftTextArea ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.leftTextArea}
                  </div>
                ) : null}
              </form>
            </div>
          </form>
        </div>
        <div className="bg-white p-5 rounded shadow">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <span className="text-gray-600 text-base">Temperature</span>
              <select
                name="leftInputOne"
                className="w-full p-2 border border-gray-300 rounded"
              >
                {temperatures.map((temperature, index) => (
                  <option key={index} value={temperature}>
                    {temperature}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <span className="text-gray-600 text-base">GPT Models</span>
              <select
                name="aiModelSelect"
                className="w-full p-2 border border-gray-300 rounded"
              >
                {aiModels.map((model) => (
                  <option key={model.model_id} value={model.model_id}>
                    {model.model_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <form onSubmit={formik.handleSubmit}>
                <span className="text-gray-600 text-base">Token</span>
                <input
                  type="text"
                  name="rightInputThree"
                  placeholder={`Please enter a number from ${responseTokens.min_value} to  ${responseTokens.max_value}`}
                  value={formik.values.rightInputThree}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // This ensures validation on touch
                  className={`w-full p-2 border ${
                    formik.touched.rightInputThree &&
                    formik.errors.rightInputThree
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                />
                {formik.touched.rightInputThree &&
                formik.errors.rightInputThree ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.rightInputThree}
                  </div>
                ) : null}
              </form>
            </div>
            <div className="mb-3">
              <form onSubmit={formik.handleSubmit}>
                <textarea
                  name="rightTextArea"
                  placeholder="Your text area"
                  value={formik.values.rightTextArea}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${
                    formik.touched.rightTextArea && formik.errors.rightTextArea
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                  rows={parseInt("4")}
                ></textarea>
                {formik.touched.rightTextArea && formik.errors.rightTextArea ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.rightTextArea}
                  </div>
                ) : null}
              </form>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center pt-8 ml-5">
        <button
          type="submit"
          className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
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
