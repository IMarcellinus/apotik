import React from "react";
import { FaCheck, FaCheckDouble, FaEdit, FaEye, FaShippingFast, FaTrashAlt } from "react-icons/fa";

const ButtonAction = ({ onClick, type }) => {
  const typeActionIcon = (type) => {
    switch (type) {
      case "Delete":
        return <FaTrashAlt size={20} color="red" />;
      case "Edit":
        return <FaEdit size={20} color="blue" />;
      case "View":
        return <FaEye size={20} />;
      case "Accept":
        return <FaCheck size={20} color="green" />;
      case "Shipment":
        return <FaShippingFast size={20} color="orange" />;
      case "Double Check":
        return <FaCheckDouble size={20} color="green" />;
      default:
        return <FaTrashAlt />;
    }
  };
  return <button onClick={onClick}>{typeActionIcon(type)}</button>;
};

export default ButtonAction;
