import React from 'react';
import {useHistory} from 'react-router-dom';

import {withAuthorization, withEmailVerification} from '../Authentification/Session';
import * as ROUTES from '../../constants/routes';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {compose} from "recompose";


const BottomNav = () => {
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
            showLabels>
            <BottomNavigationAction value={ROUTES.LANDING} label="Landing" icon={<RestoreIcon/>}/>
            <BottomNavigationAction value={ROUTES.HOME} label="Sign in" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction value={ROUTES.APPLICATION} icon={<LocationOnIcon/>}/>
            <BottomNavigationAction value={ROUTES.TIPS} label="Nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction value={ROUTES.OFFICE} label="Nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction value={ROUTES.AMBASSADORS} label="Nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction value={ROUTES.SOCIAL} label="Nearby" icon={<LocationOnIcon/>}/>

        </BottomNavigation>
    );

}

const condition = (authUser) => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(BottomNav);
