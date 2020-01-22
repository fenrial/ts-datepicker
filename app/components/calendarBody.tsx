import React from 'react';
import Day from './day';

export interface ICalendarBodyProps {
    days: Date[];
    selectedDay: Date;
    onDateChange: (date: Date) => Date;
    setSelectedDay: (date: Date) => void;
}

const CalendarBody: React.FC<ICalendarBodyProps> = (
    props: ICalendarBodyProps
) => {
    const { days, onDateChange, selectedDay, setSelectedDay } = props;

    return (
        <div className="calendar__body">
            {days.map((value: Date) => (
                <Day
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                    onDateChange={onDateChange}
                    value={value}
                    key={value.toString()}
                />
            ))}
        </div>
    );
};

export default CalendarBody;
