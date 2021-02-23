import React from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Route, useRouteMatch, useHistory} from 'react-router-dom';

import {TitleSource} from "../Navigation/titleContext";
import {AuthUserContext} from "../Authentification/Session";
import {CONFIRM, DISPO, HIRING_PROCESS_TITLE} from "../../constants/routes";

import HiringProcess from './hiring';
import MilestonePage from './milestone'
import SelectDate from './form/disponibilities';
import ConfirmPage from './form/confirm';
import {useGetProcess} from "../../utils/axios";

const HiringProcessPage = (props) => {
    const {path, url} = useRouteMatch();
    const history = useHistory();
    const [{ data, loading, error }, refetch] = useGetProcess();
    if(error) {return ( <strong>Error</strong> )}
    return (
        <>
            <TitleSource>{HIRING_PROCESS_TITLE}</TitleSource>

            <Router>
                <div>
                <Redirect to='/hiring' />
                    {data && data.map((process, index) =>
                                                    <Link to={`milestone/${process.process_name}`} key={index} />
                    )}
                    <Route path='/hiring' component={HiringProcess} />
                    <Route path="/milestone/:id" component={MilestonePage} />
                <Route path={DISPO} component={SelectDate} />
                <Route path={CONFIRM} component={ConfirmPage} />
                </div>
            </Router>
        </>

    );
}

export default HiringProcessPage;
