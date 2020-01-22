import { eachDayOfInterval, format, getDaysInMonth, set } from 'date-fns';
import { ru } from 'date-fns/locale';
import React, { useState } from 'react';
import CalendarBody from '../components/calendarBody';
import CalendarHead from '../components/calendarHead';
import { ICalendarRangeProps } from '../types';
import getPrevMonthDays from '../helpers/getPrevMonthDays';

const CalendarRange: React.FC<ICalendarRangeProps> = (
    props: ICalendarRangeProps
) => {
    const { initialDate } = props;
    const [dateToRender, setDateToRender] = useState(
        initialDate.startDate || initialDate.endDate || new Date()
    );
    const [startDate, setStartDate] = useState(dateToRender);
    const [endDate, setEndDate] = useState(initialDate.endDate || null);
    const [isStartDateSelected, setIsStartDateSelected] = useState(!!startDate);

    const getDays = (date: Date): Date[] =>
        eachDayOfInterval({
            start: set(date, { date: 1 }),
            end: set(date, { date: getDaysInMonth(date) }),
        });

    const monthName: string = format(dateToRender, 'LLLL', { locale: ru });
    const year: string = format(dateToRender, 'yyyy');
    const prevMonthDays = getPrevMonthDays(dateToRender); // если 1 день месяца понедельник, то не выводим предудыщие дни
    const days: Date[] = [...prevMonthDays, ...getDays(dateToRender)];

    const onDateChange = (date: Date): Date => {
        if (isStartDateSelected) {
            setEndDate(date);
            setIsStartDateSelected(false);
        } else {
            setStartDate(date);
            setIsStartDateSelected(true);
        }

        props.onDateChange({
            startDate,
            endDate,
        });

        return date;
    };

    return (
        <div className="calendar">
            <CalendarHead
                changeDate={setDateToRender}
                currentDate={dateToRender}
                monthName={monthName}
                year={year}
            />
            <CalendarBody
                selectedDay={startDate}
                setSelectedDay={setStartDate}
                onDateChange={onDateChange}
                days={days}
            />
        </div>
    );
};

export default CalendarRange;
