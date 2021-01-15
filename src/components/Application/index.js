import {Link, Route, Switch, useRouteMatch,} from 'react-router-dom';

import Milestone from './milestone';

function Process() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const {path, url} = useRouteMatch();

  return (
      <div>

        <Switch>
          <Route exact path={path}>
            <h2>Interview process</h2>
            <ul>
              <li>
                <Link to={`${url}/1`}>Phone interview</Link>
              </li>
              <li>
                <Link to={`${url}/2`}>Operational interview</Link>
              </li>
            </ul>
          </Route>
          <Route exact path={`${path}/:id`}>
            <h2>Description</h2>

            <Milestone/>
          </Route>
        </Switch>
      </div>
  );
}

export default Process;
