import React from "react";
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from 'react-router-dom'

import EmailSignInPage from "./emailSignIn"
import OnBoardingPage from "./onboarding"
import ConfirmationPage from "./confirmation"

const welcomePage = () => {

    return (

        <>
            <Router>

                <Switch>

                    <Route exact path="/auth/signin/" component={OnBoardingPage}/>
                    <Route path="/auth/signin/email" component={EmailSignInPage}/>
                    <Route path="/auth/signin/confirmation" component={ConfirmationPage}/>

                </Switch>

            </Router>
        </>
    )
}

export default welcomePage;