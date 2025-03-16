import React from 'react';
import InfoAlert from "../../../components/infoAlert"; // Gardé au cas où vous souhaiteriez le réutiliser

const Sidebar = () => {
    // Données des tickets (comme dans la réponse précédente)
    const tickets = [
        { name: 'Nouveau', count: 1 },
        { name: 'En cours (Attribué)', count: 0 },
        { name: 'En cours (Planifié)', count: 0 },
        { name: 'En attente', count: 0 },
        { name: 'Résolu', count: 6 },
        { name: 'Clôs', count: 1 },
        { name: 'Supprimé', count: 1 },
    ];

    return (
        <>
            <div className="p-4">
                {/* Titre */}
                <div className="mt-2 text-2xl text-black font-bold">
                    <h2>interface technicien</h2>
                </div>

                {/* Barre de recherche */}
                <div className="mt-7">
                    <input
                        type="text"
                        placeholder="Rechercher"
                        className="w-full p-1 bg-gray-700 text-[#e9edec] border-none rounded-md"
                    />
                </div>

                {/* Onglets */}
                <div className="mt-4">
                    <div className="flex gap-2 mb-2">
                        <button className="bg-[#075e54] text-[#e9edec] border-none py-1 px-2 rounded cursor-pointer">
                            Tout
                        </button>
                        <button className="bg-white text-[#e9edec] border-none py-1 px-2 rounded cursor-pointer">
                            Non lus
                        </button>
                        <button className="bg-white text-[#e9edec] border-none py-1 px-2 rounded cursor-pointer">
                            Favoris
                        </button>
                        <button className="bg-white text-[#e9edec] border-none py-1 px-2 rounded cursor-pointer">
                            Groupes
                        </button>
                    </div>
                </div>

                {/* Liste des tickets dans la dernière div */}
                <div className="flex flex-col space-y-2 text-[13px] mt-7 flex-1 items-center justify-center">
                    <div className='text-[20px] text-black'>
                        <span>
                            vue globale
                        </span>
                    </div>
                    <div className="w-full border border-[#ccc] rounded-lg overflow-hidden">
                        {tickets.map((ticket, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center px-4 py-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                            >
                                <span className="font-semibold text-gray-800">{ticket.name}</span>
                                <span className="text-gray-600">{ticket.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;