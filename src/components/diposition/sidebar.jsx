import InfoAlert from "../infoAlert";

const Sidebar = () => {

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
        backgroundColor: '#fff',
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
            <div className="">
                <div className='mt-2 text-2xl text-black font-bold'>
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

                <div className='flex flex-col  flex-1 flex flex-col items-center justify-center'>
                    <InfoAlert
                    sms="Vous verrez les Tikets que vous avez creer ici."
                    />
                </div>
            </div>
        </>
    )
}

export default Sidebar;