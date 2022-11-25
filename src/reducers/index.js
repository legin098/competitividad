import { combineReducers } from "redux";
import { ofertaReviewCreateReducer, ofertasReducer } from "./ofertaReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  user: userReducer,
  ofertas: ofertasReducer,
  review: ofertaReviewCreateReducer,
});
