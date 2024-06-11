import React from 'react'
import { useOrderContext } from '../../../../../context/OrderContext/OrderContext'

const Footer = () => {
  const { handleInputResi, handleChangeStatusDibayar, openDibayar, isDetail } = useOrderContext()

  if (isDetail) {
    return null
  }
  
  return (
    <div>
      <button onClick={openDibayar ? handleChangeStatusDibayar : handleInputResi} className='btn btn-primary w-full'>Submit</button>
    </div>
  )
}

export default Footer