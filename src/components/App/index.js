import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../Authentification/SignUp';
import SignInPage from '../Authentification/SignIn';
import PasswordForgetPage from '../Authentification/PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Authentification/Account';
import ApplicationPage from '../Application';
import TipsPage from '../Tips';
import OfficePage from '../Office';
import AmbassadorsPage from '../Ambassadors';
import SocialPage from '../Social';

import * as ROUTES from '../../constants/routes';
import {withAuthentication} from '../Authentification/Session';

const App = () => (
    <Router>
      <div>
        <Navigation/>


        <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
        <Route path={ROUTES.SIGN_IN} component={SignInPage}/>

        <Route exact path={ROUTES.LANDING} component={LandingPage}/>

        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>

        <Route path={ROUTES.HOME} component={HomePage}/>

        <Route path={ROUTES.ACCOUNT} component={AccountPage}/>

        <Route path={ROUTES.APPLICATION} component={ApplicationPage}/>
        <Route path={ROUTES.TIPS} component={TipsPage}/>
        <Route path={ROUTES.OFFICE} component={OfficePage}/>
        <Route path={ROUTES.AMBASSADORS} component={AmbassadorsPage}/>
        <Route path={ROUTES.SOCIAL} component={SocialPage}/>

      </div>

    </Router>
);
// <Route path='*' component={NotFound}/>

export default withAuthentication(App);
