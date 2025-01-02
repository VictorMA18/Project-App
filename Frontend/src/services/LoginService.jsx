import axios from './AxiosConfig';

const BASE_URL = 'http://localhost:8080';

const LoginService = {
  generateToken: async (loginData) => {
    return await axios.post(`${BASE_URL}/generate-token`, loginData);
  },

  getCurrentUser: async () => {
    const token = LoginService.getToken(); 
    console.log(token)
    if (!token) {
      throw new Error('No hay token disponible, el usuario no está autenticado.');
    }
    return await axios.get(`${BASE_URL}/actual-usuario`);
  },

  loginUser: (token) => {
    localStorage.setItem('token', token);
    return true;
  },

  isLoggedIn: () => {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined && token !== '';
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    } else {
      LoginService.logout();
      return null;
    }
  },

  getUserRole: () => {
    const user = LoginService.getUser();
    return user?.authorities?.[0]?.authority || null;
  },
};

export default LoginService;
