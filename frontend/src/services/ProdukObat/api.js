import Swal from "sweetalert2"
import api from "../apiMethod"

const getProdukObat = async(params) => {
    try {
        const fixParams = {
            name: params.search,
            id: params.id,
            category_id: params.category_id
        }
        const response = await api.methodGet("/products", fixParams)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const createProdukObat = async(data) => {
    try {
        const response = await api.methodPost("/products", data)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const updateProdukObat = async(id, data) => {
    try {
        const response = await api.methodPut(`/products/${id}`, data)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

const deleteProdukObat = async(id) => {
    try {
        const response = await api.methodDelete(`/products/${id}`)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export { getProdukObat, createProdukObat, updateProdukObat, deleteProdukObat }