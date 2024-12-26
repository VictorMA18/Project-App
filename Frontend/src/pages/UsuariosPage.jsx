import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import ListUsuarios from '../components/ListUsuariosComponent';
import Notification from '../components/NotificationUserComponent';

const UsuarioPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const handleRegister = () => {
    // Mostrar notificación
    setShowNotification(true);

    // Ocultar después de 3 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };


  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-600">
      <ListUsuarios/>
      {showNotification && (
        <Notification message="Usuario registrado exitosamente" onClose={() => setShowNotification(false)} />
      )} 
    </div>
  );
};

export default UsuarioPage;