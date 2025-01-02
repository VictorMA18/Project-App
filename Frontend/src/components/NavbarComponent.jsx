import React from 'react';
import { useNavigate } from 'react-router-dom';
  
const Navbar = () => {
  const navigate = useNavigate();

  function handleClickLogin() {
    navigate("/login");
  }

  function handleClickRegister() {
    navigate("/register");
  }

  function handleClickHome() {
    navigate("/home");
  }

  function handleClickUsuarios() {
    navigate("/usuarios");
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold" onClick={handleClickHome}>Mi Página</h1>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2" onClick={handleClickRegister}>Registro</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded" onClick={handleClickLogin}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;