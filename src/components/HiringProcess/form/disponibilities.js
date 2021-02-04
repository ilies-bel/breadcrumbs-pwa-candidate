import React, {useState} from 'react';
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

import {HIRING_DESCRIPTION} from "../../../constants/description";

const dateFns = new DateFnsAdapter();


const useStyles = makeStyles(theme => ({
    sendButton: {
        position: 'sticky',
        top: 60,
        backgroundColor: 'royalblue',
        color: 'white',
        zIndex: theme.zIndex.appBar
    },
    paper: {
        position: 'absolute',
        top: '50%',
        minWidth: '80%',
        maxHeight: '200px',
        backgroundColor: theme.palette.background.modal,
        border: theme.palette.background.border,
        //boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      },
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


const ConfirmModal = (props) => {
    const classeModal = useStyles();
    return (
        <Modal
        open={props.open}
        onClose={props.handleModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        
        >
            <div className={classeModal.paper}>
        <div>Confirm the appointment</div>
        <TextField
          label="message"
          multiline
          rows={3}
          placeholder={HIRING_DESCRIPTION.CONFIRMATION_PLACEHOLDER}
        />
        <div>
        <Button
        variant="contained"
        onClick={props.handleModal}
      >
        CANCEL
      </Button>
        <Button
        variant="contained"
        className={classeModal.sendButton}
      >
        OK
      </Button>
      </div>
      </div>
        
        </Modal>
    )
}

const DispoInput = (props) => {
    return (
    <ListItem> <input type='checkbox'/> <label>{props.start} -- {props.end}</label> </ListItem>
    )

}
const SelectDate = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    function handleModal() {
        setOpen(!open);
    }
    return (
        <>
        <PageDescription>Choose among the disponibilities</PageDescription>
        <Button
        variant="contained"
        className={classes.sendButton}
        endIcon={<Icon>send</Icon>}
        onClick={handleModal}
      >
        Confirm
      </Button>
      <ConfirmModal open={open} handleModal={handleModal} />
    <List>

        {
            dispoList.map((dispo, i) => 
                <DispoInput key={i} start={dateFns.format(dispo.startDate, 'fullDateTime24h')} end={dateFns.format(dispo.endDate, "fullDateTime24h")} />
            )
        }
    </List>
    </>
    );

}

export default SelectDate