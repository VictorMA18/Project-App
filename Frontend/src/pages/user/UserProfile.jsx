import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarWrapper from '../../components/NavbarWrappedComponent';
import Footer from '../../components/FooterComponent';

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token || !user) {
      navigate('/login');
      return;
    }

    setUserData({
      nombre: user?.username || 'Usuario',
      email: user?.email || 'email@ejemplo.com',
      rol: user?.authorities?.[0]?.authority
    });
  }, [navigate]);

  if (!userData) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavbarWrapper />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">Cargando...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarWrapper />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-6 py-4">
            <h1 className="text-2xl font-bold">Perfil del Usuario</h1>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center border-b pb-4">
              <div className="w-1/3">
                <span className="font-semibold text-gray-700">Nombre:</span>
              </div>
              <div className="w-2/3">
                <span>{userData.nombre}</span>
              </div>
            </div>

            <div className="flex items-center border-b pb-4">
              <div className="w-1/3">
                <span className="font-semibold text-gray-700">Email:</span>
              </div>
              <div className="w-2/3">
                <span>{userData.email}</span>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-1/3">
                <span className="font-semibold text-gray-700">Rol:</span>
              </div>
              <div className="w-2/3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {userData.rol}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
