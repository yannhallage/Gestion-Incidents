import {extendedChats} from '../../../api/apiDataFirste'

const DialogComponent = ({ donnee }) => {

    if (extendedChats){
        console.log('api disponible ')
    }
    if (donnee) {
        console.log("donnee existe " + donnee)
    }
    return (
        <>
            <div className="border border-gray-300 p-6  bg-white shadow-sm text-gray-800 text-sm">
                <div className="">
                    <div className="">
                        <span className="text-2xl">
                            DESCRIPTION DE LA PANNE SIGNALER
                        </span>
                        <br /> <br />
                        <span className="text-xl font-bold">
                            Reference ticket : {extendedChats[donnee-1].name}
                        </span>
                    </div>
                    <div className="mt-11 text-xl">
                        <span>
                            Certains utilisateurs d'Actions constatent  que leurs tâches de workflow ne démarrent pas.
                        </span>
                    </div>
                    {/* description de l'utilisateur */}
                    <div className="mt-11">
                        <span>
                            Une forme de données inattendue a provoqué des plantages dans certains de nos pods. Nous avons atténué l'incident agesattendue et amélioré la résilience globale de notre service face à de tels incidents.
                        </span>
                    </div>
                    {/* mot de l'equipe */}
                    <div className="mt-11 font-bold">
                        <span>
                            Bonjour, <br />vous recevez se message car vous avez signaler une panne recemment a votre bureau <br />
                            suite a votre pleinte nos equipes se sont charger a resoudre votre probleme <br />
                            ce message vous informe que la panne detecter recemment a été resolu ,vous pouvez continuer vos service tout en gardant en tete que l'Equipe IT se charge de veiller a votre attente 
                            <br /><br />
                            Merci , Equipe IT
                        </span>
                    </div>
                    {/*  */}
                    <div className="mt-5 text-[15px]">
                        <span>
                           date de creation ticket : 15/03/2024 <br />
                           Statut : Resolu <br />
                           panne resolu :  15/03/2024 <br />
                           Assistance : IT0029 <br />
                           Demandeur : Juliette kouassi <br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DialogComponent;