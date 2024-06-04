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
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: user.id }, "your-secret-key", {
      expiresIn: 86400, // 24 hours
    });

    // Set the token as an HTTP-only cookie
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 86400000, // 24 hours in milliseconds
    });

    res.status(200).send({
      id: user._id,
      user: user,
      accessToken: token
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


export const logoutUser = (req, res) => {
  // Clear the accessToken cookie
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensure the secure flag is consistent
    sameSite: 'strict',
  });

  res.status(200).send({ message: 'User logged out successfully.' });
};

