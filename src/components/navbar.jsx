
import InfoAlert from './infoAlert';
import '../styles/personnal.css';
import Sidebar from './diposition/sidebar';
import MainContent from './diposition/mainContent';
import MenuLatera from './diposition/menuLateral';

const App = () => {
 

  const containerStyle = {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#111b21',
    color: '#e9edec',
    fontFamily: 'Arial, sans-serif',
};

  return (
    <div style={containerStyle}>
      {/* Menu latéral à gauche */}

      <MenuLatera 
      />

      {/* Sidebar (liste des discussions) */}

      <Sidebar 
      />

      {/* Main Content */}

      <MainContent 
      />
      
    </div>
  );
};

export default App;