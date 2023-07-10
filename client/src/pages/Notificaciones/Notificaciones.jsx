import React from 'react';
import { LiaCommentSolid } from 'react-icons/lia';


export function Notificaciones()  {
  return (
    <>
    <div className="flex items-center m-8 bg-gray-100 border-b border-black p-2">
      <div className="flex-shrink-0">
        <LiaCommentSolid className='w-8 h-8'/>
      </div>
      <div className="ml-2">
        <img className="w-8 h-8 rounded-full" src="/assets/person-post.png" alt="Avatar" />
      </div>
      <div className="ml-2">
        <h3 className="text-base font-medium text-gray-900">Sergio comentó</h3>
        <p className="text-xs text-gray-500">4 minutos</p>
      </div>
      <div className="flex-grow"></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full mr-4"></div>
    </div>
    </>
  );
};


