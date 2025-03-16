import { useContext } from 'react';
import ButtonClassic from '../buttonClassic';
import { SecondContext } from '../../context/FirsContext';
import DialogComponent from '../tech/diposition/dialogComponent';
import { useState, useEffect } from 'react';
import {extendedChatss} from '../../api/apiDataFirste'
import EtudierTicker from './diposition/etudierTicket';
// import TicketForm from './ticketForm';

const CreateTickect = () => {
  const [apiC, setApiC] = useState(null);
  const { ticket, setTicket } = useContext(SecondContext);

  const chatListStyle = {
    flexGrow: 1,
    overflowY: 'auto', // Défilement déjà présent
    maxHeight: 'calc(100vh - 150px)', // Hauteur maximale pour limiter la section et activer le défilement
  };

  const chatItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid',
  };

  const chatDetailsStyle = {
    flexGrow: 1,
  };

  const chatNameStyle = {
    fontWeight: 'bold',
    color: 'black',
  };

  const chatMessageStyle = {
    color: '#8696a0',
    fontSize: '14px',
  };

  const chatTimeStyle = {
    fontSize: '12px',
    color: '#8696a0',
    marginLeft: '10px',
  };

  // Augmenter les données pour tester le défilement
  // Données des discussions (vous pouvez les récupérer depuis une API ou un état)
  // const extendedChats = [
  //   { name: 'Moko', message: "Bonjour , sa quelque semaines que mon pc est devenir bizzare il fontionnait parfaitement avant mais dans cst dernier jour , L'ordinateur s'allume mais l'écran reste noir. ", time: '19:39', unread: 1 },
  //   { name: 'Tyrrell', message: "her products were impacted, resulting in failed requests or stale data. The connectivity issue self-resolved after 90 minutes. The backlog of indexing jobs was fully processed and saw recovery soon after, and queries to all indexes also saw an immediate return to normal throughput.", time: '03/03/2025' },
  //   { name: 'M.A ♥', message: "We are working with our cloud provider to identify the root cause and are researching additional layers of redundancy to reduce customer impact in the future for issues like this one. We are also exploring mitigation strategies for faster resolution", time: '22:10' },
  //   { name: 'Dion Inès', message: 'An unexpected data shape led to crashes in some of our pods. We mitigated the incident by excluding the affected pods and correcting the data that led to the crashes. We’ve fixed the source of the unexpected data shape and have improved the overall resilience of our service', time: '21:27' },
  //   { name: 'yann hallage', message: 'es are typically not a concern because we can fail over to healthier replicas. However, due to an unrelated issue, there was a replication delay at the time of the incident, and failing over would have caused a greater impact on our customers. We are working on improving our resiliency and automation processes for this infrastruct', time: '21:27' },
  // ];

  useEffect(() => {
    if (apiC !== null) {
      setTicket(<EtudierTicker donnee={apiC-1} />);
    }
  }, [apiC, setTicket]);

  return (
    <div className="">
      <div className="mt-2 text-xl text-black font-bold">
        <h2>Consulter tikets attribuer</h2>
      </div>
      <p className="text-gray-400 text-[14px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sint quia, neque debitis fugiat dolores id eligendi perspiciatis voluptatibus, deserunt ullam excepturi, vitae at reiciendis quibusdam cupiditate adipisci nostrum aliquid?
      </p>
      <div className="mt-5">
        <hr />
      </div>
      <div className="flex flex-col bg-white flex-1 items-center justify-center" >
        <div style={chatListStyle}>
          {extendedChatss.map((chat, index) => (
            <div key={index} style={chatItemStyle}>
              <span className="text-[#ccc]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </span>

              <div style={chatDetailsStyle} className="ml-2 mt-2">
                <div style={chatNameStyle} className="flex space-x-3">
                  <span
                    className="text-[14px] cursor-pointer"
                    onClick={() => {
                      setApiC(index + 1);
                    }}
                  >
                    TicketD00{index + 1}
                  </span>
                </div>
                <div style={chatMessageStyle}>
                  Une panne signaler vous a été attribuer par l'administateur IT
                </div>
              </div>
              <div style={chatTimeStyle}>15/03/2025</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateTickect;