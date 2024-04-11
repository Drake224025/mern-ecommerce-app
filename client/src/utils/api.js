// client/src/utils/api.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/products"; // Replace with your backend URL

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw to allow error handling in components
  }
};

// Add more functions for other API calls as needed (fetchProductById, etc.)
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
