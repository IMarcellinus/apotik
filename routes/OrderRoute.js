import express from 'express';
import { createOrder, getOrderById, getOrders, getOrdersByType, updateOrderType } from '../controllers/OrderController.js';

const router = express.Router();

// Bikin Best Practice
// router.post('/order', createOrder);
// router.get('/order/:type', getOrders);
// router.put('/order/:id', updateOrderType);

// Create a new order
router.post('/order', createOrder);
router.get('/order', getOrders);
// Get all orders, get by type, get by id
// Route untuk mendapatkan pesanan berdasarkan tipe
router.get('/order/type/:type', getOrdersByType);
// Get order by ID
router.get('/order/:id', getOrderById);
// Update order by type by ID
router.put('/order/:id', updateOrderType);


export default router;
