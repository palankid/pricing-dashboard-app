// import { getPeople } from "api/people";

export const FETCH_LISTINGS = "DASHBOARD:FETCH_LISTINGS";
export const FETCH_LISTINGS_PROGRESS = "DASHBOARD:FETCH_LISTINGS_PROGRESS";
export const FETCH_LISTINGS_SUCCESS = "DASHBOARD:FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_FAILURE = "DASHBOARD:FETCH_LISTINGS_FAILURE";

export const fetchListings = async (dispatch, filters = {}) => {
  dispatch({ type: FETCH_LISTINGS_PROGRESS });

  try {
    const result = []; //await getPeople(filters);

    dispatch({
      type: FETCH_LISTINGS_SUCCESS,
      payload: result,
    });
  } catch (error) {
    error.name !== "AbortError" && dispatch({ type: FETCH_LISTINGS_FAILURE });
  }
};
