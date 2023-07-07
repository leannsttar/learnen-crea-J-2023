import React, { useState } from 'react';

export function Chat() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Lean Staring',
            avatar: '/assets/leandro.png',
            message: 'Hallo hallo hallo',
            online: true,
            time: "10:45 am"
        },
        {
            id: 2,
            name: 'Esteban Villeda',
            avatar: '/assets/Male(1).png',
            message: 'Hallo hallo hallo',
            online: false,
            time: "3:20 pm"
        },
        {
            id: 3,
            name: 'Carlos Amilcar',
            avatar: '/assets/Male(2).png',
            message: 'Hallo hallo hallo',
            online: false,
            time: "10:20 pm"
        },
        {
            id: 4,
            name: 'Sara Torres',
            avatar: '/assets/Female(2).png',
            message: 'Hallo hallo hallo',
            online: false,
            time: "8:00 am"
        },
        {
            id: 5,
            name: 'Emily Tate',
            avatar: '/assets/Female(1).png',
            message: 'Hallo hallo hallo',
            online: false,
            time: "5:00 pm"
        },
        {
            id: 6,
            name: 'Brittney Allen',
            avatar: '/assets/Female.png',
            message: 'Hallo hallo hallo',
            online: false,
            time: "9:47 am"
        },
        {
            id: 7,
            name: 'Gerardo Saz',
            avatar: '/assets/Male.png',
            message: 'Hallo hallo hallo',
            online: false,
            time: "9:47 am"
        },
        {
            id: 8,
            name: 'Javier Andino',
            avatar: '/assets/Male(2).png',
            message: 'Hallo hallo hallo',
            online: true,
            time: "10:30 am"
        }
    ]);
    const [isOnline, setIsOnline] = useState(true);
    const [messages, setMessages] = useState([
        {
            id: 1,
            userAvatar: '/assets/leandro.png',
            content: 'Hola, como estas?'
        },
        {
            id: 2,
            userAvatar: '/assets/NacePhoto.jpg',
            content: 'Yo estoy bien, y tú?'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleChange = event => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newMessage = {
            id: messages.length + 1,
            userAvatar: '/assets/leandro.png',
            content: inputValue
        };
        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    return (
        <div className="container mx-auto">
            <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                <div className="font-semibold text-black text-3xl">
                    Messages <span className="text-[#6F84CD]">(2)</span>
                </div>
                <div className="w-1/2 flex items-center">
                    <img
                        src="/assets/leandro.png"
                        className="object-cover h-12 w-12 rounded-full"
                        alt=""
                    />
                    <div className="w-1/2 flex items-center">
                        <div className="p-3">
                            <span className="text-black font-bold text-lg">Lean Staring</span>
                            <div className="flex items-center">
                                <div
                                    className={`w-3 h-3 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                ></div>
                                <span>{isOnline ? 'En línea' : 'Desconectado'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="h-10 w-10 text-lg p-2 rounded-full border-2 border-black text-black font-semibold flex items-center justify-center sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <svg
                        className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <div className="flex flex-col bg-white">
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } sm:hidden border-b-2 px-2 py-4`}
                >
                    <input
                        type="text"
                        placeholder="Buscar chat"
                        className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    />
                </div>

                <div className="flex flex-col sm:flex-row">
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } sm:block sm:w-2/5 border-r-2 overflow-y-auto`}
                    >
                        <div className="flex flex-col overflow-y-auto">
                            {users.map(user => (
                                <div
                                    key={user.id}
                                    className="flex flex-row py-4 px-2 items-center hover:bg-gray-100"
                                >
                                    <div className="w-1/4">
                                        <img
                                            src={user.avatar}
                                            className="object-cover h-12 w-12 rounded-full"
                                            alt=""
                                        />
                                        <div
                                            className={`bg-${user.online ? 'green' : 'red'}-500 h-3 w-3 rounded-full absolute bottom-0 right-0 border-2 border-white`}
                                        ></div>
                                    </div>
                                    <div className="w-3/4 ml-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-lg font-semibold">{user.name}</div>
                                            <div className="text-gray-600 text-sm">{user.time}</div>
                                        </div>
                                        <span className="text-gray-500">{user.message}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full px-5 flex flex-col bg-[url(/assets/chatbg.jpg)]">
                        <div className="flex flex-col mt-5 sm:mt-0 sm:justify-between">
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`flex justify-${message.userAvatar === '/assets/leandro.png' ? 'end' : 'start'
                                        } mb-3`}
                                >
                                    <div
                                        className={`flex ${message.userAvatar === '/assets/NacePhoto.jpg'
                                                ? 'flex-row-reverse'
                                                : 'flex-row'
                                            } items-center`}
                                    >
                                        <img
                                            src={message.userAvatar}
                                            className={`object-cover h-8 w-8 rounded-full ${message.userAvatar === '/assets/leandro.png' ? 'ml-2' : 'mr-2'
                                                }`}
                                            alt=""
                                        />
                                        <div
                                            className={`bg-gray-100 py-2 px-4 rounded-full ${message.userAvatar === '/assets/NacePhoto.jpg'
                                                    ? 'text-right bg-[#FF8399]'
                                                    : 'text-left text-gray-800'
                                                }`}
                                        >
                                            {message.content}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center items-center mt-5 mb-7">
                            <form onSubmit={handleSubmit} className="w-full flex">
                                <button
                                    type="button"
                                    className="text-white py-2 px-4 rounded-full mr-2"
                                >
                                    <img
                                        src="/assets/imgbtn.png"
                                        className="w-8 h-8 invert"
                                        alt=""
                                    />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Escribe tu mensaje"
                                    className="rounded-full border-2border-[#A7A7A7] hover:border-[#FF8399] py-2 px-3 flex-1"
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                                <button
                                    type="submit"
                                    className="text-white py-2 px-4 rounded-full mr-2"
                                >
                                    <img
                                        src="/assets/enviarbtn.png"
                                        className="w-8 h-8 invert"
                                        alt=""
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
