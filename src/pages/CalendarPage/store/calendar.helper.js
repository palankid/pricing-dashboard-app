import moment from "moment";

export const transformCalendarDatesPayload = ({ basePrice, days }) => {
  const transformedDays = days.reduce(
    (acc, { date, factors: { seasonal, dayOfWeek }, isBlocked }) => {
      const seasonalPriceFactor = basePrice * seasonal;
      const dayOfWeekPriceFactor = basePrice * dayOfWeek;
      const calculatedPrice =
        basePrice + seasonalPriceFactor + dayOfWeekPriceFactor;

      const month = moment(date).format("YYYY-MM");

      acc[month] = acc[month] || {};
      acc[month][date] = {
        isBlocked,
        seasonalPriceFactor: Math.round(seasonalPriceFactor),
        dayOfWeekPriceFactor: Math.round(dayOfWeekPriceFactor),
        calculatedPrice: Math.round(calculatedPrice),
      };

      return acc;
    },
    {}
  );

  return {
    basePrice,
    days: transformedDays,
  };
};
