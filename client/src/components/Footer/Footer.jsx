import React from 'react'

export function Footer(){
    return(

        <>
        
        <div className='bg-[#1E2833]'>
            <div className='flex flex-col items-center pt-16 pb-20 bottom-0 w-full'>
                <img className='w-[104px] h-[104px]' src="assets/learnen.png" alt="" />
                <p className='text-white text-center pt-8 pb-8 text-lg italic'>La red social donde todo el mundo <br />puede aprender y practicar.</p>
                <div>
                    <ul className='text-white flex flex-row pt-10 gap-32'>
                        <li className='text-base'>Home</li>
                        <li className='text-base'>Posts</li>
                        <li className='text-base'>Comunidad</li>
                        <li className='text-base'>Chat</li>
                        <li className='text-base'>Blog</li>
                    </ul>
                </div>
                <div className='flex flex-row pt-14 gap-28'>
                    <img className='w-full h-[22px]' src="/assets/facebook.png" alt="" />
                    <img className='w-full h-[22px]' src="/assets/instagram.png" alt="" />
                    <img className='w-full h-[22px]' src="/assets/twitter.png" alt="" />
                </div>
            </div>
        </div>
        
        </>

    )
}