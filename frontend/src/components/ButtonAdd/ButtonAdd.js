import React from 'react'
import { IoMdAdd } from 'react-icons/io'

const ButtonAdd = ({ handleClick, title }) => {
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary text-white py-[6px] px-3 rounded !flex items-center justify-center gap-2 font-bold">
        <IoMdAdd />
        <p className='m-0 text-white font-medium'>{title || "Tambah"}</p>
      </button>
    </div>
  )
}

export default ButtonAdd