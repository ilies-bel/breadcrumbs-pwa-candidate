import React, {useState} from "react";
import {ArrowRightAltOutlined} from "@material-ui/icons";
import {FlashyButton, PageDescription, SignInGoogleBase, SignInLinkedinBase} from 'littleComponents';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import emailSignInPage from "components/AuthentificationJwt/signIn/emailSignIn";

const OnBoardingPage = () => {

    return (
        <>
            <h1>Create your account</h1>
            <PageDescription>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim.</PageDescription>

            <Link to={{
                pathname: '/auth/signin/email',
                token: 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiY2FuZGlkYXRlIiwiYnVzaW5lc3NfdGl0bGVfaWQiOiIyIiwiaW50ZXJ2aWV3X3Byb2Nlc3NfaWQiOiIxIiwiZXhwIjoxNjE0NjgyNjg3fQ.Vvi4mJA7B9Ol_EEVjGHCl83s5TyVVAHH4Lfqdss8ES4'
            }}>
                <FlashyButton> Create account with email</FlashyButton>
            </Link>

            <br/> <br/>

            <SignInLinkedinBase/><br/>
            <SignInGoogleBase/><br/>

        </>
    )
}

export default OnBoardingPage;