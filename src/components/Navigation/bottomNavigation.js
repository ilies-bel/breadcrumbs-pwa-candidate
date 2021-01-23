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
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
            >
                <BottomNavigationAction className={classes.root} value={ROUTES.APPLICATION} label="Application"
                                        icon={<ListAltOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.TIPS} label="Tips"
                                        icon={<InfoOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.OFFICE} label="Office"
                                        icon={<LocationOnOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.AMBASSADORS} label="Ambassadors"
                                        icon={<SchoolOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.root} value={ROUTES.SOCIAL} label="Social"
                                        icon={<ShareOutlinedIcon/>}/>

            </BottomNavigation>

    );

}

const condition = (authUser) => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(BottomNav);
