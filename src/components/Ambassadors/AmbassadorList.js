import React from 'react';
import {TitleSource} from "../Navigation/titleContext";
import {AMBASSADORS_TITLE} from "../../constants/routes";
import {AMBASSADORS_DESCRIPTION} from "../../constants/description";
import { PageDescription } from '../Navigation';

import Avatar from '@material-ui/core/Avatar';
import { Label } from '@material-ui/icons';

const collaborators = [
    {
        name: "Dr Tsunade",
        photo: "http://pm1.narvii.com/5786/5d7b229363ff75a466493d4368fa08f72dade280_hq.jpg",
        catch_phrase: "Strenght, Health and Bet",
        description: "Fifth Mayor of the Leaf Village."
    },
    {
        name: "Alessa",
        photo: "https://everipedia-storage.s3.amazonaws.com/ProfilePicture/lang_en/alessa-savage__1020b8/blob__02576__thumb.jpeg",
        catch_phrase: "Smile and live !",
        description: "Human Ressource."
    },
    {
        name: "Jason",
        photo: "http://images.rottentomatoes.com/images/spotlights/2008/rtuk_feature_jason_statham_01.jpg",
        catch_phrase: "Rule number 1 : No question",
        description: "Taxi Driver. Delivery service"
    }
]

const AmbassadorItem = (props) => {
    return (
    <>
    <div className="avatar">
        <Avatar alt="Tsunade" src={props.photo} className="photo" />
        <div className="description">
            <h3 className="title">{props.name}</h3>
            <label>{props.description}</label>
            <div className="catchPhrase">{props.catchPhrase}</div>
        </div>
    </div>
    </>
    )
}
const AmbassadorList = () => {

    return (
        <div className="ambassadors">
        {
            collaborators.map((collaborator, index) =>
            <AmbassadorItem key={index} name={collaborator.name}
            photo={collaborator.photo}
            catchPhrase={collaborator.catch_phrase}
            description={collaborator.description} />
            )
        }
        </div>
        
    )
}

export default AmbassadorList;