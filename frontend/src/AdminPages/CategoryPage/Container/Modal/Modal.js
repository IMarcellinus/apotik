import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useCategoriesContext } from '../../../../context/CategoriesContext/CategoriesContext'

const Modal = () => {
  const { isOpen, handleCloseModal, isEdit } = useCategoriesContext()

  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title={isEdit ? "Edit Kategori Obat" : "Kategori Obat"} body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal