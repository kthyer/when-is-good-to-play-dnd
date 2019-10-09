import { Month, Weekday } from "../constants/date";
import {
  addWeeks,
  format,
  getDay,
  isSameDay,
  setDay,
  setMonth,
  startOfMonth
} from "date-fns";

export const getNthWeekdayOfMonth = (
  date: Date,
  week: number,
  weekday: number,
  month: number
): Date => {
  const newDate = setMonth(date, month);
  const firstDayOfMonth = startOfMonth(newDate);
  let weekStartsOn: any = getDay(firstDayOfMonth);
  const firstSpecifiedWeekday = setDay(firstDayOfMonth, weekday, {
    weekStartsOn
  });
  const nthWeekday = addWeeks(firstSpecifiedWeekday, week - 1);

  return nthWeekday;
};

export const getHoliday = (date: Date): string => {
  const formattedDate = format(date, "MM/dd");

  switch (formattedDate) {
    case "01/01":
      return "newYearsDay";
    case "02/14":
      return "valentinesDay";
    case "07/04":
      return "independenceDay";
    case "10/31":
      return "halloween";
    case "11/11":
      return "veteransDay";
    case "12/25":
      return "christmas";
    case "12/31":
      return "newYearsEve";
  }

  if (
    isSameDay(
      getNthWeekdayOfMonth(date, 3, Weekday.MONDAY, Month.JANUARY),
      date
    )
  ) {
    return "MLKDay";
  }

  if (
    isSameDay(
      getNthWeekdayOfMonth(date, 3, Weekday.MONDAY, Month.FEBRUARY),
      date
    )
  ) {
    return "georgeWashingtonsBirthday";
  }

  if (
    isSameDay(
      getNthWeekdayOfMonth(date, 1, Weekday.MONDAY, Month.SEPTEMBER),
      date
    )
  ) {
    return "laborDay";
  }

  if (
    isSameDay(
      getNthWeekdayOfMonth(date, 2, Weekday.MONDAY, Month.OCTOBER),
      date
    )
  ) {
    return "columbusDay";
  }

  if (
    isSameDay(
      getNthWeekdayOfMonth(date, 4, Weekday.THURSDAY, Month.NOVEMBER),
      date
    )
  ) {
    return "thanksgiving";
  }

  return "";
};
