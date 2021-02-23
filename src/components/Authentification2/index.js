import React, {Component, useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import * as ROUTES from "constants/routes";
import WelcomePage from "components/Authentification2/welcomPage";
import {FormEmailPage} from "components/Authentification2/signIn/yourEmail";
import PaperDiv from "Navigation/PaperDiv";
import {FormNamePage} from "components/Authentification2/signIn/yourName";

export const AuthRouterPage = () => {
    return (
        <PaperDiv>
        <Router>
            <Redirect to="/auth/welcome" />
            <Switch>
                <Route path="/auth/welcome" component={WelcomePage} />
                <Route path="/auth/signin/name" component={FormNamePage} />
                <Route path="/auth/signin/email" component={FormEmailPage} />
            </Switch>
        </Router>
            <img src="/Frame.svg" />
        </PaperDiv>
    )
}