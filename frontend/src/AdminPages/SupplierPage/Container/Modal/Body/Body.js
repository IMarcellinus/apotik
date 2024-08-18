import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import { useSupplierContext } from "../../../../../context/SupplierContext/SupplierContext";

const Body = () => {
  const { name, company, email, noHp, address, setName, setCompany, setEmail, setNoHp, setAddress } = useSupplierContext();
  return (
    <div className="flex flex-col gap-2">
      <InputType value={name} onChange={setName} label={"Name"} type={"text"} placeholder={"Masukkan Nama"} />
      <InputType value={company} onChange={setCompany} label={"Company"} type={"text"} placeholder={"Masukkan Company"} />
      <InputType value={email} onChange={setEmail} label={"Email"} type={"email"} placeholder={"Masukkan Email"} />
      <InputType value={noHp} onChange={setNoHp} label={"No Handphone"} type={"number"} placeholder={"Masukkan No Handphone"} />
      <InputType value={address} onChange={setAddress} label={"Alamat"} type={"textarea"} placeholder={"Masukkan Alamat"} />
    </div>
  );
};

export default Body;
