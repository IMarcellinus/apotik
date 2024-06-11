import axios from "axios"
import Swal from "sweetalert2"
const baseURL = "http://localhost:5000"

const methodPost = async (url, data, isFormData) => {
    try {
        // if (isFormData) {
        //     const formData = new FormData()
        //     for (const key in data) {
        //         if (typeof((data[key])) === 'object') {
        //             console.log(data[key].length, "nani kore", data[key])
        //             for (let i = 0; i < data[key].length; i++) {
        //                 formData.append(`${key}`, data[key][i])
        //             }
        //         }
        //         formData.append(key, data[key])
        //     }
        //     const response = await axios.post(`${baseURL}${url}`, formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         }
        //     })
        //     console.log(response)
        //     const result = response.data
        //     return result
        // }
        const response = await axios.post(`${baseURL}${url}`, data)
        const result = response.data
        return result
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.msg,
        })
        throw error
    }
}

const methodGet = async (url, param) => {
    try {
        const response = await axios.get(`${baseURL}${url}`, {
            params: param
        })
        const result = response.data
        return result
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.msg,
        })
        throw error
    }
}

const methodPut = async (url, data, isFormData) => {
    try {
        if (isFormData) {
            const formData = new FormData()
            for (const key in data) {
                if (Array.isArray(data[key])) {
                    for (let i = 0; i < data[key].length; i++) {
                        formData.append(`${key}`, data[key][i])
                    }
                }
                formData.append(key, data[key])
            }
            const response = await axios.put(`${baseURL}${url}`, formData)
            const result = response.data
            return result
        }
        const response = await axios.put(`${baseURL}${url}`, data)
        const result = response.data
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

const methodDelete = async (url) => {
    try {
        const response = await axios.delete(`${baseURL}${url}`)
        const result = response.data
        return result
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.msg,
        })
        throw error
    }
}

const api = {
    methodPost,
    methodGet,
    methodPut,
    methodDelete
}

export default api