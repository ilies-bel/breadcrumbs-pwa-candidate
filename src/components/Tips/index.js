import React from 'react';
import {TitleSource} from 'Navigation/titleContext'
import { TitleDescriptionSource } from 'Navigation/descriptionContext';
import {TIPS, TIPS_TITLE} from "constants/routes";
import { TIPS_DESCRIPTION } from "constants/description"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import CircularProgress from '@material-ui/core/CircularProgress';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useGetTips } from 'utils/axios';

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

const Tips = () => {
    const [{ data, loading, error }, refetch] = useGetTips();
    const [open, setOpen] = React.useState(true);

    const classes = useStyles();

    if (loading) return <CircularProgress />
    if (error) return <strong>Error. No data found</strong>

    return (
        <>
            <TitleSource>{TIPS_TITLE}</TitleSource>
            <TitleDescriptionSource>
                {TIPS_DESCRIPTION}
            </TitleDescriptionSource>
            
                {
                data.map((tips, index) =>
                    <Accordion key={index}>
                       <AccordionSummary > <span className={classes.num}>{index+1}</span> {tips.title} <ExpandMore /></AccordionSummary>
                        <AccordionDetails>
                            <span >{tips.description}
                            </span>
                        </AccordionDetails>
                    </Accordion>
                    )
                }
        </>

    );
}

export default Tips;
