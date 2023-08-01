import React from 'react'


export const FlagCard = ({ flagImg, buttonImg1, buttonImg2 }) => {
  return (

    <div className="bg-white rounded shadow-md p-4 flex flex-row justify-between items-start h-4/5 w-4/5 gap-8 mt-4">
      
      <div className="flex flex-row items-center gap-6 pl-16">
        <img src={flagImg} alt="Bandera" className="w-16 h-32 object-contain mb-2" />
        <p className='text-xl'>Francés</p>
        <img src={buttonImg1} alt="Botón 1" className="w-8 h-8 object-contain mt-2" />
        <img src={buttonImg2} alt="Botón 2" className="w-6 h-5 object-contain mt-2" />
      </div>

      <div className="flex flex-row items-center gap-6 pr-16">
        <img src={flagImg} alt="Bandera" className="w-16 h-32 object-contain mb-2" />
        <p className='text-xl'>Francés</p>
        <img src={buttonImg1} alt="Botón 1" className="w-8 h-8 object-contain mt-2" />
        <img src={buttonImg2} alt="Botón 2" className="w-6 h-5 object-contain mt-2" />
      </div>
    </div>
  );
};


export default FlagCard;
export const Lenguajes = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <FlagCard
        flagImg="/src/assets/french.png"
        buttonImg1="/src/assets/Pencil.png"
        buttonImg2="/src/assets/delete.png"
      />
    </div>
  );
};


