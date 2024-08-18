import React from "react";
import Modal from "./Container/Modal/Modal";
import TableSelector from "./Container/TableSelector/TableSelector";
import TableOrder from "./Container/Table/TableOrder";
import OrderContextProvider from "../../context/OrderContext/OrderContext";

const OrderPage = () => {
  return (
    <OrderContextProvider>
    <div>
      <h1 className="text-3xl mb-8">Pemesanan</h1>
      <div className="flex flex-col gap-2">
        <TableSelector />
        <TableOrder />
      </div>
      <Modal />
    </div>
    </OrderContextProvider>
  );
};

export default OrderPage;
