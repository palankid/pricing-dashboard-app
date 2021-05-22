import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "./theme";

import {
  dashboardActions,
  useDashboardDispatch,
} from "pages/DashboardPage/store";

import DashboardPage from "pages/DashboardPage";
import CalendarPage from "pages/CalendarPage";

import "antd/dist/antd.css";
import "theme/fonts/fonts.css";

function App() {
  const dispatch = useDashboardDispatch();

  useEffect(() => dashboardActions.getListings(dispatch), [dispatch]);

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
