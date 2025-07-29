import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VITE_API_URL,
});

export const getTest = () => API.get('/api/test');
