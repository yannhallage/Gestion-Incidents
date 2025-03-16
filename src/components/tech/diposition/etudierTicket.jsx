import { useEffect, useState, useRef } from 'react'
import { extendedChatss } from '../../../api/apiDataFirste'
// import { extendedChats } from '../../../api/apiDataFirste'

import ButtonClassic from '../../buttonClassic'

const EtudierTicker = ({ donnee }) => {

    const [modifierTicket, setModifierTicket] = useState(false)
    const [message , setMessage] = useState(null)
    const [conclus, setConclus] = useState(false)
    const [chatss, setChatss] = useState(extendedChatss); // Gérer les données comme un état


    const updateTicket = (newPriorite) => {
        const updatedChatss = [...chatss];
        updatedChatss[donnee] = { ...updatedChatss[donnee], Priorité: newPriorite };
        setChatss(updatedChatss); // Mettre à jour l'état pour déclencher un re-rendu
    };

    const updateTicketConclusion = (newConclusion) => {
        console.log(newConclusion)
        setConclus(!conclus)
    };

    const infoMessage = (message)=>{
        setMessage(message)
    }
    const closeModifierTiket = () => setModifierTicket(!modifierTicket)
    return (
        <>
            <div className="border border-[#ccc] p-5 text-black text-[14px]">
                <div className="">
                    <div className="">
                        <span className="text-2xl">
                            {/* DESCRIPTION DE LA PANNE SIGNALER */}
                            {/* <svg viewBox="0 0 212 212" height="41" width="41" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212"><title>default-user</title><path fill="#DFE5E7" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z" class="xl21vc0"></path><g><path fill="#FFFFFF" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z" class="x1d6ck0k"></path><path fill="#FFFFFF" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z" class="x1d6ck0k"></path></g></svg> */}
                            <span>
                                Ticket : {chatss[donnee].id}
                            </span>
                        </span>
                        <br /> <br />
                        <span className="font-bold">
                            {/* Reference ticket : {extendedChats[donnee - 1].name} */}
                            <div className='flex space-x-2'>
                                <span>
                                    <svg viewBox="0 0 212 212" height="41" width="41" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212"><title>default-user</title><path fill="#DFE5E7" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z" class="xl21vc0"></path><g><path fill="#FFFFFF" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z" class="x1d6ck0k"></path><path fill="#FFFFFF" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z" class="x1d6ck0k"></path></g></svg>
                                </span>
                                <span className=''>
                                    Reference ticket : {chatss[donnee].name} <br />
                                    <p className='text-[12px] text-[#ccc]'>envoyé le 15/03/2025</p>
                                    {/* direction :  */}
                                </span>

                            </div>
                        </span>
                    </div>
                    <div className="mt-11 text-xl">
                        {/* <span>
                            Certains utilisateurs d'Actions constatent  que leurs tâches de workflow ne démarrent pas.
                        </span> */}
                    </div>
                    {/* description de l'utilisateur */}
                    <div className="mt-5 font-sans">
                        <span>
                            Une forme de données inattendue a provoqué des plantages dans certains de nos pods. Nous avons atténué l'incident agesattendue et amélioré la résilience globale de notre service face à de tels incidents.
                        </span>
                    </div>
                    {/* mot de l'equipe */}
                    <div className="mt-11  border p-5 rounded-md border-[#ccc] bg-[#F7F7F7]">
                        <span className=''>
                            {/* description du ticket attribuer au technicien qui va suivre 
                                intervenir sur la panne 
                             */}
                            {chatss[donnee].message}
                        </span>
                    </div>
                    {/*  */}
                    <div className=' grid grid-cols-2'>
                        <div className="mt-5 text-[15px] space-y-3 ">
                            <div className='font-sans'>
                                date de creation ticket : {chatss[donnee].creationticket} <br />
                                Statut : {chatss[donnee].statut} <br />
                                Priorité : {chatss[donnee].Priorité} <br />
                                {/* type : {Chatss[donnee].message} <br /> */}
                                {/* panne resolu :  15/03/2024 <br /> */}
                                utilisateur : IT0029 <br />
                            </div>
                            <div className='space-x-2 text-[14px] '>
                                {/*appliquer une solutions possible  */}

                                <ButtonClassic
                                    tile={'modifer ticket'}
                                    color={'border  text-[#555] bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                                    event={closeModifierTiket}
                                />
                                <ButtonClassic
                                    tile={"contacter l'utilisateur"}
                                    color={'border text-[#555]  bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                                />
                                <ButtonClassic
                                    tile={'conclus la panne'}
                                    color={'border text-[#555]  bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                                    event={() => setConclus(!conclus)}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            {modifierTicket && <SelectComponent donnees={donnee} updateTicket={updateTicket} fonction={closeModifierTiket} />}
                            {conclus &&  <SecondSelect donnees={donnee} updateConclusion={updateTicketConclusion} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



const SelectComponent = ({ donnees, updateTicket, fonction }) => {
    const [selectedPriorite, setSelectedPriorite] = useState('');

    const handleChange = (e) => {
        setSelectedPriorite(e.target.value); // Mettre à jour la priorité sélectionnée
    };

    const handleSave = () => {
        if (selectedPriorite) {
            updateTicket(selectedPriorite); // Mettre à jour les données via la fonction passée
            fonction()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            Swal.fire({
                icon: "error",
                title: "champ vide",
                text: "veuillez remplir le champ",
                footer: '<a href="#">avez vous un probleme ?</a>'
              });
        }
    };

    return (
        <div className="space-y-2">
            <select
                id="priorite"
                className="w-full p-2 border border-gray-400 text-black text-[14px]"
                value={selectedPriorite}
                onChange={handleChange}
            >
                <option value="" disabled>Priorité</option>
                <option value="faible">Faible</option>
                <option value="moyenne">Moyenne</option>
                <option value="élevée">Élevée</option>
                <option value="critique">Critique</option>
            </select>
            <select
                id="categorie"
                className="w-full p-2 border border-gray-400 text-black text-[14px]"
                defaultValue=""
            >
                <option value="" disabled>
                    Catégorie
                </option>
                <option>Matériel</option>
                <option>Logiciel</option>
                <option>Réseau</option>
            </select>
            {/* <p>Priorité sélectionnée : {selectedPriorite}</p> */}
            <div className="space-x-2">
                <ButtonClassic
                    color={'border text-[#555] float-end bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                    tile={'Enregistrer'}
                    event={handleSave}
                />
                <ButtonClassic
                    color={'border text-[#555] float-end bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                    tile={'Annuler'}
                    event={() => { fonction() }}
                />
            </div>
        </div>
    );
};

const SecondSelect = ({ donnees, updateConclusion }) => {
    const [description, setDescription] = useState('');

    const handleConclude = () => {
        if (description) {
            updateConclusion(description); // Mettre à jour la conclusion dans chatss
        }else{
            Swal.fire({
                icon: "error",
                title: "champ vide",
                text: "veuillez remplir le champ",
                footer: '<a href="#">avez vous un probleme ?</a>'
              });
        }
    };

    return (
        <div className="space-y-2">
            <textarea
                id="description"
                className="w-full p-2 border border-gray-400 text-black h-32 resize-y"
                placeholder="Décrivez la conclusion de la panne..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            {/* <p>Description saisie : {description}</p> */}
            <div className="space-x-2">
                <ButtonClassic
                    color={'border text-[#555] float-end bg-[#EFF3EA] hover:bg-[#fff] p-2 rounded-full cursor-pointer border-[#ccc] text-[14px]'}
                    tile={'Conclure la panne'}
                    event={handleConclude}
                />
            </div>
        </div>
    );
};


export default EtudierTicker;