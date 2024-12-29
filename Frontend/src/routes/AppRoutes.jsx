import React from 'react';
import { BrowserRouter as  BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UsuarioPage from '../pages/UsuariosPage';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/usuarios" Component={UsuarioPage} />
        <Route path='/home' Component={HomePage}/>
        <Route path="*" Component={HomePage} /> {/* Ruta por defecto */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
