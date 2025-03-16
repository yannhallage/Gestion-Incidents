// MessageComponent.js
import React from 'react';
import InfoAlert from "../infoAlert";


const MessageComponent = () => {
    const containerStyle = {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#111b21',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
    };

    const chatListStyle = {
        flexGrow: 1,
        overflowY: 'auto',
    };

    const chatItemStyle = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid',
    };

    const chatImageStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const chatDetailsStyle = {
        flexGrow: 1,
    };

    const chatNameStyle = {
        fontWeight: 'bold',
        color: 'black'
    };

    const chatMessageStyle = {
        color: '#8696a0',
        fontSize: '14px',
    };

    const chatTimeStyle = {
        fontSize: '12px',
        color: '#8696a0',
        marginLeft: '10px',
    };

    const chatUnreadStyle = {
        backgroundColor: '#075e54',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '50%',
        fontSize: '12px',
    };

    // Données des discussions (vous pouvez les récupérer depuis une API ou un état)
    const chats = [
        { name: 'Moko', message: 'Ouais 😄💰', time: '19:39', unread: 1 },
        { name: 'Tyrrell', message: '😀🧘', time: '03/03/2025' },
        { name: 'M.A ♥', message: 'Bon vou là je dois bosser là devoir demain ...', time: '22:10' },
        { name: 'Dion Inès', message: 'A réagi par ♥ : "Et à toi aussi"', time: '21:27' },
        // { name: 'Hala Madrid', message: 'Appel vocal', time: '18:52' },
        // { name: 'Yango Delivery', message: "Votre commande a été livrée Téléchargez l'app...", time: '18:44' },
        // { name: 'Yango Delivery', message: "Votre commande a été livrée Téléchargez l'app...", time: '18:44' },

    ];

    return (
        <div className="w-full h-full">
            <div className="mt-2 text-xl text-black font-bold">
                <h2>Discussions</h2>
            </div>
            <p className="text-gray-400 text-[14px]">
                Le chiffrement de bout en bout permet de garder vos messages personnels entre vous et les
                personnes avec qui vous choisissez de communiquer. Même WhatsApp n’y a pas accès. Cela
                inclut :
            </p>
            <div className="mt-5">
                <hr />
            </div>
            <div className="flex flex-col bg-white flex-1 items-center justify-center ">
                <div style={chatListStyle}>
                    {chats.map((chat, index) => (
                        <div key={index} style={chatItemStyle}>
                            {/* <img src="https://via.placeholder.com/40" alt={chat.name} style={chatImageStyle} /> */}
                            <i className="fa-solid fa-circle-user text-5xl"></i>
                            <div style={chatDetailsStyle} className='ml-2 mt-2'>
                                <div style={chatNameStyle} className='flex space-x-3'>
                                    <span>
                                        Utilisateur
                                    </span>
                                    {/* <span  className='text-blue-700'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>

                                    </span> */}
                                </div>
                                <div style={chatMessageStyle}>
                                    Notre equipe vous assistera pour chaque signalement de ticket
                                </div>
                            </div>
                            <div style={chatTimeStyle}>15/03/2025</div>
                            {/* {chat.unread && <div style={chatUnreadStyle}>{chat.unread}</div>} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MessageComponent;