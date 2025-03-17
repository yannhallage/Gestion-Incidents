import React, { useRef, useState } from 'react';
// import Swal from 'sweetalert2'; // Import de SweetAlert2

const TicketForm = () => {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    matricule: '', // Ajouté comme champ modifiable
    categorie: '',
    type: '',
    priorite: '',
    lieu: '',
    description: '',
  });

  // Gestion des changements dans les champs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Nettoyage des entrées pour éviter les injections (exemple simple)
    const sanitizedValue = value.replace(/[<>{}]/g, ''); // Supprime les caractères potentiellement dangereux
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  // Validation des champs
  const validateForm = () => {
    const { matricule, categorie, type, priorite, lieu, description } = formData;
    if (!matricule.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Le matricule de l\'utilisateur est requis !',
      });
      return false;
    }
    if (!categorie) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez sélectionner une catégorie !',
      });
      return false;
    }
    if (!type) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez sélectionner un type !',
      });
      return false;
    }
    if (!priorite) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez sélectionner une priorité !',
      });
      return false;
    }
    if (!lieu) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez sélectionner un lieu !',
      });
      return false;
    }
    if (!description.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'La description du problème est requise !',
      });
      return false;
    }
    // Validation de la longueur de la description (exemple)
    if (description.length > 500) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'La description ne doit pas dépasser 500 caractères !',
      });
      return false;
    }
    return true;
  };

  // Gestion de la soumission
  const handleSave = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (!validateForm()) return;

    if (inputRef.current) {
      inputRef.current.innerHTML = 'Chargement...';
      setTimeout(() => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Le ticket a été enregistré avec succès !',
        });
        inputRef.current.innerHTML = 'Enregistrer';
        // Réinitialisation du formulaire après succès
        setFormData({
          matricule: '',
          categorie: '',
          type: '',
          priorite: '',
          lieu: '',
          description: '',
        });
      }, 2000);
    }
  };

  // Gestion du bouton "Vider"
  const handleClear = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Confirmation',
      text: 'Voulez-vous vraiment vider le formulaire ?',
      showCancelButton: true,
      confirmButtonText: 'Oui, vider',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({
          matricule: '',
          categorie: '',
          type: '',
          priorite: '',
          lieu: '',
          description: '',
        });
        Swal.fire({
          icon: 'info',
          title: 'Formulaire vidé',
          text: 'Tous les champs ont été réinitialisés.',
        });
      }
    });
  };

  const mainContentStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FF',
  };

  const formStyle = {
    backgroundColor: '#fff',
    width: '100%',
    padding: '20px',
    maxWidth: '700px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={mainContentStyle}>
      <form style={formStyle} className="space-y-6">
        {/* Entête */}
        <div className="flex justify-between items-center text-gray-800 p-3 border-b border-gray-300">
          <span className="text-xl font-semibold">Description de la panne</span>
          <div className="space-x-2">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
              onClick={handleSave}
              ref={inputRef}
            >
              Enregistrer
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors text-sm"
              onClick={handleClear}
            >
              Vider
            </button>
          </div>
        </div>

        {/* Texte descriptif */}
        <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md">
          <span className="text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </span>
          <span>
            <label className="block text-sm font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, obcaecati iure. Vitae sequi ducimus, autem blanditiis non maiores officia atque pr
            </label>
          </span>
        </div>

        {/* Champs du formulaire */}
        <div className="space-y-4">
          {/* Matricule */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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
              name="matricule"
              value={formData.matricule}
              onChange={handleInputChange}
              placeholder="Matricule de l'utilisateur"
              className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Catégorie */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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
              name="categorie"
              value={formData.categorie}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Catégorie
              </option>
              <option value="Matériel">Matériel</option>
              <option value="Logiciel">Logiciel</option>
              <option value="Réseau">Réseau</option>
            </select>
          </div>

          {/* Type */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Type
              </option>
              <option value="Bug">Bug</option>
              <option value="Panne Matériel">Panne Matériel</option>
              <option value="Erreur Logiciel">Erreur Logiciel</option>
              <option value="Demande Assistance">Demande Assistance</option>
            </select>
          </div>

          {/* Priorité */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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
              name="priorite"
              value={formData.priorite}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Priorité
              </option>
              <option value="Faible">Faible</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Élevée">Élevée</option>
              <option value="Critique">Critique</option>
            </select>
          </div>

          {/* Lieu */}
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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
              name="lieu"
              value={formData.lieu}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Lieu
              </option>
              <option value="Salle 1">Salle 1</option>
              <option value="Salle 2">Salle 2</option>
              <option value="Bâtiment A">Bâtiment A</option>
              <option value="Bâtiment B">Bâtiment B</option>
            </select>
          </div>

          {/* Description */}
          <div className="flex items-start">
            <span className="text-gray-500 mr-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
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
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-y"
              placeholder="Décrivez le problème..."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;