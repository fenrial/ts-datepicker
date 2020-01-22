import { format } from 'date-fns';
import * as React from 'react';
import Calendar from './app/containers/calendar';

const App: React.SFC = () => {
    const [currentDate, setDate] = React.useState(new Date());
    const [currentRangeDate, setRangeDate] = React.useState({
        startDate: new Date(),
        endDate: new Date(),
    });
    const formattedDate = format(currentDate, 'dd.MM.yyyy');

    const handleSingleDateChange = (date: Date): Date => {
        setDate(date);
        return date;
    };

    const handleRangeDateChange = ({
        startDate,
        endDate,
    }: {
        startDate: Date;
        endDate: Date;
    }): { startDate: Date; endDate: Date } => {
        setRangeDate({ startDate, endDate });
        return { startDate, endDate };
    };

    return (
        <div className="app">
            <div className="app__wrap">
                <div className="app__calendar">
                    <Calendar
                        mode="single"
                        initialDate={currentDate}
                        onDateChange={handleSingleDateChange}
                    />
                </div>
                <div className="app__calendar">
                    <Calendar
                        mode="range"
                        initialDate={currentRangeDate}
                        onDateChange={handleRangeDateChange}
                    />
                </div>
            </div>
            <p>{`Выбранная дата: ${formattedDate}`}</p>
        </div>
    );
};

export default App;
