import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
dotenv.config();
// Route files
import usersRoutes from "./routes/Users.js";

// Use routes
app.use("/users", usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
