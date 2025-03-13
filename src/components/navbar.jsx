import React from 'react';
import '../styles/personnal.css';

const App = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#111b21',
    color: '#e9edec',
    fontFamily: 'Arial, sans-serif',
  };

  const menuStyle = {
    width: '100px',
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 0',
  };

  const menuItemStyle = {
    padding: '15px 0',
    cursor: 'pointer',
  };

  const menuBottomStyle = {
    ...menuItemStyle,
    marginTop: 'auto',
  };

  const menuIconStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  };

  const sidebarStyle = {
    width: '700px',
    backgroundColor: '#202d35',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  const searchBarStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#2a3942',
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
    padding: '10px',
    color: '#e9edec',
    cursor: 'pointer',
  };

  const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#075e54',
  };

  const archivedButtonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#2a3942',
    border: 'none',
    color: '#e9edec',
    cursor: 'pointer',
  };

  const chatListStyle = {
    flexGrow: 1,
    overflowY: 'auto',
  };

  const chatItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #2a3942',
  };

  const chatImageStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const chatDetailsStyle = {
    flexGrow: 1,
  };

  const chatNameStyle = {
    fontWeight: 'bold',
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

  const chatUnreadStyle = {
    backgroundColor: '#075e54',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '50%',
    fontSize: '12px',
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111b21',
    width: '100%',
  };

  const whatsappBannerStyle = {
    textAlign: 'center',
    maxWidth: '500px',
  };

  const bannerImageStyle = {
    marginBottom: '20px',
  };

  const bannerTextStyle = {
    marginBottom: '10px',
  };

  const bannerParagraphStyle = {
    color: '#8696a0',
    marginBottom: '20px',
  };

  const downloadButtonStyle = {
    backgroundColor: '#075e54',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const securityNoteStyle = {
    fontSize: '12px',
    color: '#8696a0',
    marginTop: '10px',
  };


  return (
    <div style={containerStyle}>
      {/* Menu latéral à gauche */}
      <div style={menuStyle}>
        <div style={menuItemStyle}>
          {/* <img src="https://via.placeholder.com/30" alt="Profil" style={menuIconStyle} /> */}
          <i class="fa-solid fa-house"></i>
        </div>
        <div style={menuItemStyle}>
          <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>chats-filled</title><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8384 8.45501L5 8.70356V9V17.8333C5 18.7538 5.7462 19.5 6.6667 19.5H20.3333C21.2538 19.5 22 18.7538 22 17.8333V6.66667C22 5.74619 21.2538 5 20.3333 5H2.5927L4.8384 8.45501ZM8 14.5C8 13.6716 8.67157 13 9.5 13H14.5C15.3284 13 16 13.6716 16 14.5C16 15.3284 15.3284 16 14.5 16H9.5C8.67157 16 8 15.3284 8 14.5ZM9.5 8C8.67157 8 8 8.67157 8 9.5C8 10.3284 8.67157 11 9.5 11H16.5C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8H9.5Z" fill="currentColor"></path><path d="M5 8.70356L5.41919 8.43101L5.5 8.55531V8.70356H5ZM4.8384 8.45501L4.41921 8.72756L4.41917 8.7275L4.8384 8.45501ZM2.5927 5L2.17347 5.27249L1.67137 4.5H2.5927V5ZM4.58081 8.9761L4.41921 8.72756L5.25759 8.18247L5.41919 8.43101L4.58081 8.9761ZM4.5 9V8.70356H5.5V9H4.5ZM4.5 17.8333V9H5.5V17.8333H4.5ZM6.6667 20C5.47006 20 4.5 19.0299 4.5 17.8333H5.5C5.5 18.4777 6.02234 19 6.6667 19V20ZM20.3333 20H6.6667V19H20.3333V20ZM22.5 17.8333C22.5 19.0299 21.53 20 20.3333 20V19C20.9777 19 21.5 18.4777 21.5 17.8333H22.5ZM22.5 6.66667V17.8333H21.5V6.66667H22.5ZM20.3333 4.5C21.53 4.5 22.5 5.47005 22.5 6.66667H21.5C21.5 6.02233 20.9777 5.5 20.3333 5.5V4.5ZM2.5927 4.5H20.3333V5.5H2.5927V4.5ZM4.41917 8.7275L2.17347 5.27249L3.01192 4.72751L5.25762 8.18252L4.41917 8.7275ZM9.5 13.5C8.94772 13.5 8.5 13.9477 8.5 14.5H7.5C7.5 13.3954 8.39543 12.5 9.5 12.5V13.5ZM14.5 13.5H9.5V12.5H14.5V13.5ZM15.5 14.5C15.5 13.9477 15.0523 13.5 14.5 13.5V12.5C15.6046 12.5 16.5 13.3954 16.5 14.5H15.5ZM14.5 15.5C15.0523 15.5 15.5 15.0523 15.5 14.5H16.5C16.5 15.6046 15.6046 16.5 14.5 16.5V15.5ZM9.5 15.5H14.5V16.5H9.5V15.5ZM8.5 14.5C8.5 15.0523 8.94772 15.5 9.5 15.5V16.5C8.39543 16.5 7.5 15.6046 7.5 14.5H8.5ZM7.5 9.5C7.5 8.39543 8.39543 7.5 9.5 7.5V8.5C8.94772 8.5 8.5 8.94772 8.5 9.5H7.5ZM9.5 11.5C8.39543 11.5 7.5 10.6046 7.5 9.5H8.5C8.5 10.0523 8.94772 10.5 9.5 10.5V11.5ZM16.5 11.5H9.5V10.5H16.5V11.5ZM18.5 9.5C18.5 10.6046 17.6046 11.5 16.5 11.5V10.5C17.0523 10.5 17.5 10.0523 17.5 9.5H18.5ZM16.5 7.5C17.6046 7.5 18.5 8.39543 18.5 9.5H17.5C17.5 8.94772 17.0523 8.5 16.5 8.5V7.5ZM9.5 7.5H16.5V8.5H9.5V7.5Z" fill="currentColor"></path></svg>

        </div>
        <div style={menuItemStyle}>
          {/* <img src="https://via.placeholder.com/30" alt="Nouvelle discussion" style={menuIconStyle} /> */}
          <i class="fa-solid fa-plus"></i>
          {/* <i class="fa-solid fa-clock-rotate-left"></i> */}
        </div>
        <div style={menuItemStyle}>
          {/* <img src="https://via.placeholder.com/30" alt="Menu" style={menuIconStyle} /> */}
          <i class="fa-solid fa-clock-rotate-left"></i>
        </div>
        <div style={menuBottomStyle}>
          {/* <img src="https://via.placeholder.com/30" alt="Paramètres" style={menuIconStyle} /> */}
          <i class="fa-solid fa-circle-user"></i>
        </div>
      </div>

      {/* Sidebar (liste des discussions) */}
      <div style={sidebarStyle} className=''>
        <div className='mt-2 text-xl'>
          <h2 >interface utilisateur</h2>
        </div>
        <div>
          <input type="text" placeholder="Rechercher" style={searchBarStyle} />
        </div>
        <div style={tabsStyle}>
          <button style={activeTabStyle}>Tout</button>
          <button style={tabStyle}>Non lus</button>
          <button style={tabStyle}>Favoris</button>
          <button style={tabStyle}>Groupes</button>
        </div>

        <div style={chatListStyle}>
          {/* <div style={chatItemStyle}>
            <img src="https://via.placeholder.com/40" alt="Moko" style={chatImageStyle} />
            <div style={chatDetailsStyle}>
              <div style={chatNameStyle}>Moko</div>
              <div style={chatMessageStyle}>Ouais 😄💰</div>
            </div>
            <div style={chatTimeStyle}>19:39</div>
            <div style={chatUnreadStyle}>1</div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        <div style={whatsappBannerStyle}>
          <img src="https://via.placeholder.com/300x200" alt="WhatsApp Call" style={bannerImageStyle} />
          <div>
            <h1 style={bannerTextStyle}>Télécharger WhatsApp pour Windows</h1>
            <p style={bannerParagraphStyle}>
              Passez des appels, partagez votre écran et profitez d’une expérience plus rapide en téléchargeant l’application Windows.
            </p>
            <button style={downloadButtonStyle}>Télécharger</button>
            <p style={securityNoteStyle}>Vos messages personnels sont chiffrés de bout en bout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;