import React from 'react';
import FormInput from '../components/FormInput';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';

const LoginPage = () => {
  return (  
    <div className='flex flex-col max-h-screen'>  
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen bg-gray-600">
        <div className="w-full max-w-md bg-gray-300 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Iniciar Sesión</h2>
          <form className="mt-6 space-y-4">
            <FormInput id="email" label="Correo Electrónico" type="email" placeholder="ejemplo@correo.com" />
            <FormInput id="password" label="Contraseña" type="password" placeholder="••••••••" />
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
      <Footer/>
    </div>
  );
};

export default LoginPage;