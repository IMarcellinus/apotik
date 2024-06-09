import express from 'express';
import { createOrder, getOrderById, getOrders, getOrdersByType, updateOrderType } from '../controllers/OrderController.js';

const router = express.Router();


// Create a new order
router.post('/order', createOrder);
// Get all orders
router.get('/order', getOrders);
// Route untuk mendapatkan pesanan berdasarkan tipe
router.get('/order/type/:type', getOrdersByType);
// Get order by ID
router.get('/order/:id', getOrderById);
// Update order by type by ID
router.put('/order/:id', updateOrderType);


export default router;
