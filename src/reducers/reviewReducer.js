import {
  REVIEW_FAIL,
  REVIEW_REQUEST,
  REVIEW_SUCCESS,
} from "../types/reviewTypes";

const initialState = {
  reviews: [],
  loading: false,
  eror: null,
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        reviews: action.payload,
      };

    case REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
