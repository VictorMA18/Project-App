import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const setupAuthInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },   
    (error) => {
      return Promise.reject(error);
    }
  );
};

setupAuthInterceptor();
export default axios;
