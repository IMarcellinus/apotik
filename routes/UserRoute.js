import express from "express";
import { createUser, getUserById, getUsers } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users/:id', getUserById);
router.get('/users', getUsers);
router.post('/users', createUser);

export default router;