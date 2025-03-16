
// HistoriqueComponent.js
import React, { useEffect, useState, useContext } from 'react';
import InfoAlert from "../infoAlert";
import DialogComponent from '../tech/diposition/dialogComponent'
import { chats } from '../../api/apiDataFirste';
import { SecondContext } from '../../context/FirsContext';
import '../../styles/styles'


const HistoriqueComponent = () => {
    const [apiC, setApiC] = useState(null);
    const { ticket, setTicket } = useContext(SecondContext);

    const chatListStyle = {
        flexGrow: 1,
        overflowY: 'auto', // Défilement déjà présent
        maxHeight: 'calc(100vh - 150px)', // Hauteur maximale pour limiter la section et activer le défilement
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
        color: 'black',
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

    // Augmenter les données pour tester le défilement
// Données des discussions (vous pouvez les récupérer depuis une API ou un état)
const extendedChats = [
    { name: 'Moko', message: 'Ouais 😄💰', time: '19:39', unread: 1 },
    { name: 'Tyrrell', message: '😀🧘', time: '03/03/2025' },
    { name: 'M.A ♥', message: 'Bon vou là je dois bosser là devoir demain ...', time: '22:10' },
    { name: 'Dion Inès', message: 'A réagi par ♥ : "Et à toi aussi"', time: '21:27' },
    // { name: 'Hala Madrid', message: 'Appel vocal', time: '18:52' },
    // { name: 'Yango Delivery', message: "Votre commande a été livrée Téléchargez l'app...", time: '18:44' },
    // { name: 'Yango Delivery', message: "Votre commande a été livrée Téléchargez l'app...", time: '18:44' },

];

    useEffect(() => {
        if (apiC !== null) {
            setTicket(<DialogComponent donnee={apiC} />);
        }
    }, [apiC, setTicket]);

    return (
        <>
            <div className="">
                <div className="mt-2 text-xl text-black font-bold">
                    <h2>Historique</h2>
                </div>
                <p className="text-gray-400 text-[14px]">
                    ique sint quia, neque debitis fugiat dolores id eligendi perspiciatis voluptatibus,
                    deserunt ullam excepturi, vitae at reiciendis quibusdam cupiditate adipisci nostrum
                    aliquid?
                </p>
                <div className="mt-5">
                    <hr />
                </div>
                <div className="flex flex-col bg-white flex-1 items-center justify-center" >
                    <div style={chatListStyle}>
                        {extendedChats.map((chat, index) => (
                            <div key={index} style={chatItemStyle}>
                                <span className="text-[#ccc]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                        />
                                    </svg>
                                </span>

                                <div style={chatDetailsStyle} className="ml-2 mt-2">
                                    <div style={chatNameStyle} className="flex space-x-3">
                                        <span
                                            className="text-[14px] cursor-pointer"
                                            onClick={() => {
                                                setApiC(index + 1);
                                            }}
                                        >
                                            TicketD00{index + 1}
                                        </span>
                                    </div>
                                    <div style={chatMessageStyle}>
                                        le ticket a été clôturé cela signifie que notre équipe IT a réglé votre panne
                                    </div>
                                </div>
                                <div style={chatTimeStyle}>15/03/2025</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoriqueComponent;