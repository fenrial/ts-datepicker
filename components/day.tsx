import { format } from 'date-fns';
import * as React from 'react';

export interface IDayProps {
    value: Date;
    selectedDay: Date;
    onDateChange: (date: Date) => Date;
    setSelectedDay: (date: Date) => void;
}

const Day: React.SFC<IDayProps> = (props: IDayProps) => {
    const { value, onDateChange, selectedDay, setSelectedDay } = props;

    const onDateChangeHandle = () => {
        onDateChange(value);
        setSelectedDay(value);
    };

    const isSelected =
        format(value, 'dd.MM.yyyy') === format(selectedDay, 'dd.MM.yyyy');

    return (
        <div
            className={`calendar__day ${
                isSelected ? 'calendar__day--selected' : ''
            }`}
            onClick={onDateChangeHandle}
        >
            {format(value, 'd')}
        </div>
    );
};

export default Day;
