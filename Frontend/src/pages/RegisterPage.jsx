import React from 'react';
import FormInput from '../components/FormInput';

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Crear Cuenta</h2>
        <form className="mt-6 space-y-4">
          <FormInput id="name" label="Nombre Completo" type="text" placeholder="Tu Nombre" />
          <FormInput id="email" label="Correo Electrónico" type="email" placeholder="ejemplo@correo.com" />
          <FormInput id="password" label="Contraseña" type="password" placeholder="••••••••" />
          <FormInput id="confirmPassword" label="Confirmar Contraseña" type="password" placeholder="••••••••" />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-indigo-500 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
