import InfoAlert from "./infoAlert";
const MessageComponent = () => {
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
            <div className="">
                <div className='mt-2 text-xl text-black font-bold'>
                    <h2 >Discussions</h2>
                </div>
                <p className="text-gray-400 text-[14px]">
                    Le chiffrement de bout en bout permet de garder vos messages personnels entre vous et les personnes avec qui vous choisissez de communiquer. Même WhatsApp n’y a pas accès. Cela inclut   :
                </p>
                <div className="mt-5">
                    <hr />
                </div>
                <div className='flex flex-col  flex-1 flex flex-col items-center justify-center'>
                    <InfoAlert
                    sms="Aucune discussion"
                    />
                </div>
            </div>
        </>
    )
}

export default MessageComponent;