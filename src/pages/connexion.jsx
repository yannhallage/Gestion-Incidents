import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        navigate('/');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Validation
        if (!role.trim()) {
            setError("Veuillez sélectionner un rôle");
            // alert("Erreur : Veuillez sélectionner un rôle (Admin/Technicien/Utilisateur)");

            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: "Veuillez sélectionner un rôle (Admin/Technicien/Utilisateur)",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            return;
        }

        if (!username.trim()) {
            setError("Veuillez entrer votre matricule");
            // alert("Erreur : Le matricule est requis");
            usernameRef.current.focus();
            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: "Le matricule est requis",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            return;
        }

        if (!password.trim()) {
            setError("Veuillez entrer votre mot de passe");
            // alert("Erreur : Le mot de passe est requis");
            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: "Le mot de passe est requis",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            passwordRef.current.focus();
            return;
        }

        if (password.length < 6) {
            setError("Le mot de passe doit contenir au moins 6 caractères");
            // alert("Erreur : Le mot de passe doit contenir au moins 6 caractères");
            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: "Le mot de passe doit contenir au moins 6 caractères",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            passwordRef.current.focus();
            return;
        }

        // Si toutes les validations passent
        setError("");
        console.log("Connexion effectuée avec:", {
            role: role,
            matricule: username,
            motDePasse: password
        });
        
        // alert("Connexion réussie !");
        Swal.fire({
            title: "Good job!",
            text: "Connexion réussie !",
            icon: "success"
          });
        // Ici vous pouvez ajouter la logique d'authentification réelle
        // et la redirection appropriée après succès
        // navigate('/dashbo');
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            <div className="flex flex-col justify-center p-12 ml-10 md:ml-20 lg:ml-32">
                <h1 className="text-5xl font-bold text-blue-400 mb-4">Connexion</h1>
                <p className="text-lg text-gray-300">Entrez votre pseudo et votre mot de passe</p>
            </div>

            <div className="flex-1 flex flex-col justify-center p-12 bg-gray-800">
                <div className="mb-6 relative text-2xl">
                    <span>Acceder a votre interface utilisateur</span>
                </div>
                <div>
                    <span className="text-[14px] text-[#ccc]">
                        Application de gestion d'incident IT
                    </span>
                </div>
                
                {error && (
                    <div className="mb-4 text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-6 relative">
                    <label className="block text-sm text-gray-400 mb-1">
                        En tant que
                    </label>
                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Admin/technicien/utilisateur"
                        className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                    />
                </div>

                <div className="mb-6 relative space-y-1">
                    <label className="block text-sm text-gray-400 mb-1">
                        Matricule
                    </label>
                    <input
                        type="text"
                        ref={usernameRef}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="matricule"
                        className="w-full max-w-md p-2 bg-gray-700 hover:border-blue-400 border border-gray-600 rounded text-white"
                    />
                    <label className="block text-sm text-gray-400 mb-1">
                        Mot de passe
                    </label>
                    <input
                        type="password"
                        ref={passwordRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        className="bg-blue-400 text-white py-2 cursor-pointer px-4 rounded hover:bg-blue-500"
                        onClick={handleLogin}
                    >
                        Connexion
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;