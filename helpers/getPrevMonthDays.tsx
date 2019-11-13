import { getDaysInMonth, getISODay, set, subDays, subMonths } from 'date-fns';

export const getPrevMonthDays = (date: Date) => {
    const lastPrevMonthDayOfWeek: number = getISODay(
        subDays(set(date, { date: 1 }), 1)
    );

    const prevMonthDaysCount: number = getDaysInMonth(subMonths(date, 1));
    const prevMonthDays: number[] = [];

    for (
        let dayCounter = 0;
        dayCounter < lastPrevMonthDayOfWeek;
        dayCounter++
    ) {
        prevMonthDays.push(
            prevMonthDaysCount - (lastPrevMonthDayOfWeek - 1) + dayCounter
        );
    }
    return prevMonthDays;
};
