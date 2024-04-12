import express from "express";
import {
	userLogin,
	createUser,
	getUser,
	getAllUsers,
	updateUser,
	updateUserRole,
	changePassword,
	deleteUser,
} from "../controllers/Users.js";

const usersRoutes = express.Router();

usersRoutes.post("/create-user", createUser);
usersRoutes.post("/user-login", userLogin);
usersRoutes.get("/get-user/:id", getUser);
usersRoutes.get("/get-all-users", getAllUsers);
usersRoutes.put("/user-update", updateUser);
usersRoutes.put("/update-role/:id", updateUserRole);
usersRoutes.put("/change-password", changePassword);
usersRoutes.delete("/delete-user/:id", deleteUser);

export default usersRoutes;
