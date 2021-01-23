import React from 'react';
import Messages from "../Messages";
import {TitleSource} from "../Navigation/titleContext";
import {AMBASSADORS_TITLE} from "../../constants/routes";


const AmbassadorsPage = () => {

    return (
        <>
            <TitleSource>{AMBASSADORS_TITLE}</TitleSource>
            <div>

                <h2>Ambassadors</h2>
                <h3>Ask a question</h3>
                <Messages/>

            </div>
        </>

    );
}

export default AmbassadorsPage;
