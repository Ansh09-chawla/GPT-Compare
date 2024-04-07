import express from "express";
import {
  userLogin,
  createUser,
  updateUser,
  changePassword,
} from "../controllers/Users.js";

const usersRoutes = express.Router();

usersRoutes.post("/create-user", createUser);
usersRoutes.post("/user-login", userLogin);
usersRoutes.put("/user-update", updateUser);
usersRoutes.put("/change-password", changePassword);

export default usersRoutes;
