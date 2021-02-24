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
import {useAuthContext} from "components/Authentification2/context";
import NotFound from "components/NotFound";
import CircularProgress from "@material-ui/core/CircularProgress";

const HiringProcessPage = (props) => {
    const {path, url} = useRouteMatch();
    const authContext = useAuthContext();
    const [{ data, loading, error }, refetch] = useGetProcess();

    if( !authContext.token ) { return  <NotFound /> }
    if(error) {return ( <strong>Error. No found data</strong> )}
    if( loading ) { return <CircularProgress /> }

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
