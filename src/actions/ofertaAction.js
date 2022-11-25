import clienteAxios from "config/clienteAxios";
import {
  OFERTA_REQUEST,
  OFERTA_SUCCESS,
  OFERTA_FAIL,
  OFERTA_DETAIL_REQUEST,
  OFERTA_DETAIL_FAIL,
  OFERTA_DETAIL_SUCCESS,
  OFERTA_TOP_FAIL,
  OFERTA_TOP_SUCCESS,
  OFERTA_TOP_REQUEST,

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


export const ofertaDetailAction = (id) => async (dispatch) =>{
    try{
        dispatch(ofertaDetailRequest(true))
        const {data: dataOfertasDetail} = await clienteAxios.get(`empresas/ofertas/${id}`)

        console.log("dataOfertaDetail:", dataOfertasDetail)
        dispatch(ofertaDetailSuccess(dataOfertasDetail))
    }catch (error) {
        console.log(error);
        dispatch(ofertaDetailFail(error))
      }
}

const ofertaDetailRequest = (estado) => ({
    type: OFERTA_DETAIL_REQUEST,
    payload: estado,
  });
  
  const ofertaDetailSuccess = (dataOfertas) => ({
    type: OFERTA_DETAIL_SUCCESS,
    payload: dataOfertas,
  });
  
  const ofertaDetailFail = (error) =>({
      type: OFERTA_DETAIL_FAIL,
      payload: error
  })

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