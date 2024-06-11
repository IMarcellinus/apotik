import React from "react";
import { login, register } from "../../services/Auth/api";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext()

export const useAuthContext = () => {
    return React.useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = React.useState(JSON.parse(localStorage.getItem('user')) ? true : false)
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')) || {})
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        setIsLogin(false)
        setUser({})
    }

    const handleLogin = async(username, password) => {
        try {
            const response = await login({
                username,
                password
            })
            const { user } = response
            localStorage.setItem('user', JSON.stringify(user))
            setIsLogin(true)
            setUser(user)
        } catch (error) {
            console.log(error)
        }
    }

    const handleRegister = async({ username, password }) => {
        try {
            await register({
                username,
                password
            })
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        isLogin,
        setIsLogin,
        user,
        setUser,
        handleLogout,
        handleLogin,
        handleRegister,
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider