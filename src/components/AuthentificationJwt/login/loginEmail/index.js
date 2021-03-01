import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {useHistory, Link} from "react-router-dom";
import * as ROUTES from 'constants/routes';
import {loginRequest, registrationRequest} from "utils/axiosRequest";
import {useAuthContext} from "components/AuthentificationJwt/context";
import PaperDiv from "components/littleComponents/PaperDiv";

const LoginEmailPage = () => {
    const history = useHistory();

    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);

    const [formData, setData] = useState({});
    const [error, setError] = useState(false)
    const context = useAuthContext();
    let storage = window.localStorage;
    console.log(storage); console.log("eiozpdekozpdekoz");
    console.log("ekekelelelel");

    async function sendLogin(e) {
        e.preventDefault();
        await loginRequest(email, password).catch(e => setError(e))
            .then(res => {
                if(!res.token) {
                    //Si la réponse ne contient pas de token, on considère que l'authentification à échoué
                    setError(res?.errors);
                }
                else {
                    res && storage.setItem("token", res.token);
                    res && storage.setItem("user", res.user.first_name);
                    res && context.setData(res.token, res.user.first_name + ' ' + res.user?.last_name)
                    res && history.push("/auth/confirm");
                }
            } );
    }

    return (
        <div>
            <Link to="/auth/welcome"> You don't have an account. Let's Create one. &rarr;</Link>
            <PageDescription>You must be connected to use this application</PageDescription>

            <form onSubmit={ (e) => sendLogin(e) } >
            <input autoFocus={true} autoComplete="email" type="email"placeholder="your Email" aria-label="firstname"
                   onChange={(event) => {
                       setEmail(event.target.value);
                   } } /><br/>
            <input type="password" placeholder="choose your password" aria-label="password"
                   onChange={(event) => {
                       setPass(event.target.value);
                    } }/><br/>
            <FlashyButton type='submit' > LOGIN  </FlashyButton>
            </form>

            { error && <div>Connection failed </div> }
        </div>
    )
}
export default LoginEmailPage;