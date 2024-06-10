import bcrypt from "bcrypt";
import User from "../models/UserModel.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    res.status(200).json({
      message: "Login Success",
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {

    // Create new user with hashed password and default role
    const newUser = await User.create({
      username,
      password,
      role: 'user' // Set default role to "user"
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }


};

