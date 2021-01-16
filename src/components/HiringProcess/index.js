import React from 'react';
import {BrowserRouter as Router, Link, Route, useRouteMatch} from 'react-router-dom';

const {path, url} = useRouteMatch();


const HiringProcessPage = () => (

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
            <Route exact path={`${path}/:id`}>
                <h2>Description</h2>
            </Route>
        </div>
    </Router>

)

export default HiringProcessPage;
