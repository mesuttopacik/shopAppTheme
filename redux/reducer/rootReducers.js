import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer";

const rootReducers = combineReducers({
  cartReducer,
  alertReducer,
  productReducer,
});

export default rootReducers;
