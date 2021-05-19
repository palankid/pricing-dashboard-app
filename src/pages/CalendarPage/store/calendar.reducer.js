import {
  FETCH_LISTING_PROGRESS,
  FETCH_LISTING_SUCCESS,
  FETCH_LISTING_FAILURE,
} from "./calendar.actions";

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case FETCH_LISTING_PROGRESS:
      return {
        ...state,
        listing: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_LISTING_SUCCESS:
      return {
        ...state,
        listing: {},
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
