import { eachDayOfInterval, format, getDaysInMonth, set } from 'date-fns';
import { ru } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';
import CalendarBody from '../components/calendarBody';
import CalendarHead from '../components/calendarHead';
import getPrevMonthDays from '../helpers/getPrevMonthDays';
import { ICalendarSingleProps } from '../types';

const CalendarSingle: React.FC<ICalendarSingleProps> = (
    props: ICalendarSingleProps
) => {
    const { initialDate, onDateChange } = props;
    const [dateToRender, setDateToRender] = useState(initialDate || new Date());
    const [selectedDay, setSelectedDay] = useState(dateToRender);

    const getDays = (date: Date): Date[] =>
        eachDayOfInterval({
            start: set(date, { date: 1 }),
            end: set(date, { date: getDaysInMonth(date) }),
        });

    const monthName: string = format(dateToRender, 'LLLL', { locale: ru });
    const year: string = format(dateToRender, 'yyyy');
    const prevMonthDays = getPrevMonthDays(dateToRender); // если 1 день месяца понедельник, то не выводим предудыщие дни
    const days: Date[] = [...prevMonthDays, ...getDays(dateToRender)];

    useEffect(() => {
        onDateChange(selectedDay);
    }, [selectedDay]);

    return (
        <div className="calendar">
            <CalendarHead
                changeDate={setDateToRender}
                currentDate={dateToRender}
                monthName={monthName}
                year={year}
            />
            <CalendarBody
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                days={days}
            />
        </div>
    );
};

export default CalendarSingle;
