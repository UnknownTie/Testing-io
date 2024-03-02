
import axios from 'axios';

const API_BASE_URL = 'https://blockchain.info';

export const fetchBitcoinPrice = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ticker`);
    return response.data.USD.last;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    throw error;
  }
};
