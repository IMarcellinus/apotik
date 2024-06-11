import React from 'react'
import TableSelectorWrapper from '../../../../components/TableSelector/TableSelectorWrapper'
import SearchInput from '../../../../components/SearchInput/SearchInput'
import AsyncSelect from 'react-select/async'
import ButtonAdd from '../../../../components/ButtonAdd/ButtonAdd'
import { useProductContext } from '../../../../context/ProductContext/ProductContext'
import { getCategory } from '../../../../services/Category/api'

const TableSelector = () => {
  const { setSearch, search, setIsOpen, setCategories } = useProductContext()
  const loadOptionsKategori = async(inputValue) => {
    try {
      const response = await getCategory({
        name: inputValue
      })
      return response.map((category) => ({ label: category.name, value: category.id }))
    } catch (error) {
      console.log(error)
    }
  }
  const onChangeKategori = (value) => {
    if (!value) {
      setCategories("")
      return
    }
    setCategories(value.value)
  }
  return (
    <TableSelectorWrapper customSTyles={"justify-between"}>
        <SearchInput value={search} onChange={setSearch} placeholder="Cari Obat" />
        <AsyncSelect onChange={onChangeKategori} isClearable loadOptions={loadOptionsKategori} className='w-[200px]' placeholder="Pilih Kategori" defaultOptions />
        <ButtonAdd handleClick={() => setIsOpen(true)} />
    </TableSelectorWrapper>
  )
}

export default TableSelector