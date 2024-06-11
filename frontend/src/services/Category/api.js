import api from "../apiMethod";

const getCategory = async (params) => {
    try {
        const response = await api.methodGet("/categories", params);
        return response.categories;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createCategory = async (data) => {
    try {
        const response = await api.methodPost("/categories", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateCategory = async (id, data) => {
    try {
        const response = await api.methodPut(`/categories/${id}`, data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const deleteCategory = async (id) => {
    try {
        const response = await api.methodDelete(`/categories/${id}`);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export { getCategory, createCategory, updateCategory, deleteCategory }