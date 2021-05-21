import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "./theme";

import AppContextProvider from "store";

import DashboardPage from "pages/DashboardPage";
import CalendarPage from "pages/CalendarPage";

import "antd/dist/antd.css";
import "theme/fonts/fonts.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContextProvider>
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
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
