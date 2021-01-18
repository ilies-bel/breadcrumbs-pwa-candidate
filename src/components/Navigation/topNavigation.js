import React from 'react';
import {Link} from 'react-router-dom';

import {AuthUserContext, withAuthorization, withEmailVerification} from '../Authentification/Session';
import SignOutButton from '../Authentification/SignOut';
import * as ROUTES from '../../constants/routes';

import {compose} from "recompose";


const TopNav = () => (
    <AuthUserContext.Consumer>
        {(authUser) =>
            <ul>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Hello {authUser.username}</Link>
                </li>
                <li>
                    <SignOutButton/>
                </li>
            </ul>}
    </AuthUserContext.Consumer>
)

const condition = (authUser) => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(TopNav);

