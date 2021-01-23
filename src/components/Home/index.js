import React from 'react';
import {compose} from 'recompose';

import {withAuthorization, withEmailVerification} from '../Authentification/Session';
import Messages from '../Messages';


const HomePage = () => {


    return (
        <div>
            <p>The Home Page is accessible by every signed in user.</p>
            <Messages/>
        </div>
    );
}

const condition = (authUser) => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(HomePage);
