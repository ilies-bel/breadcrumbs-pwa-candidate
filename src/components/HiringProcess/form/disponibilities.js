import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useRouteMatch,useHistory} from 'react-router-dom';

import DateFnsAdapter from "@date-io/date-fns"; //TODO: essayer downgrade cette librairie à la version 1.3.13 pour pouvoir formatter les dates

import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { PageDescription } from '../../Navigation';
import ConfirmModal from './modal';
import { CONFIRM } from '../../../constants/routes';

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
    return (
    <>
    <Button className={classes.dispoInput} variant="outlined" color="primary">

      <div>{props.start} </div>
      <div> {props.end}</div>

    </Button>

    </>
    )

}
const SelectDate = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    function handleModal() {
        setOpen(!open);
    }

    return (
        <>
        <PageDescription>Choose among the disponibilities</PageDescription>        
        <List>

            {
                dispoList.map((dispo, i) => 
                    <span key={i} onClick={() => handleModal()}>
                      <DispoInput key={i}
                      start={dateFns.format(dispo.startDate, 'fullDateTime24h')} />
                    </span>
                )
            }
        </List>
        <ConfirmModal handleModal={handleModal} open={open} />
    </>
    );

}

export default SelectDate