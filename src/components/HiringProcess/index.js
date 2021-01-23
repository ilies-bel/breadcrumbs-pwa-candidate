import React from 'react';
import {BrowserRouter as Router, Link, Route, useRouteMatch,} from 'react-router-dom';

import MilestonePage from './milestone';
import {TitleSource} from "../Navigation/titleContext";
import {AuthUserContext} from "../Authentification/Session";
import {HIRING_PROCESS_TITLE} from "../../constants/routes";


const HiringProcessPage = () => {


    const {path, url} = useRouteMatch();

    return (
        <>
            <TitleSource>{HIRING_PROCESS_TITLE}</TitleSource>

            <Router>
                <div>
                    <AuthUserContext.Consumer>
                        {(authUser) => <h2>Hey {authUser.username}</h2>}
                    </AuthUserContext.Consumer>
                    <ul>
                        <li>
                            <Link to={`${url}/1`}>Phone interview</Link>
                        </li>
                        <li>
                            <Link to={`${url}/2`}>Operational interview</Link>
                        </li>
                    </ul>

                    <Route exact path={`${path}/:id`} component={MilestonePage}/>

                </div>
            </Router>
        </>

    );
}

export default HiringProcessPage;
