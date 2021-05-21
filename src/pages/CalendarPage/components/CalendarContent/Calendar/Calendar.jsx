import React from "react";
import moment from "moment";

import Popover from "./Popover";

import {
  HeaderTextStyled,
  CalendarStyled,
  DateCell,
  DateText,
  PriceText,
} from "./Calendar.styled";

import { locale } from "./calendar.config";

const headerRenderer = ({ value }) => (
  <HeaderTextStyled size="h5">{value.format("MMMM YYYY")}</HeaderTextStyled>
);

const dateFullCellRender = (basePrice, month, days) => (value) => {
  if (moment(month).month() !== value.month()) return null;

  const day = days[moment(value).format("YYYY-MM-DD")];
  const isValidCell = Boolean(day);
  const cell = (
    <DateCell bgVisible={isValidCell}>
      {day && (
        <>
          <DateText>{value.format("D")}</DateText>
          <PriceText size="h2">$ {day.calculatedPrice}</PriceText>
        </>
      )}
    </DateCell>
  );

  return isValidCell ? (
    <Popover basePrice={basePrice} day={day}>
      {cell}
    </Popover>
  ) : (
    cell
  );
};

const Calendar = ({ basePrice, month, days }) => {
  return (
    <CalendarStyled
      value={moment(month)}
      headerRender={headerRenderer}
      dateFullCellRender={dateFullCellRender(basePrice, month, days)}
      locale={locale}
    />
  );
};

export default Calendar;
