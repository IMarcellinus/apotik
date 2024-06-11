import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import Select from "react-select"
import { useOrderContext } from '../../../../context/OrderContext/OrderContext'

const TableSelector = () => {
  const { setTypeFilter } = useOrderContext()
  const options = [
    {
      value: 0,
      label: "Semua"
    },
    {
      value: 1,
      label: "Order By Resep"
    },
    {
      value: 2,
      label: "Order By Checkout"
    }
  ]
  return (
    <TableSelectorWrapper customSTyles={"justify-between"}>
        <Select className='w-[200px]' options={options} onChange={(e) => setTypeFilter(e.value)} defaultValue={options[0]} isSearchable={false} />
    </TableSelectorWrapper>
  )
}

export default TableSelector