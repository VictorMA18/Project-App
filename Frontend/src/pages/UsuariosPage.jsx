import React from 'react';
import FormInput from '../components/FormInput';
import ListUsuarios from '../components/ListUsuariosComponent';

const UsuarioPage = () => {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-600">
      <ListUsuarios/> 
    </div>
  );
};

export default UsuarioPage;