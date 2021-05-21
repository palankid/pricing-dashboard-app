import {
  SET_LISTING,
  FETCH_LISTING_PROGRESS,
  FETCH_LISTING_SUCCESS,
  FETCH_LISTING_FAILURE,
} from "./calendar.actions";

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case SET_LISTING:
      return {
        ...state,
        listing: action.payload,
      };
    case FETCH_LISTING_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: false,
      };
    case FETCH_LISTING_PROGRESS:
      return {
        ...state,
        basePrice: null,
        days: {},
        loading: true,
        error: false,
      };
    case FETCH_LISTING_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
