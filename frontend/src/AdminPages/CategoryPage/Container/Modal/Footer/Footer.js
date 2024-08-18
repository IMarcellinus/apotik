import React from 'react'
import { useCategoriesContext } from '../../../../../context/CategoriesContext/CategoriesContext'

const Footer = () => {
  const { handleAddCategory, isEdit, handleEditCategory } = useCategoriesContext()
  return (
    <div>
      <button onClick={isEdit ? handleEditCategory : handleAddCategory} className='btn btn-primary w-full'>{isEdit ? 'Edit Category' : 'Add Category'}</button>
    </div>
  )
}

export default Footer