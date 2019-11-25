import { addMonths, subMonths } from 'date-fns';
import React from 'react';

export interface ICalendarHeadProps {
    changeDate: (date: Date) => void;
    currentDate: Date;
    monthName: string;
    year: string;
}

const CalendarHead: React.FC<ICalendarHeadProps> = props => {
    const { changeDate, currentDate, monthName, year } = props;

    const getNextMonth = () => {
        changeDate(addMonths(currentDate, 1));
    };

    const getPrevMonth = () => {
        changeDate(subMonths(currentDate, 1));
    };

    return (
        <div className="calendar__head">
            <div className="calendar__month-wrap">
                <button
                    className="calendar__control calendar__control--prev"
                    onClick={getPrevMonth}
                />
                <div className="calendar__month-name">{`${monthName}, ${year}`}</div>
                <button
                    className="calendar__control calendar__control--next"
                    onClick={getNextMonth}
                />
            </div>
            <div className="calendar__days-of-week">
                <span className="calendar__weekday">Пн</span>
                <span className="calendar__weekday">Вт</span>
                <span className="calendar__weekday">Ср</span>
                <span className="calendar__weekday">Чт</span>
                <span className="calendar__weekday">Пт</span>
                <span className="calendar__weekday">Сб</span>
                <span className="calendar__weekday">Вс</span>
            </div>
        </div>
    );
};

export default CalendarHead;
