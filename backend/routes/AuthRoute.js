import express from "express";
import { loginUser, logoutUser } from "../controllers/AuthController.js";

const router = express.Router();

router.get('/login', loginUser);
router.post('/logout', logoutUser);

export default router;