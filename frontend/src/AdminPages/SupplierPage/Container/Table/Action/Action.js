import React from 'react'
import ActionsButtonTable from '../../../../../components/ReusableTable/ActionButtonTable/ActionButtonTable'
import { useSupplierContext } from '../../../../../context/SupplierContext/SupplierContext'

const Action = ({ value, row }) => {
  const { handleEditSupplierModal, handleDeleteSupplier } = useSupplierContext()
  const actions = [
    {
      type: 'Edit',
      onClick: () => {
        handleEditSupplierModal(row)
      }
    },
    {
      type: 'Delete',
      onClick: () => {
        handleDeleteSupplier(row.id)
      }
    },
  ]
  return (
    <ActionsButtonTable actions={actions} />
  )
}

export default Action