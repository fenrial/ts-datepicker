import {
    getDaysInMonth,
    getISODay,
    getMonth,
    set,
    subDays,
    subMonths,
} from 'date-fns';

export const getPrevMonthDays = (date: Date) => {
    const lastPrevMonthDayOfWeek: number = getISODay(
        subDays(set(date, { date: 1 }), 1)
    );

    if (lastPrevMonthDayOfWeek === 7) {
        // елси последний день предыдущего месяца воскресенье, то не выводим
        return [];
    }

    const prevMonth = subMonths(date, 1);
    const prevMonthDaysCount: number = getDaysInMonth(prevMonth);
    const prevMonthDays: Date[] = [];

    for (
        let dayCounter = 0;
        dayCounter < lastPrevMonthDayOfWeek;
        dayCounter++
    ) {
        prevMonthDays.push(
            set(date, {
                month: getMonth(prevMonth),
                date:
                    prevMonthDaysCount -
                    (lastPrevMonthDayOfWeek - 1) +
                    dayCounter,
            })
        );
    }

    return prevMonthDays;
};
