import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useProductContext } from '../../../../context/ProductContext/ProductContext'

const Modal = () => {
  const { isOpen, handleCloseModal, isEdit } = useProductContext()
  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title={isEdit ? "Edit Obat" : "Tambah Obat"} body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal