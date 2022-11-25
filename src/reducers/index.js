import { combineReducers } from "redux";
import { ofertaReviewCreateReducer, ofertasReducer } from "./ofertaReducer";
import { empresaReducer } from "./empresaReducer";
import { userReducer } from "./userReducer";
import { reviewReducer } from "./reviewReducer";

export default combineReducers({
  user: userReducer,
  ofertas: ofertasReducer,
  review: ofertaReviewCreateReducer,
  empresas: empresaReducer,
  ofertaReviews: reviewReducer,
});
