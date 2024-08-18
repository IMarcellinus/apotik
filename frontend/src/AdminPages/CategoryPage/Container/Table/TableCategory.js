import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import { toRupiah } from '../../../../utils/Money'
import Action from './Action/Action'
import { useCategoriesContext } from '../../../../context/CategoriesContext/CategoriesContext'

const TableCategory = () => {
    const { categories: data } = useCategoriesContext()

    const columns = [
        {
            accessor: 'name',
            header: 'Name'
        },
        {
            header: 'Action',
            accessor: 'id',
            Cell: Action
        }
    ]
  return (
    <ReusableTable data={data} columns={columns} />
  )
}

export default TableCategory