import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
dotenv.config();
// Route files
import usersRoutes from "./routes/Users.js";
import aiModelsRoutes from "./routes/AiModels.js";
import temperatureRoutes from "./routes/Temperature.js";
import responseTokens from "./routes/ResponseTokens.js";

// Use routes
app.use("/users", usersRoutes);
app.use("/ai-models", aiModelsRoutes);
app.use("/temperatures", temperatureRoutes);
app.use("/response-tokens", responseTokens);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
