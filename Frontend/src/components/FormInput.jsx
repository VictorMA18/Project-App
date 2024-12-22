import React from 'react';

const FormInput = ({ id, label, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
      placeholder={placeholder}
      required
    />
  </div>
);

export default FormInput;
