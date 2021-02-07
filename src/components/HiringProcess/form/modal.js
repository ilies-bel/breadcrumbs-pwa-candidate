import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useParams, useRouteMatch,} from 'react-router-dom';
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
import {CONFIRM} from "../../../constants/routes";
import {DISPO} from "../../../constants/routes";
import {HOME} from "../../../constants/routes";
import ConfirmPage from './confirm';
import SelectDate from './disponibilities';

const useStyles = makeStyles(theme => ({
    paper: theme.element.modal,
    sendButton: theme.element.button.little,
    link: theme.element.link.primary,
    linkCancel: theme.element.link.cancel,
}))

const ConfirmModal = (props) =>  {
    const [open, setOpen] = useState(null);
    const { path, url } = useRouteMatch();
    const classeModal = useStyles();

    return (
        <Modal
        open={props.open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={props.handleModal}
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
                color="default"
                onClick={props.handleModal}
                >
                <span className={classeModal.link} className={classeModal.link} >CANCEL</span>
                </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    >
                    <span className={classeModal.linkCancel} className={classeModal.link} >OK</span>
                </Button>
                </div>        
            </div>
        </Modal>
    )
}
export default ConfirmModal;