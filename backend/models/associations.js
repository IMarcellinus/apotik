// association.js
import CategoriesModel from "./CategoriesModel.js";
import OrderModel from "./OrderModel.js";
import ProductCategory from "./ProductCategoryModel.js";
import ProductModel from "./ProductModel.js";
import Supplier from "./SupplierModel.js";

// Relation Supplier Model with Product Model
Supplier.hasMany(ProductModel, { foreignKey: "supplier_name", sourceKey: "name" });
ProductModel.belongsTo(Supplier, { foreignKey: "supplier_name", targetKey: "name" });

// Relation Product Model with Order Model
ProductModel.hasMany(OrderModel, { foreignKey: "product_name", targetKey: "name" }); // Modified this line
OrderModel.belongsTo(ProductModel, { foreignKey: "product_name", sourceKey: "name" }); // Modified this line

// Relation Product Model with Categories Model
ProductModel.belongsToMany(CategoriesModel, { through: ProductCategory, foreignKey: "product_id" });
CategoriesModel.belongsToMany(ProductModel, { through: ProductCategory, foreignKey: "category_id" });

export default { Supplier, ProductModel, CategoriesModel, ProductCategory, OrderModel };
