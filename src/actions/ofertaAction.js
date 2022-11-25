import clienteAxios from "config/clienteAxios";
import {
  OFERTA_REQUEST,
  OFERTA_SUCCESS,
  OFERTA_FAIL,
  OBTENER_OFERTA_DETAIL,
  OFERTA_TOP_FAIL,
  OFERTA_TOP_SUCCESS,
  OFERTA_TOP_REQUEST,
  OFERTA_CREATE_REVIEW_FAIL,
  OFERTA_CREATE_REVIEW_REQUEST,
  OFERTA_CREATE_REVIEW_RESET,
  OFERTA_CREATE_REVIEW_SUCCESS,

} from "../types/ofertaTypes";

export const ofertaAction = (keyword = '') => async (dispatch) => {
  try {
    dispatch(ofertaRequest(true));

    const { data: dataOfertas } = await clienteAxios.get(`empresas/ofertas/${keyword}`);

    console.log("dataOfertas", dataOfertas);

    dispatch(ofertaSuccess(dataOfertas));
  } catch (error) {
    console.log(error);
    dispatch(ofertaFail(error))
  }
};

export const listTopOfertas = () => async (dispatch) => {
    try {
        dispatch({ type: OFERTA_TOP_REQUEST })

        const { data } = await clienteAxios.get(`/empresas/ofertas/top/`)

        dispatch({
            type: OFERTA_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: OFERTA_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createOfertaReview = (ofertaId, review) => async (dispatch, getState) => {
  try {
      dispatch({
          type: OFERTA_CREATE_REVIEW_REQUEST
      })

      const {
          userLogin: { userInfo },
      } = getState()

      const config = {
          headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${userInfo.token}`
          }
      }

      const { data } = await clienteAxios.post(
          `/empresas/ofertas/${ofertaId}/reviews/`,
          review,
          config
      )
      dispatch({
          type: OFERTA_CREATE_REVIEW_SUCCESS,
          payload: data,
      })



  } catch (error) {
      dispatch({
          type: OFERTA_CREATE_REVIEW_FAIL,
          payload: error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
      })
  }
}

const ofertaRequest = (estado) => ({
  type: OFERTA_REQUEST,
  payload: estado,
});

const ofertaSuccess = (dataOfertas) => ({
  type: OFERTA_SUCCESS,
  payload: dataOfertas,
});

const ofertaFail = (error) =>({
    type: OFERTA_FAIL,
    payload: error
})

export const obtenerDetalleOfertaAction = (oferta) => (dispatch) => {
  dispatch(obtenerDetalleOferta(oferta));
};

const obtenerDetalleOferta = (oferta) => ({
  type: OBTENER_OFERTA_DETAIL,
  payload: oferta,
});