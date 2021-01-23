import React from 'react';
import Messages from "../Messages";
import {TitleSource} from "../Navigation/titleContext";


const AmbassadorsPage = () => {

    return (
        <>
            <TitleSource>Ambassadors</TitleSource>
            <div>

                <h2>Ambassadors</h2>
                <h3>Ask a question</h3>
                <Messages/>

            </div>
        </>

    );
}

export default AmbassadorsPage;
