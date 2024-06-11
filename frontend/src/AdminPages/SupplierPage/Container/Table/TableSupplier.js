import React from 'react'
import ReusableTable from '../../../../components/ReusableTable/ReusableTable'
import { toRupiah } from '../../../../utils/Money'
import Action from './Action/Action'
import { useSupplierContext } from '../../../../context/SupplierContext/SupplierContext'

const TableSupplier = () => {
    const { suppliers: data } = useSupplierContext()
    const columns = [
        {
            accessor: 'name',
            header: 'Name'
        },
        {
            accessor: 'company',
            header: 'Company'
        },
        {
            accessor: 'email',
            header: 'Email'
        },
        {
            accessor: 'no_hp',
            header: 'No HP'
        },
        {
            accessor: 'address',
            header: 'Alamat'
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

export default TableSupplier