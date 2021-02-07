import React, { useEffect, useLayoutEffect } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Route, useRouteMatch, useHistory} from 'react-router-dom';

import {TitleSource} from "../Navigation/titleContext";
import {AuthUserContext} from "../Authentification/Session";
import {CONFIRM, DISPO, HIRING_PROCESS_TITLE} from "../../constants/routes";
import {HIRING_DESCRIPTION} from "../../constants/description";

import {TitleDescriptionSource} from "../Navigation/descriptionContext"
import { PageDescription } from '../Navigation';
import HiringProcess from './hiring';
import MilestonePage from './milestone'
import SelectDate from './form/disponibilities';
import ConfirmModal from './form/modal';
import { Button } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import ConfirmPage from './form/confirm';

const hiringReducer = (currentLink, changLink) => {
    if(currentLink === '/phone') {

    }
}

const HiringProcessPage = (props) => {
    const [pathLink, setLink] = React.useState('/phone')
    const firstLink = '/phone';
    const history = useHistory();
    const {path, url} = useRouteMatch();
    function changePath(p) {
        setLink(p)
    }
    return (
        <>
            <TitleSource>{HIRING_PROCESS_TITLE}</TitleSource>

            <Router>
                <div>
                <Redirect to='/hiring' />
                <Route path='/hiring' component={HiringProcess} />
                <Route path='/phone' component={MilestonePage} />
                <Route path='/operational' component={MilestonePage} />
                <Route path={DISPO} component={SelectDate} />
                <Route path={CONFIRM} component={ConfirmPage} />
                </div>
            </Router>
        </>

    );
}

export default HiringProcessPage;
