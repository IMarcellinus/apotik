import React, { useEffect } from "react";
import {
  createProdukObat,
  deleteProdukObat,
  getProdukObat,
  updateProdukObat,
} from "../../services/ProdukObat/api";
import Swal from "sweetalert2";
import useDebounce from "../../hooks/useDebounce";

const ProductContext = React.createContext();

export const useProductContext = () => {
  return React.useContext(ProductContext);
};

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [oneProduct, setOneProduct] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [idSupplier, setIdSupplier] = React.useState({});
  const [idKategori, setIdKategori] = React.useState([]);
  const [stok, setStok] = React.useState(0);
  const [satuan, setSatuan] = React.useState({});
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [foto, setFoto] = React.useState([]);
  const [idProduct, setIdProduct] = React.useState(0);

  const handleGetProductById = async (id) => {
    setIsLoading(true);
    try {
      const response = await getProdukObat({ id });
      setOneProduct(response.product);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetProducts = async () => {
    try {
      const response = await getProdukObat({
        search,
        category_id: categories,
      });
      setProducts(response.products);
    } catch (error) {
      console.log(error);
    }
  };
  
  const openEditModal = (product) => {
    setIsOpen(true);
    setIsEdit(true);
    setName(product.name);
    setIdSupplier(product.idSupplier);
    setIdKategori(product.idKategori);
    setStok(product.stok);
    setSatuan(product.satuan);
    setPrice(product.price);
    setDescription(product.description);
    setIdProduct(product.id);
  };

  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("supplier_name", idSupplier);
      formData.append("categories_ids", JSON.stringify(idKategori));
      formData.append("stok", stok);
      formData.append("satuan", satuan.value);
      formData.append("price", price);
      formData.append("description", description);
      for (let i = 0; i < foto.length; i++) {
        formData.append("image", foto[i]);
      }
      await createProdukObat(formData);
      setIsOpen(false);
      handleCloseModal()
      handleGetProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("supplier_name", idSupplier);
      formData.append("categories_ids", JSON.stringify(idKategori));
      formData.append("stok", stok);
      formData.append("satuan", satuan.value);
      formData.append("price", price);
      formData.append("description", description);
      for (let i = 0; i < foto.length; i++) {
        formData.append("image", foto[i]);
      }
      await updateProdukObat(idProduct, formData);
      setIsOpen(false);
      handleCloseModal()
      handleGetProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = (id) => {
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
          await deleteProdukObat(id);
          handleGetProducts();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleResetState = () => {
    setName("");
    setIdSupplier({});
    setIdKategori([]);
    setStok(0);
    setSatuan({});
    setPrice(0);
    setDescription("");
    setFoto("");
    setIdProduct(0);
  };

  const handleCloseModal = () => {
    handleResetState();
    setIsOpen(false);
  };

  const valueContext = {
    openEditModal,
    products,
    setProducts,
    search,
    setSearch,
    categories,
    setCategories,
    isOpen,
    setIsOpen,
    isEdit,
    setIsEdit,
    isLoading,
    setIsLoading,
    name,
    setName,
    idSupplier,
    setIdSupplier,
    idKategori,
    setIdKategori,
    stok,
    setStok,
    satuan,
    setSatuan,
    price,
    setPrice,
    description,
    setDescription,
    foto,
    setFoto,
    idProduct,
    setIdProduct,
    handleGetProducts,
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleCloseModal,
    handleResetState,
    handleGetProductById,
    oneProduct,
  };
  
  useDebounce(handleGetProducts, 500, [search, categories]);

  return (
    <ProductContext.Provider value={valueContext}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
