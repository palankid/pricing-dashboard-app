import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Header from "components/Header";
import ErrorMessage from "components/ErrorMessage";
import LoadingLogo from "components/LoadingLogo";

import {
  calendarActions,
  useCalendarStore,
  useCalendarDispatch,
} from "pages/CalendarPage/store";

import { useDashboardStore } from "pages/DashboardPage/store";

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
  const dashboardStore = useDashboardStore();
  const dispatch = useCalendarDispatch();

  useEffect(() => {
    if (!dashboardStore.listings.length) {
      return;
    }

    calendarActions.setListing(dispatch, dashboardStore.listings, id);
    calendarActions.getCalendarDates(dispatch, id);
  }, [dashboardStore.listings, dispatch, id]);

  const content = {
    [true]: (
      <>
        <ContentHeader record={store.listing} />
        <CalendarContent />
      </>
    ),
    [store.loading || dashboardStore.loading]: <LoadingLogo />,
    [store.error || dashboardStore.error]: <ErrorMessage />,
  };

  return (
    <>
      <Header />
      <Container>{content.true}</Container>
    </>
  );
};

export default CalendarPage;
