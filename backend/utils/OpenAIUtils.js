// File: utils/OpenAIUtils.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generateResponseWithOpenAI = async (
  prompt,
  modelName,
  temperature,
  maxTokens
) => {
  const response = await openai.createCompletion({
    model: modelName,
    prompt: prompt,
    temperature: temperature,
    max_tokens: maxTokens,
  });
  return response.data.choices[0].text.trim();
};
