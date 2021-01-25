import React from 'react';
import {TitleSource} from '../Navigation/titleContext'
import {TIPS_TITLE} from "../../constants/routes";


const Tips = () => {

    return (
        <>
            <TitleSource>{TIPS_TITLE}</TitleSource>
            <div>
                <h2>Tips</h2>
            </div>
        </>

    );
}

export default Tips;
