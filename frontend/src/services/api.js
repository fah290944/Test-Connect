import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api?.interceptors?.request?.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api?.interceptors?.response?.use(
    (response) => response,
    async (error) => {
      console.log("error ==>",error)
      const originalRequest = error.config;
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const response = await api.post('/refresh', {
            token: localStorage.getItem('refreshToken'),
          });
  
          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken); // Store new access token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest); // Retry original request
        } catch (refreshError) {
          // Handle refresh token failure (e.g., logout)
          console.error('Refresh token failed', refreshError);
          window.location.href = '/login';
        }
      }
  
      return Promise.reject(error);
    }
);



export default api;
