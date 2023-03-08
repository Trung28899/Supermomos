export const convertTimeIntoDateAndTime = (
  timeString: Date | string,
  translate: any
) => {
  const fullTimeDate = new Date(timeString);
  const time = fullTimeDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const month = translate(
    `general.numberToMonth.${fullTimeDate.getMonth() + 1}`
  );
  const date = fullTimeDate.getDate();
  const dayInWeek = translate(
    `general.numberToDayInWeek.${fullTimeDate.getDay()}`
  );

  const fullDateString = `${month} ${date}, ${dayInWeek}`;

  return {
    fullDateString,
    time,
  };
};
