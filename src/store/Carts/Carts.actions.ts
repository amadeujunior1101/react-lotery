import { ArrayObjects, Item } from "./Carts.types"

export function addCart(item: ArrayObjects) {
  console.log("addCart: ", item)
  return {
    type: "ADD_CART",
    payload: item,
  };
}
// export function removeItemCart(item: Item) {
//   return {
//     type: "REMOVE_ITEM_CART",
//     payload: item,
//   };
// }