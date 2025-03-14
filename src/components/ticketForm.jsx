import React from 'react';
import ButtonClassic from './buttonClassic';

const TicketForm = () => {
    const mainContentStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F6FF', // Fond clair (optionnel)
    };

    const formStyle = {
        backgroundColor: '#fff',
        width: '100%',
        padding: '12px',
        maxWidth: '700px', // Limite raisonnable pour la lisibilité
    };

    // Placeholder pour les actions des boutons
    const handleSave = () => {
        console.log('Enregistrer cliqué');
        // Ajoutez votre logique ici
    };

    const handleClear = () => {
        console.log('Vider cliqué');
        // Ajoutez votre logique ici (par exemple, réinitialiser les champs)
    };

    return (
        <div style={mainContentStyle}>
            <form style={formStyle} className="space-y-6 ">
                {/* Entête */}
                <div className="flex justify-between items-center text-black p-3 border-b border-gray-300">
                    <span className="text-xl font-bold">Description de la panne</span>
                    <div className="space-x-2">
                        <button
                            type="button"
                            className="bg-blue-400 text-white px-3 py-1 text-sm rounded hover:bg-blue-500 transition-colors"
                            onClick={handleSave}
                        >
                            Enregistrer
                        </button>
                        <button
                            type="button"
                            className="bg-gray-700 text-white px-3 py-1 text-sm rounded hover:bg-gray-800 transition-colors"
                            onClick={handleClear}
                        >
                            Vider
                        </button>
                    </div>
                </div>

                {/* Texte descriptif */}
                <div className="text-gray-600 flex space-x-2  border border-[#ccc] p-1">
                    <span className='text-red-700 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </span>
                    <span>
                        <label className="block text-sm font-medium ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, obcaecati iure. Vitae sequi ducimus, autem blanditiis non maiores officia atque pr</label>
                    </span>
                </div>

                {/* Champs du formulaire */}
                <div className="space-y-5">
                    {/* Matricule */}
                    <div className="flex items-center">
                        <span className="text-[#555]  mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Matricule de l'utilisateur"
                            className="w-full p-2 border border-gray-400 text-black text-[14px]"
                            disabled
                        />
                    </div>

                    {/* Catégorie */}
                    <div className="flex items-center">
                        <span className="text-[#555] mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
                                />
                            </svg>
                        </span>
                        <select
                            id="categorie"
                            className="w-full p-2 border border-gray-400 text-black text-[14px]"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Catégorie
                            </option>
                            <option>Matériel</option>
                            <option>Logiciel</option>
                            <option>Réseau</option>
                        </select>
                    </div>

                    {/* Type */}
                    <div className="flex items-center">
                        <span className="text-[#555] mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                            </svg>
                        </span>
                        <select
                            id="type"
                            className="w-full p-2 border border-gray-400 text-black text-[14px]"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Type
                            </option>
                            <option>Bug</option>
                            <option>Panne Matériel</option>
                            <option>Erreur Logiciel</option>
                            <option>Demande Assistance</option>
                        </select>
                    </div>

                    {/* Priorité */}
                    <div className="flex items-center">
                        <span className="text-[#555] mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
                                />
                            </svg>
                        </span>
                        <select
                            id="priorite"
                            className="w-full p-2 border border-gray-400 text-black text-[14px]"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Priorité
                            </option>
                            <option>Faible</option>
                            <option>Moyenne</option>
                            <option>Élevée</option>
                            <option>Critique</option>
                        </select>
                    </div>

                    {/* Lieu */}
                    <div className="flex items-center">
                        <span className="text-[#555] mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                                />
                            </svg>
                        </span>
                        <select
                            id="lieu"
                            className="w-full p-2 border border-gray-400 text-black text-[14px]"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Lieu
                            </option>
                            <option>Salle 1</option>
                            <option>Salle 2</option>
                            <option>Bâtiment A</option>
                            <option>Bâtiment B</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="flex items-start">
                        <span className="text-[#555] mr-2 mt-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                                />
                            </svg>
                        </span>
                        <textarea
                            id="description"
                            className="w-full p-2 border border-gray-400 border text-black h-32 resize-y"
                            placeholder="Décrivez le problème..."
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TicketForm;