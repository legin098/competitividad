import clienteAxios from "config/clienteAxios";
import { REVIEW_FAIL,REVIEW_REQUEST,REVIEW_SUCCESS } from '../types/reviewTypes'

export const reviewsOfertaAction =
  (idOferta) =>
  async (dispatch) => {
    try {
      dispatch(reviewsOfertaRequest(true));

      const { data: dataOfertas } = await clienteAxios.get(
        `empresas/reviews/oferta/${idOferta}`
      );

      console.log("dataOfertas", dataOfertas);

      dispatch(reviewsOfertaSuccess(dataOfertas));
    } catch (error) {
      console.log(error);
      dispatch(reviewsOfertaFail(error));
    }
  };

  const reviewsOfertaRequest = (estado) => ({
    type: REVIEW_REQUEST,
    payload: estado,
  });
  
  const reviewsOfertaSuccess = (dataOfertas) => ({
    type: REVIEW_SUCCESS,
    payload: dataOfertas,
  });
  
  const reviewsOfertaFail = (error) => ({
    type: REVIEW_FAIL,
    payload: error,
  });