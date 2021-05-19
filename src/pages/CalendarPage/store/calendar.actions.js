// import { getPeople } from "api/people";

export const FETCH_LISTING = "CALENDAR:FETCH_LISTING";
export const FETCH_LISTING_PROGRESS = "CALENDAR:FETCH_LISTING_PROGRESS";
export const FETCH_LISTING_SUCCESS = "CALENDAR:FETCH_LISTING_SUCCESS";
export const FETCH_LISTING_FAILURE = "CALENDAR:FETCH_LISTING_FAILURE";

export const fetchListing = async (dispatch, filters = {}) => {
  dispatch({ type: FETCH_LISTING_PROGRESS });

  try {
    const result = []; //await getPeople(filters);

    dispatch({
      type: FETCH_LISTING_SUCCESS,
      payload: result,
    });
  } catch (error) {
    error.name !== "AbortError" && dispatch({ type: FETCH_LISTING_FAILURE });
  }
};
