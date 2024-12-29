import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import ListUsuarios from '../components/ListUsuariosComponent';
import Notification from '../components/NotificationUserComponent';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';

const UsuarioPage = () => {

  return (
    <div className='flex flex-col max-h-screen'>  
      <Navbar/>
      <div className="flex items-start justify-center min-h-screen bg-gray-600">
        <ListUsuarios/>
      </div>
      <Footer/>
    </div> 
  );
};

export default UsuarioPage;