import {BrowserRouter as Router, Link, Route, useParams, useRouteMatch,} from 'react-router-dom';

import React from 'react';
import CalendarPage from './calendar';

function MilestonePage() {
  const { id } = useParams();
  const { path, url } = useRouteMatch();

  return (
    <Router>

      <div>
        <h3>
          Milestone number :
          {' '}
          {id}
        </h3>
        <h2>Description of process </h2>

        <li>
          <Link to={`${url}/calendar`}>Take appointment</Link>
        </li>

        <Route path={`${url}/calendar`} component={CalendarPage} />
      </div>
    </Router>
  );
}

export default MilestonePage;
