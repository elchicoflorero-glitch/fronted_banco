import axios from 'axios';

// HARDCODED API URL - DO NOT USE ENV VARS
const PRODUCTION_API_URL = 'https://backendbanco-production.up.railway.app/api';
const LOCAL_API_URL = 'http://localhost:3010/api';

function getApiUrl(): string {
  if (typeof window === 'undefined') {
    return PRODUCTION_API_URL;
  }
  
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return LOCAL_API_URL;
  }
  
  return PRODUCTION_API_URL;
}

const API_URL = getApiUrl();

// Debug log
if (typeof window !== 'undefined') {
  console.log('🔧 API Configuration:', {
    API_URL,
    hostname: window.location.hostname,
    timestamp: new Date().toISOString(),
  });
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Log all requests for debugging
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      console.log('🌐 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        baseURL: config.baseURL,
        fullURL: `${config.baseURL}${config.url}`,
      });
      
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        delete api.defaults.headers.common['Authorization'];
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);
