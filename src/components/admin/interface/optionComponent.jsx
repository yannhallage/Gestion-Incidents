import { useContext } from "react";
import CreerTicket from './disp/creerTicket';
import HistoriqueAdmin from './disp/historique'
import AjouterTech from './disp/ajouterTech'
import AjouterUser from './disp/ajouterUser'
import { AdminContext } from "../../../context/FirsContext";
import ConsulterTicket from "./disp/consulterTicker";
import ParcInfo from './disp/parcInfo'

const OptionComponent = () => {
    const { setOptionSelect } = useContext(AdminContext);

    const menuItems = [
        { id: "tickets", title: "Consulter les tickets", subtitle: "Find all the Releases", icon: "10" },
        { id: "transaction", title: "Créer un ticket", subtitle: "Read The Manual", icon: <i className="bi bi-arrow-repeat text-3xl"></i> },
        { id: "administrateur", title: "Ajouter un utilisateur", subtitle: "Forums", icon: <i className="bi bi-people-fill text-xl"></i> },
        { id: "technicien", title: "Créer un technicien", subtitle: "On Github", icon: <i className="bi bi-calendar3 text-xl"></i> },
        { id: "historique", title: "Historique", subtitle: "On Github", icon: <i className="bi bi-send-arrow-down text-xl"></i> },
        { id: "parc", title: "Parc informatique", subtitle: "On Github", icon: "10" },
        { id: "deconnexion", title: "Déconnexion", subtitle: "On Github", icon: <i className="bi bi-power text-xl"></i>, action: () => alert("Déconnexion en cours...") },
    ];

    const decision = [
        <ConsulterTicket />,
        <CreerTicket />,
        <AjouterUser />,
        <AjouterTech />,
        <HistoriqueAdmin />,
        <ParcInfo />,
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-slate-700 p-7">
            {menuItems.map((item,index) => (
                <div
                    key={item.id}
                    className="p-6 cursor-pointer text-center bg-white transition transform hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:transform-none"
                    onClick={() => {
                        setOptionSelect(decision[index])
                    }}
                >
                    <span className="text-[18px]">{item.title}</span><br />
                    <span className="text-[15px] italic text-[#e53935]">{item.subtitle}</span><br /><br />
                    <span className="text-xl border border-[#ccc] rounded-full p-2">{item.icon}</span>
                </div>
            ))}
        </div>
    );
};

export default OptionComponent;
