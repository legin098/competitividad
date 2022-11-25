import { combineReducers } from "redux";
import { empresaReducer } from "./empresaReducer";
import { ofertasReducer } from "./ofertaReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  user: userReducer,
  ofertas: ofertasReducer,
  empresas: empresaReducer,
});
