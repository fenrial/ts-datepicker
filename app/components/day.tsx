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

    const onDateChangeHandle = (): void => {
        onDateChange(value);
        setSelectedDay(value);
    };

    const isSelected =
        format(value, 'dd.MM.yyyy') === format(selectedDay, 'dd.MM.yyyy');

    return (
        <button
            type="button"
            className={`calendar__day ${
                isSelected ? 'calendar__day--selected' : ''
            }`}
            onClick={onDateChangeHandle}
        >
            {format(value, 'd')}
        </button>
    );
};

export default Day;
