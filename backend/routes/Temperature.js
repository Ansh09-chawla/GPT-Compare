import express from "express";
import {
  getAlltemperatures,
  addTemperature,
  deleteTemperature,
} from "../controllers/Temperature.js";
import { verifyJwtToken } from "../middlewares/VerifyJwtToken.js";

const temperatureRoutes = express.Router();

temperatureRoutes.get("/", verifyJwtToken, getAlltemperatures);
temperatureRoutes.post("/add", verifyJwtToken, addTemperature);
temperatureRoutes.delete("/delete/:temp", verifyJwtToken, deleteTemperature);

export default temperatureRoutes;
