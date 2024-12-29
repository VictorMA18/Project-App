import React, { useEffect, useState } from "react";
import UsuarioService from "../services/UsuarioService";
import { Link } from "react-router-dom";

export const ListUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() =>{
    UsuarioService.getAllUsers().then(response => {
      setUsuarios(response.data);
      console.log(response.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 mt-10 rounded">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lista de Usuarios</h2>
      <div className="w-full max-w-4xl overflow-x-auto">
        <Link to='/register' className="w-full"> 
          <button className="text-white font-bold min-w-32 p-2 my-2 flex justify-center  bg-purple-800"> Agregar Usuario </button>
        </Link>
        <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg bg-white">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Apellido</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">UserName</th>
              <th className="px-4 py-2 text-left">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr
                key={usuario.id}
                className="hover:bg-gray-100 transition-colors even:bg-gray-50"
              >
                <td className="px-4 py-2 border-b border-gray-200">{usuario.id}</td>
                <td className="px-4 py-2 border-b border-gray-200">{usuario.nombre}</td>
                <td className="px-4 py-2 border-b border-gray-200">{usuario.apellido}</td>
                <td className="px-4 py-2 border-b border-gray-200">{usuario.email}</td>
                <td className="px-4 py-2 border-b border-gray-200">{usuario.username}</td>
                <td className="px-4 py-2 border-b border-gray-200">{usuario.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUsuarios;
