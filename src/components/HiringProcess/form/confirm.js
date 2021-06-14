import React, {useState} from 'react';
import {BrowserRouter as Router, NavLink, Route, useParams, useRouteMatch,} from 'react-router-dom';
import DateFnsAdapter from "@date-io/date-fns"; //TODO: essayer downgrade cette librairie à la version 1.3.13 pour pouvoir formatter les dates
import { PageDescription } from 'Navigation';
import {HIRING_DESCRIPTION} from "constants/description";
import {FlashyButton, PaperDiv} from "littleComponents";
import { Calendar } from 'tabler-icons-react';

const ConfirmPage = () => {
    return (
        <PaperDiv>
            <h3>{HIRING_DESCRIPTION.CONFIRMATION_SUCCESSFUL}</h3>
            <PageDescription>{HIRING_DESCRIPTION.CONFIRMATION_SUCCESSFUL2}</PageDescription>
            <FlashyButton>
                <Calendar
                    size={20}
                    strokeWidth={1}
                    color={'white'}
                />
                Add to my calendar
            </FlashyButton>
        </PaperDiv>
    )
}

export default ConfirmPage;