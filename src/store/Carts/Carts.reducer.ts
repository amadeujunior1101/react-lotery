import { start } from "node:repl";
import { ArrayObjects, ItemCart, Action } from "./Carts.types"

interface CartModel {
  cart: Array<Object>;
};
const INITIAL_STATE = {
  cart: []
};

export default function (state: Array<Object> = [], action: Action) {

  switch (action.type) {
    case "ADD_CART":
      action.payload.cart.map((item, index, obj) => {
        state.push(item);
        // state.cart.push(item);
        // console.log("map item reducer:", item);
      })
      // console.log("passando no reducer", state);

      return state;

    default:
      return state
  }
}
