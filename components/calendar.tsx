import { format, getDaysInMonth } from 'date-fns';
import React, { useState } from 'react';
import CalendarBody from './calendarBody';
import CalendarHead from './calendarHead';

// export interface ICalendarProps {}

const Calendar = () => {
    const [dateToRender, setDateToRender] = useState(new Date());

    const getDays = (date: Date): number[] =>
        Array.from(Array(getDaysInMonth(date)).keys(), day => day + 1);

    const monthName = format(dateToRender, 'MMMM');
    const year = format(dateToRender, 'yyyy');

    return (
        <div className={'calendar'}>
            <CalendarHead
                changeDate={setDateToRender}
                currentDate={dateToRender}
                monthName={monthName}
                year={year}
            />
            <CalendarBody days={getDays(dateToRender)} />
        </div>
    );
};

export default Calendar;
