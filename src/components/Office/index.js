import React from 'react';
import {TitleSource} from "../Navigation/titleContext";
import {OFFICE_TITLE} from "../../constants/routes";


const OfficePage = () => {

    return (
        <>
            <TitleSource>{OFFICE_TITLE}</TitleSource>
            <div>
                <h2>Our Office</h2>
                <h1>Hello</h1>

            </div>
            </>

    );
}

export default OfficePage;
