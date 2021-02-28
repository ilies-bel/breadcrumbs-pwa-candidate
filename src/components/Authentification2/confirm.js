import React, {useEffect} from "react";
import { PageDescription } from "littleComponents";
import {useAuthContext} from "components/Authentification2/context";
import {useHistory} from "react-router-dom";

const ConfirmLoginPage = () => {
    const history = useHistory()
    useEffect(() => { return() => { history.replace('/')} }, [])
    const authContext = useAuthContext();
    return (
        <div>
            <PageDescription>Successfully connected as <strong>{authContext.userName}</strong> . You can now start a Hiring Process.</PageDescription>
        </div>
    )
}
export default ConfirmLoginPage;