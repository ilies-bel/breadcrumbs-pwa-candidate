import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useRouteMatch,useHistory} from 'react-router-dom';
import useAxios from 'axios-hooks'
import Moment from 'moment'; //TODO: essayer Luxon
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { PageDescription } from '../../Navigation';
import ConfirmModal from './modal';
import { CONFIRM } from '../../../constants/routes';

import { useGetDisponibilities } from '../../../utils/axios'

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
      <pre> {props.collaborator} </pre>
    </Button>

    </>
    )

}
const SelectDate = () => {
    const [open, setOpen] = useState(false);
    const [{ data, loading, error }, refetch] = useGetDisponibilities()
    const history = useHistory();

    if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

    function handleModal() {
        setOpen(!open);
    }

    return (
        <>
        <PageDescription>Choose among the disponibilities</PageDescription>        
        <List>
            {
                data && data.map((dispo, i) => 
                    <span key={i} onClick={handleModal}>
                      <DispoInput key={i}
                      start={Moment(dispo.startdDate).format('d MMMM - hh:mm')} end={Moment(dispo.endDate).format('d MMMM - hh:mm')}
                      interviewer={dispo.collaborator} />
                    </span>
                )
            }
        </List>
        <ConfirmModal handleModal={handleModal} open={open} />
    </>
    );
}

export default SelectDate