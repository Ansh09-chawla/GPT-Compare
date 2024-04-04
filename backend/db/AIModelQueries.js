import express from "express";
import * as AIModelQueries from "./AIModelQueries";

const router = express.Router();

// GET endpoint to retrieve all AI models
router.get("/ai-models", async (req, res) => {
  try {
    const aiModels = await AIModelQueries.getAllAIModels();
    res.status(200).json(aiModels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to add a new AI model
router.post("/ai-models", async (req, res) => {
  try {
    const { modelName, description } = req.body;
    const newModel = await AIModelQueries.addAIModel(modelName, description);
    res.status(200).json(newModel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE endpoint to delete an AI model
router.delete("/ai-models/:modelId", async (req, res) => {
  try {
    const { modelId } = req.params;
    const deletedModel = await AIModelQueries.deleteAIModel(modelId);
    res.status(200).json(deletedModel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Function to fetch a model name by its ID
export const fetchModelNameById = async (modelId) => {
  try {
    const query = "SELECT model_name FROM ai_models WHERE model_id = $1";
    const values = [modelId];
    const result = await pgDatabase.query(query, values);
    if (result.rows.length > 0) {
      return result.rows[0].model_name; // Return the model name
    } else {
      throw new Error("Model not found");
    }
  } catch (error) {
    console.error("Error fetching model name by ID", error);
    throw error;
  }
};

export default router;
