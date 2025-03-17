import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../../context/FirsContext";
import OptionComponent from "../optionComponent";
import ButtonClassic from "../../../buttonClassic";
import { ticketsData } from '../../../../api/apiDataAdmin'
import VoirTicket from "./voirTicket";

const ConsulterTicket = () => {
    const { setOptionSelect } = useContext(AdminContext);
    const [donneeEnvoyer, setDonneeEnvoyer] = useState({ ticketsData })

    if (donneeEnvoyer) { console.log(true) }

    useEffect(() => {
        // Initialisation de DataTables après le rendu du tableau
        $(document).ready(function () {
            $("#ticketTable").DataTable();
        });
    }, []);
    return (
        <div className="p-3 ">
            <span className="text-xl font-bold">Consulter les tickets</span>

            <div className="mt-5 ">
                <ButtonClassic
                    tile="Retour"
                    color="bg-gray-700 text-white cursor-pointer px-3 py-1 text-sm rounded hover:bg-gray-800 transition-color"
                    event={() => setOptionSelect(<OptionComponent />)}
                />
            </div>

            <div className="bg-white p-5 mt-5 rounded-md shadow-md ">
                <table id="ticketTable" className="display w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr className="text-gray-700">
                            <th className="p-2">ID</th>
                            <th className="p-2">Titre</th>
                            {/* <th className="p-2">Description</th> */}
                            <th className="p-2">Statut</th>
                            <th className="p-2">Ticket</th>
                            <th className="p-2">Date de création</th>
                            <th className="p-2">Priorité</th>
                            <th className="p-2">Catégorie</th>
                            <th className="p-2">Utilisateur ID</th>
                            <th className="p-2">Attribué à - Technicien</th>
                            <th className="p-2">Consulter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticketsData.map((ticket, index) => (
                            <tr key={ticket.id} className="border-b">
                                <td className="p-2">{ticket.id}</td>
                                <td className="p-2">{ticket.titre}</td>
                                {/* <td className="p-2">{ticket.description}</td> */}
                                <td className="p-2">
                                    <span className={`${ticket.statutColor} text-white px-2 py-1 rounded`}>
                                        {ticket.statut}
                                    </span>
                                </td>
                                <td className="p-2">{ticket.ticket}</td>
                                <td className="p-2">{ticket.dateCreation}</td>
                                <td className="p-2">{ticket.priorite}</td>
                                <td className="p-2">{ticket.categorie}</td>
                                <td className="p-2">{ticket.utilisateurId}</td>
                                <td className="p-2">{ticket.technicien}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => setOptionSelect(<VoirTicket info={index} />)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        Voir Index
                                    </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ConsulterTicket;
