import {
  OFERTA_REQUEST,
  OFERTA_SUCCESS,
  OFERTA_FAIL,
} from "../types/ofertaTypes";

const initialState = {
  ofertas: [],
  loading: false,
  error: null,
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
    
    
        default:
          return state;
      }
}