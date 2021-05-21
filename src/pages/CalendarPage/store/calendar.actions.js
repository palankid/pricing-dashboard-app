import moment from "moment";

import { fetchListing } from "api/listings";

export const SET_LISTING = "CALENDAR:SET_LISTING";

export const FETCH_LISTING = "CALENDAR:FETCH_LISTING";
export const FETCH_LISTING_PROGRESS = "CALENDAR:FETCH_LISTING_PROGRESS";
export const FETCH_LISTING_SUCCESS = "CALENDAR:FETCH_LISTING_SUCCESS";
export const FETCH_LISTING_FAILURE = "CALENDAR:FETCH_LISTING_FAILURE";

export const setListing = (dispatch, record) => {
  dispatch({ type: SET_LISTING, payload: record });
};

export const getListing = async (dispatch, id) => {
  dispatch({ type: FETCH_LISTING_PROGRESS });

  try {
    const result = await fetchListing(id);

    console.warn(result.days);
    dispatch({
      type: FETCH_LISTING_SUCCESS,
      payload: {
        basePrice: result.basePrice,
        days: result.days.reduce(
          (acc, { date, factors: { seasonal, dayOfWeek }, isBlocked }) => {
            const seasonalPriceAdd = result.basePrice * seasonal;
            const dayOfWeekPriceAdd = result.basePrice * dayOfWeek;
            const calculatedPrice =
              result.basePrice + seasonalPriceAdd + dayOfWeekPriceAdd;

            const month = moment(date).format("YYYY-MM");

            acc[month] = acc[month] || {};
            acc[month][date] = {
              isBlocked,
              seasonalPriceAdd: Math.round(seasonalPriceAdd),
              dayOfWeekPriceAdd: Math.round(dayOfWeekPriceAdd),
              calculatedPrice: Math.round(calculatedPrice),
            };

            return acc;
          },
          {}
        ),
      },
    });
  } catch (error) {
    error.name !== "AbortError" && dispatch({ type: FETCH_LISTING_FAILURE });
  }
};
