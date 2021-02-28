import React, {Component, useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import * as ROUTES from "constants/routes";
import WelcomePage from "components/Authentification2/welcomPage";
import {FormEmailPage} from "components/Authentification2/signInFirstTime/yourEmail";
import PaperDiv from "components/littleComponents/PaperDiv";
import {FormNamePage} from "components/Authentification2/signInFirstTime/yourName";
import LoginEmailPage from "components/Authentification2/login/loginEmail";
import LoginPage from "components/Authentification2/login";
import ConfirmLoginPage from "components/Authentification2/confirm";
import OnBoardingPage from "./signInFirstTime";
import {useAuthContext} from "components/Authentification2/context";

export const AuthRouterPage = () => {
    const context = useAuthContext();

    return (
        <PaperDiv>
        <Router>
            <Switch>
                { !context.token && (
                    <>
                    <Route path="/auth/welcome" component={OnBoardingPage} />
                    <Route path="/auth/signin/name" component={FormNamePage} />
                    <Route path="/auth/signin/email" component={FormEmailPage} />
                    <Route path="/auth/login/email" component={LoginEmailPage} />
                    <Route exact path="/auth/login" component={LoginPage} />
                    </> )
                }
                <Route path="/auth/confirm" component={ConfirmLoginPage} />
            </Switch>
        </Router>
            <img src="/Frame.svg" alt="Illustration of welcome page" />
        </PaperDiv>
    )
}