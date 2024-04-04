// File: controllers/ComparisonsController.js
import express from "express";
import * as ComparisonsQueries from "../db/ComparisonsQueries";
import { fetchModelNameById } from "../db/AIModelQueries"; // Assume this function exists and fetches model name by ID
import { generateResponseWithOpenAI } from "../utils/OpenAIUtils"; // Placeholder function for OpenAI API calls

const router = express.Router();

// Get comparisons by user ID
router.get("/comparisons/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId, 10);
    const comparisons = await ComparisonsQueries.getComparisonsByUserId(userId);
    res.status(200).json(comparisons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new comparison
router.post("/comparisons", async (req, res) => {
  try {
    const {
      userId,
      temp1,
      temp2,
      token1,
      token2,
      modelId1,
      modelId2,
      prompt1,
      prompt2,
    } = req.body;

    // Fetch model names based on model IDs
    const modelName1 = await fetchModelNameById(modelId1);
    const modelName2 = await fetchModelNameById(modelId2);

    // Call OpenAI's API to generate responses for both prompts
    const response1 = await generateResponseWithOpenAI(
      prompt1,
      modelName1,
      temp1,
      token1
    );
    const response2 = await generateResponseWithOpenAI(
      prompt2,
      modelName2,
      temp2,
      token2
    );

    // Insert the comparison into the database
    const newComparison = await ComparisonsQueries.insertComparison(
      userId,
      temp1,
      temp2,
      token1,
      token2,
      modelId1,
      modelId2,
      prompt1,
      prompt2,
      response1,
      response2
    );

    // Return the new comparison along with generated responses
    res.status(201).json(newComparison);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
