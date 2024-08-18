import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { useProductContext } from "../../../../../context/ProductContext/ProductContext";
import { getCategory } from "../../../../../services/Category/api";
import { getSupplier } from "../../../../../services/Supplier/api";

const Body = () => {
  const { isEdit, name, foto, setFoto, stok, price, description, setName, setIdSupplier, setIdKategori, setStok, setSatuan, setPrice, setDescription } = useProductContext();
  const loadOptionsKategori = async(inputValue) => {
    try {
      const response = await getCategory({
        name: inputValue
      })
      return response.map((category) => ({ label: category.name, value: category.id }))
    } catch (error) {
      console.log(error)
    }
  }
  const loadOptionsSupplier = async(inputValue) => {
    try {
      const response = await getSupplier({
        name: inputValue
      })
      return response.map((supplier) => ({ label: supplier.name, value: supplier.name }))
    } catch (error) {
      console.log(error)
    }
  }
  const onChangeSupplier = (value) => {
    setIdSupplier(value.value)
  }
  const onChangeKategori = (value) => {
    const fixValue = value.map((item) => item.value)
    setIdKategori(fixValue)
  }
  return (
    <div className="flex flex-col gap-2">
      <InputType value={name} onChange={setName} label={"Name"} type={"text"} placeholder={"Masukkan Nama"} />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="supplier">Supplier</label>
        <AsyncSelect className="" defaultOptions onChange={onChangeSupplier} loadOptions={loadOptionsSupplier} placeholder="Pilih Supplier" id="supplier" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="supplier">Kategori</label>
        <AsyncSelect className="" onChange={onChangeKategori} loadOptions={loadOptionsKategori} placeholder="Pilih Kategori (Bisa lebih dari 1)" defaultOptions id="kategori" isMulti />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="supplier">Satuan</label>
      <Select options={[{ value: "pcs", label: "Pcs" }, { value: "box", label: "Box" }, { value: "pack", label: "Pack" }]} onChange={setSatuan} label={"Satuan"} type={"text"} placeholder={"Masukkan Satuan"} />
      </div>
      <InputType value={foto} onChange={setFoto} label={!isEdit ? "Foto" : "Foto (Jika Tidak Diisi Maka Foto Tidak Diganti)"} type={"file"} placeholder={"Masukkan Foto"} inputProps={{ accept: "image/*", id: "fotoProduct", multiple: true }} />
      <InputType value={stok} onChange={setStok} label={"Stok"} type={"number"} placeholder={"Masukkan Stok"} />
      <InputType value={price} onChange={setPrice} label={"Price"} type={"number"} placeholder={"Masukkan Harga"} />
      <InputType value={description} onChange={setDescription} label={"Description"} type={"text"} placeholder={"Masukkan Deskripsi"} />
    </div>
  );
};

export default Body;
