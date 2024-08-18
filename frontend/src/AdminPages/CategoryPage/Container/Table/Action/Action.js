import React from 'react'
import ActionsButtonTable from '../../../../../components/ReusableTable/ActionButtonTable/ActionButtonTable'
import { useCategoriesContext } from '../../../../../context/CategoriesContext/CategoriesContext'

const Action = ({ value, row }) => {
  const { handleOpenEditCategory, handleDeleteCategory } = useCategoriesContext()
  const actions = [
    {
      type: 'Edit',
      onClick: () => {
        handleOpenEditCategory(row)
      }
    },
    {
      type: 'Delete',
      onClick: () => {
        handleDeleteCategory(row.id)
      }
    },
  ]
  return (
    <ActionsButtonTable actions={actions} />
  )
}

export default Action