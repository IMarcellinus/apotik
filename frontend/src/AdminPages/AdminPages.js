import React, { useState } from 'react'
import Sidebar from '../components/SidebarAdmin/SidebarAdmin'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext/AuthContext';

const AdminPages = () => {
  const [isWide, setIsWide] = useState(true);
  const { pathname } = useLocation()
  const { user } = useAuthContext()

  if (user.role !== "admin") {
    return <Navigate to={'/'} />
  }

  if (pathname === '/admin') {
    return <Navigate to={'/admin/obat'} />
  }
  return (
    <div className='h-screen p-2'>
      <div className='h-full max-w-[1440px] mx-auto flex gap-3'>
        <Sidebar isWide={isWide} setIsWide={setIsWide} />
        <main className={`w-full max-w-[1124px] ${!isWide && 'max-w-[1354px]'}`}>
         <Outlet />
        </main>
        </div>
    </div>
  )
}

export default AdminPages