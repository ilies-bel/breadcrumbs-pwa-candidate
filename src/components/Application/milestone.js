import {Link, Route, Switch, useParams, useRouteMatch,} from 'react-router-dom';

import Calendar from './calendar';

function Milestone() {
    const {id} = useParams();
    const {path, url} = useRouteMatch();

    return (
        <div>
            <h3>
                Milestone number :
                {id}
            </h3>
            <Switch>
                <li>
                    <Link to={`${url}/calendar`}>Take appointment</Link>
                </li>

                <Route path={`${path}/calendar`}>
                    <h2>calendar.tsx</h2>
                    <Calendar/>
                </Route>

            </Switch>
        </div>
    );
}

export default Milestone;
