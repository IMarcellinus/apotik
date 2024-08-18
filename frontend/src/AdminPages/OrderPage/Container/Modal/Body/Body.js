import React from "react";
import InputType from "../../../../../components/InputType/InputType";
import AsyncSelect from "react-select/async";
import { useOrderContext } from "../../../../../context/OrderContext/OrderContext";

const Body = () => {
  const {
    noResi,
    setNoResi,
    name,
    email,
    noHp,
    alamat,
    note,
    status,
    price,
    quantity,
    type,
    isDetail,
    setPrice,
    foto,
    openDibayar,
  } = useOrderContext();
  const statusOrder = (status) => {
    switch (status) {
      case 0:
        return "Belum Bayar";
      case 1:
        return "Dibayar";
      case 2:
        return "Pengiriman";
      case 3:
        return "Selesai";
      default:
        return "Pending";
    }
  }
  const typeOrder = (type) => {
    switch (type) {
      case 2:
        return "Order By Resep";
      default:
        return "Order By Checkout";
    }
  }

  if (openDibayar) {
    return (
      <div className="flex flex-col gap-2">
        <InputType
          value={price}
          label={"Harga"}
          type={"text"}
          onChange={setPrice}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {isDetail && (
        <>
          <InputType
            value={name}
            label={"Name"}
            type={"text"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={email}
            label={"Email"}
            type={"text"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={noHp}
            label={"No Handphone"}
            type={"number"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={alamat}
            label={"Alamat"}
            type={"textarea"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={note}
            label={"Note"}
            type={"textarea"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={statusOrder(status)}
            label={"Status"}
            type={"text"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={price}
            label={"Price"}
            type={"text"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={quantity}
            label={"Quantity"}
            type={"number"}
            inputProps={{
              disabled: true,
            }}
          />
          <InputType
            value={typeOrder(type)}
            label={"Type"}
            type={"text"}
            inputProps={{
              disabled: true,
            }}
          />
          {foto && (
            <div>
            <p className="font-medium mb-2 text-slate-700">Foto</p>
            <a href={foto} target="_blank">{foto}</a>
          </div>
          )}
        </>
      )}
      <InputType
        value={noResi}
        onChange={setNoResi}
        label={"No Resi"}
        type={"text"}
        placeholder={"Masukkan No Resi"}
        inputProps={{
          disabled: isDetail,
        }}
      />
    </div>
  );
};

export default Body;
