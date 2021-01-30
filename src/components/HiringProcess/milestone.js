import {BrowserRouter as Router, Link, Route, useParams, useRouteMatch,} from 'react-router-dom';
import { TitleDescriptionSource } from '../Navigation/descriptionContext';
import {HIRING_DESCRIPTION} from "../../constants/description";

import React from 'react';
import CalendarPage from './calendar';
import { makeStyles } from '@material-ui/core/styles';

import {BottomNav, TopNav, PageDescription} from '../Navigation';

const useStyles = makeStyles({
  appointment: {
    height: '10px',
    backgroundColor: 'blue',
    width: '197px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    padding: '12px 27px',
    background: 'linear-gradient(91.6deg, #3572F1 0%, #F24E95 100%), #F6B714',
    marginBottom: '10px'
  }
})
function MilestonePage() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();
  const classes = useStyles();

  let description = HIRING_DESCRIPTION[id];
  console.log(id);console.log(description);console.log("/description");

  return (
    <Router>

      <div>
        <h3>
          Milestone number :
          {' '}
          {id}
        </h3>
        <h2>Description of process </h2>
        <PageDescription>{description}</PageDescription>
        <li className={classes.appointment}>
          <Link to={`${url}/calendar`}>Take appointment</Link>
        </li>

        <Route path={`${url}/calendar`} component={CalendarPage} />
      </div>
    </Router>
  );
}

export default MilestonePage;
