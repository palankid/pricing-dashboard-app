import React from "react";
import styled from "styled-components";

import BasePriceEditor from "./BasePriceEditor";
import CalendarView from "./CalendarView";

const Container = styled.div`
  margin: 5px;
  background-color: var(--colors-blank);
  border: 1px solid var(--colors-athens-gray);
`;

const CalendarContent = () => {
  return (
    <Container>
      <BasePriceEditor />
      <CalendarView />
    </Container>
  );
};

export default CalendarContent;
