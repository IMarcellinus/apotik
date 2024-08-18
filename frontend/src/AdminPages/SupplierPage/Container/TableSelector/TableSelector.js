import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useSupplierContext } from '../../../../context/SupplierContext/SupplierContext'

const TableSelector = () => {
  const { handleOpenModal } = useSupplierContext()
  return (
    <TableSelectorWrapper customSTyles={"justify-end"}>
        <ButtonAdd handleClick={handleOpenModal} />
    </TableSelectorWrapper>
  )
}

export default TableSelector