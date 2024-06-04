import express from "express";
import { getSuppliers } from "../controllers/SupplierController.js";

const router = express.Router();

router.get('/suppliers', getSuppliers);

export default router;