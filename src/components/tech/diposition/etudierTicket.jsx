import { useEffect, useState, useRef } from 'react';
import { extendedChatss } from '../../../api/apiDataFirste'; // Données simulées
import ButtonClassic from '../../buttonClassic';
// import Swal from 'sweetalert2'; // Import de SweetAlert2

const EtudierTicker = ({ donnee }) => {
  const [modifierTicket, setModifierTicket] = useState(false);
  const [message, setMessage] = useState(null);
  const [conclus, setConclus] = useState(false);
  const [chatss, setChatss] = useState(extendedChatss); // Gérer les données comme un état

  const updateTicket = (newPriorite) => {
    const updatedChatss = [...chatss];
    updatedChatss[donnee] = { ...updatedChatss[donnee], Priorité: newPriorite };
    setChatss(updatedChatss);
  };

  const updateTicketConclusion = (newConclusion) => {
    console.log(newConclusion);
    setConclus(!conclus);
  };

  const infoMessage = (message) => {
    setMessage(message);
  };

  const closeModifierTiket = () => setModifierTicket(!modifierTicket);

  return (
    <div className="border border-gray-300 p-6 rounded-md bg-white shadow-sm text-gray-800 text-sm">
      <div>
        {/* En-tête du ticket */}
        <div>
          <div className="flex items-center space-x-3">
            <svg
              viewBox="0 0 212 212"
              height="41"
              width="41"
              preserveAspectRatio="xMidYMid meet"
              className="xh8yej3 x5yr21d"
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 212 212"
            >
              <title>default-user</title>
              <path
                fill="#DFE5E7"
                d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"
                className="xl21vc0"
              />
              <g>
                <path
                  fill="#FFFFFF"
                  d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"
                  className="x1d6ck0k"
                />
                <path
                  fill="#FFFFFF"
                  d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"
                  className="x1d6ck0k"
                />
              </g>
            </svg>
            <div>
              <span className="text-xl font-semibold">Ticket : {chatss[donnee].id}</span>
              <div className="mt-1">
                <span className="text-sm font-medium">Référence ticket : {chatss[donnee].name}</span>
                <p className="text-xs text-gray-500">Envoyé le 15/03/2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description de l'utilisateur */}
        <div className="mt-6 font-sans">
          <span className="text-gray-700">
            Une forme de données inattendue a provoqué des plantages dans certains de nos pods. Nous avons atténué l'incident et amélioré la résilience globale de notre service face à de tels incidents.
          </span>
        </div>

        {/* Message de l'équipe */}
        <div className="mt-6 border border-gray-300 p-4 rounded-md bg-gray-50">
          <span className="text-gray-700">{chatss[donnee].message}</span>
        </div>

        {/* Informations et actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-3">
            <div className="font-sans text-sm text-gray-700">
              <p>Date de création ticket : {chatss[donnee].creationticket}</p>
              <p>Statut : {chatss[donnee].statut}</p>
              <p>Priorité : {chatss[donnee].Priorité}</p>
              <p>Utilisateur : IT0029</p>
            </div>
            <div className="space-x-2">
              <ButtonClassic
                tile={'Modifier ticket'}
                color={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm'}
                event={closeModifierTiket}
              />
              <ButtonClassic
                tile={'Conclure la panne'}
                color={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm'}
                event={() => setConclus(!conclus)}
              />
            </div>
          </div>

          <div>
            {modifierTicket && (
              <SelectComponent donnees={donnee} updateTicket={updateTicket} fonction={closeModifierTiket} />
            )}
            {conclus && <SecondSelect donnees={donnee} updateConclusion={updateTicketConclusion} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectComponent = ({ donnees, updateTicket, fonction }) => {
  const [selectedPriorite, setSelectedPriorite] = useState('');

  const handleChange = (e) => {
    setSelectedPriorite(e.target.value);
  };

  const handleSave = () => {
    if (selectedPriorite) {
      updateTicket(selectedPriorite);
      fonction();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Priorité mise à jour avec succès',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Champ vide',
        text: 'Veuillez sélectionner une priorité.',
      });
    }
  };

  return (
    <div className="space-y-4">
      <select
        id="priorite"
        className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={selectedPriorite}
        onChange={handleChange}
      >
        <option value="" disabled>
          Priorité
        </option>
        <option value="faible">Faible</option>
        <option value="moyenne">Moyenne</option>
        <option value="élevée">Élevée</option>
        <option value="critique">Critique</option>
      </select>
      <select
        id="categorie"
        className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        defaultValue=""
      >
        <option value="" disabled>
          Catégorie
        </option>
        <option>Matériel</option>
        <option>Logiciel</option>
        <option>Réseau</option>
      </select>
      <div className="space-x-2">
        <ButtonClassic
          color={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm'}
          tile={'Enregistrer'}
          event={handleSave}
        />
        <ButtonClassic
          color={'bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors text-sm'}
          tile={'Annuler'}
          event={() => fonction()}
        />
      </div>
    </div>
  );
};

const SecondSelect = ({ donnees, updateConclusion }) => {
  const [description, setDescription] = useState('');

  const handleConclude = () => {
    if (description.trim()) {
      updateConclusion(description);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Panne conclue avec succès',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Champ vide',
        text: 'Veuillez décrire la conclusion de la panne.',
      });
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        id="description"
        className="w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-y"
        placeholder="Décrivez la conclusion de la panne..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="space-x-2">
        <ButtonClassic
          color={'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm'}
          tile={'Conclure la panne'}
          event={handleConclude}
        />
      </div>
    </div>
  );
};

export default EtudierTicker;