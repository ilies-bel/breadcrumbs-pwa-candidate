import React, {Component, useContext} from 'react';
import {BrowserRouter as Router, Link, Route, useRouteMatch,} from 'react-router-dom';

import MilestonePage from './milestone';
import {topNavigationContext} from "../Navigation/titleContext";
import {AuthUserContext} from "../Authentification/Session";


// Wrapper allowing state management on stateless react function
class HiringProcessPage extends Component {
  ComponentDidMount() {
    const [title, setTitle] = useContext(topNavigationContext);
    setTitle("Hiring process");
  }

  render () {
    return   <HiringProcessPage  {...this.props} />
  }
}


HiringProcessPage = () => {


  const { path, url } = useRouteMatch();

  return (
    <Router>
      <div>.
        <AuthUserContext.Consumer>
        {(authUser) => <h2>Hey {authUser.username}</h2>}
        </AuthUserContext.Consumer>

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
