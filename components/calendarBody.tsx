import * as React from 'react';
import Day from './day';

export interface ICalendarBodyProps {
    days: Date[];
    onDateChange: (date: Date) => Date;
}

const CalendarBody: React.FC<ICalendarBodyProps> = (
    props: ICalendarBodyProps
) => {
    const { days, onDateChange } = props;

    return (
        <div className="calendar__body">
            {days.map((value: Date, i: number) => (
                <Day onDateChange={onDateChange} value={value} key={i} />
            ))}
        </div>
    );
};

export default CalendarBody;
