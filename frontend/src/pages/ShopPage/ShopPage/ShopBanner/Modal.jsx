import InputType from "../../../../components/InputType/InputType";
import Modal from "../../../../components/Modal/Modal";
import { useOrderContext } from "../../../../context/OrderContext/OrderContext";

const Body = () => {
  const {
    name,
    quantity,
    noHp,
    email,
    alamat,
    note,
    setName,
    setQuantity,
    setNoHp,
    setEmail,
    setAlamat,
    setNote,
    foto,
    setFoto,
  } = useOrderContext();
  return (
    <>
      <InputType
        value={name}
        onChange={setName}
        label={"Name"}
        type={"text"}
        placeholder={"Masukkan Nama"}
      />
      <InputType
        value={quantity}
        onChange={setQuantity}
        label={"Quantity"}
        type={"number"}
        placeholder={"Masukkan Quantity"}
      />
      <InputType
        value={noHp}
        onChange={setNoHp}
        label={"No Hp"}
        type={"number"}
        placeholder={"Masukkan No Hp"}
      />
      <InputType
        value={email}
        onChange={setEmail}
        label={"Email"}
        type={"email"}
        placeholder={"Masukkan Email"}
      />
      <InputType
        value={alamat}
        onChange={setAlamat}
        label={"Address"}
        type={"textarea"}
        placeholder={"Masukkan Alamat"}
      />
      <InputType
        value={note}
        onChange={setNote}
        label={"Note"}
        type={"textarea"}
        placeholder={"Masukkan Note"}
      />
      <InputType
        value={foto}
        onChange={setFoto}
        label={"Foto"}
        type={"file"}
        placeholder={"Masukkan Foto"}
        inputProps={{ id: "file" }}
      />
    </>
  );
};

const Footer = () => {
  const { createOrderByResep } = useOrderContext();
  return (
    <div>
      <button onClick={createOrderByResep} className="btn btn-primary w-full">
        Submit
      </button>
    </div>
  );
};

const ModalOrder = () => {
  const { isOpen, handleCloseModal } = useOrderContext();
  return (
    <Modal
      title={"Order Checkout"}
      isOpen={isOpen}
      onClose={handleCloseModal}
      body={<Body />}
      footer={<Footer />}
    />
  );
};

export default ModalOrder;
