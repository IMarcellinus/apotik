import Category from "../models/CategoriesModel.js";
import Product from "../models/ProductModel.js";
import Supplier from "../models/SupplierModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          through: { attributes: [] }, // Exclude join table attributes
        },
      ],
    });

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
    const { supplier_name, categories_ids, name, description, stok, satuan, price } = req.body;
    const imageFile = req.file; // Get the uploaded file

    // Log received categories_ids
    console.log("Received categories_ids:", categories_ids);

    // Check if supplier exists
    const supplier = await Supplier.findOne({ where: { name: supplier_name } });
    if (!supplier) {
      return res.status(400).json({
        msg: "Supplier not found",
        status_code: 400,
      });
    }

    // Check if all categories exist
    const categoryIdsArray = JSON.parse(categories_ids); // Parse the categories_ids string to array
    const categories = await Category.findAll({ where: { id: categoryIdsArray } });
    if (categories.length !== categoryIdsArray.length) {
      return res.status(400).json({
        msg: "One or more categories not found",
        status_code: 400,
      });
    }

    // Check if all required fields are provided
    if (!name || !description || !stok || !satuan || !price || !imageFile) {
      return res.status(400).json({
        msg: "All fields are required",
        status_code: 400,
      });
    }

    // If all validations pass, then proceed to upload the image and create the product
    const image = imageFile.path;

    const product = await Product.create({
      supplier_name,
      name,
      description,
      stok,
      satuan,
      price,
      image, // Include the image in the product creation
    });

    // Create associations with categories
    await product.setCategories(categories);

    // Retrieve the created product with associations
    const createdProduct = await Product.findByPk(product.id, {
      include: [
        {
          model: Category,
          through: { attributes: [] } // Exclude join table attributes
        },
      ]
    });

    res.status(201).json({
      msg: "Product created successfully",
      status_code: 201,
      product: createdProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }

};


export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { supplier_name, categories_ids, name, description, stok, satuan, price } = req.body;

    // Check if supplier exists if supplier_name is being updated
    if (supplier_name) {
      const supplier = await Supplier.findOne({ where: { name: supplier_name } });
      if (!supplier) {
        return res.status(400).json({
          msg: "Supplier not found",
          status_code: 400,
        });
      }
    }

    // Check if all categories exist if categories_ids are being updated
    if (categories_ids) {
      const categories = await Category.findAll({ where: { id: categories_ids } });
      if (categories.length !== categories_ids.length) {
        return res.status(400).json({
          msg: "One or more categories not found",
          status_code: 400,
        });
      }
    }

    // Update product data
    const [updatedRows] = await Product.update({
      supplier_name,
      name,
      description,
      stok,
      satuan,
      price,
    }, {
      where: { id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({
        msg: "Product not found or no changes made",
        status_code: 404,
      });
    }

    const updatedProduct = await Product.findByPk(id);

    // Update associations with categories if provided
    if (categories_ids) {
      const categories = await Category.findAll({ where: { id: categories_ids } });
      await updatedProduct.setCategories(categories);
    }

    // Retrieve the updated product with associations
    const productWithAssociations = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] } // Exclude join table attributes
        },
      ]
    });

    res.status(200).json({
      msg: "Product updated successfully",
      status_code: 200,
      product: productWithAssociations,
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
      where: { id },
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
