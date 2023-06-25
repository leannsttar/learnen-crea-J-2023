import React from 'react'

export function Footer(){
    return(

        <>
        
        <div className='bg-[#1E2833]'>
            <div className='flex flex-col items-center pt-10 pb-32 bottom-0 w-full'>
                <img className='w-[104px] h-[104px]' src="assets/learnen.png" alt="" />
                <p className='text-white text-center'>La red social donde todo el mundo <br />puede aprender y practicar.</p>
                <div>
                    <ul className='text-white flex flex-row pt-10 gap-32'>
                        <li className=''>Home</li>
                        <li className=''>Posts</li>
                        <li className=''>Comunidad</li>
                        <li className=''>Chat</li>
                        <li className=''>Blog</li>
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