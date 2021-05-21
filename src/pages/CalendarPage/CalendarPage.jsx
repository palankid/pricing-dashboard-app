import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Header from "components/Header";

import {
  calendarActions,
  useCalendarStore,
  useCalendarDispatch,
} from "pages/CalendarPage/store";

import ContentHeader from "./components/ContentHeader";
import CalendarContent from "./components/CalendarContent";

const Container = styled.main`
  margin: 40px auto 40px;
  width: 100%;
  max-width: var(--layout-width);
`;

const CalendarPage = () => {
  const { id } = useParams();
  const store = useCalendarStore();
  const dispatch = useCalendarDispatch();

  console.log(store);

  useEffect(() => {
    calendarActions.getListing(dispatch, id);
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <Container>
        <ContentHeader record={store.listing} />
        <CalendarContent />
      </Container>
    </>
  );
};

export default CalendarPage;
