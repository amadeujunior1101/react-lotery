import axios from 'axios';
import { logout } from '../auth/authentication';
const BASE_URL_LOCAL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL_LOCAL || 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  if (
    !config.baseURL?.endsWith('login') ||
    !config.baseURL?.endsWith('register') ||
    !config.baseURL?.endsWith('update-password') ||
    !config.baseURL?.endsWith('confirmation-user') ||
    !config.baseURL?.endsWith('*') ||
    !config.baseURL?.endsWith('reset-password')
  ) {
    const userToken = await localStorage.getItem('auth:token');
    config.headers.Authorization = `Bearer ${userToken}`;
  }

  return config;
}, (error) => {

  if (!error.response) {
    console.log("Please check your internet connection.");
  }

  if (error.response.status === 401 || error.response.status === 403) return logout()

  // return Promise.reject(error);
});

export default api;