import { format } from 'date-fns';
import * as React from 'react';

export interface IDayProps {
    value: Date;
    onDateChange: (date: Date) => Date;
}

const Day: React.SFC<IDayProps> = (props: IDayProps) => {
    const { value, onDateChange } = props;

    const onDateChangeHandle = () => {
        onDateChange(value);
    };

    return (
        <div className="calendar__day" onClick={onDateChangeHandle}>
            {format(value, 'd')}
        </div>
    );
};

export default Day;
