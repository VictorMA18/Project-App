import React from 'react';
import { BrowserRouter as  BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UsuarioPage from '../pages/admin/UsuariosPage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
import UserProfile  from '../pages/user/UserProfile';
import PrivateRoute from './PrivateRoutes';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path='/home' Component={HomePage}/>
        <Route path="/user/profile" element={
          <PrivateRoute role="NORMAL">
            <UserProfile/>
          </PrivateRoute>
        } />
        <Route path="/admin/users" element={
          <PrivateRoute role="ADMIN">
            <UsuarioPage/>
          </PrivateRoute>
        } />
        <Route path="/" Component={HomePage} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
