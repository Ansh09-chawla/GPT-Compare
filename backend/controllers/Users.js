import generateJwtToken from "../middlewares/GenerateJwtToken.js";
import passport from "passport";
import initializePassport from "../config/PassportConfig.js";
import bcrypt from "bcryptjs";
import * as userQueries from "../db/UserQueries.js";

initializePassport(passport);

export const userLogin = (req, res) => {
  const { username, password } = req.body;

  // Initialize an object to hold errors for missing fields
  const fieldErrors = {};

  if (!username) fieldErrors.username = "Missing required field";
  if (!password) fieldErrors.password = "Missing required field";

  // Check if there are any errors and return them
  if (Object.keys(fieldErrors).length > 0) {
    return res.status(400).json(fieldErrors);
  }

  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    if (!user) {
      return res.status(401).json({
        username: "Invalid username or password",
        password: "Invalid username or password",
      });
    }
    // Generate a JWT token containing only the user id and send it back to the client
    const token = generateJwtToken(user.id, user.role);
    return res.status(200).json({
      message: "User logged in successfully",
      token: token,
      user: user,
      role: user.role,
    });
  })(req, res);
};

export const createUser = async (req, res) => {
  console.log("REQ BODY------>", req.body);
  const { username, password, email, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await userQueries.findUserByEmail(email);

    if (userExists) {
      throw new Error("Invalid email address");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    const newUser = await userQueries.createUser(
      username,
      hashedPassword,
      email,
      role
    );

    return newUser;
  } catch (err) {
    // console.error(err.message);
    throw err;
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id, username, email, role } = req.body;

    const updatedUser = await userQueries.updateUserDetails(
      id,
      username,
      email,
      role
    );

    if (updatedUser) {
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating user", error: err.message });
  }
};
