import React, {useState} from 'react';
import MomentUtils from '@date-io/moment';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const filterWeekends = (date) => {
    const day = date.day()
    return day() !== 0 && day() !== 6
}




function CalendarPage(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
    };


    return (
        <div>

            <MuiPickersUtilsProvider utils={MomentUtils}>

                    <DatePicker
                        label="Select your day"

                        value={selectedDate}
                        onChange={handleDateChange}
                        inputVariant="outlined"
                        disablePast
                        showTodayButton

                    />

            </MuiPickersUtilsProvider>

        </div>
    );
}

export default CalendarPage;
