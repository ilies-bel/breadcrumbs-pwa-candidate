import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import {AuthUserContext} from '../Authentification/Session';
import SignOutButton from '../Authentification/SignOut';
import * as ROUTES from '../../constants/routes';
import {makeStyles} from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";


const Navigation = () => (
    <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth/>)}
    </AuthUserContext.Consumer>
);

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

const NavigationAuth = ({authUser}) => (

    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.APPLICATION}>Application</Link>
        </li>
        <li>
            <Link to={ROUTES.TIPS}>Tips</Link>
        </li>
        <li>
            <Link to={ROUTES.OFFICE}>Office</Link>
        </li>
        <li>
            <Link to={ROUTES.AMBASSADORS}>Ambassadors</Link>
        </li>
        <li>
            <Link to={ROUTES.SOCIAL}>Social</Link>
        </li>
        <li>
            <SignOutButton/>
        </li>
    </ul>
);


const NavigationNonAuth = () => {
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
            <BottomNavigationAction value='/landing' label="Landing" icon={<RestoreIcon /> } />
            <BottomNavigationAction value='/signin' label="Sign in" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );

}

export default Navigation;
