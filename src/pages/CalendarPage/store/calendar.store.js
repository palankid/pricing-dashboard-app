import { createStore } from "utils/store.utils";

import calendarReducer from "./calendar.reducer";
import * as calendarActions from "./calendar.actions";

export const initialState = {
  days: {},
  listing: {},
  loading: false,
  error: false,
};

const [CalendarContextProvider, useCalendarStore, useCalendarDispatch] =
  createStore(calendarReducer, initialState);

export {
  CalendarContextProvider,
  useCalendarStore,
  useCalendarDispatch,
  calendarActions,
};
