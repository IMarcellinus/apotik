import express from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../controllers/CategoriesController.js";

const router = express.Router();

router.get('/categories', getCategories);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

export default router;