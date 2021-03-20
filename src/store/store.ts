import { createStore, combineReducers } from "redux";
import cartsReducer from "./Carts/Carts.reducer";
import usersReducer from "./Users/Users.reducer";

const rootReducer = combineReducers({
  cart: cartsReducer,
  user: usersReducer,
});

const store = createStore(rootReducer);

export default store;
