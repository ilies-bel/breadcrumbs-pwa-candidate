import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {useHistory, Link} from "react-router-dom";

import {loginRequest, registrationRequest} from "utils/axiosRequest";


export const FormEmailPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);
    const [acceptMailNotif, setAccept] = useState(false)
    const [formData, setData] = useState({});
    const [error, setError] = useState(false)
    let storage = window.localStorage;

    const changeEmailEvent = (input) => {
        setEmail(input)
    }
    const changePassEvent = (input) => {
        setPass(input)
    }
    const changeAcceptEvent = (input) => {
        setAccept(input)
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
    const sendRegistration = () => {
        registrationRequest(formData).then(res => {
            console.log(res.data);
            history.push("/tips", res.data);
        })
    }
    const sendRegistration2 = async() => {
        await loginRequest("candidate@breadcrumbs.com", "password").catch(e => console.error(e));
    }
    
    return (
        <div>
            <PageDescription>First, tell us who you are</PageDescription>

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

                <input type="checkbox" onChange={(event) => {
                    changeAcceptEvent(event.target.checked); handleChange();
                }} /> <label>I agree to receive mail notification </label>
                <FlashyButton onClick={() => sendRegistration2() } > Finish to sign in <ArrowRightAltOutlined/> </FlashyButton>

            { error && <strong>Error in form</strong>}
        </div>
    )
}