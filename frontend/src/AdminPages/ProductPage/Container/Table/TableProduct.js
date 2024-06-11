import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import { toRupiah } from '../../../../utils/Money'
import Action from './Action/Action'
import { useProductContext } from '../../../../context/ProductContext/ProductContext'

const TableProduct = () => {
    const { products: data  } = useProductContext()
    const columns = [
        {
            accessor: 'name',
            header: 'Name'
        },
        {
            accessor: 'supplier_name',
            header: 'Supplier'
        },
        {
            accessor: 'stok',
            header: 'Stok'
        },
        {
            accessor: 'satuan',
            header: 'Satuan'
        },
        {
            accessor: 'price',
            header: 'Price',
            Cell: ({ value }) => toRupiah(value)
        },
        {
            accessor: 'description',
            header: 'Description'
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

export default TableProduct