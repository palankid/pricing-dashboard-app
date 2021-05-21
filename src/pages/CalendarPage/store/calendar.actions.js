import { fetchCalendarDates, updateBasePrice } from "api/listings";
import { transformCalendarDatesPayload } from "./calendar.helper";

export const SET_LISTING = "CALENDAR:SET_LISTING";

export const FETCH_CALENDAR_DATES_PROGRESS =
  "CALENDAR:FETCH_CALENDAR_DATES_PROGRESS";
export const FETCH_CALENDAR_DATES_SUCCESS =
  "CALENDAR:FETCH_CALENDAR_DATES_SUCCESS";
export const FETCH_CALENDAR_DATES_FAILURE =
  "CALENDAR:FETCH_CALENDAR_DATES_FAILURE";

export const SET_PREVIEW_BASE_PRICE = "CALENDAR:SET_PREVIEW_BASE_PRICE";

export const UPDATE_BASE_PRICE_PROGRESS = "CALENDAR:UPDATE_BASE_PRICE_PROGRESS";
export const UPDATE_BASE_PRICE_SUCCESS = "CALENDAR:UPDATE_BASE_PRICE_SUCCESS";
export const UPDATE_BASE_PRICE_FAILURE = "CALENDAR:UPDATE_BASE_PRICE_FAILURE";

export const setListing = (dispatch, listings, id) => {
  const record = listings.find((listing) => listing.id === Number(id));
  dispatch({ type: SET_LISTING, payload: record });
};

export const getCalendarDates = async (dispatch, id) => {
  dispatch({ type: FETCH_CALENDAR_DATES_PROGRESS });

  try {
    const result = await fetchCalendarDates(id);

    dispatch({
      type: FETCH_CALENDAR_DATES_SUCCESS,
      payload: transformCalendarDatesPayload(result),
    });
  } catch (error) {
    error.name !== "AbortError" &&
      dispatch({ type: FETCH_CALENDAR_DATES_FAILURE });
  }
};

export const setPreviewBasePrice = (dispatch, basePrice) => {
  dispatch({ type: SET_PREVIEW_BASE_PRICE, payload: basePrice });
};

export const setBasePrice = async (dispatch, id, basePrice) => {
  dispatch({ type: UPDATE_BASE_PRICE_PROGRESS });

  try {
    await updateBasePrice(id, basePrice);

    dispatch({ type: UPDATE_BASE_PRICE_SUCCESS });

    await getCalendarDates(dispatch, id);
  } catch (error) {
    error.name !== "AbortError" &&
      dispatch({ type: UPDATE_BASE_PRICE_FAILURE });
  }
};
