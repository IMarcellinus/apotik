import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useCategoriesContext } from '../../../../context/CategoriesContext/CategoriesContext'

const TableSelector = () => {
  const { setIsOpen } = useCategoriesContext()
  const handleOpen = () => {
    setIsOpen(true)
  }
  return (
    <TableSelectorWrapper customSTyles={"justify-end"}>
        <ButtonAdd handleClick={handleOpen} />
    </TableSelectorWrapper>
  )
}

export default TableSelector