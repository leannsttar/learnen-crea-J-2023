import React from 'react'

export function Article() {
    const dataCards = [
        {
            language: "ESPAÑOL",
            title: "Simple juice recipes to boost your immune system",
            p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
            img: "/assets/blog-image.png",
        },
        {
            language: "ESPAÑOL",
            title: "Simple juice recipes to boost your immune system",
            p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
            img: "/assets/blog-image.png",
        },
        {
            language: "ESPAÑOL",
            title: "Simple juice recipes to boost your immune system",
            p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora id cumque! Ut, doloremque consectetur quidem perferendis tenetur ipsum facilis aspernatur odit nulla iusto in ex quas, quae ",
            img: "/assets/blog-image.png",
        },
    ];
    return (
        <>
            <div className='flex flex-row bg-red-600 justify-center'>
                <img className='w-[100%] h-[300px]' src="/assets/fondo_articulo.png" alt="" />
                <p className='absolute top-0 left-0 w-full h-[60%] flex items-center justify-center text-3xl text-white'>Las mejores películas en Inglés</p>
            </div>

            <div className='grid grid-cols-[1fr_500px] h-screen bg-green-200 overflow-auto pt-24 p-12'>
                <div className='bg-yellow-200 p-8'>
                    <p className='mt-6 mb-6'>
                        When we want to learn a new language, we begin to look for different techniques that help us make this process easier. If we take English, for example, we will realize that the grammar of this language is much easier compared to Spanish. Even so, that does not mean that the process of learning English is a piece of cake.

                        <br /><br />One technique that many choose to learn English is to watch movies in this language. This is a very good way in which we can become familiar with the pronunciation of English words. In addition, in this way, we can also train our ability to listen to conversations and other interactions in the movies.
                    </p>
                    <h3 className='mt-24'>1. E.T., the Extra-Terrestrial</h3>
                    <p className='mt-2 mb-6'>
                        Starting with a classic that will bring back childhood memories, this movie contains a lot of catchphrases as it is geared towards a child audience. In this movie you can focus on the questions that are asked to the alien protagonist. These are explained at a speed that allows you to understand them.
                    </p>
                    <h3 className='mt-24'>1. E.T., the Extra-Terrestrial</h3>
                    <p className='mt-2 mb-6'>
                        Starting with a classic that will bring back childhood memories, this movie contains a lot of catchphrases as it is geared towards a child audience. In this movie you can focus on the questions that are asked to the alien protagonist. These are explained at a speed that allows you to understand them.
                    </p>
                    <h3 className='mt-24'>1. E.T., the Extra-Terrestrial</h3>
                    <p className='mt-2 mb-6'>
                        Starting with a classic that will bring back childhood memories, this movie contains a lot of catchphrases as it is geared towards a child audience. In this movie you can focus on the questions that are asked to the alien protagonist. These are explained at a speed that allows you to understand them.
                    </p>
                </div>
                <div className='bg-red-200'>
                    <h1 className='text-2xl'>Recommended <br />Articles</h1>
                    <div className="bg-gray-100 pb-14">
                        <div className="flex flex-row flex-wrap justify-center mt-20 ">
                            {dataCards.map((card, index) => (
                                <div key={index} className="mb-8 w-96 mx-4">
                                    <div className="">
                                        <img src={card.img} className="w-full" alt="" />
                                    </div>
                                    <div className="bg-white p-10 relative">
                                        <h6 className="text-blue-400 text-sm">{card.language}</h6>
                                        <h2 className="mt-4 font-bold text-[1.3rem]">{card.title}</h2>
                                        <h4 className="mt-4 text-base">{card.p}</h4>
                                        <hr className="mt-12" />
                                        <p className="text-sm absolute bottom-2 right-10">2 días</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div >
        </>
    )
}