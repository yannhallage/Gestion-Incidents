import FlowerIllustration from '../../assets/undraw_holding-flowers_jc03.svg';


const MainContent = () => {
    const bannerParagraphStyle = {
        color: '#8696a0',
        marginBottom: '20px',
    };

    const whatsappBannerStyle = {
        textAlign: 'center',
        maxWidth: '500px',
    };

    const mainContentStyle = {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111b21',
        width: '100%',
        // F1F6F9
    };
    return (
        <>
            <div style={mainContentStyle} >
                <div style={whatsappBannerStyle}>
                    {/* <img src="https://via.placeholder.com/300x200" alt="WhatsApp Call" style={bannerImageStyle} /> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg> */}
                    <span className='text-3xl'>
                    <i className="fa-solid fa-headset"></i>
                    </span>
                    <div>
                        {/* <h1 style={bannerTextStyle}>Télécharger WhatsApp pour Windows</h1>
                        <p style={bannerParagraphStyle}>
                            Passez des appels, partagez votre écran et profitez d’une expérience plus rapide en téléchargeant l’application Windows.
                        </p> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainContent;