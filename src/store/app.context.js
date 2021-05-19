import { combineContexts } from "utils/store.utils";

import { DashboardContextProvider } from "pages/DashboardPage/store";
import { CalendarContextProvider } from "pages/CalendarPage/store";

const AppContextProvider = combineContexts(
  DashboardContextProvider,
  CalendarContextProvider
);

export default AppContextProvider;
