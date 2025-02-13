import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const submitReferral = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/referrals`, formData);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "An error occurred. Please try again.";
    }
};

