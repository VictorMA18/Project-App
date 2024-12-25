import React, { useState } from 'react';

const FormInput = ({ id, label, type, placeholder, onchange , ...props }) => {
  const [showPassword, setShowPassword] = useState(false);  // Estado para controlar visibilidad de la contraseña

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  // Cambia el estado de visibilidad
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}  // Usa "text" si showPassword es verdadero, de lo contrario "password"
          id={id}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          placeholder={placeholder}
          {...props}
          required
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/3 text-gray-600"
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}  {/* Texto alternativo según estado */}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;