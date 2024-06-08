import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;