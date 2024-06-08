import ProductModel from "./ProductModel.js";
import Supplier from "./SupplierModel.js";

Supplier.hasMany(ProductModel, { foreignKey: "supplier_name", sourceKey: "name" });
ProductModel.belongsTo(Supplier, { foreignKey: "supplier_name", targetKey: "name" });

export default { Supplier, ProductModel };