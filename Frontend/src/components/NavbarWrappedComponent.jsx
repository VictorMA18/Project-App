import React from 'react';
import Navbar from './NavbarComponent';  
import AuthNavbar from './AuthNavbarComponent'; 

const NavbarWrapperComponent = () => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? <AuthNavbar /> : <Navbar />;
};

export default NavbarWrapperComponent;