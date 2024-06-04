import ProductModel from "./ProductModel.js";
import Supplier from "./SupplierModel.js";

Supplier.hasMany(ProductModel, { foreignKey: "supplier_name", sourceKey: "supplier_name" });
ProductModel.belongsTo(Supplier, { foreignKey: "supplier_name", targetKey: "supplier_name" });

export default { Supplier, ProductModel };