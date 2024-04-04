import express from "express";
import {
	getAllAIModels,
	addAIModel,
	deleteAIModel,
} from "../controllers/AiModels.js";
import { verifyJwtToken } from "../middlewares/VerifyJwtToken.js";

const aiModelsRoutes = express.Router();

aiModelsRoutes.get("/ai-models", verifyJwtToken, getAllAIModels);
aiModelsRoutes.post("/ai-models", verifyJwtToken, addAIModel);
aiModelsRoutes.delete("/ai-models/:modelId", verifyJwtToken, deleteAIModel);

export default usersRoutes;
