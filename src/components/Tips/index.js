import React from 'react';
import {TitleSource} from '../Navigation/titleContext'
import {TIPS_TITLE} from "../../constants/routes";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    num: {
        width: '20px',
        height: '20px',
        borderRadius: '100px',
        backgroundColor: 'lightblue',
        textAlign: 'center'
    }
})
const tipsList =  [
    {
        ranking: 5,
        title: "Bien serrer la main",
        description: "Serrer très fort"
    },
    {
        ranking: 2,
        title: "Se tenir droit",
        description: "Ne pas voûter le dos"
    },
    {
        ranking: 15,
        title: "Prendre des notes",
        description: "Prévoir un bloc-note"
    },
    {
        ranking: 15,
        title: "Porter une Chemise",
        description: "Prévoir un bloc-note"
    },
]

const Tips = () => {
    /* let title = tips.title
    let rank = tips.ranking
    let description = tips.description
    let tipsDiv = [] */
    let open = true;
    const classes = useStyles();

    return (
        <>
            <TitleSource>{TIPS_TITLE}</TitleSource>
            <List>
                {
                tipsList.map((tips, index) => 
<div key={index}>
                    <ListItem button><span className={classes.num}>{index}</span> {tips.title} <ExpandMore /></ListItem>
                    <Collapse in={open} unmountOnExit><p>{tips.description}</p></Collapse>
</div>
                    )
                }

            </List>
        </>

    );
}

export default Tips;
