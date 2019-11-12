import { getDaysInMonth } from "date-fns";
import React from "react";
import CalendarBody from "./calendarBody";
import CalendarHead from "./calendarHead";

// export interface ICalendarProps {}

const Calendar = props => {
  const getDays = (date: Date): number[] =>
    Array.from(Array(getDaysInMonth(date)).keys(), day => day + 1);

  const days = getDays(new Date());

  return (
    <div className={"calendar"}>
      <CalendarHead />
      <CalendarBody days={days} />
    </div>
  );
};

export default Calendar;
