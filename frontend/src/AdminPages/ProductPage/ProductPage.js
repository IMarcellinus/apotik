import React from "react";
import TableSelector from "./Container/TableSelector/TableSelector";
import TableProduct from "./Container/Table/TableProduct";
import Modal from "./Container/Modal/Modal";
import ProductContextProvider from "../../context/ProductContext/ProductContext";

const ProductPage = () => {
  return (
    <ProductContextProvider>
      <div>
        <h1 className="text-3xl mb-8">Produk Obat</h1>
        <div className="flex flex-col gap-2">
          <TableSelector />
          <TableProduct />
        </div>
        <Modal />
      </div>
    </ProductContextProvider>
  );
};

export default ProductPage;
