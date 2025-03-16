import ButtonClassic from "../buttonClassic";

const SelectComponent = () => {
    return (
        <>
            <div className='space-y-5' >
                <select
                    id="type"
                    className="w-full p-2 border border-gray-400 text-black text-[14px]"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Type
                    </option>
                    <option>Bug</option>
                    <option>Panne Matériel</option>
                    <option>Erreur Logiciel</option>
                    <option>Demande Assistance</option>
                </select>
                <select
                    id="priorite"
                    className="w-full p-2 border border-gray-400 text-black text-[14px]"
                    defaultValue=""
                >
                    <option value="" disabled>
                        Priorité
                    </option>
                    <option>Faible</option>
                    <option>Moyenne</option>
                    <option>Élevée</option>
                    <option>Critique</option>
                </select>

                <div className="">
                    <ButtonClassic
                        color={'border text-[#555] float-end  bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                        tile={'Enregistrer'}
                    />
                    <ButtonClassic
                        color={'border text-[#555] float-end  bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                        tile={'Annuler'}
                    />
                </div>
            </div>
        </>
    )
}

export default SelectComponent;