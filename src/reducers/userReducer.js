import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../types/userTypes";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        user: {},
        loading: action.payload,
        error: null,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        user: {},
        error: action.payload,
        loading: false,
      };

    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
