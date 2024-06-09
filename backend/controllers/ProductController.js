import { Sequelize } from "sequelize";
import Category from "../models/CategoriesModel.js";
import ProductCategory from "../models/ProductCategoryModel.js";
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

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }, // Exclude join table attributes
        },
      ],
    });

    if (!product) {
      return res.status(404).json({
        msg: "Product not found",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: "Product details",
      status_code: 200,
      product: product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      supplier_name,
      categories_ids,
      name,
      description,
      stok,
      satuan,
      price,
    } = req.body;

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

    // Check if product with the same name already exists
    const existingProduct = await Product.findOne({ where: { name } });
    if (existingProduct) {
      return res.status(400).json({
        msg: "Product with the same name already exists",
        status_code: 400,
      });
    }

    // Check if all categories exist
    const categoryIdsArray = JSON.parse(categories_ids); // Parse the categories_ids string to array
    const categories = await Category.findAll({
      where: { id: categoryIdsArray },
    });
    if (categories.length !== categoryIdsArray.length) {
      return res.status(400).json({
        msg: "One or more categories not found",
        status_code: 400,
      });
    }

    // Collect image paths from the uploaded files
    const imagePaths = req.files.map((file) => file.path);

    // Check if all required fields are provided
    if (
      !name ||
      !description ||
      !stok ||
      !satuan ||
      !price ||
      imagePaths.length === 0
    ) {
      return res.status(400).json({
        msg: "All fields are required",
        status_code: 400,
      });
    }

    const product = await Product.create({
      supplier_name,
      name,
      description,
      stok,
      satuan,
      price,
      image: imagePaths.join(","), // Include the image in the product creation
    });

    // Create associations with categories
    await product.setCategories(categories);

    // Retrieve the created product with associations
    const createdProduct = await Product.findByPk(product.id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }, // Exclude join table attributes
        },
      ],
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
    const {
      supplier_name,
      categories_ids,
      name,
      description,
      stok,
      satuan,
      price,
    } = req.body;

    // Check if supplier exists if supplier_name is being updated
    if (supplier_name) {
      const supplier = await Supplier.findOne({
        where: { name: supplier_name },
      });
      if (!supplier) {
        return res.status(400).json({
          msg: "Supplier not found",
          status_code: 400,
        });
      }
    }

    // Check if all categories exist if categories_ids are being updated
    if (categories_ids) {
      const categoryIdsArray = JSON.parse(categories_ids);
      const categories = await Category.findAll({
        where: { id: categoryIdsArray },
      });
      if (categories.length !== categoryIdsArray.length) {
        return res.status(400).json({
          msg: "One or more categories not found",
          status_code: 400,
        });
      }
    }

    // Collect image paths from the uploaded files, if any
    const imagePaths = req.files ? req.files.map((file) => file.path) : [];

    // Check if all required fields are provided (or updated)
    if (
      !name &&
      !description &&
      !stok &&
      !satuan &&
      !price &&
      imagePaths.length === 0 &&
      !supplier_name &&
      !categories_ids
    ) {
      return res.status(400).json({
        msg: "At least one field is required to update",
        status_code: 400,
      });
    }

    const productData = {
      supplier_name,
      name,
      description,
      stok,
      satuan,
      price,
    };

    // Include image paths if there are new images
    if (imagePaths.length > 0) {
      productData.image = imagePaths.join(",");
    }

    // Update product data
    const [updatedRows] = await Product.update(productData, {
      where: { id },
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
      const categories = await Category.findAll({
        where: { id: JSON.parse(categories_ids) },
      });
      await updatedProduct.setCategories(categories);
    }

    // Retrieve the updated product with associations
    const productWithAssociations = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }, // Exclude join table attributes
        },
      ],
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

export const searchProductsByName = async (req, res) => {
  try {
    const { name } = req.params;
    
    const products = await Product.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: `%${name}%` // Use Sequelize's Op.like for partial match
        }
      },
      include: [
        {
          model: Category,
          through: { attributes: [] }, // Exclude join table attributes
        },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({
        msg: "No products found",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: `Products List ${name}`,
      status_code: 200,
      products: products,
    });
  } catch (error) {
    console.error("Error searching products by name:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCategoriesByProductId = async (req, res) => {
  try {
    const { product_id } = req.params;

    // Find the product entry by product_id
    const product = await Product.findByPk(product_id, {
      include: [
        {
          model: Category,
          through: { attributes: [] }, // Exclude join table attributes
        },
      ],
    });

    if (!product) {
      return res.status(404).json({
        msg: "Product not found for the given product ID",
        status_code: 404,
      });
    }

    // Find category IDs associated with the given product ID
    const productCategoryEntries = await ProductCategory.findAll({
      where: { product_id: product_id },
    });

    // Extract category IDs from the result
    const categoryIds = productCategoryEntries.map(entry => entry.category_id);

    // Find categories with the extracted category IDs
    const categories = await Category.findAll({
      where: { id: categoryIds },
    });

    if (categories.length === 0) {
      return res.status(404).json({
        msg: "No categories found for the given product ID",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: `Categories for Product ID ${product_id}`,
      status_code: 200,
      product_name: product.name,
      categories: categories,
    });
  } catch (error) {
    console.error("Error retrieving categories by product ID:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

