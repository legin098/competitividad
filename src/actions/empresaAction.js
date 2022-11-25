import clienteAxios from "config/clienteAxios";
import {
  EMPRESA_REQUEST,
  EMPRESA_SUCCESS,
  EMPRESA_FAIL,
  OBTENER_EMPRESA_EDITAR,
} from "../types/empresaTypes";

export const empresasAction = () => async (dispatch) => {
  try {
    dispatch(empresasRequest(true));

    const { data: dataEmpresas } = await clienteAxios.get("empresas/");

    console.log("dataEmpresas", dataEmpresas);

    dispatch(empresasSuccess(dataEmpresas.Empresas));
  } catch (error) {
    console.log(error);
    dispatch(empresasFail(error));
  }
};

const empresasRequest = (estado) => ({
  type: EMPRESA_REQUEST,
  payload: estado,
});

const empresasSuccess = (dataEmpresas) => ({
  type: EMPRESA_SUCCESS,
  payload: dataEmpresas,
});

const empresasFail = (error) => ({
  type: EMPRESA_FAIL,
  payload: error,
});

export const obtenerDetalleEmpresaAction = (empresa) => (dispatch) => {
  dispatch(obtenerDetalleEmpresa(empresa));
};

const obtenerDetalleEmpresa = (empresa) => ({
  type: OBTENER_EMPRESA_EDITAR,
  payload: empresa,
});
