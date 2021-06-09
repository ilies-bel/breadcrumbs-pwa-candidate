import React from 'react';
import {TitleSource} from "../Navigation/titleContext";
import {AMBASSADORS_TITLE} from "../../constants/routes";
import {AMBASSADORS_DESCRIPTION} from "../../constants/description";
import { PageDescription } from '../Navigation';

import Avatar from '@material-ui/core/Avatar';
import { Label } from '@material-ui/icons';
import {Grid} from "@material-ui/core";

const style = {
    profilePicture: {
        borderBottomStyle: 'solid',
        borderBottomWidth: '4px',
        borderBottomColor: 'royalblue',
        transition: 'all, ease-in, 0.4s'
    },
    link: {
        textDecoration: 'none',
        color: 'royalblue',
        width:'100%',
        height: '100%'
    }
}


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
        photo: "https://www.gewoonvoorhem.nl/app/uploads/2020/01/Jason-Statham-Countdown-Rep-e1578660419114.jpg",
        catch_phrase: "Rule number 1 : No question",
        description: "Taxi Driver. Delivery service"
    }
]

const AmbassadorItem = (props) => {
    return (
    <>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Avatar className={"column"} alt={props.name} src={props.photo} />
            </Grid>

            <Grid item xs={9}>
                <div className="avatar">
                    <div className="description">
                        <h3 className="title">{props.name}</h3>
                        <label>{props.description}</label>
                        <div className="catchPhrase">{props.catchPhrase}</div>
                    </div>
                </div>

            </Grid>
        </Grid>

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