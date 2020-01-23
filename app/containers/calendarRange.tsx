import {
    eachDayOfInterval,
    format,
    getDaysInMonth,
    set,
    compareAsc,
} from 'date-fns';
import { ru } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';
import CalendarBody from '../components/calendarBody';
import CalendarHead from '../components/calendarHead';
import { ICalendarRangeProps } from '../types';
import getPrevMonthDays from '../helpers/getPrevMonthDays';

export interface IRangeDateProps {
    startDate: Date;
    endDate: Date;
}

const CalendarRange: React.FC<ICalendarRangeProps> = (
    props: ICalendarRangeProps
) => {
    const { initialDate } = props;
    const [dateToRender, setDateToRender] = useState(
        initialDate.startDate || initialDate.endDate || new Date()
    );
    const [startDate, setStartDate] = useState(dateToRender);
    const [endDate, setEndDate] = useState(initialDate.endDate || null);
    const [isStartDateSelected, setIsStartDateSelected] = useState(false);

    const getDays = (date: Date): Date[] =>
        eachDayOfInterval({
            start: set(date, { date: 1 }),
            end: set(date, { date: getDaysInMonth(date) }),
        });

    const monthName: string = format(dateToRender, 'LLLL', { locale: ru });
    const year: string = format(dateToRender, 'yyyy');
    const prevMonthDays = getPrevMonthDays(dateToRender);
    const days: Date[] = [...prevMonthDays, ...getDays(dateToRender)];
    const range: Date[] = eachDayOfInterval({
        start: compareAsc(startDate, endDate) === 1 ? endDate : startDate,
        end: compareAsc(startDate, endDate) === 1 ? startDate : endDate,
    });

    const setSelectedDay = (date: Date): Date => {
        if (isStartDateSelected) {
            // если выбрали диапазон в обратной порядке, меняем значения местами
            if (compareAsc(startDate, date) === 1) {
                setStartDate(date);
            } else {
                setEndDate(date);
            }
            setIsStartDateSelected(false);
        } else {
            setStartDate(date);
            setEndDate(date);
            setIsStartDateSelected(true);
        }
        return date;
    };

    useEffect(() => {
        props.onDateChange({
            startDate,
            endDate,
        });
    }, [startDate, endDate]);

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
                setSelectedDay={setSelectedDay}
                days={days}
                range={range}
            />
        </div>
    );
};

export default CalendarRange;
