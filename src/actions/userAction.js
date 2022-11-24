import clienteAxios from "config/clienteAxios"
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT} from "../types/userTypes"

export const userLoginAction = (username, password) => async (dispatch) => {
  try {
    dispatch(userLoginRequest())

    const { data: dataLogin } = await clienteAxios.post("users/login/", {username, password})

    console.log("dataLogin", dataLogin)

    dispatch(userLoginSuccess(dataLogin))
    localStorage.setItem("userInfo", JSON.stringify(dataLogin));
  } catch (error) {
    console.log(error)
  }
}

const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

const userLoginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const userLogoutAction = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(userLogout());
};

const userLogout = () => ({
  type: USER_LOGOUT,
});
