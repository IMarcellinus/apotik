import React from "react";
import {
  createSupplier,
  deleteSupplier,
  getSupplier,
  updateSupplier,
} from "../../services/Supplier/api";
import Swal from "sweetalert2";

const SupplierContext = React.createContext();

export const useSupplierContext = () => {
  return React.useContext(SupplierContext);
};

const SupplierContextProvider = ({ children }) => {
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [noHp, setNoHp] = React.useState(0);
  const [address, setAddress] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [suppliers, setSuppliers] = React.useState([]);
  const [isEdit, setIsEdit] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setId(0);
    setName("");
    setEmail("");
    setNoHp(0);
    setAddress("");
    setCompany("");
    setIsEdit(false);
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleEditSupplierModal = (supplier) => {
    setId(supplier.id);
    setName(supplier.name);
    setEmail(supplier.email);
    setNoHp(supplier.no_hp);
    setAddress(supplier.address);
    setCompany(supplier.company);
    setIsEdit(true);
    setIsOpen(true);
  };

  const handleGetSuppliers = async () => {
    setIsLoading(true);
    try {
      const response = await getSupplier();
      handleCloseModal();
      setSuppliers(response);
    } catch (error) {
      setSuppliers([]);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddSupplier = async () => {
    try {
      await createSupplier({
        name,
        email,
        no_hp: noHp,
        address,
        company,
      });
      handleGetSuppliers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditSupplier = async () => {
    try {
      await updateSupplier(id, {
        name,
        email,
        no_hp: noHp,
        address,
        company,
      });
      handleGetSuppliers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteSupplier = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteSupplier(id);
          handleGetSuppliers();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  React.useEffect(() => {
    handleGetSuppliers();
  }, []);

  const valueContext = {
    handleCloseModal,
    handleOpenModal,
    handleEditSupplierModal,
    id,
    setId,
    name,
    setName,
    email,
    setEmail,
    noHp,
    setNoHp,
    address,
    setAddress,
    company,
    setCompany,
    suppliers,
    setSuppliers,
    isLoading,
    setIsLoading,
    isEdit,
    setIsEdit,
    isOpen,
    setIsOpen,
    handleGetSuppliers,
    handleAddSupplier,
    handleEditSupplier,
    handleDeleteSupplier,
  };

  return <SupplierContext.Provider value={valueContext}>{children}</SupplierContext.Provider>;
};

export default SupplierContextProvider;
