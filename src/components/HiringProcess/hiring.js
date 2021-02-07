import React from 'react';
import {BrowserRouter as Router, Link, Route, useHistory, useRouteMatch,} from 'react-router-dom';

import {TitleSource} from "../Navigation/titleContext";
import {AuthUserContext} from "../Authentification/Session";
import {HIRING_PROCESS_TITLE, DISPO, RESERVATION, CONFIRM} from "../../constants/routes";
import {HIRING_DESCRIPTION} from "../../constants/description";

import {TitleDescriptionSource} from "../Navigation/descriptionContext"
import { PageDescription } from '../Navigation';

import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        height: '50px',
        width: '100%',
        borderStyle: 'Solid',
        borderColor: '#3572F1',
        borderWidth: '2px',
        borderRadius: '5px',
        padding: '50px',
        background: '#EBF1FE',
        color: '#3572F1'
    },
    link: theme.element.link.secondary,
}))

const interviewList = [ 'phone', 'operational']
const HiringProcess = () => {
    const history = useHistory();
    const {path, url} = useRouteMatch();
    const classes = useStyles();

    return (
        <>
        <div>
            <AuthUserContext.Consumer>
                {(authUser) => <h2>Hey {authUser.username}</h2>}
            </AuthUserContext.Consumer>
            <PageDescription>{HIRING_DESCRIPTION.PROCESS}</PageDescription>
            <ul>
                {interviewList.map((type, i) =>
                <li key={i}>
                    <ButtonBase className={classes.button} onClick={() => history.replace(`/${type}`)} >
                        <a className={classes.label}>{type} interview</a>
                    </ButtonBase>
                </li>)
                }
            </ul>
        </div>
        </>
    );
}

export default HiringProcess;
