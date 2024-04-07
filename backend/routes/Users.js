import express from "express";
import {
  userLogin,
  createUser,
  getUser,
  updateUser,
  changePassword,
} from "../controllers/Users.js";

const usersRoutes = express.Router();

usersRoutes.post("/create-user", createUser);
usersRoutes.post("/user-login", userLogin);
usersRoutes.get("/get-user/:id", getUser);
usersRoutes.put("/user-update", updateUser);
usersRoutes.put("/change-password", changePassword);

export default usersRoutes;
