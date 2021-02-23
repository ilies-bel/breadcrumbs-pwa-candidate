import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {useHistory, Link} from "react-router-dom";
import {useRegistration} from "utils/axios";
import SignInPage from "components/Authentification/SignIn";

export const FormEmailPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);
    const [formData, setData] = useState({});
    
    return (
        <div>
            <PageDescription>First, tell us who you are</PageDescription>

            <input type="text" placeholder="your Email" aria-label="firstname"
                   onChange={(event) => console.log(event.target.value) } />
            <input type="password" placeholder="choose your password" aria-label="password"
                    onChange={(event) => console.log(event.target.value) }/>
            <input type="password" placeholder="confirm your password" aria-label="confirm-password"/>
            <a href="/signin"  >Test ajsi</a>
            <FlashyButton onClick={() => useRegistration()} > Next <ArrowRightAltOutlined/> </FlashyButton>
        </div>
    )
}