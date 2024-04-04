import express from "express";
import * as TemperatureQueries from "../db/TemperatureQueries";

const router = express.Router();

// GET endpoint to retrieve all temperatures
router.get("/temperatures", async (req, res) => {
  try {
    const temperatures = await TemperatureQueries.getAllTemperatures();
    res.status(200).json(temperatures);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to overwrite temperatures
router.post("/temperatures", async (req, res) => {
  try {
    const { temperatures } = req.body;

    if (!temperatures || temperatures.length === 0) {
      return res
        .status(400)
        .json({ error: "Temperature list cannot be empty." });
    }

    await TemperatureQueries.overwriteTemperatures(temperatures);
    res.status(200).json({ message: "Temperatures successfully updated." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
