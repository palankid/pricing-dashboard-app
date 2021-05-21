import React from "react";
import styled from "styled-components";

import { useCalendarStore } from "pages/CalendarPage/store";

import Calendar from "./Calendar/Calendar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const CalendarView = () => {
  const store = useCalendarStore();

  return (
    <Container>
      {Object.keys(store.days).map((month) => {
        return (
          <Calendar
            key={month}
            basePrice={store.basePrice}
            month={month}
            days={store.days[month]}
          />
        );
      })}
    </Container>
  );
};

export default CalendarView;
