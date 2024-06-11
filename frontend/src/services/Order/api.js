import api from "../apiMethod"

const getListOrder = async (params) => {
    try {
        const response = await api.methodGet("/order", params)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const createOrder = async (data) => {
    try {
        const response = await api.methodPost("/order", data, true)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const changeStatusOrder = async (id, data) => {
    try {
        const response = await api.methodPut(`/order/${id}`, data)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const inputResi = async (id, data) => {
    try {
        const response = await api.methodPut(`/order/${id}`, data)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}


export { getListOrder, createOrder, changeStatusOrder, inputResi }