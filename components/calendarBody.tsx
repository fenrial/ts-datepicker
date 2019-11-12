import * as React from 'react';

interface Days {
    [index: number]: number 
}

export interface CalendarBodyProps {
    days: Array<Days>,
}
 
const CalendarBody: React.FC<CalendarBodyProps> = (props: CalendarBodyProps) => {
    const { days } = props;
    
    return (
        <div className="calendar__body">
            {days.map((value: Days, i: Number) => (
                <button className="calendar__day" key={i}>
                    {value}
                </button>
            ))}
        </div>
);
}
 
export default CalendarBody;