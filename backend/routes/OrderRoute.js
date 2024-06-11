import express from 'express';
import { createOrder, getOrderById, getOrders, getOrdersByType, updateOrder } from '../controllers/OrderController.js';

const router = express.Router();

// Bikin Best Practice
// router.get('/order/:type', getOrders);  (:type/:id) -> using query
// router.post('/order', createOrder);
// router.put('/order/:id', updateOrderType); -> tambahkan no_resi (done)
// tambahkan jika type 0 -> get all orders, type 1 -> tampilkan type 1, type 2 -> tampilkan type 2 (done)
// tidak perlu validasi jika create order (done)
// create order status langsung -> 0 (done)

// get order
router.get('/order', getOrders);
// Create a new order
router.post('/order', createOrder);
// Update order by type by ID
router.put('/order/:id', updateOrder);

export default router;
