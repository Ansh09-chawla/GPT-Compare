import express from "express";
import { userLogin, createUser, updateUser } from "../controllers/Users.js";

const usersRoutes = express.Router();

usersRoutes.post("/create-user", createUser);
usersRoutes.post("/user-login", userLogin);
usersRoutes.put("/user-update", updateUser);

export default usersRoutes;
