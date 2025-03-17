import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../../context/FirsContext";
import OptionComponent from "../optionComponent";
import ButtonClassic from "../../../buttonClassic";
import { ticketsData } from "../../../../api/apiDataAdmin";
import ConsulterTicket from "./consulterTicker";

const VoirTicket = ({ info }) => {
  const { setOptionSelect } = useContext(AdminContext);
  const [ticket, setTicket] = useState(null); // Pour stocker les données du ticket

  useEffect(() => {
    // Assurez-vous que info est un indice valide dans ticketsData
    if (info >= 0 && info < ticketsData.length) {
      setTicket(ticketsData[info]); // Récupère le ticket selon l'indice info
      console.log(ticketsData[info]); // Affiche les données du ticket dans la console
    } else {
      console.log("Indice non valide");
    }
  }, [info]); // Exécuter chaque fois que `info` change

  if (!ticket) return <div className="p-3">Chargement...</div>; // Afficher un message si le ticket n'est pas encore chargé

  return (
    <div className="p-3">
      <span className="text-xl font-bold text-gray-800">Détails sur la panne</span>

      <div className="mt-5">
        <ButtonClassic
          tile="Retour"
          color="bg-gray-700 text-white cursor-pointer px-3 py-1 text-sm rounded hover:bg-gray-800 transition-colors"
          event={() => setOptionSelect(<ConsulterTicket />)}
        />
      </div>

      <div className="bg-white p-6 mt-5 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div className="ml-5 text-xl font-bold text-gray-800">
            Ticket : {ticket.titre}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-300 bg-gray-50 rounded-md">
              <div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Problème :</span>{" "}
                  <span className="text-gray-800">{ticket.titre}</span>
                </div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Statut :</span>{" "}
                  <span className="text-gray-800">{ticket.statut}</span>
                </div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Date de création :</span>{" "}
                  <span className="text-gray-800">{ticket.dateCreation}</span>
                </div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Priorité :</span>{" "}
                  <span className="text-gray-800">{ticket.priorite}</span>
                </div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Catégorie :</span>{" "}
                  <span className="text-gray-800">{ticket.categorie}</span>
                </div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Utilisateurs :</span>{" "}
                  <span className="text-gray-800">{ticket.utilisateurId}</span>
                </div>
                <div className="text-[17px]">
                  <span className="font-bold text-gray-700">Attribué à Technicien :</span>{" "}
                  <span className="text-gray-800">{ticket.technicien}</span>
                </div>
              </div>

              <div className="text-[17px]">
                <span className="font-bold text-gray-700">Description :</span>{" "}
                <span className="text-gray-800">
                  <p>{ticket.description || "Aucune description disponible"}</p>
                </span>
              </div>
            </div>

            {/* Modifier */}
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="statut" className="block text-xs font-medium text-gray-700 mb-1">
                  Statut
                </label>
                <select
                  id="statut"
                  className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Statut
                  </option>
                  <option>En attente</option>
                  <option>En cours</option>
                  <option>Attribué</option>
                </select>
              </div>
              <div>
                <label htmlFor="technicien" className="block text-xs font-medium text-gray-700 mb-1">
                  Attribuer à - Technicien
                </label>
                <select
                  id="technicien"
                  className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Attribuer à - Technicien
                  </option>
                  <option>Jean Dupont</option>
                  <option>Sophie Martin</option>
                  <option>Marc Dubois</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-white border border-gray-300 text-sm transition-colors">
                  Modifier
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-white border border-gray-300 text-sm transition-colors">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoirTicket;