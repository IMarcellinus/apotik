import React from 'react'
import { useSupplierContext } from '../../../../../context/SupplierContext/SupplierContext'

const Footer = () => {
  const { handleAddSupplier, handleEditSupplier, isEdit } = useSupplierContext()
  return (
    <div>
      <button onClick={isEdit ? handleEditSupplier : handleAddSupplier} className='btn btn-primary w-full'>{isEdit ? 'Edit Supplier' : 'Add Supplier'}</button>
    </div>
  )
}

export default Footer