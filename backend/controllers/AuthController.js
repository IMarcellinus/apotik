import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }

    if (username !== user.username) {
      return res.status(401).send({
        message: "Invalid Username!",
      });
    }

    res.status(200).send({
      msg: "Login Success",
      status_code: 200,
      user: user,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Set default role to "user"
    const defaultRole = 'user';

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password and default role
    const newUser = await User.create({
      username,
      password: hashedPassword,
      role: defaultRole
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

};
