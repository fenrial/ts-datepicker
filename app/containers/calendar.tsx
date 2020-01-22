import * as React from 'react';
import CalendarRange from './calendarRange';
import CalendarSingle from './calendarSingle';
import {
    ICalendarSingleProps,
    ICalendarRangeProps,
    IRangeDateProps,
} from '../types';

type CalendarProps = ICalendarSingleProps | ICalendarRangeProps;

const isCalendarRange = (
    initialDate: IRangeDateProps
): initialDate is IRangeDateProps => {
    return (initialDate as IRangeDateProps).startDate instanceof Date;
};

const isCalendarSingle = (initialDate: Date): initialDate is Date => {
    return initialDate instanceof Date;
};

const RootCalendar: React.SFC<CalendarProps> = (props: CalendarProps) => {
    const { initialDate, onDateChange, mode } = props;
    // TODO: допилить
    if (isCalendarRange(initialDate)) {
        return (
            <CalendarRange
                mode={mode}
                initialDate={initialDate}
                onDateChange={onDateChange}
            />
        );
    }

    if (isCalendarSingle(initialDate)) {
        return (
            <CalendarSingle
                mode={mode}
                initialDate={initialDate}
                onDateChange={onDateChange}
            />
        );
    }

    return null;
};

export default RootCalendar;
