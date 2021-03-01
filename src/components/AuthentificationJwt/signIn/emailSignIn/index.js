import React, {Component, useState} from "react";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {FlashyButton} from 'littleComponents';
import {Link} from 'react-router-dom'
import * as ROUTES from "constants/routes";
import {registrationRequest} from "utils/axiosRequest";

const EmailForm = () => {
    const [firstName, inputFirstName] = useState('');
    const [email, inputEmail] = useState(null);
    const [password, inputPass] = useState(null);
    const [passConfirm, inputConfirm] = useState(null);
    const [formData, setData] = useState({});

    const [msgError, setMsg] = useState("");

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
        if (matchPassword()) {
            alert("make an request to register this user : " + formData.user?.first_name + ' ' + formData.user?.email)
        } else {
            setMsg("Wrong password")
        }
    }

    return (
        <>
            <pre><Link to="/login/email"> I already have an account. Go login &rarr;</Link></pre>
            <br/><br/><br/>

            <form onSubmit={(e) => onSubmit(e)}>

                <input type="text" placeholder="First name" aria-label="firstname"
                       onChange={event => inputFirstName(event.target.value)}/>
                <br/>


                <input type="text" placeholder="Last name" aria-label="lastname"/>
                <br/><br/>
                <input type="email" placeholder="Email" aria-label="firstname"
                       onChange={(event) => {
                           inputEmail(event.target.value);
                           handleChange()
                       }}/>
                <br/><br/>
                <input type="password" placeholder="choose your password" aria-label="password"
                       onChange={(event) => {
                           inputPass(event.target.value);
                           handleChange()
                       }}/>
                <br/><br/>
                <input type="password"
                       placeholder="confirm your password"
                       aria-label="confirm-password"
                       onChange={(event) => {
                           inputConfirm(event.target.value);
                       }}
                />
                <br/><br/>

                <input type="checkbox"/> <label>I agree to receive mail notification</label>
                <br/><br/>
                <FlashyButton type="submit"> Finish to sign in <ArrowRightAltOutlined/> </FlashyButton>
            </form>
            <br/>
            <div>{msgError}</div>
        </>
    )
}

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: null,
};


class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {first_name, last_name, email, password, error} = this.state;

        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('query');

        const token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiY2FuZGlkYXRlIiwiYnVzaW5lc3NfdGl0bGVfaWQiOiIyIiwiaW50ZXJ2aWV3X3Byb2Nlc3NfaWQiOiIxIiwiZXhwIjoxNjE0NjgyNjg3fQ.Vvi4mJA7B9Ol_EEVjGHCl83s5TyVVAHH4Lfqdss8ES4"
        //this.props.match.params.token
        registrationRequest(first_name, last_name, email, password, token )
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.LANDING);
            })
            .catch((error) => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {first_name, last_name, email, password, error} = this.state;

        const isInvalid = password === '' || email === '' || first_name === '';

        return (
            <form onSubmit={this.onSubmit}>

                <input
                    name="first_name"
                    value={first_name}
                    onChange={this.onChange}
                    type="text"
                    aria-label="firstname"
                    autoComplete="given-name"
                    placeholder="First name"

                />
                <input
                    name="last_name"
                    value={last_name}
                    onChange={this.onChange}
                    type="text"
                    aria-label="lastname"
                    autoComplete="family-name"
                    placeholder="Last name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    autoComplete="email"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Password"
                />
                <input
                    name="password confirmation"
                    onChange={this.onChange}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                />
                <button disabled={isInvalid} type="submit">
                    Create account
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}


export default SignInForm;