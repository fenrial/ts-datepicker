import * as React from 'react';

export interface CalendarHeadProps {
    
}
 
const CalendarHead: React.SFC<CalendarHeadProps> = (props) => {
    return (
        <div className="calendar__head">
            <button className="calendar__prev-month">prev</button>
            <div className="calendar__month-name">January</div>
            <button className="calendar__next-month">next</button>
        </div>
    );
}
 
export default CalendarHead;