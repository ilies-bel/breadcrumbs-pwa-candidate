import React from 'react';
import {TitleSource} from '../Navigation/titleContext'
import { TitleDescriptionSource } from '../Navigation/descriptionContext';
import {TIPS, TIPS_TITLE} from "../../constants/routes";
import { TIPS_DESCRIPTION } from "../../constants/description"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    num: {
        width: '20px',
        height: '20px',
        borderRadius: '100px',
        backgroundColor: theme.palette.primary.main,
        textAlign: 'center',
        padding: '3px',
        marginRight: '10px',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    nested: {
      paddingLeft: theme.spacing(10),
    },
    BottomBorder: {
        width: "100%",
        height: "1px",
        backgroundColor: 'lightblue',
    }
}))
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
    const [open, setOpen] = React.useState(true);

    const classes = useStyles();
    const handleClick = (index) => {
        setOpen(!open);
      };

    return (
        <>
            <TitleSource>{TIPS_TITLE}</TitleSource>
            <TitleDescriptionSource>
                {TIPS_DESCRIPTION}
            </TitleDescriptionSource>
            <List>
                {
                tipsList.map((tips, index) => 
     
                    <Accordion key={index}>
                       <AccordionSummary > <span className={classes.num}>{index+1}</span> {tips.title} <ExpandMore /></AccordionSummary>
                    
                        <AccordionDetails>
                            <span >{tips.description}
                            </span>
                        </AccordionDetails>
                    </Accordion>
                    )
                }

            </List>
        </>

    );
}

export default Tips;
