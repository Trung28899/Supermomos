import { toastError } from "@/modules/common/utils/toast_helper";

export function convertDateTimeToNumber(
  dateString: string,
  timeString: string
) {
  const [dayString, monthString, yearString] = dateString.split("/");
  const [hoursString, minutesString] = timeString.split(":");

  const day = parseInt(dayString);
  const minutes = parseInt(minutesString);
  const month = parseInt(monthString);
  const year = parseInt(yearString);
  const hours = parseInt(hoursString);

  return {
    day,
    minutes,
    month,
    year,
    hours,
  };
}

export function isDateAndTimeValid(dateString: string, timeString: string) {
  const { day, month, year, hours, minutes } = convertDateTimeToNumber(
    dateString,
    timeString
  );
  let isValid = true;

  if (isNaN(day) || day < 1 || day > 31) isValid = false;
  if (isNaN(month) || month < 1 || month > 12) isValid = false;
  if (isNaN(year)) isValid = false;
  if (isNaN(hours) || hours < 0 || hours > 23) isValid = false;
  if (isNaN(minutes) || minutes < 0 || minutes > 59) isValid = false;

  return isValid;
}

/*
    takes in a date string in this format: DD/MM/YYY and a time format hh:mm 
    and return a time string like this: "2022-10-11T19:00:00+00:00"
*/
export function formatDateAndTime(dateString: string, timeString: string) {
  let isValid = isDateAndTimeValid(dateString, timeString);
  if (!isValid) return "";

  const { day, month, year, hours, minutes } = convertDateTimeToNumber(
    dateString,
    timeString
  );

  const date = new Date(year, month - 1, day, hours, minutes);
  const isoString = date.toISOString();

  return isoString;
}
