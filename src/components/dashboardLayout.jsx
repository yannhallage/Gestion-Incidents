import MessageComponent from './messageComponent';
import { SecondContext } from "../context/FirsContext";
import Notification from './notification';
import HistoriqueComponent from './historiqueComponent';
import CreateTickect from './createTicket';
import AccountComponent from './account';
import '../styles/personnal.css';
import Sidebar from './diposition/sidebar';
import MainContent from './diposition/mainContent';
import { Context } from '../context/FirsContext';
import { useState } from 'react';

const DashboardLayout = () => {
  const [valeur, setValeur] = useState(<Sidebar />);
  const [secondvaleur, setSecondValeur] = useState(<MainContent />);
  const [activeItem, setActiveItem] = useState('home'); // État pour suivre l'item actif
  const [ticket, setTicket] = useState(secondvaleur); // État initial pour Ticket

  const containerStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#red',
    color: '#e9edec',
    fontFamily: 'Arial, sans-serif',
  };

  const sidebarStyle = {
    width: '700px',
    // backgroundColor: '#E4EFE7',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  const menuStyle = {
    // 111b21
    width: '120px',
    backgroundColor: '#E4EFE7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
  };

  const menuItemStyle = {
    padding: '15px 0',
    cursor: 'pointer',
    color: '#555',
  };

  const menuBottomStyle = {
    ...menuItemStyle,
    marginTop: 'auto',
  };

  // Style pour l'item actif
  const activeMenuItemStyle = {
    ...menuItemStyle,
    // backgroundColor: '#60A5FA', // Bleu moyen (text-blue-400 en Tailwind)
    color: '#60A5FA', // Texte blanc pour contraste
  };

  // Gestionnaires de clic avec mise à jour de l'item actif
  const Handlclick = () => {
    setValeur(<Sidebar />);
    setActiveItem('home');
    setTicket(<MainContent />)
  };
  const HandlclickMessage = () => {
    setValeur(<MessageComponent />);
    setActiveItem('message');
    setTicket(<MainContent />)
  };
  const HandlclickCreateTickect = () => {
    setValeur(<CreateTickect />);
    setActiveItem('create');
    setTicket(<MainContent />)
  };
  const HandlclickHistoriqueComponent = () => {
    setValeur(<HistoriqueComponent />);
    setActiveItem('history');
    setTicket(<MainContent />)
  };
  const HandlclickNotification = () => {
    setValeur(<Notification />);
    setActiveItem('notification');
    setTicket(<MainContent />)
  };
  const HandlclickAccount = () => {
    setValeur(<AccountComponent />);
    setActiveItem('account');
    setTicket(<MainContent />)
  };

  return (
    <>
      <SecondContext.Provider value={{ ticket, setTicket }}>
        <Context.Provider value={valeur}>
          <div style={containerStyle}>
            {/* Menu latéral à gauche */}
            <div style={menuStyle}>
              <div
                style={activeItem === 'home' ? activeMenuItemStyle : menuItemStyle}
                onClick={Handlclick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

              </div>
              <div
                style={activeItem === 'message' ? activeMenuItemStyle : menuItemStyle}
                onClick={HandlclickMessage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>

              </div>
              <div
                style={activeItem === 'create' ? activeMenuItemStyle : menuItemStyle}
                onClick={HandlclickCreateTickect}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                </svg>

              </div>
              <div
                style={activeItem === 'history' ? activeMenuItemStyle : menuItemStyle}
                onClick={HandlclickHistoriqueComponent}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>

              </div>
              <div
                style={activeItem === 'notification' ? activeMenuItemStyle : menuItemStyle}
                onClick={HandlclickNotification}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                
              </div>
              <div
                style={activeItem === 'account' ? { ...activeMenuItemStyle, marginTop: 'auto' } : menuBottomStyle}
                onClick={HandlclickAccount}
              >
                <svg viewBox="0 0 212 212" height="41" width="41" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212"><title>default-user</title><path fill="#DFE5E7" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z" class="xl21vc0"></path><g><path fill="#FFFFFF" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z" class="x1d6ck0k"></path><path fill="#FFFFFF" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z" class="x1d6ck0k"></path></g></svg>
              </div>
            </div>

            {/* Sidebar (liste des discussions) */}
            <div style={sidebarStyle}>
              {valeur}
            </div>

            {/* Main Content */}
            {
              ticket
            }
          </div>
        </Context.Provider>
      </SecondContext.Provider>
    </>
  );
};

export default DashboardLayout;