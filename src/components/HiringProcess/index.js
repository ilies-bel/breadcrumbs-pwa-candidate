import React from 'react';
import {BrowserRouter as Router, Link, Route, useRouteMatch,} from 'react-router-dom';
import MilestonePage from './milestone';

function HiringProcessPage() {
  const { path, url } = useRouteMatch();
  return (
    <Router>
      <div>
        <h2>Interview process</h2>
        <ul>
          <li>
            <Link to={`${url}/1`}>Phone interview</Link>
          </li>
          <li>
            <Link to={`${url}/2`}>Operational interview</Link>
          </li>
        </ul>

        <Route exact path={`${path}/:id`} component={MilestonePage} />

      </div>
    </Router>
  );
}

export default HiringProcessPage;
