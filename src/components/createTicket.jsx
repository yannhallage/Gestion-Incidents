import { useContext } from 'react';
import ButtonClassic from './buttonClassic';
import { SecondContext } from '../context/FirsContext';
import TicketForm from './ticketForm';

const CreateTickect = () => {
  const { ticket, setTicket } = useContext(SecondContext); // Accède au contexte

  const searchBarStyle = {
    width: '100%',
    padding: '4px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '',
    color: '#e9edec',
  };

  const tabsStyle = {
    display: 'flex',
    gap: '5px',
    marginBottom: '10px',
  };

  const tabStyle = {
    backgroundColor: '#2a3942',
    border: 'none',
    padding: '4px',
    color: '#e9edec',
    cursor: 'pointer',
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#075e54',
  };

  const handleClickChange = () => {
    setTicket(<TicketForm />); // Met à jour le contexte avec TicketForm
  };

  return (
    <div className="">
      <div className="mt-2 text-xl text-black font-bold">
        <h2>Creation Tickets</h2>
      </div>
      <p className="text-gray-400 text-[14px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sint quia, neque debitis fugiat dolores id eligendi perspiciatis voluptatibus, deserunt ullam excepturi, vitae at reiciendis quibusdam cupiditate adipisci nostrum aliquid?
      </p>
      <div className="mt-5">
        <hr />
      </div>
      <div className="text-center py-3">
        <ButtonClassic
          tile={'Creer un nouveau ticket'}
          color={'bg-blue-400 text-white text-[14px] cursor-pointer py-3 px-6 rounded-lg font-semibold'}
          event={handleClickChange}
        />
      </div>
    </div>
  );
};

export default CreateTickect;