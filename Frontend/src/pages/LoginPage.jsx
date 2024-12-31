import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import axios from 'axios';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginData.username.trim() === '') {
      alert('El nombre de usuario es requerido!');
      return;
    }

    if (loginData.password.trim() === '') {
      alert('La contraseña es requerida!');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8080/generate-token`, loginData);
      console.log('Token generado:', response.data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className='flex flex-col max-h-screen'>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-600">
        <div className="w-full max-w-md bg-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <FormInput
              id="username"
              label="Nombre de Usuario"
              type="text"
              name="username"
              placeholder="ejemplo123"
              value={loginData.username}
              onChange={handleInputChange}
            />
            <FormInput
              id="password"
              label="Contraseña"
              type="password"
              name="password"
              placeholder="••••••••"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Ingresar
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            ¿No tienes cuenta?{' '}
            <a href="/register" className="text-indigo-500 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;