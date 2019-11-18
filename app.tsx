import { format } from 'date-fns';
import * as React from 'react';
import Calendar from './components/calendar';

const App: React.SFC = () => {
    const [date, setDate] = React.useState(new Date());
    const formattedDate = format(date, 'dd.MM.yyyy');
    const handleDateChange = (selectedDate: Date) => {
        setDate(selectedDate);
        return selectedDate;
    };

    return (
        <div className="app">
            <div className="app__calendar">
                <Calendar initialDate={date} onDateChange={handleDateChange} />
            </div>
            <p>{`Выбранная дата: ${formattedDate}`}</p>
        </div>
    );
};

export default App;
