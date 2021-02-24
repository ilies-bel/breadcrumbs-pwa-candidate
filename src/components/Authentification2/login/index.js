import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {useHistory, Link} from "react-router-dom";
import * as ROUTES from 'constants/routes';
import {loginRequest, registrationRequest} from "utils/axiosRequest6";
import {useAuthContext} from "components/Authentification2/context";


const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);

    const [formData, setData] = useState({});
    const [error, setError] = useState(false)
    const context = useAuthContext();
    let storage = window.localStorage;

    return (
        <>
        </>
    )
}
export default LoginPage;