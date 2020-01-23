import React from 'react';
import Day from './day';

export interface ICalendarBodyProps {
    days: Date[];
    range?: Date[];
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
}

const CalendarBody: React.FC<ICalendarBodyProps> = (
    props: ICalendarBodyProps
) => {
    const { days, selectedDay, setSelectedDay, range } = props;

    return (
        <div className="calendar__body">
            {days.map((value: Date) => (
                <Day
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    value={value}
                    range={range}
                    key={value.toString()}
                />
            ))}
        </div>
    );
};

export default CalendarBody;
