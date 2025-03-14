
import InfoAlert from "./infoAlert";
const Notification = () => {
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
                    <h2 >Notifications</h2>
                </div>
                <p className="text-gray-400 text-[14px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sint quia, neque debitis fugiat dolores id eligendi perspiciatis voluptatibus, deserunt ullam excepturi, vitae at reiciendis quibusdam cupiditate adipisci nostrum aliquid?
                </p>
                <div className="mt-5">
                    <hr />
                </div>
                <div className='flex flex-col  flex-1 flex flex-col items-center justify-center'>
                    <InfoAlert
                    sms={"Aucune Notification"}
                    />
                </div>
            </div>
        </>
    )
}

export default Notification;