import React from 'react';

function Notification({ message, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 animate-slide-up">
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 text-sm font-bold">
        ✖️
      </button>
    </div>
  );
}

export default Notification;