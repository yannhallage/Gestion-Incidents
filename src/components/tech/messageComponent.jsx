// MessageComponent.js
import { React, useContext, useState } from 'react';
import InfoAlert from "../infoAlert";
import { SecondContext } from '../../context/FirsContext'
import { useEffect } from 'react'

import DialogMessage from './diposition/dialogMessage';

const MessageComponent = () => {
    const [apiC, setApiC] = useState(null);
    const { ticket, setTicket } = useContext(SecondContext);

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



    useEffect(() => {
        if (apiC !== null) {
            setTicket(<DialogMessage donnee={apiC} />);
        }
    }, [apiC, setTicket])


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
            <div className="flex flex-col bg-white flex-1 items-center justify-center cursor-pointer "  >
                <div style={chatListStyle}>
                    {chats.map((chat, index) => (
                        <div key={index} style={chatItemStyle} onClick={() => { setApiC(index + 1); }}  className='hover:bg-[#F5F7F8]'>
                            {/* <img src="https://via.placeholder.com/40" alt={chat.name} style={chatImageStyle} /> */}
                            <i className="fa-solid fa-circle-user text-5xl"></i>
                            <div style={chatDetailsStyle} className='ml-2 mt-2'>
                                <div style={chatNameStyle} className='flex space-x-3'>
                                    <span>
                                        Utilisateur
                                    </span>
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