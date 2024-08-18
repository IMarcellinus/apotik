import express from 'express';
<<<<<<< HEAD
import { createOrder, getOrderById, getOrders, getOrdersByType, updateOrderType } from '../controllers/OrderController.js';
=======
import { createOrder, getOrderById, getOrders, getOrdersByType, updateOrder } from '../controllers/OrderController.js';
>>>>>>> origin/master

const router = express.Router();

// Bikin Best Practice
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/master

export default router;
