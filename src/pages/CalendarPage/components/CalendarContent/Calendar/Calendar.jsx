import React from "react";
import PropTypes from "prop-types";
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

const dateFullCellRender =
  (basePrice, previewBasePrice, month, days) => (value) => {
    if (moment(month).month() !== value.month()) return null;

    const day = days[moment(value).format("YYYY-MM-DD")];
    const isValidCell = Boolean(day);
    const shouldShowPopover = isValidCell && !previewBasePrice;
    const isBlocked = isValidCell && !previewBasePrice ? day.isBlocked : false;
    const displayPrice = previewBasePrice || day?.calculatedPrice;

    const cell = (
      <DateCell bgVisible={isValidCell} isBlocked={isBlocked}>
        {isValidCell && (
          <>
            <DateText isBlocked={isBlocked}>{value.format("D")}</DateText>
            <PriceText size="h2" isBlocked={isBlocked}>
              $ {displayPrice}
            </PriceText>
          </>
        )}
      </DateCell>
    );

    return shouldShowPopover ? (
      <Popover basePrice={basePrice} day={day}>
        {cell}
      </Popover>
    ) : (
      cell
    );
  };

const Calendar = ({ basePrice, previewBasePrice, month, days }) => {
  return (
    <CalendarStyled
      value={moment(month)}
      headerRender={headerRenderer}
      dateFullCellRender={dateFullCellRender(
        basePrice,
        previewBasePrice,
        month,
        days
      )}
      locale={locale}
    />
  );
};

Calendar.propTypes = {
  basePrice: PropTypes.number.isRequired,
  previewBasePrice: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  days: PropTypes.object.isRequired,
};

export default Calendar;
