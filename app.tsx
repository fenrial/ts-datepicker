import { format } from 'date-fns';
import * as React from 'react';
import Calendar from './app/containers/calendar';
import { IRangeDateProps } from './app/types';

const App: React.SFC = () => {
    const [currentDate, setDate] = React.useState(new Date());
    const [currentRangeDate, setRangeDate] = React.useState({
        startDate: new Date(),
        endDate: new Date(),
    });
    const formattedDate = format(currentDate, 'dd.MM.yyyy');
    const formattedRangeDate = {
        startDate: format(currentRangeDate.startDate, 'dd.MM.yyyy'),
        endDate: format(currentRangeDate.endDate, 'dd.MM.yyyy'),
    };
    const handleSingleDateChange = (date: Date): Date => {
        setDate(date);
        return date;
    };

    const handleRangeDateChange = ({
        startDate,
        endDate,
    }: IRangeDateProps): IRangeDateProps => {
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
                    <p>{`Выбранная дата: ${formattedDate}`}</p>
                </div>
                <div className="app__calendar">
                    <Calendar
                        mode="range"
                        initialDate={currentRangeDate}
                        onDateChange={handleRangeDateChange}
                    />
                    <p>{`Выбранная дата: ${formattedRangeDate.startDate} - ${formattedRangeDate.endDate}`}</p>
                </div>
            </div>
        </div>
    );
};

export default App;
