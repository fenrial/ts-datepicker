import { eachDayOfInterval, format, getDaysInMonth, set } from 'date-fns';
import { ru } from 'date-fns/locale';
import React, { useState } from 'react';
import { getPrevMonthDays } from '../helpers/getPrevMonthDays';
import CalendarBody from './calendarBody';
import CalendarHead from './calendarHead';

export interface ICalendarProps {
    onDateChange: (date: Date) => Date;
    initialDate: Date;
}

const Calendar: React.FC<ICalendarProps> = (props: ICalendarProps) => {
    const { initialDate } = props;
    const [dateToRender, setDateToRender] = useState(initialDate || new Date());

    const getDays = (date: Date): Date[] =>
        eachDayOfInterval({
            start: set(date, { date: 1 }),
            end: set(date, { date: getDaysInMonth(date) }),
        });

    const monthName: string = format(dateToRender, 'LLLL', { locale: ru });
    const year: string = format(dateToRender, 'yyyy');
    const prevMonthDays = getPrevMonthDays(dateToRender); // если 1 день месяца понедельник, то не выводим предудыщие дни
    const days: Date[] = [...prevMonthDays, ...getDays(dateToRender)];

    return (
        <div className={'calendar'}>
            <CalendarHead
                changeDate={setDateToRender}
                currentDate={dateToRender}
                monthName={monthName}
                year={year}
            />
            <CalendarBody
                onDateChange={props.onDateChange}
                days={days}
                currentDate={dateToRender}
            />
        </div>
    );
};

export default Calendar;