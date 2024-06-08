import Product from "../models/ProductModel.js";
import Supplier from "../models/SupplierModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    if (products.length === 0) {
      return res.status(400).json({
        msg: "No products found",
        status_code: 400,
      });
    }

    res.status(200).json({
      msg: "products List",
      status_code: 200,
      products: products,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { supplier_name, product_name, description, stok, satuan, price } = req.body;

    // Check if supplier exists
    const supplier = await Supplier.findOne({ where: { name: supplier_name } });
    if (!supplier) {
      return res.status(400).json({
        msg: "Supplier not found",
        status_code: 400,
      });
    }

    const product = await Product.create({
      supplier_name,
      product_name,
      description,
      stok,
      satuan,
      price,
    });

    res.status(201).json({
      msg: "Product created successfully",
      status_code: 201,
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    // Check if supplier exists if supplier_name is being updated
    if (updatedData.supplier_name) {
      const supplier = await Supplier.findOne({ where: { name: updatedData.supplier_name } });
      if (!supplier) {
        return res.status(400).json({
          msg: "Supplier not found",
          status_code: 400,
        });
      }
    }

    const [updatedRows] = await Product.update(updatedData, {
      where: { id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({
        msg: "Product not found or no changes made",
        status_code: 404,
      });
    }

    const updatedProduct = await Product.findByPk(id);

    res.status(200).json({
      msg: "Product updated successfully",
      status_code: 200,
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Product.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        msg: "Product not found or already deleted",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: "Product deleted successfully",
      status_code: 200,
    });
  } catch (error) {
    console.error("Error deleting product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};