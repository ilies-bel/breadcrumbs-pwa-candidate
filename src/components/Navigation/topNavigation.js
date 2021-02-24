import React from 'react';
import {withAuthorization, withEmailVerification} from '../Authentification/Session';

import {compose} from "recompose";
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {TitleTarget} from "./titleContext";
import { AuthContext } from "components/Authentification2/context";
import { useAuthContext } from "components/Authentification2/context";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        top: 0,
        bottom: 'auto',
        position: 'fixed',
        textAlign: 'center'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



const TopNav = () => {
    const classes = useStyles();
    const context = useAuthContext();
    const history = useHistory();


    return (
                <AppBar className={classes.appBar}>
                    <Toolbar>

                        <Typography className={classes.title}>
                            <TitleTarget />
                        </Typography>

                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                title={ !context.token ? "Sign in" : `signed in as ${context.userName}` }
                                onClick={() => !context.token && history.push("/login/email")}
                            >
                                <AccountCircle/>
                            </IconButton>

                        </div>

                    </Toolbar>
                </AppBar>

    )
}
/*
                <ul>
                <li>
                <Link to={ROUTES.ACCOUNT}>Hello {authUser.username}</Link>
                </li>
                <li>
                <SignOutButton/>
                </li>
                </ul>
*/
const condition = (authUser) => !!authUser;

/*export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(TopNav);*/
export default TopNav