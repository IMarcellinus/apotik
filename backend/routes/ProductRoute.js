import express from "express";
import { createProduct, deleteProduct, getCategoriesByProductId, getProductById, getProducts, searchProductsByName, updateProduct } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/products/search", getProducts); // Updated route for search by name
router.get("/products/search/:name", searchProductsByName);
router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products/:id', getProductById);
router.get('/categories/product/:product_id', getCategoriesByProductId);

// Bikin Best Practice
// router.get('/products/:id/:name/:categories_id', getProducts);
// router.post('/products', createProduct);
// router.put('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

export default router;