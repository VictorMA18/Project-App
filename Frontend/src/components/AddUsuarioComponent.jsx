import React, { useState } from 'react'
import UsuarioService from '../services/UsuarioService';

export const AddUsuarioComponent = () => {

  const [nombreusuario , setNombreUsuario ] = useState('');
  const [contraseña , setContraseña ] = useState('');
  const [nombre , setNombre ] = useState('');
  const [apellido , setApellido ] = useState('');
  const [email , setEmail ] = useState('');
  const [telefono , setTelefono ] = useState('');

  const saveUsuario = (e) => {
    e.preventDefault();
    const usuario = { nombreusuario , contraseña, nombre, apellido , email , apellido};
    UsuarioService.save
    console.log(empleado);
  }

  return (
    <div>
      <h1>
        Registro de Clientes
      </h1>
    </div>
  )
}

export default AddUsuarioComponent;