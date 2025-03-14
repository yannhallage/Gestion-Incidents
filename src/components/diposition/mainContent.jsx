

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
    };
    return (
        <>
            <div style={mainContentStyle} >
                <div style={whatsappBannerStyle}>
                    {/* <img src="https://via.placeholder.com/300x200" alt="WhatsApp Call" style={bannerImageStyle} /> */}
                    <div>
                        {/* <h1 style={bannerTextStyle}>Télécharger WhatsApp pour Windows</h1> */}
                        <p style={bannerParagraphStyle}>
                            Passez des appels, partagez votre écran et profitez d’une expérience plus rapide en téléchargeant l’application Windows.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContent;