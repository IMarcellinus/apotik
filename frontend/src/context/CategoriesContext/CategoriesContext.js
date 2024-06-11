import React, { useEffect } from "react";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../../services/Category/api";
import Swal from "sweetalert2";

const CategoriesContext = React.createContext();

export const useCategoriesContext = () => {
  return React.useContext(CategoriesContext);
};

const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setId(0)
    setIsEdit(false)
    setName("")
    setIsOpen(false)
  }

  const handleGetCategories = async () => {
    setIsLoading(true);
    try {
      const response = await getCategory();
      handleCloseModal()
      setCategories(response);
    } catch (error) {
      setCategories([]);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCategory = async () => {
    try {
      await createCategory({ name });
      setIsEdit(false);
      handleGetCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCategory = async () => {
    try {
      await updateCategory(id, { name });
      setIsEdit(false);
      handleGetCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCategory = (id) => {
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
          await deleteCategory(id);
          handleGetCategories();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleOpenEditCategory = (category) => {
    setIsEdit(true);
    setName(category.name);
    setId(category.id);
    setIsOpen(true);
  };

  useEffect(() => {
    handleGetCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        handleCloseModal,
        handleOpenEditCategory,
        categories,
        isLoading,
        isEdit,
        name,
        id,
        handleGetCategories,
        handleAddCategory,
        handleEditCategory,
        handleDeleteCategory,
        setName,
        setIsEdit,
        setId,
        setIsOpen,
        isOpen,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
