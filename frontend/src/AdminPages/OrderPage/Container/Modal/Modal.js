import React from 'react'
import ModalComponent from '../../../../components/Modal/Modal'
import BodyModal from './Body/Body'
import FooterModal from './Footer/Footer'
import { useOrderContext } from '../../../../context/OrderContext/OrderContext'

const Modal = () => {
  const { isOpen, handleCloseModal, openDibayar, isDetail } = useOrderContext()
  return (
    <ModalComponent isOpen={isOpen} onClose={handleCloseModal} title={openDibayar ? "Input Harga" : isDetail ? "Detail Order" : "Input No Resi"} body={<BodyModal />} footer={<FooterModal />} />
  )
}

export default Modal