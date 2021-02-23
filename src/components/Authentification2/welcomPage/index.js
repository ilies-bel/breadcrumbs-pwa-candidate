import React, {Component, useState} from "react";
import {BrowserRouter, Router, Link, Switch, useHistory} from "react-router-dom";
import * as ROUTES from "constants/routes";
import {FlashyButton, PageDescription} from "Navigation";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SignInLinkedinBase = () => {
    /* const [{ data, loading, error }, refetch] = useAxios({
      baseURL: "https://www.linkedin.com/oauth/v2/authorization",
      params: new URLSearchParams("response_type=code&state=76313eba022e338757284774d3464c2eb709326f4031dd7c727416c99b15bc11&redirect_uri=http://localhost:5000/hiring-process&scope=r_liteprofile&client_id=78xqyjqta1nc2n")
    });
   */
    /* if(error) return <strong>Error linke</strong>
    if(loading) return <loading>loading ...</loading> */
    const onSubmit = (event) => {

        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);


        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={() => onSubmit}>
                <FlashyButton onClick={() =>
                    window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=76313eba022e338d3464c2eb709326f4031dd7c727416c99b15bc11&redirect_uri=https://localhost:5000/hiring-process&scope=r_liteprofile&client_id=78xqyjqta1nc2n",
                                'Authentifie toi avec Linkedin',
                                'menubar=no,location=no,status=no, width=400, heigth=600',)
                } >Sign in with Linkedin   <LinkedInIcon /></FlashyButton>
            </form>
        </>
    )

}
const SignInGoogleBase = (props) => {
    const [error, setError] = useState(null);

    return (
        <form>
            <FlashyButton type="submit">Sign In with Google. bouton inutilisable.</FlashyButton>

            {error && <p>{error.message}</p>}
        </form>
    );

}

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