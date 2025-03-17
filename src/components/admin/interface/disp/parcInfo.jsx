import DashboardStats from "./DashboardStats ";
import OptionComponent from "../optionComponent";
import ButtonClassic from "../../../buttonClassic";
import { AdminContext } from "../../../../context/FirsContext";
import { useContext } from "react";

const ParcInfo = () => {
    const { setOptionSelect } = useContext(AdminContext);
    return (
        <>
            <div className="p-3 ">
                <span className="text-xl font-bold">Consulter les tickets</span>
                <div className="mt-5 ">
                    <ButtonClassic
                        tile="Retour"
                        color="bg-gray-700 text-white cursor-pointer px-3 py-1 text-sm rounded hover:bg-gray-800 transition-color"
                        event={() => setOptionSelect(<OptionComponent />)}
                    />
                </div>

                <DashboardStats />
            </div>
        </>
    )
}
export default ParcInfo;