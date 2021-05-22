import React, { useMemo } from "react";
import { Button } from "antd";

import { debounce } from "utils/functions.utils";
import {
  useCalendarStore,
  useCalendarDispatch,
  calendarActions,
} from "pages/CalendarPage/store";

import {
  Container,
  Content,
  InputWrapper,
  CurrencySign,
  TextStyled,
  InputStyled,
} from "./BasePriceEditor.styled";

const BasePriceEditor = () => {
  const store = useCalendarStore();
  const dispatch = useCalendarDispatch();

  const debouncedOnChange = useMemo(
    () =>
      debounce((nextValue) => {
        calendarActions.setPreviewBasePrice(dispatch, nextValue || 0);
      }, 500),
    [dispatch]
  );

  const handleClick = () => {
    calendarActions.setBasePrice(
      dispatch,
      store.listing.id,
      store.previewBasePrice
    );
  };

  return (
    <Container>
      <Content>
        <TextStyled size="bodySmallBold">Base Price</TextStyled>
        <InputWrapper>
          <CurrencySign>$</CurrencySign>
          <InputStyled
            min={1}
            maxLength={5}
            defaultValue={store.basePrice}
            onChange={debouncedOnChange}
          />
          <Button disabled={!store.previewBasePrice} onClick={handleClick}>
            Set new base price
          </Button>
        </InputWrapper>
      </Content>
    </Container>
  );
};

export default BasePriceEditor;
