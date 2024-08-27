import axios from 'axios';
import { apiUrl } from './data';



export const currentUsers = async () => {
  try {
    const response = await axios.get(`${apiUrl}/current-user`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

