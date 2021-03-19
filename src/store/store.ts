import { createStore, combineReducers } from "redux";
import cartsReducer from "./Carts/Carts.reducer";

const rootReducer = combineReducers({
  cart: cartsReducer,
});

const store = createStore(rootReducer);

export default store;
