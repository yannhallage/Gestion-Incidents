import { useState } from 'react';
import ButtonClassic from '../../buttonClassic'; // Assurez-vous que ce chemin est correct

const DialogMessage = ({ donnee }) => {
    // État pour gérer les messages de la discussion
    const [messages, setMessages] = useState([
        { text: "Bonjour, nous avons bien pris en compte votre signalement.", sender: "IT0029", timestamp: "15/03/2024 10:30" },
        { text: "Merci, pouvez-vous confirmer que tout fonctionne maintenant ?", sender: "IT0029", timestamp: "15/03/2024 11:00" },
    ]);
    const [newMessage, setNewMessage] = useState('');

    if (donnee) console.log(donnee);

    // Fonction pour envoyer un message
    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: newMessage,
                    sender: 'IT0029',
                    timestamp: new Date().toLocaleString(),
                },
            ]);
            setNewMessage('');
        }
    };

    return (
        <div className="border w-full border-[#ccc] p-5 text-black text-[14px]">
            <h3 className="text-lg font-bold mb-3">Discussion</h3>

            {/* Zone des messages */}
            <div className="border border-[#ccc] p-3 rounded-md bg-[#F7F7F7] h-90 overflow-y-auto">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <div key={index} className="mb-2">
                            <span className="font-bold">{msg.sender}</span>
                            <span className="text-[12px] text-[#ccc] ml-2">({msg.timestamp})</span>
                            <p>{msg.text}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-[#555]">Aucun message pour l'instant.</p>
                )}
            </div>

            {/* Zone de saisie et d'envoi */}
            <div className="mt-3 flex space-x-2">
                <textarea
                    className="w-full p-2 border border-gray-400 text-black resize-none h-20"
                    placeholder="Tapez votre message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <ButtonClassic
                    tile="Envoyer"
                    color="border text-[#555] bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]"
                    event={sendMessage}
                />
            </div>
        </div>
    );
};

export default DialogMessage;
