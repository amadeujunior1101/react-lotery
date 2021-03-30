import { createStore, combineReducers } from "redux";
import cartsReducer from "./Carts/Carts.reducer";
import { userRedux, userTokenRedux } from "./Users/Users.reducer";

const rootReducer = combineReducers({
  cart: cartsReducer,
  user: userRedux,
  userToken: userTokenRedux,
});

const store = createStore(rootReducer);

export default store;
