import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useSupplierContext } from '../../../../context/SupplierContext/SupplierContext'

const Modal = () => {
  const { isOpen, handleCloseModal, isEdit } = useSupplierContext()
  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title={isEdit ? "Edit Supplier" : "Tambah Supplier"} body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal