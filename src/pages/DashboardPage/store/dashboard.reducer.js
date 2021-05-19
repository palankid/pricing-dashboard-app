import {
  FETCH_LISTINGS_PROGRESS,
  FETCH_LISTINGS_SUCCESS,
  FETCH_LISTINGS_FAILURE,
} from "./dashboard.actions";

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case FETCH_LISTINGS_SUCCESS:
      return {
        ...state,
        listings: action.payload,
        loading: false,
        error: false,
      };
    case FETCH_LISTINGS_PROGRESS:
      return {
        ...state,
        listings: [],
        loading: true,
        error: false,
      };
    case FETCH_LISTINGS_FAILURE:
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
