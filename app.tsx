 import React from 'react';
import { getDaysInMonth } from 'date-fns';

export interface AppProps {
    
}


const App: React.SFC<AppProps> = (props) => {
    const renderDays = () => {
        const days: Array<Number> = Array.from(Array(getDaysInMonth(new Date)).keys(), day => day + 1);
        
        return days.map((day: Number, i: Number) => (
                <button className="calendar__day" key={i}>
                    {day}
                </button>
            ))
        
    }
    
    return (
        <div className={"calendar"}>
            <div className="calendar__head">
                <button className="calendar__prev-month">prev</button>
                <div className="calendar__month-name">January</div>
                <button className="calendar__next-month">next</button>
            </div>
            <div className="calendar__days-wrapper">
                {renderDays()}
            </div>
        </div>
    );
}
 
export default App;
