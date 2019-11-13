import { format, getDaysInMonth } from 'date-fns';
import React, { useState } from 'react';
import { getPrevMonthDays } from '../helpers/getPrevMonthDays';
import CalendarBody from './calendarBody';
import CalendarHead from './calendarHead';

// export interface ICalendarProps {}

const Calendar = () => {
    const [dateToRender, setDateToRender] = useState(new Date());

    const getDays = (date: Date): number[] =>
        Array.from(Array(getDaysInMonth(date)).keys(), day => day + 1);

    const monthName: string = format(dateToRender, 'MMMM');
    const year: string = format(dateToRender, 'yyyy');
    const prevMonthDays = getPrevMonthDays(dateToRender);
    const days: number[] = [...prevMonthDays, ...getDays(dateToRender)];
    return (
        <div className={'calendar'}>
            <CalendarHead
                changeDate={setDateToRender}
                currentDate={dateToRender}
                monthName={monthName}
                year={year}
            />
            <CalendarBody days={days} />
        </div>
    );
};

export default Calendar;
