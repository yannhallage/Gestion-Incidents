import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Inscription = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const matriculeRef = useRef(null);
    const passwordRef = useRef(null);
    
    const [email, setEmail] = useState("");
    const [matricule, setMatricule] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        navigate('/');
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Validation de l'email
        if (!email.trim()) {
            setError("Veuillez entrer votre email");
            // alert("Erreur : L'email est requis");
            emailRef.current.focus();
            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: " L'email est requis",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Veuillez entrer un email valide");
            // alert("Erreur : Format d'email invalide");
            emailRef.current.focus();

            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: "Format d'email invalide",
                // icon: "success"
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            return;
        }

        // Validation du matricule
        if (!matricule.trim()) {
            setError("Veuillez entrer votre matricule");
            // alert("Erreur : Le matricule est requis");
            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: " Le matricule est requis",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            matriculeRef.current.focus();
            return;
        }

        // Validation du mot de passe
        if (!password.trim()) {
            setError("Veuillez entrer votre mot de passe");
            // alert("Erreur : Le mot de passe est requis");
            Swal.fire({
                icon: "error",
                title: "verifier les champs",
                text: " Le mot de passe est requis",
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
                text: " Le mot de passe doit contenir au moins 6 caractères",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
            passwordRef.current.focus();
            return;
        }

        // Si toutes les validations passent
        setError("");
        console.log("Inscription effectuée avec:", {
            email: email,
            matricule: matricule,
            motDePasse: password
        });
        
        // alert("Inscription réussie !");
        // Ici vous pouvez ajouter la logique d'inscription réelle
        // et la redirection appropriée après succès*
        Swal.fire({
            title: "Good job!",
            text: "Inscription réussie !",
            icon: "success"
          });
        // navigate('/login');
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white font-sans">
            <div className="flex flex-col justify-center p-12 ml-10 md:ml-20 lg:ml-32">
                <h1 className="text-6xl font-bold text-blue-400 mb-4">Créer un <br /> compte</h1>
                <p className="text-lg text-gray-300">Nous sommes ravis de vous accueillir !</p>
            </div>

            <div className="flex-1 flex flex-col justify-center p-12 bg-gray-800">
                <div className="mb-6 relative text-2xl">
                    <span>Créer Votre compte</span>
                </div>
                <div>
                    <span className="text-[14px] text-[#ccc]">
                        Créez votre compte pour avoir accès aux fonctionnalités
                    </span>
                </div>

                {error && (
                    <div className="mb-4 text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <div className="mb-6 relative space-y-2">
                    <label className="block text-sm text-gray-400 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        ref={emailRef}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre e-mail"
                        className="w-full max-w-md p-2 hover:border-blue-400 rounded-md border bg-gray-700 border-gray-600 text-white"
                    />
                    <label className="block text-sm text-gray-400 mb-1">
                        Matricule
                    </label>
                    <input
                        type="text"
                        ref={matriculeRef}
                        value={matricule}
                        onChange={(e) => setMatricule(e.target.value)}
                        placeholder="matricule"
                        className="w-full max-w-md p-2 hover:border-blue-400 rounded-md border bg-gray-700 border-gray-600 text-white"
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
                        className="w-full max-w-md p-2 hover:border-blue-400 rounded-md border bg-gray-700 border-gray-600 text-white"
                    />
                </div>

                <div className="w-full max-w-md">
                    <button
                        className="bg-gray-700 border-gray-600 cursor-pointer text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
                        onClick={handleClick}
                    >
                        Retour
                    </button>
                    <button
                        className="bg-blue-400 text-white py-2 cursor-pointer px-4 rounded hover:bg-blue-500"
                        onClick={handleRegister}
                    >
                        S'inscrire
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Inscription;