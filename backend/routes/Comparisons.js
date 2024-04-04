import express from "express";
import {
	createComparison,
	getComparisonsByUserId,
} from "../controllers/Comparisons.js";
import { verifyJwtToken } from "../middlewares/VerifyJwtToken.js";

const comparisonsRoutes = express.Router();

comparisonsRoutes.get(
	"/get-comparison/:userId",
	verifyJwtToken,
	getComparisonsByUserId
);
comparisonsRoutes.post("/create-comparison/", verifyJwtToken, createComparison);

export default comparisonsRoutes;
