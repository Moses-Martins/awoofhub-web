import { API_URL } from "@/config/constants";
import { notificationsStore } from "@/store/notifications/notifications";
import axios from "axios";

export const apiClient = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => {
        return response.data; 
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        notificationsStore.getState().showNotification({
            type: 'error',
            title: 'Error',
            duration: 5000,
            message,
        });
        
        return Promise.reject(error);
    }
);