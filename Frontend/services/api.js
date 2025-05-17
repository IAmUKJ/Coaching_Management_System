import axios from 'axios';

// Create an Axios instance for API requests
const api = axios.create({
  baseURL: 'https://coaching-management-system-9w2s.onrender.com/api', // Replace with your backend API URL
});

export { api };
