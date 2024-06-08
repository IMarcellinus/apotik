import CategoriesModel from "./CategoriesModel.js";
import ProductCategory from "./ProductCategoryModel.js";
import ProductModel from "./ProductModel.js";
import Supplier from "./SupplierModel.js";

Supplier.hasMany(ProductModel, { foreignKey: "supplier_name", sourceKey: "name" });
ProductModel.belongsTo(Supplier, { foreignKey: "supplier_name", targetKey: "name" });

ProductModel.belongsToMany(CategoriesModel, { through: ProductCategory, foreignKey: "product_id" });
CategoriesModel.belongsToMany(ProductModel, { through: ProductCategory, foreignKey: "category_id" });

export default { Supplier, ProductModel, CategoriesModel, ProductCategory };
