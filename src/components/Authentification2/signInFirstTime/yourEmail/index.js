import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {useHistory, Link} from "react-router-dom";
import * as ROUTES from 'constants/routes';
import {loginRequest, registrationRequest} from "utils/axiosRequest";
import {useAuthContext} from "components/Authentification2/context";


export const FormEmailPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);

    const [formData, setData] = useState({});
    const [error, setError] = useState(false)
    const context = useAuthContext();
    let storage = window.localStorage;

    const changeEmailEvent = (input) => {
        setEmail(input)
    }
    const changePassEvent = (input) => {
        setPass(input)
    }

    const handleChange = () => {
        setData({
            user: {
                email: email,
                password: password,
                first_name: "Juki",
            }
        })
    }
    
    return (
        <div>
            <PageDescription>Now, sign up</PageDescription>

                <input type="text" placeholder="your Email" aria-label="firstname"
                       onChange={(event) => {
                           changeEmailEvent(event.target.value);
                           handleChange()
                       } } />
                <input type="password" placeholder="choose your password" aria-label="password"
                       onChange={(event) => {
                           changePassEvent(event.target.value);
                           handleChange()
                       } }/>
                <input type="password" placeholder="confirm your password" aria-label="confirm-password"/>

                <input type="checkbox" /> <label>I agree to receive mail notification (checkbox inutilisable) </label>
        </div>
    )
}