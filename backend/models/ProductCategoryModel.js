import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ProductCategory = db.define(
  "product_categories",
  {
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default ProductCategory;
