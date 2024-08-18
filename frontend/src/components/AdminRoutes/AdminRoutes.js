import React from 'react'
import { useAuthContext } from '../../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = () => {
    const auth = useAuthContext();
    const { pathname } = useLocation()

    if (!auth.user.role !== "admin") {
        <Navigate to={"/"} />
    } else {
        return <Navigate to={"/admin"} />
    }
}

export default AdminRoutes