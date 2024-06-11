import React from 'react'

const TableSelectorWrapper = ({ customSTyles, children }) => {
  return (
    <div className={`${customSTyles} flex`}>
        {children}
    </div>
  )
}

export default TableSelectorWrapper