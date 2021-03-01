import React, {Component, useState} from "react";
import * as ROUTES from "constants/routes";
import {register} from "utils/auth.service";

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: null,
    token: null

};


class SignInForm extends Component {

    constructor(props) {
        super(props);
        INITIAL_STATE.token = window.localStorage.getItem("invite_token")
        this.state = {...INITIAL_STATE};
        console.log(this.state)

    }


    onSubmit = (event) => {
        const {first_name, last_name, email, password, error, token} = this.state;

       // const token = this.props.location.token // Récupèration du token depuis le link précédent


        register(first_name, last_name, email, password, token )
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.SIGN_UP);
            })
            .catch((error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({resMessage});
            });

        event.preventDefault();
    };



    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});

    };

    render() {
        const {first_name, last_name, email, password, error} = this.state;

        const isInvalid = password === '' || password.length < 6  || email === '' || first_name === '';
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

                {error && <p>{error}</p>}

            </form>
        );
    }
}


export default SignInForm;