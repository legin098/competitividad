import {
  OFERTA_REQUEST,
  OFERTA_SUCCESS,
  OFERTA_FAIL,
  OFERTA_CREATE_REVIEW_FAIL,
  OFERTA_CREATE_REVIEW_REQUEST,
  OFERTA_CREATE_REVIEW_RESET,
  OFERTA_CREATE_REVIEW_SUCCESS,
  OBTENER_OFERTA_DETAIL
} from "../types/ofertaTypes";

const initialState = {
  ofertas: [],
  loading: false,
  error: null,
  ofertaDetail : {}
};

export const ofertasReducer = (state=initialState, action) => {
    switch (action.type) {
        case OFERTA_REQUEST:
          return {
            ...state,
            ofertas: [],
            loading: action.payload,
            error: null,
          };
    
        case OFERTA_SUCCESS:
          return {
            ...state,
            loading: false,
            ofertas: action.payload,
            error: null,
          };
    
        case OFERTA_FAIL:
          return {
            ...state,
            ofertas: [],
            error: action.payload,
            loading: false,
          };
        case OBTENER_OFERTA_DETAIL:
          return {
            ...state,
            ofertaDetail: action.payload
          }
    
    
        default:
          return state;
      }
}
export const ofertaReviewCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFERTA_CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };

    case OFERTA_CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false, success: true };

    case OFERTA_CREATE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };

    case OFERTA_CREATE_REVIEW_RESET:
      return {};

    default:
      return state;
  }
};