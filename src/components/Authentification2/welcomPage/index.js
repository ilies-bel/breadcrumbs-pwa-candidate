import React from "react";
import { useHistory } from "react-router-dom";
import {FlashyButton, PageDescription, SignInGoogleBase, SignInLinkedinBase } from "littleComponents";

const WelcomePage = (props) => {
    const history = useHistory();
    return(
        <>
            <h1>Welcome</h1>
            <PageDescription>Sign in and get started.</PageDescription>
            <FlashyButton onClick={() => history.push("/auth/signin/name")} > Sign in with your email</FlashyButton> <br/> <br/>
            <SignInLinkedinBase /><br/>
            <SignInGoogleBase /><br/>
        </>
    )
}

export default WelcomePage;