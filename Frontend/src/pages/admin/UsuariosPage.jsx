import React, {useState} from 'react';
import ListUsuarios from '../../components/ListUsuariosComponent';
import Footer from '../../components/FooterComponent';
import NavbarWrapperComponent from '../../components/NavbarWrappedComponent';

const UsuarioPage = () => {

  return (
    <div className='flex flex-col max-h-screen'>  
      <NavbarWrapperComponent/>
      <div className="flex items-start justify-center min-h-screen bg-gray-600">
        <ListUsuarios/>
      </div>
      <Footer/>
    </div> 
  );
};

export default UsuarioPage;