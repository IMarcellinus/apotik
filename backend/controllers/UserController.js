
import { Op } from 'sequelize';
import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }, // Exclude 'password' column
            where: {
                role: {
                    [Op.ne]: 'admin' // Exclude users with role 'admin'
                }
            }
        });

        if (users.length === 0) {
            return res.status(400).json({
                msg: "No users found",
                status_code: 400,
            });
        }

        res.status(200).json({
            msg: "User List",
            status_code: 200,
            user: users,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
                role: {
                    [Op.ne]: 'admin' // Exclude users with role 'admin'
                }
            },
            attributes: { exclude: ['password'] } // Exclude 'password' column
        });

        if (user) {
            res.status(200).json({
                msg: "User Details",
                status_code: 200,
                user: user
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const createUser = async (req, res) => {
    try {
        // Check for required fields
        const requiredFields = [
            "password",
            "role",
            "username"
        ];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `Missing input: ${field}` });
            }
        }

        const newUser = await User.create(req.body);
        res.status(201).json({
            message: "User Created",
            status_code: 200,
            user: newUser,
        });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            res.status(400).json({
                message: "Validation error",
                status_code: 400,
                errors: error.errors.map((err) => ({
                    message: err.path === "username" ? "Username already exists" : err.message,
                    path: err.path,
                })),
            });
        } else {
            console.log(error.message);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

