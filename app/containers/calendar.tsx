import * as React from 'react';
import CalendarRange from './calendarRange';
import CalendarSingle from './calendarSingle';
import { ICalendarSingleProps, ICalendarRangeProps } from '../types';

type CalendarProps = ICalendarSingleProps | ICalendarRangeProps;

const isCalendarRange = (
    props: CalendarProps
): props is ICalendarRangeProps => {
    return (
        (props as ICalendarRangeProps).initialDate.startDate !== undefined &&
        props.mode === 'range'
    );
};

const isCalendarSingle = (
    props: CalendarProps
): props is ICalendarSingleProps => {
    return props.initialDate instanceof Date && props.mode === 'single';
};

const RootCalendar: React.SFC<CalendarProps> = (props: CalendarProps) => {
    if (isCalendarRange(props)) {
        const { initialDate, onDateChange, mode } = props;
        return (
            <CalendarRange
                mode={mode}
                initialDate={initialDate}
                onDateChange={onDateChange}
            />
        );
    }

    if (isCalendarSingle(props)) {
        const { initialDate, onDateChange, mode } = props;
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
