import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { aiModelsService } from "../../services/AiModelsService";
import { temperaturesService } from "../../services/TemperaturesService";
import { tokensService } from "../../services/TokensService";
import { useLocation } from "react-router-dom";

interface AiModel {
  model_id: string;
  model_name: string;
}

interface FormState {
  temp1: string;
  model1: string;
  token1: string;
  temp2: string;
  model2: string;
  token2: string;
  prompt1: string;
  prompt2: string;
}

const Home = () => {
  const [formState, setFormState] = useState<FormState>({
    temp1: "",
    model1: "",
    token1: "",
    temp2: "",
    model2: "",
    token2: "",
    prompt1: "",
    prompt2: "",
  });
  const [aiModels, setAiModels] = useState<AiModel[]>([]);
  const [temperatures, setTemperatures] = useState<string[]>([]);
  const [responseTokens, setResponseTokens] = useState<{
    max_value: number;
    min_value: number;
  }>({ min_value: 10, max_value: 100 });
  const location = useLocation();
  const comparison = location.state?.comparison;

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
      temp2: "",
      temp1: "",
      model2: "",
      model1: "",
      token2: "",
      token1: "",
      prompt2: "",
      prompt1: "",
      response2: "",
      response1: "",
    },
    validationSchema: Yup.object({
      token2: Yup.number()
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

      token1: Yup.number()
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

      prompt2: Yup.string().required("Required"),
      prompt1: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const models = await aiModelsService.getAllAiModels();
        setAiModels(models);
        const temps = await temperaturesService.getAllTemperatures();
        setTemperatures(temps);
        const tokens = await tokensService.getTokenRange();
        setResponseTokens(tokens);

        if (comparison) {
          formik.setValues({
            temp1: comparison.temperature1.toString(),
            model1: comparison.ai_model_id1,
            token1: comparison.token1.toString(),
            prompt1: comparison.prompt1,
            response1: comparison.response1,
            temp2: comparison.temperature2.toString(),
            model2: comparison.ai_model_id2,
            token2: comparison.token2.toString(),
            prompt2: comparison.prompt2,
            response2: comparison.response2,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [comparison, formik]);

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
                name="temp1"
                value={formik.values.temp1}
                onChange={formik.handleChange}
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
                value={formik.values.model1}
                onChange={formik.handleChange}
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
                  name="token1"
                  placeholder={`Please enter a number from ${responseTokens.min_value} to  ${responseTokens.max_value}`}
                  value={formik.values.token1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // This ensures validation on touch
                  className={`w-full p-2 border ${
                    formik.touched.token1 && formik.errors.token1
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                />
                {formik.touched.token1 && formik.errors.token1 ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.token1}
                  </div>
                ) : null}
              </form>
            </div>
            <div className="mb-3">
              <form>
                <textarea
                  name="prompt1"
                  placeholder="Your text area"
                  value={formik.values.prompt1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${
                    formik.touched.prompt1 && formik.errors.prompt1
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                  rows={parseInt("4")}
                ></textarea>
                {formik.touched.prompt1 && formik.errors.prompt1 ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.prompt1}
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
                name="temp2"
                value={formik.values.temp2}
                onChange={formik.handleChange}
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
                value={formik.values.model2}
                onChange={formik.handleChange}
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
                  name="token2"
                  placeholder={`Please enter a number from ${responseTokens.min_value} to  ${responseTokens.max_value}`}
                  value={formik.values.token2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // This ensures validation on touch
                  className={`w-full p-2 border ${
                    formik.touched.token2 && formik.errors.token2
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                />
                {formik.touched.token2 && formik.errors.token2 ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.token2}
                  </div>
                ) : null}
              </form>
            </div>
            <div className="mb-3">
              <form onSubmit={formik.handleSubmit}>
                <textarea
                  name="prompt2"
                  placeholder="Your text area"
                  value={formik.values.prompt2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-2 border ${
                    formik.touched.prompt2 && formik.errors.prompt2
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded`}
                  rows={parseInt("4")}
                ></textarea>
                {formik.touched.prompt2 && formik.errors.prompt2 ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.prompt2}
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
          <div className="mt-4">{formik.values.response1}</div>
        </div>
        <div className="bg-white p-5 rounded shadow w-1/2 mt-8 h-64">
          <span className="text-gray-600 text-base">Output</span>
          <div className="mt-4">{formik.values.response2}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
