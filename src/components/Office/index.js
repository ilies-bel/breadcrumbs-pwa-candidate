import React from 'react';
import {TitleSource} from "../Navigation/titleContext";
import {OFFICE_TITLE} from "../../constants/routes";
import {BrowserRouter as Router, Link, Route, useRouteMatch} from "react-router-dom";
import OfficeMap from "./map";
import FlashyButton from 'littleComponents/flashyButton'
import './office.scss'

const OfficeCard = (props) => {
    const {path, url} = useRouteMatch();

    return (
        <>
        <div className='cardIcon'>
            <img src={props.src} />
            <div className='cardText'>{props.children}</div>
        </div>
        
        </>
    )
}

const OfficePage = () => {
    const {path, url} = useRouteMatch();

    return (
        <div className='officePage'>
            <TitleSource>{OFFICE_TITLE}</TitleSource>
                <h2>Our Office</h2>
                
                <Router>
                    <div className='officeButtons'>
                        <h3><FlashyButton>Take the virtual tour </FlashyButton></h3>
                        <ul>
                            <li>
                                <Link to={`${url}/map`}><OfficeCard src='/mapOffice.svg'>How do I get there</OfficeCard></Link>
                            </li>
                            <li>
                                <a href='https://www.google.fr/maps/search/coffee+near+sword+sas/@45.7735047,4.813867,13.78z' target='_blank'>
                                    <OfficeCard src='/coffee.svg'>Where can I get coffee ?</OfficeCard>
                                </a>
                            </li>

                        </ul>

                        <Route exact path={`${path}/map`} component={OfficeMap}/>

                    </div>
                </Router>
        </div>

    );
}

export default OfficePage;
