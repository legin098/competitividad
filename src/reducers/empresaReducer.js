import {
  EMPRESA_REQUEST,
  EMPRESA_SUCCESS,
  EMPRESA_FAIL,
  OBTENER_EMPRESA_EDITAR,
} from "../types/empresaTypes";

const initialState = {
  empresas: [],
  loading: false,
  error: null,
  empresaDetail: {}
};
export const empresaReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPRESA_REQUEST:
      return {
        ...state,
        empresas: [],
        loading: action.payload,
        error: null,
      };

    case EMPRESA_SUCCESS:
      return {
        ...state,
        loading: false,
        empresas: action.payload,
        error: null,
      };

    case EMPRESA_FAIL:
      return {
        ...state,
        empresas: [],
        error: action.payload,
        loading: false,
      };

    case OBTENER_EMPRESA_EDITAR:
      return {
        ...state,
        empresaDetail: action.payload
      }

    default:
      return state;
  }
};
