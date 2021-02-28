import React, {useState} from "react";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import { FlashyButton } from 'littleComponents';
import { Link } from 'react-router-dom'

const EmailForm = () => {
    const [ firstName, inputFirstName ] = useState('');
    const [email, inputEmail] = useState(null);
    const [password, inputPass] = useState(null);
    const [ passConfirm, inputConfirm ] = useState(null);
    const [formData, setData] = useState({});

    const [ msgError, setMsg ] = useState("");

    function matchPassword() {
        return password === passConfirm;
    }

    function handleChange() {
        setData({
            user: {
                email: email,
                password: password,
                first_name: firstName,
            }
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        if(matchPassword()) {
            alert("make an request to register this user : " + formData.user?.first_name + ' ' + formData.user?.email)
        }
        else {
            setMsg("Wrong password")
        }
    }

    return (
        <>
            <pre><Link to="/login/email"> I already have an account. Go login &rarr;</Link></pre>
            <br/><br/><br/>

            <form onSubmit={ (e) => onSubmit(e) } >
                <input type="text" placeholder="First name" aria-label="firstname" onChange={ event => inputFirstName(event.target.value)}/>
                <br/>
                <input type="text" placeholder="Last name" aria-label="lastname"/>
                <br/><br/>
                <input type="email" placeholder="Email" aria-label="firstname"
                       onChange={(event) => {
                           inputEmail(event.target.value);
                           handleChange()
                       } } />
                <br/><br/>
                <input type="password" placeholder="choose your password" aria-label="password"
                       onChange={(event) => {
                           inputPass(event.target.value);
                           handleChange()
                       } }/>
                <br/><br/>
                <input type="password"
                       placeholder="confirm your password"
                       aria-label="confirm-password"
                       onChange={(event) => { inputConfirm(event.target.value); } }
                />
                <br/><br/>

                <input type="checkbox" /> <label>I agree to receive mail notification</label>
                <br/><br/>
                <FlashyButton type="submit" > Finish to sign in <ArrowRightAltOutlined/> </FlashyButton>
            </form>
            <br/>
            <div>{msgError}</div>
        </>
    )
}

export default EmailForm;