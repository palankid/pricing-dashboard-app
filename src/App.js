import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "./theme";

import {
  dashboardActions,
  useDashboardStore,
  useDashboardDispatch,
} from "pages/DashboardPage/store";

import DashboardPage from "pages/DashboardPage";
import CalendarPage from "pages/CalendarPage";

import "antd/dist/antd.css";
import "theme/fonts/fonts.css";

function App() {
  const { listings, loading, error } = useDashboardStore();
  const dispatch = useDashboardDispatch();

  useEffect(() => {
    if (!listings.length && !loading && !error) {
      dashboardActions.getListings(dispatch);
    }
  }, [listings, loading, error, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/calendar/:id">
            <CalendarPage />
          </Route>
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
