import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useRouteMatch,} from 'react-router-dom';
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import DateFnsAdapter from "@date-io/date-fns"; //TODO: essayer downgrade cette librairie à la version 1.3.13 pour pouvoir formatter les dates
import {DatePicker, MuiPickersUtilsProvider, TimePicker} from '@material-ui/pickers';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { PageDescription } from '../../Navigation';

import ConfirmModal from './modal';

const dateFns = new DateFnsAdapter();


const useStyles = makeStyles(theme => ({
    dispoInput: theme.element.button.big,
    link: theme.element.link.secondary,
    
}))

//La liste des disponobilités doit être préalablement par l'API
const dispoList = [
    {
        room: 'Re-Design Plan',
        startDate: new Date(2018, 5, 25, 9, 15),
        endDate: new Date(2018, 5, 25, 11, 30),
      }, {
        room: 'San Fran',
        startDate: new Date(2018, 5, 25, 12, 11),
        endDate: new Date(2018, 5, 25, 13, 0),
      }, {
        room: 'Dev Room',
        startDate: new Date(2018, 5, 25, 13, 30),
        endDate: new Date(2018, 5, 25, 14, 35),
      },
]

const DispoInput = (props) => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();
    return (
    <>
    <Router>
    <Button className={classes.dispoInput} variant="outlined" color="primary">
    <NavLink className={classes.link} to={`${url}/confirm`}>
      <div>{props.start} </div>
      <div> {props.end}</div>
      </NavLink>
    </Button>
    <Route path={`${url}/confirm`} component={ConfirmModal} />
    </Router>
    </>
    )

}
const SelectDate = () => {
    const [open, setOpen] = useState(false);
    
    function handleModal() {
        setOpen(!open);
    }
    return (
        <>
        <PageDescription>Choose among the disponibilities</PageDescription>
        
    <List>

        {
            dispoList.map((dispo, i) => 
                <span key={i} onClick={handleModal}>
                  <DispoInput key={i}
                  start={dateFns.format(dispo.startDate, 'fullDateTime24h')}
                  end={dateFns.format(dispo.endDate, "fullDateTime24h")} />
                </span>
            )
        }
    </List>
    </>
    );

}

export default SelectDate