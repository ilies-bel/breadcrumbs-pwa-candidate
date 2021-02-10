import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import HomePage from '../Home';
import AccountPage from '../Authentification/Account';
import {BottomNav, TopNav, PageDescription, MainNav} from 'Navigation';
import SignUpPage from '../Authentification/SignUp';
import SignInPage from '../Authentification/SignIn';
import PasswordForgetPage from '../Authentification/PasswordForget';
import HiringProcessPage from '../HiringProcess';
import TipsPage from '../Tips';
import OfficePage from '../Office';
import AmbassadorsPage from '../Ambassadors';
import SocialPage from '../Social';
import ConfirmPage from '../HiringProcess/form/confirm'
import {withAuthentication} from '../Authentification/Session';
import {TitleSource} from "Navigation/titleContext";
import {TitleDescriptionSource} from "Navigation/descriptionContext"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}))

const App = () => {
    const classes = useStyles();;
    return (
        <div>

            <Router>
                <TopNav/>
                <MainNav>
                <TitleSource>Breadcrumbs</TitleSource>
                <div className={classes.offset}/>
                <PageDescription></PageDescription>
                <TitleDescriptionSource></TitleDescriptionSource>
                <Route path={ROUTES.HOME} component={HomePage}/>
                <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>

                <Route path={ROUTES.HIRING_PROCESS} component={HiringProcessPage}/>
                <Route path={ROUTES.TIPS} component={TipsPage}/>
                <Route path={ROUTES.OFFICE} component={OfficePage}/>
                <Route path={ROUTES.AMBASSADORS} component={AmbassadorsPage}/>
                <Route path={ROUTES.SOCIAL} component={SocialPage}/>
                <Route path={ROUTES.CONFIRM} component={ConfirmPage}/>
                </MainNav>
                <BottomNav/>
            </Router>
        </div>

    );
}

export default withAuthentication(App);
