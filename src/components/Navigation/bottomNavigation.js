import React from 'react';
import {useHistory} from 'react-router-dom';

import {withAuthorization, withEmailVerification} from '../Authentification/Session';
import * as ROUTES from '../../constants/routes';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import styles from './navigation.scss'

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import {compose} from "recompose";
import {useAuthContext} from "components/Authentification2/context";
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';


const useStyles = makeStyles((theme) => ({
    BottomNavigation: {
        '& .Mui-selected': {
            borderTopColor: '#3572F1',
            borderStyle: 'solid',
        }
    },
    BottomNavigationAction: {
        minWidth: "20%",
        borderTopWidth: '4px',
        '& .Mui-selected': {
            border: 'none',
        },
    },
}));


const BottomNav = () => {
    const classes =  useStyles();
    const context = useAuthContext();
    const [value, setValue] = React.useState(0);

    const history = useHistory();

    const handleChange = (event, newValue) => {
        history.push(newValue);
        setValue(newValue);
    };

    if(!context.token) return <div>Hi !</div>
    if(context.token) return (
            <BottomNavigation
                className={classes.BottomNavigation}
                value={value}
                onChange={handleChange}
                showLabels
            >
                <BottomNavigationAction className={classes.BottomNavigationAction} value={ROUTES.HIRING_PROCESS} label={ROUTES.HIRING_LABEL}
                                        icon={<ListAltOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.BottomNavigationAction} value={ROUTES.TIPS} label={ROUTES.TIPS_LABEL}
                                        icon={<InfoOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.BottomNavigationAction} value={ROUTES.OFFICE} label={ROUTES.OFFICE_LABEL}
                                        icon={<LocationOnOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.BottomNavigationAction} value={ROUTES.AMBASSADORS} label={ROUTES.AMBASSADORS_LABEL}
                                        icon={<SchoolOutlinedIcon/>}/>
                <BottomNavigationAction className={classes.BottomNavigationAction} value={ROUTES.SOCIAL} label={ROUTES.SOCIAL_LABEL}
                                        icon={<ShareOutlinedIcon/>}/>

            </BottomNavigation>

    );

}

const condition = (authUser) => !!authUser;

export default BottomNav
