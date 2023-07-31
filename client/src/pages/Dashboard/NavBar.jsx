import React from 'react'

export const Navbar = ({ userName, userRole, userAvatar }) => {
    return (
      <nav className="flex justify-between mb-16 bg-white p-6">
        <div className="text-xl font-bold">{userName}</div>
        <div className="flex items-center justify-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={userAvatar}
            alt="Foto de perfil"
          />
          <div>
            <div className="text-sm font-medium">{userName}</div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
        </div>
      </nav>
    );
  };