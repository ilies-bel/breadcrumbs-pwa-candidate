import React from 'react';
import {TitleSource} from "../Navigation/titleContext";
import {SOCIAL_TITLE} from "../../constants/routes";


const SocialPage = () => {

    return (
        <>
            <TitleSource>{SOCIAL_TITLE}</TitleSource>

            <div>
                <h1>Social</h1>
            </div>
        </>


    );
}

export default SocialPage;

