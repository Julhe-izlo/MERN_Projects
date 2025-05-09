import axios from "axios";

const API = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/auth`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const register = (data) => API.post("/register", data);
export const login = (data) => API.post("/login", data);
export const forgotPassword = (data) => API.post("/forgot-password", data);
export const resetPassword = (token, data) => API.put(`/reset-password/${token}`, data);
