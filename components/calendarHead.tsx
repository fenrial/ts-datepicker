import { addMonths, subMonths } from 'date-fns';
import React from 'react';

export interface ICalendarHeadProps {
    changeDate: (date: Date) => void;
    currentDate: Date;
    monthName: string;
    year: string;
}

const CalendarHead: React.SFC<ICalendarHeadProps> = props => {
    const { changeDate, currentDate, monthName, year } = props;

    const getNextMonth = () => {
        changeDate(addMonths(currentDate, 1));
    };

    const getPrevMonth = () => {
        changeDate(subMonths(currentDate, 1));
    };

    return (
        <div className="calendar__head">
            <button className="calendar__prev-month" onClick={getPrevMonth}>
                prev
            </button>
            <div className="calendar__month-name">{`${monthName}, ${year}`}</div>
            <button className="calendar__next-month" onClick={getNextMonth}>
                next
            </button>
        </div>
    );
};

export default CalendarHead;
