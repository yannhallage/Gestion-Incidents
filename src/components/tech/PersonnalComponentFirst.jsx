import InfoAlert from "./infoAlert";

const PersonalComponentFirst = () => {

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
    
 

    return (
        <>
            {/* Sidebar (liste des discussions) */}
            <div style={sidebarStyle} className=''>
                <div className='mt-2 text-xl text-black font-bold'>
                    <h2 >interface utilisateur</h2>
                </div>
                <div className='mt-7'>
                    <input type="text" placeholder="Rechercher" className='bg-gray-700' style={searchBarStyle} />
                </div>
                <div className=''>
                    <div style={tabsStyle}>
                        <button style={activeTabStyle}>Tout</button>
                        <button style={tabStyle}>Non lus</button>
                        <button style={tabStyle}>Favoris</button>
                        <button style={tabStyle}>Groupes</button>
                    </div>
                </div>
                <InfoAlert />
            </div>

        </>
    )
}


const PersonnalTicket = ()=>{
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

    return(
        <>
            <div style={chatListStyle}>
                <div style={chatItemStyle}>
                    <img src="https://via.placeholder.com/40" alt="Moko" style={chatImageStyle} />
                    <div style={chatDetailsStyle}>
                        <div style={chatNameStyle}>Moko</div>
                        <div style={chatMessageStyle}>Ouais 😄💰</div>
                    </div>
                    <div style={chatTimeStyle}>19:39</div>
                    <div style={chatUnreadStyle}>1</div>
                </div>
            </div>
        </>
    )
}


export default PersonalComponentFirst;