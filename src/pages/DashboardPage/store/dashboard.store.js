import { createStore } from "utils/store.utils";

import dashboardReducer from "./dashboard.reducer";
import * as dashboardActions from "./dashboard.actions";

export const initialState = {
  listings: [],
  loading: false,
  error: false,
};

const [DashboardContextProvider, useDashboardStore, useDashboardDispatch] =
  createStore(dashboardReducer, initialState);

export {
  DashboardContextProvider,
  useDashboardStore,
  useDashboardDispatch,
  dashboardActions,
};
