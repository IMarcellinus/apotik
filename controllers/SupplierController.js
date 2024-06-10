import { Op } from "sequelize";
import Supplier from "../models/SupplierModel.js";

export const getSuppliers = async (req, res) => {
  try {
    // Ambil query parameter 'name'
    const { name } = req.query;

    let suppliers;
    
    // Jika ada query 'name', cari berdasarkan nama tersebut
    if (name) {
      suppliers = await Supplier.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        }
      });
    } else {
      // Jika tidak ada query 'name', tampilkan semua supplier
      suppliers = await Supplier.findAll();
    }

    if (suppliers.length === 0) {
      return res.status(400).json({
        msg: "No suppliers found",
        status_code: 400,
      });
    }

    res.status(200).json({
      msg: "Supplier List",
      status_code: 200,
      supplier: suppliers,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const createSupplier = async (req, res) => {
  try {
    // Check for required fields
    const requiredFields = ["company", "name", "email", "no_hp", "address"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `Missing input: ${field}` });
      }
    }

    const newSupplier = await Supplier.create(req.body);
    res.status(201).json({
      message: "Supplier Created",
      status_code: 200,
      supplier: newSupplier,
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({
        message: "Validation error",
        status_code: 400,
        errors: error.errors.map((err) => ({
          message: err.path === err.message,
          path: err.path,
        })),
      });
    } else {
      console.log(error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

// Update supplier by ID
export const updateSupplierById = async (req, res) => {
  try {
    const supplierId = parseInt(req.params.id);
    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    await supplier.update(req.body);
    res.status(200).json({
      message: "Supplier updated",
      status_code: 200,
      supplier: supplier,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete supplier by ID
export const deleteSupplierById = async (req, res) => {
  try {
    const supplierId = parseInt(req.params.id);
    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      return res.status(404).json({ message: "Supplier not found" });
    }

    await supplier.destroy();
    res.status(200).json({
      message: "Supplier deleted",
      status_code: 200,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
