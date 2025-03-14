const Styles = ()=>{
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
    
}
export default Styles;