import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import HomePage from '../Home';
import AccountPage from '../Authentification/Account';
import {BottomNav, TopNav} from '../Navigation';
import SignUpPage from '../Authentification/SignUp';
import SignInPage from '../Authentification/SignIn';
import PasswordForgetPage from '../Authentification/PasswordForget';
import HiringProcessPage from '../HiringProcess';
import TipsPage from '../Tips';
import OfficePage from '../Office';
import AmbassadorsPage from '../Ambassadors';
import SocialPage from '../Social';
import {withAuthentication} from '../Authentification/Session';
import {TitleContext} from "../Navigation/titleContext";

const App = () => (
    <Router>
      <div>
          <TitleContext>
              <TopNav />

              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />

              <Route path={ROUTES.APPLICATION} component={HiringProcessPage} />
              <Route path={ROUTES.TIPS} component={TipsPage} />
              <Route path={ROUTES.OFFICE} component={OfficePage} />
              <Route path={ROUTES.AMBASSADORS} component={AmbassadorsPage} />
              <Route path={ROUTES.SOCIAL} component={SocialPage} />

              <BottomNav />
          </TitleContext>



      </div>

    </Router>
);
/*

*/

export default withAuthentication(App);
