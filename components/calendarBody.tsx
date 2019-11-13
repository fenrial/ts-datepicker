import * as React from 'react';

export interface ICalendarBodyProps {
    days: number[];
}

const CalendarBody: React.FC<ICalendarBodyProps> = (
    props: ICalendarBodyProps
) => {
    const { days } = props;

    return (
        <div className="calendar__body">
            {days.map((value: number, i: number) => (
                <button className="calendar__day" key={i}>
                    {value}
                </button>
            ))}
        </div>
    );
};

export default CalendarBody;
