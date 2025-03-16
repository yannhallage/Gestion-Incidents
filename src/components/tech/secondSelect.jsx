
const SecondSelect = () => {
    return (
        <>
            <div className=''>

                <div className='' style={{ visibility: 'hidden' }}>
                    <textarea
                        id="description"
                        className="w-full p-2 border border-gray-400 border text-black h-32 resize-y"
                        placeholder="Décrivez le problème..."
                    />
                    {/* <ButtonClassic
                        color={'border text-[#555] float-end  bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                        tile={'conclus la panne'}
                    /> */}
                </div>
            </div>
        </>
    )
}

export default SecondSelect;