import React from 'react';

export function IndexCard() {
    const cardsData = [
        { imgSrc: '../assets/Male.png', description: 'Rob: Habla inglés pero quiere practicar su alemán' },
        { imgSrc: '/assets/Male(1).png', description: 'Rob: Habla inglés pero quiere practicar su alemán' },
        { imgSrc: '/assets/Male(2).png', description: 'Rob: Habla inglés pero quiere practicar su alemán' },
        { imgSrc: '/assets/Female.png', description: 'Rob: Habla inglés pero quiere practicar su alemán' },
        { imgSrc: '/assets/Female(1).png', description: 'Rob: Habla inglés pero quiere practicar su alemán' },
        { imgSrc: '/assets/Female(2).png', description: 'Rob: Habla inglés pero quiere practicar su alemán' },
    ];

    return (
        <>
         {/* Introducción al index */}
        <div className='flex flex-col items-center'>
            <img className='w-44' src='../assets/learnen.svg' alt="" />
            <p className='p-6'>Un sitio donde puedes aprender cualquier idioma con la comunidad</p>
        </div>

        {/* Cards de presentación */}
        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-3 pt-6 px-32 gap-6 max-w-7xl'>
            {cardsData.map((card, index) => (
                <div key={index}>
                <div className="relative">
                    <img src={card.imgSrc} alt="" className="" />
                    <p className="absolute bottom-4 left-0 m-2 text-white text-xl">{card.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>

      {/* Botón */}
        <div className="flex items-center justify-center">
            <button className="flex items-center justify-center bg-gray-400 hover:bg-gray-600 text-white  font-bold py-2 px-4 rounded mt-10 mb-12 border-l border-black shadow-md">
            Únete a la comunidad
            </button>
        </div>
        </>
    );
}

export function IndexSteps(){
    return(
        <>
        <hr />
        <div className='flex flex-row justify-center mt-10 text-[1.8rem] font-extrabold'><p>¿Cómo funciona?<span className='text-indigo-600'> Learnen</span></p>
        </div>

        {/*Si te metiste a ver esto no está listo xd */}

        <div className='flex flex-col'>
            
        <div className='flex flex-col'>
            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <h1>1. Únete a la comunidad</h1>
            <p>Crea una cuenta e inicia sesión, así podrás acceder a todas nuestras funcionalidades.</p>
            </div>
            <img className='w-1/3' src="/assets/paso1.png" alt="" />
            </div>

        </div>
        <div className='flex flex-col'>
            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <h1>2. Encuentra amigos</h1>
            <p>Puedes encontrar personas fácilmente que practican tu idioma y comparten tus interéses.</p>
            </div>
            <img className='w-1/3' src="/assets/paso2.png" alt="" />
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-row'>
            <div className='flex flex-col'>
            <h1>3. ¡Interactúa!</h1>
            <p>Puedes compartir publicaciones con la comunidad y chatear con personas.</p>
            </div>
            <img className='w-1/3' src="/assets/paso3.png" alt="" />
            </div>
        </div>

        </div>
        
        </>
    )
}

export function Home () {
    return(
        <>
            <IndexCard />
            <IndexSteps />
        </>
    )
}





