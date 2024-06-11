import React from 'react'
import ActionsButtonTable from '../../../../../components/ReusableTable/ActionButtonTable/ActionButtonTable'
import { useProductContext } from '../../../../../context/ProductContext/ProductContext'
import { useNavigate } from 'react-router-dom'

const Action = ({ value, row }) => {
  const { openEditModal, handleDeleteProduct } = useProductContext()
  const navigate = useNavigate()
  const actions = [
    {
      type: 'Edit',
      onClick: () => {
        openEditModal(row)
      }
    },
    {
      type: 'Delete',
      onClick: () => {
        handleDeleteProduct(row.id)
      }
    },
    {
      type: 'View',
      onClick: () => {
        navigate(`/shopDetails/${row.id}`)
      }
    }
  ]
  return (
    <ActionsButtonTable actions={actions} />
  )
}

export default Action