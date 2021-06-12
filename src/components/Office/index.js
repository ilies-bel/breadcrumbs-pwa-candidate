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
            <FlashyButton><span className='cardText'>{props.children}</span> </FlashyButton>
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
                                <OfficeCard src='/coffee.svg'>Where can I get coffee ?</OfficeCard>
                            </li>

                        </ul>

                        <Route exact path={`${path}/map`} component={OfficeMap}/>

                    </div>
                </Router>
        </div>

    );
}

export default OfficePage;
