import express from 'express';
import { createOrder, getOrderById, getOrders } from '../controllers/OrderController.js';

const router = express.Router();

// Create a new order
router.post('/order', createOrder);

// Get all orders
router.get('/order', getOrders);

// Get order by ID
router.get('/order/:id', getOrderById);

export default router;
