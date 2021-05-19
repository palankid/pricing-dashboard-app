import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AppContextProvider from "store";

import DashboardPage from "pages/DashboardPage";
import CalendarPage from "pages/CalendarPage";

import "App.css";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
