import React from 'react';
import {TitleSource} from "../Navigation/titleContext";
import {OFFICE_TITLE} from "../../constants/routes";
import {BrowserRouter as Router, Link, Route, useRouteMatch} from "react-router-dom";
import OfficeMap from "./map";

const OfficePage = () => {
    const {path, url} = useRouteMatch();

    return (
        <>
            <TitleSource>{OFFICE_TITLE}</TitleSource>
            <div>
                <h2>Our Office</h2>
                <h1>Hello</h1>
                <Router>
                    <div>

                        <ul>
                            <li>
                                <Link to={`${url}/map`}>See us in a map</Link>
                            </li>

                        </ul>

                        <Route exact path={`${path}/map`} component={OfficeMap}/>

                    </div>
                </Router>

            </div>
        </>

    );
}

export default OfficePage;
