import express from "express";
import { createSupplier, deleteSupplierById, getSuppliers, updateSupplierById } from "../controllers/SupplierController.js";

const router = express.Router();

// tambahkan best practice
// router.get('/suppliers/:name', getSuppliers);

// Get all suppliers
router.get('/suppliers', getSuppliers);

// Create new supplier
router.post('/suppliers', createSupplier);

// Update supplier by ID
router.put('/suppliers/:id', updateSupplierById);

// Delete supplier by ID
router.delete('/suppliers/:id', deleteSupplierById);

export default router;