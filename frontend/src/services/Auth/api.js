import api from "../apiMethod";

export const login = async (data) => {
    try {
        const response = await api.methodPost("/login", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const register = async (data) => {
    try {
        const response = await api.methodPost("/register", data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}