import React from "react";
import {FlashyButton, PageDescription, SignInGoogleBase, SignInLinkedinBase} from 'littleComponents';
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from 'react-router-dom'
import emailSignInPage from "./emailSignIn"
import onBoardingPage from "./onboarding"

const welcomePage = () => {

    return (
        <>
            <Router>

                <Switch>

                    <Route exact path="/auth/signin/" component={onBoardingPage}/>
                    <Route path="/auth/signin/email" component={emailSignInPage}/>

                </Switch>

            </Router>
        </>
    )
}

export default welcomePage;