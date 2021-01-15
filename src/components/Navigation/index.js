import React from 'react';
import {Link} from 'react-router-dom';

import {AuthUserContext} from '../Authentification/Session';
import SignOutButton from '../Authentification/SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth/>)}
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({authUser}) => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.APPLICATION}>Application</Link>
        </li>
        <li>
            <Link to={ROUTES.TIPS}>Tips</Link>
        </li>
        <li>
            <Link to={ROUTES.OFFICE}>Office</Link>
        </li>
        <li>
            <Link to={ROUTES.AMBASSADORS}>Ambassadors</Link>
        </li>
        <li>
            <Link to={ROUTES.SOCIAL}>Social</Link>
        </li>
        <li>
            <SignOutButton/>
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign in</Link>
        </li>

    </ul>
);

export default Navigation;
