import { combineReducers } from "redux";
import { ofertasReducer } from "./ofertaReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  user: userReducer,
  ofertas: ofertasReducer,
});
