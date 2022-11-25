import clienteAxios from "config/clienteAxios";
import {
  OFERTA_REQUEST,
  OFERTA_SUCCESS,
  OFERTA_FAIL,
} from "../types/ofertaTypes";

export const ofertaAction = () => async (dispatch) => {
  try {
    dispatch(ofertaRequest(true));

    const { data: dataOfertas } = await clienteAxios.get("empresas/ofertas/");

    console.log("dataLogin", dataOfertas);

    dispatch(ofertaSuccess(dataOfertas));
  } catch (error) {
    console.log(error);
    dispatch(ofertaFail(error))
  }
};

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