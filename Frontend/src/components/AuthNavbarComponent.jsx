import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthNavbarComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/home');
  };

  const handleProfile = () => {
    if (user?.authorities?.[0]?.authority === 'ADMIN') {
      navigate('/admin/users');
    } else {
      navigate('/user/profile');
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/home')}>
        Mi Página
      </h1>
      <div className="flex items-center">
        <span className="mr-4">
          {user?.authorities?.[0]?.authority === 'ADMIN' ? 'Administrador' : 'Usuario'}
        </span>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2"
          onClick={handleProfile}
        >
          {user?.authorities?.[0]?.authority === 'ADMIN' ? 'Panel Admin' : 'Mi Perfil'}
        </button>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default AuthNavbarComponent;