import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useRouteMatch,useHistory} from 'react-router-dom';
import useAxios from 'axios-hooks'
import Moment from 'moment'; //TODO: essayer Luxon
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PageDescription } from 'Navigation';
import ConfirmModal from './modal';
import { CONFIRM } from 'constants/routes';

import { useGetDisponibilities } from 'utils/axios'
import Grid from "@material-ui/core/Grid";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {FlashyButton} from "littleComponents";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
    dispoInput: theme.element.button.big,
    link: theme.element.link.secondary,
    
}))

const DispoInput = (props) => {
  const classes = useStyles();
    return (
    <>
    <Button className={classes.dispoInput} variant="outlined" color="primary">
      <div>Beginning at :{props.start} </div>
      <div>End at : {props.end}</div>
      {props.interviewer && <pre>with {props.interviewer}</pre>}
    </Button>

    </>
    )

}
const SelectDate = () => {
    const [open, setOpen] = useState(false);
    const [{ data, loading, error }, refetch] = useGetDisponibilities();
    const history = useHistory();

    function handleModal() {
        setOpen(!open);
    }

    return (
        <>
        <PageDescription>Choose among the disponibilities</PageDescription>
        <Accordion>
            <AccordionSummary>23 November 2021 | 13:15 to 14:00
                <Grid item xs={2}>
                    <ExpandMore/>
                </Grid></AccordionSummary>
            <AccordionDetails>
                <FlashyButton>Confirm Appointment</FlashyButton>
            </AccordionDetails>
        </Accordion>
        <ConfirmModal handleModal={handleModal} open={open} />
    </>
    );
}

export default SelectDate