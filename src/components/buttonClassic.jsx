
const ButtonClassic = ({ tile, color, event }) => {

    return (
        <>
            <button
                className={color}
                onClick={event}>
                {tile}
            </button>
        </>
    )
}

export default ButtonClassic;