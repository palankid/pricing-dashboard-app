import {
  SET_LISTING,
  FETCH_CALENDAR_DATES_SUCCESS,
  FETCH_CALENDAR_DATES_PROGRESS,
  FETCH_CALENDAR_DATES_FAILURE,
  SET_PREVIEW_BASE_PRICE,
  UPDATE_BASE_PRICE_PROGRESS,
  UPDATE_BASE_PRICE_FAILURE,
} from "./calendar.actions";

const dashboardReducer = (state, action) => {
  switch (action.type) {
    case SET_LISTING:
      return {
        ...state,
        listing: action.payload,
      };
    case FETCH_CALENDAR_DATES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        previewBasePrice: 0,
        loading: false,
        error: false,
      };
    case FETCH_CALENDAR_DATES_PROGRESS:
      return {
        ...state,
        basePrice: null,
        days: {},
        loading: true,
        error: false,
      };
    case FETCH_CALENDAR_DATES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case SET_PREVIEW_BASE_PRICE:
      return {
        ...state,
        previewBasePrice: action.payload,
      };
    case UPDATE_BASE_PRICE_PROGRESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPDATE_BASE_PRICE_FAILURE:
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
