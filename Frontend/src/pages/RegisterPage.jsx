import React, {useState} from 'react';
import FormInput from '../components/FormInput';
import UsuarioService from '../services/UsuarioService';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/NotificationUserComponent';

const RegisterPage = () => {
  const [username , setUserName ] = useState('');
  const [password , setPassword ] = useState('');
  const [nombre , setNombre ] = useState('');
  const [apellido , setApellido ] = useState('');
  const [email , setEmail ] = useState('');
  const [telefono , setTelefono ] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();


  const handleRegister = () => {
    // Mostrar notificación
    setShowNotification(true);

    // Ocultar después de 3 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const saveUsuario = (e) => {
    e.preventDefault();
    const usuario = { username , password, nombre, apellido , email , telefono};
    UsuarioService.createUser(usuario).then((response) => {
      console.log(response.data);
      handleRegister();
      navigate('/usuarios');
    }).catch(error =>{
      console.log(error);
    });
  };

  const clearForm = () => {
    setUserName('');
    setPassword('');
    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Crear Cuenta</h2>
        <form className="mt-6 space-y-4" onSubmit={saveUsuario}>
          <FormInput id="NombreUsuario" label="Nombre de Usuario" type="text" placeholder="Nombre de Usuario" value={username} onChange={(e) => setUserName(e.target.value)}/>
          <FormInput id="Contraseña" label="Contraseña" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormInput id="Nombre" label="Nombre" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          <FormInput id="Apellidos" label="Apellidos" type="text" placeholder="Apellidos" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
          <FormInput id="Email" label="Correo Electrónico" type="email" placeholder="ejemplo@correo.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <FormInput 
            id="Telefono" 
            label="Teléfono" 
            type="tel" 
            placeholder="123-45-678" 
            pattern="[0-9]{9}"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <div className="flex">
            <button
              type="submit"
              className="w-full mr-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Registrarse
            </button>
            <button
              type="button"
              className="w-full ml-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-400"
              onClick={clearForm}
            >
              Limpiar
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-indigo-500 hover:underline">
            Inicia sesión aquí
          </a>
        </p>
      </div>
      {showNotification && (
        <Notification message="Usuario registrado exitosamente" onClose={() => setShowNotification(false)} />
      )}
    </div>
  );
};


export default RegisterPage;
