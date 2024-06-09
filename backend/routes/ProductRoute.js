import express from "express";
import { createProduct, deleteProduct, getProductById, getProducts, searchProductsByName, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get('/products', getProducts);
router.get("/products/search", getProducts); // Updated route for search by name
router.get("/products/search/:name", searchProductsByName); // Updated route for search by name
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products/:id', getProductById);

export default router;