import { Op } from "sequelize";
import Categories from "../models/CategoriesModel.js";

export const getCategories = async (req, res) => {
  try {
    let categories;

    // Cek apakah ada query 'name'
    if (req.query.name) {
      // Jika ada query 'name', cari kategori berdasarkan nama
      categories = await Categories.findAll({
        where: {
          name: {
            [Op.like]: `%${req.query.name}%`
          }
        }
      });
    } else {
      // Jika tidak ada query 'name', tampilkan semua kategori
      categories = await Categories.findAll();
    }

    if (categories.length === 0) {
      return res.status(404).json({
        msg: "No categories found",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: "Categories List",
      status_code: 200,
      categories: categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }

};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await Categories.create({
      name,
    });

    res.status(201).json({
      msg: "Category created successfully",
      status_code: 201,
      category,
    });
  } catch (error) {
    console.error("Error creating category:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const [updatedRows] = await Categories.update(updatedData, {
      where: { id }
    });

    if (updatedRows === 0) {
      return res.status(404).json({
        msg: "Category not found or no changes made",
        status_code: 404,
      });
    }

    const updatedCategory = await Categories.findByPk(id);

    res.status(200).json({
      msg: "Category updated successfully",
      status_code: 200,
      category: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Categories.destroy({
      where: { id }
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        msg: "Category not found or already deleted",
        status_code: 404,
      });
    }

    res.status(200).json({
      msg: "Category deleted successfully",
      status_code: 200,
    });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
