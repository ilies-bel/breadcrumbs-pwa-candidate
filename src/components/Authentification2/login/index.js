import React, {useState} from "react";
import {FlashyButton, PageDescription} from "Navigation";
import {useHistory, Link} from "react-router-dom";
import {PaperDiv, SignInGoogleBase, SignInLinkedinBase} from "littleComponents";


const LoginPage = () => {
    const history = useHistory();

    return (
        <div>
            <Link to="/auth/welcome"> You don't have an account ? Let's Create one. &rarr;</Link>
            <PageDescription>Sign in</PageDescription>
            <FlashyButton onClick={() => history.push("/auth/login/email")} > Sign in with your email</FlashyButton> <br/> <br/>
            <SignInGoogleBase />
            <SignInLinkedinBase />
        </div>
    )
}
export default LoginPage;