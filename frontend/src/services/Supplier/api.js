import api from "../apiMethod";

const getSupplier = async (params) => {
    try {
        const response = await api.methodGet("/suppliers", params);
        return response.supplier;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createSupplier = async (data) => {
    try {
        const response = await api.methodPost("/suppliers", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateSupplier = async (id, data) => {
    try {
        const response = await api.methodPut(`/suppliers/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const deleteSupplier = async (id) => {
    try {
        const response = await api.methodDelete(`/suppliers/${id}`);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { getSupplier, createSupplier, updateSupplier, deleteSupplier };