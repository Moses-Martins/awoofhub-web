import { API_URL } from "@/config/constants";
import { notificationsStore } from "@/store/notifications/notifications";
import axios from "axios";

export const apiClient = axios.create({
    baseURL: `${API_URL}/api/v1`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => {
        // If the response is shaped like: { success, data, message }
        if (response.data?.data !== undefined) {
            return response.data.data;
        }
        return response.data; // fallback (safe)
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