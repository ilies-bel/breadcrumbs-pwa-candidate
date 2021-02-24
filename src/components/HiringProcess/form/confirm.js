import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useParams, useRouteMatch,} from 'react-router-dom';
import DateFnsAdapter from "@date-io/date-fns"; //TODO: essayer downgrade cette librairie à la version 1.3.13 pour pouvoir formatter les dates
import { PageDescription } from 'Navigation';
import {HIRING_DESCRIPTION} from "constants/description";
import LinearProgress from "@material-ui/core/LinearProgress";

const ConfirmPage = () => {
    return (
        <>
            <LinearProgress />
        <PageDescription>{HIRING_DESCRIPTION.CONFIRMATION_SUCCESSFUL}</PageDescription>
        </>
    )
}

export default ConfirmPage;