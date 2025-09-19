import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

const api = axios.create({
    baseURL: apiUrl,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {
        
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        
        return Promise.reject(error);
    }
);

export default api;