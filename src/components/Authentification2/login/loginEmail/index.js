import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {useHistory, Link} from "react-router-dom";
import * as ROUTES from 'constants/routes';
import {loginRequest, registrationRequest} from "utils/axiosRequest6";
import {useAuthContext} from "components/Authentification2/context";
import PaperDiv from "components/littleComponents/PaperDiv";

const LoginEmailPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);

    const [formData, setData] = useState({});
    const [error, setError] = useState(false)
    const context = useAuthContext();
    let storage = window.localStorage;

    const sendLogin = async() => {
        await loginRequest(email, password).catch(e => console.error(e))
            .then(res => {
                res && storage.setItem("token", res.token);
                res && storage.setItem("user", res.user.first_name);
                res && context.setData(res.token, res.user.first_name)
            } );
    }

    return (
        <div>
            <PageDescription>Sign in</PageDescription>

            <input type="text" placeholder="your Email" aria-label="firstname"
                   onChange={(event) => {
                       setEmail(event.target.value);
                   } } /><br/>
            <input type="password" placeholder="choose your password" aria-label="password"
                   onChange={(event) => {
                       setPass(event.target.value);
                    } }/><br/>
            <FlashyButton onClick={ async() => await sendLogin() }  > LOGIN  </FlashyButton>
        </div>
    )
}
export default LoginEmailPage;