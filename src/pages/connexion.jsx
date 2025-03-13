import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const handleLogin = () => {
        // Logique de connexion ici
        console.log("Connexion effectuée");
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            {/* <div className='grid md:grid-cols-2 grid-cols-1'> */}
                {/* Left Section */}
                <div className="flex flex-col justify-center p-12 ml-10 md:ml-20 lg:ml-32">
                    <h1 className="text-5xl font-bold text-blue-400 mb-4">Connexion</h1>
                    <p className="text-lg text-gray-300">Entrez votre pseudo et votre mot de passe</p>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col justify-center p-12 bg-gray-800">
                    <div className="mb-6 relative text-2xl">
                        <span>
                            Acceder a votre interface utilisateur
                        </span>
                    </div>
                    <div>
                        <span className="text-[14px] text-[#ccc]">
                            Application de gestion d'incident IT
                        </span>
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-sm text-gray-400 mb-1">
                            En tant que
                        </label>
                        <input
                            type="text"
                            placeholder="Admin/techicien/utilisateur"
                            className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border  border-gray-600 rounded text-white"
                        />

                    </div>
                    <div className="mb-6 relative space-y-1">
                        <label className="block text-sm text-gray-400 mb-1">
                            Matricule
                        </label>
                        <input
                            type="text"
                            placeholder="matricule"
                            className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                        />
                        <label className="block text-sm text-gray-400 mb-1">
                            mot de passe
                        </label>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                        />
                    </div>

                    <div className="w-full max-w-md">
                        <button
                            className="bg-gray-700 border-gray-600 cursor-pointer text-white py-2 px-4 rounded mr-2"
                            onClick={handleClick}
                        >
                            Retour
                        </button>
                        <button
                            className="bg-blue-400 text-white py-2 cursor-pointer  px-4 rounded"
                            onClick={handleLogin}
                        >
                            Connexion
                        </button>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default LoginPage;