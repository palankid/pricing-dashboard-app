import React from "react";
import styled from "styled-components";
import { Input } from "antd";

import Text from "components/Text";
import { useCalendarStore } from "pages/CalendarPage/store";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-bottom: 1px solid var(--colors-athens-gray);
`;

const InputWrapper = styled.div``;

const TextStyled = styled(Text)`
  color: var(--colors-boulder);
  text-transform: uppercase;
`;

const InputStyled = styled(Input)`
  display: block;
  margin-top: 10px;
  width: 200px;
`;

const BasePriceEditor = () => {
  const store = useCalendarStore();

  return (
    <Container>
      <InputWrapper>
        <TextStyled size="bodySmallBold">Base Price</TextStyled>
        <InputStyled addonBefore="$" defaultValue={store.basePrice} />
      </InputWrapper>
    </Container>
  );
};

export default BasePriceEditor;
