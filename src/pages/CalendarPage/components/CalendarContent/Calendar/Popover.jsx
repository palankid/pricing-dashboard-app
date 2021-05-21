import React from "react";
import { Popover as AntdPopover } from "antd";

import Text from "components/Text";

import {
  BreakdownRowStyled,
  ContentWrapper,
  PriceSection,
  DateText,
  FullPriceText,
  PriceBreakdownSection,
  Divider,
} from "./Popover.styled";

const BreakdownRow = ({ price, label, includeSign }) => {
  const sign = price < 0 ? "-" : "+";
  const priceText = `${includeSign ? sign : ""}$${Math.abs(price)}`;

  return (
    <BreakdownRowStyled>
      <Text size="bodySmall">{priceText}</Text>
      <Text size="bodySmall">{label}</Text>
    </BreakdownRowStyled>
  );
};

const popoverContent = (basePrice, day) => (
  <ContentWrapper>
    <PriceSection>
      <DateText size="bodyMedium">January 24, 2020</DateText>
      <FullPriceText size="h1">${day.calculatedPrice}</FullPriceText>
    </PriceSection>

    <PriceBreakdownSection>
      <BreakdownRow price={basePrice} label="Base" />
      <BreakdownRow
        includeSign
        price={day.seasonalPriceAdd}
        label="Seasonality"
      />
      <BreakdownRow
        includeSign
        price={day.dayOfWeekPriceAdd}
        label="Day of week"
      />
      <Divider />
      <BreakdownRow price={day.calculatedPrice} label="Predicted price" />
    </PriceBreakdownSection>
  </ContentWrapper>
);

const Popover = ({ children, basePrice, day }) => {
  return (
    <AntdPopover
      content={popoverContent(basePrice, day)}
      placement="right"
      color="#272727"
    >
      {children}
    </AntdPopover>
  );
};

export default Popover;
