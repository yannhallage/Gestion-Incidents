// import FlowerIllustration from '../../assets/undraw_holding-flowers_jc03.svg';


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
                    <span className='text-3xl'>
                    <i className="fa-solid fa-headset"></i>
                    </span>
                    <div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainContent;