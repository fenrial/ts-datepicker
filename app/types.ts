export interface IRangeDateProps {
    startDate: Date;
    endDate: Date;
}

export interface ICalendarRangeProps {
    onDateChange: (date: IRangeDateProps) => IRangeDateProps;
    initialDate: IRangeDateProps;
    mode: string;
}

export interface ICalendarSingleProps {
    onDateChange: (date: Date) => Date;
    initialDate: Date;
    mode: string;
}
