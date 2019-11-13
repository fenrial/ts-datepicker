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
                <div className="calendar__day" key={i}>
                    {value}
                </div>
            ))}
        </div>
    );
};

export default CalendarBody;
