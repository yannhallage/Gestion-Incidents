import { useState } from "react";
import { Navigate } from "react-router-dom";
import PersonalHome from "../pages/personalHome";
import LoginPage from "../pages/loginPage";

const VerifyKey = ({ valeur }) => {

    const [key, setKey] = useState(valeur);

    return (
        <>
            {
                key ? <Navigate to="/personalHome" />: console.log(false)
            }
        </>
    )
}

export default VerifyKey;