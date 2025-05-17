import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://coaching-management-system-9w2s.onrender.com/api', 
  withCredentials: false,
});

export default axiosInstance;
