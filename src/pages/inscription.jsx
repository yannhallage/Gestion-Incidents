import { useNavigate } from "react-router-dom";

const Inscription = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            {/* <div className="grid md:grid-cols-2 grid-cols-1"> */}
                {/* Left Section */}
                <div className="flex flex-col justify-center p-12 ml-10 md:ml-20 lg:ml-32">
                    <h1 className="text-6xl font-bold text-blue-400 mb-4">Créer un <br /> compte</h1>
                    <p className="text-lg text-gray-300">Nous sommes ravis de vous accueillir !
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col justify-center p-12 bg-gray-800">
                    <div className="mb-6 relative text-2xl">
                        <span>
                            Creer Votre compte
                        </span>
                    </div>
                    <div>
                        <span className="text-[14px] text-[#ccc]">
                            Creer votre compte pour avoir acces aux fonctionnalités
                        </span>
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-sm text-gray-400 mb-1">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Entrez votre e-mail"
                            className="w-full max-w-md p-2 hover:border-blue-400 rounded-md  border bg-gray-700  border-gray-600 rounded text-white"
                        />
                        <label className="block text-sm text-gray-400 mb-1">
                            Matricule
                        </label>
                        <input
                            type="text"
                            placeholder="matricule"
                            className="w-full max-w-md p-2  hover:border-blue-400 rounded-md border bg-gray-700 border-gray-600 rounded text-white"
                        />
                        <label className="block text-sm text-gray-400 mb-1">
                            mot de passe
                        </label>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            className="w-full max-w-md p-2 hover:border-blue-400 rounded-md  border bg-gray-700  border-gray-600 rounded text-white"
                        />
                    </div>

                    <div className="w-full max-w-md">
                        <button
                            className=" bg-gray-700 border-gray-600 cursor-pointer text-white py-2 px-4 rounded mr-2"
                            onClick={handleClick}
                        >
                            Retour
                        </button>
                        <button
                            className="bg-blue-400 text-white py-2 cursor-pointer px-4 rounded"
                            onClick={() => { console.log(true) }}
                        >
                            Connexion
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Inscription;