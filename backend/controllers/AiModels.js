import { pgDatabase } from "../config/DatabaseConfig";

// Retrieve names and descriptions of all AI models
export const getAllAIModels = async () => {
  try {
    const query = "SELECT model_name, description FROM ai_models";
    const result = await pgDatabase.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error querying the ai_models table", error);
    throw error;
  }
};

// Add a new AI model
export const addAIModel = async (modelName, description) => {
  try {
    const query =
      "INSERT INTO ai_models (model_id, model_name, description) VALUES (uuid_generate_v4(), $1, $2) RETURNING *";
    const values = [modelName, description];
    const result = await pgDatabase.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error adding a new AI model", error);
    throw error;
  }
};

// Delete an AI model by primary key
export const deleteAIModel = async (modelId) => {
  try {
    const query = "DELETE FROM ai_models WHERE model_id = $1 RETURNING *";
    const values = [modelId];
    const result = await pgDatabase.query(query, values);
    if (result.rows.length === 0) {
      throw new Error("AI model not found or already deleted");
    }
    return result.rows[0];
  } catch (error) {
    console.error("Error deleting AI model", error);
    throw error;
  }
};
