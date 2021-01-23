import React, {useContext} from 'react';
import {withAuthorization, withEmailVerification} from '../Authentification/Session';
import {topNavigationContext} from './titleContext'

import {compose} from "recompose";
import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        top: 0,
        bottom: 'auto',
        position: 'fixed'
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
    const title = useContext(topNavigationContext);

    return (


                <AppBar className={classes.appBar}>
                    <Toolbar>

                        <Typography className={classes.title}>
                            {title}
                        </Typography>

                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
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

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(TopNav);

