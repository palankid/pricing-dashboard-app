import { fetchListings } from "api/listings";

export const FETCH_LISTINGS = "DASHBOARD:FETCH_LISTINGS";
export const FETCH_LISTINGS_PROGRESS = "DASHBOARD:FETCH_LISTINGS_PROGRESS";
export const FETCH_LISTINGS_SUCCESS = "DASHBOARD:FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_FAILURE = "DASHBOARD:FETCH_LISTINGS_FAILURE";

export const getListings = async (dispatch) => {
  dispatch({ type: FETCH_LISTINGS_PROGRESS });

  try {
    const result = await fetchListings();

    dispatch({
      type: FETCH_LISTINGS_SUCCESS,
      payload: result.listings,
    });
  } catch (error) {
    error.name !== "AbortError" && dispatch({ type: FETCH_LISTINGS_FAILURE });
  }
};
