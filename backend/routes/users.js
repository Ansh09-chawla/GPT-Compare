const express = require("express");
import { userLogin, createUser } from "../controllers/Users.js";

const usersRoutes = express.Router();

usersRoutes.post("/create-user", createUser);
usersRoutes.post("/user-login", userLogin);

export default usersRoutes;
