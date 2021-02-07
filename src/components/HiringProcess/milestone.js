import {BrowserRouter as Router, Link, Route, useParams, useRouteMatch,useHistory} from 'react-router-dom';
import { TitleDescriptionSource } from '../Navigation/descriptionContext';
import {HIRING_DESCRIPTION} from "../../constants/description";
import {DISPO} from "../../constants/routes";

import React from 'react';
import CalendarPage from './calendar';
import { makeStyles } from '@material-ui/core/styles';

import {PageDescription} from '../Navigation';

const useStyles = makeStyles(theme => ({
  appointment: {
    height: '10px',
    width: '197px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    padding: '12px 27px',
    background: 'linear-gradient(91.6deg, #3572F1 0%, #F24E95 100%), #F6B714',
    marginBottom: '10px'
  },
  link: theme.element.link.primary
}))
function MilestonePage() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const classes = useStyles();
  const history = useHistory();
  console.log("miles-his");console.log(history.location);console.log("/miles-history")
  const url2 = url.match(/[^/]\w+/g); //url2 permet n'a pas le caractère '/' 
  let description = HIRING_DESCRIPTION[url2];

  return (
      <div>
        <h3>
          Milestone number :
          {url}
          {id}
        </h3>
        <h2>Description of process </h2>
        <PageDescription>{description}</PageDescription>
          <Link className={classes.appointment} to={DISPO}>Take appointment</Link>
      </div>

  );
}

export default MilestonePage;
