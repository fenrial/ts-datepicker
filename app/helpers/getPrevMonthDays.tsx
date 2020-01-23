import {
    getDaysInMonth,
    getISODay,
    getMonth,
    getYear,
    set,
    subDays,
    subMonths,
} from 'date-fns';

const getPrevMonthDays = (date: Date): Date[] => {
    const lastPrevMonthDayOfWeek: number = getISODay(
        subDays(set(date, { date: 1 }), 1)
    );

    if (lastPrevMonthDayOfWeek === 7) {
        // елси последний день предыдущего месяца воскресенье, то не выводим
        return [];
    }

    const prevMonth: Date = subMonths(date, 1);
    const prevMonthDaysCount: number = getDaysInMonth(prevMonth);
    const prevMonthDays: Date[] = [];

    for (
        let dayCounter = 0;
        dayCounter < lastPrevMonthDayOfWeek;
        dayCounter += 1
    ) {
        prevMonthDays.push(
            set(date, {
                year: getYear(prevMonth),
                month: getMonth(prevMonth),
                date:
                    prevMonthDaysCount -
                    (lastPrevMonthDayOfWeek - 1) +
                    dayCounter,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            })
        );
    }

    return prevMonthDays;
};

export default getPrevMonthDays;
