import express from "express";
import {
  getAllTokens,
  addToken,
  deleteToken,
} from "../controllers/ResponseTokens.js";
import { verifyJwtToken } from "../middlewares/VerifyJwtToken.js";

const tokenRoutes = express.Router();

tokenRoutes.get("/", verifyJwtToken, getAllTokens);
tokenRoutes.post("/add", verifyJwtToken, addToken);
tokenRoutes.delete("/delete/:minValue/:maxValue", verifyJwtToken, deleteToken);

export default tokenRoutes;
