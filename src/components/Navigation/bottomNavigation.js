import React from 'react';
import {useHistory} from 'react-router-dom';

import {withAuthorization, withEmailVerification} from '../Authentification/Session';
import * as ROUTES from '../../constants/routes';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import {compose} from "recompose";

const useStyles = makeStyles({
    root: {
        minWidth: "20%",
        border: 1.5

    },
});

const BottomNav = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const history = useHistory();

    const handleChange = (event, newValue) => {
        history.push(newValue);
        setValue(newValue);
    };

    return (
        <header>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
            >
                <BottomNavigationAction className={classes.root} value={ROUTES.HIRING_PROCESS} label={ROUTES.HIRING_LABEL}
                                        icon={<ListAltOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.TIPS} label={ROUTES.TIPS_LABEL}
                                        icon={<InfoOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.OFFICE} label={ROUTES.OFFICE_LABEL}
                                        icon={<LocationOnOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.AMBASSADORS} label={ROUTES.AMBASSADORS_LABEL}
                                        icon={<SchoolOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.SOCIAL} label={ROUTES.SOCIAL_LABEL}
                                        icon={<ShareOutlinedIcon/>}/>

            </BottomNavigation>
        </header>


    );

}

const condition = (authUser) => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(BottomNav);
