import express from "express";
import { createUser, getUserById, getUsers } from "../controllers/UserController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/users/:id', authMiddleware, getUserById);
router.get('/users', authMiddleware, getUsers);
router.post('/users', authMiddleware, createUser);

export default router;