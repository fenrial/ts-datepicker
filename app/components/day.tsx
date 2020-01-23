import { format, isEqual } from 'date-fns';
import * as React from 'react';

export interface IDayProps {
    value: Date;
    selectedDay: Date;
    range?: Date[];
    setSelectedDay: (date: Date) => void;
}

const Day: React.SFC<IDayProps> = (props: IDayProps) => {
    const { value, selectedDay, setSelectedDay, range } = props;

    const onDateChangeHandle = (): void => {
        setSelectedDay(value);
    };

    const isSelected =
        format(value, 'dd.MM.yyyy') === format(selectedDay, 'dd.MM.yyyy');
    const inRange =
        typeof range !== 'undefined' && range.some(day => isEqual(day, value));

    return (
        <button
            type="button"
            className={`calendar__day 
            ${isSelected ? 'calendar__day--selected' : ''}
            ${inRange ? 'calendar__day--inrange' : ''}`}
            onClick={onDateChangeHandle}
        >
            {format(value, 'd')}
        </button>
    );
};

export default Day;
