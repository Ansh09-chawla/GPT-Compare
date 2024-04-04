import express from "express";
import * as TokenQueries from "../db/TokenQueries";

const router = express.Router();

// GET endpoint to retrieve all tokens
router.get("/tokens", async (req, res) => {
  try {
    const tokens = await TokenQueries.getAllTokens();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to add a new token
router.post("/tokens", async (req, res) => {
  try {
    const { minValue, maxValue } = req.body;

    const newToken = await TokenQueries.addToken(minValue, maxValue);
    res.status(201).json({
      message: "Token added successfully",
      token: newToken,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE endpoint to delete a token, using URL parameters
router.delete("/tokens/:minValue/:maxValue", async (req, res) => {
  try {
    const { minValue, maxValue } = req.params;
    const deletedToken = await TokenQueries.deleteToken(
      parseInt(minValue, 10),
      parseInt(maxValue, 10)
    );
    res.status(200).json({
      message: "Token deleted successfully",
      token: deletedToken,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
