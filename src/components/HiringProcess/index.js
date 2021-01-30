import React from 'react';
import {BrowserRouter as Router, Link, Route, useRouteMatch,} from 'react-router-dom';

import MilestonePage from './milestone';
import {TitleSource} from "../Navigation/titleContext";
import {AuthUserContext} from "../Authentification/Session";
import {HIRING_PROCESS_TITLE} from "../../constants/routes";
import {HIRING_DESCRIPTION} from "../../constants/description";

import {TitleDescriptionSource} from "../Navigation/descriptionContext"
import { PageDescription } from '../Navigation';

const HiringProcessPage = () => {


    const {path, url} = useRouteMatch();

    return (
        <>
            <TitleSource>{HIRING_PROCESS_TITLE}</TitleSource>
            <TitleDescriptionSource>Prenez rendez-vous ici</TitleDescriptionSource>

            <Router>
                <div>
                    <AuthUserContext.Consumer>
                        {(authUser) => <h2>Hey {authUser.username}</h2>}
                    </AuthUserContext.Consumer>
                    <PageDescription>{HIRING_DESCRIPTION.PROCESS}</PageDescription>
                    <ul>
                        <li>
                            <Link to={`${url}/phone`}>Phone interview</Link>
                        </li>
                        <li>
                            <Link to={`${url}/operational`}>Operational interview</Link>
                        </li>
                    </ul>

                    <Route exact path={`${path}/:id`} component={MilestonePage}/>

                </div>
            </Router>
        </>

    );
}

export default HiringProcessPage;
