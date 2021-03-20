import { User } from "./Users.types"

export function addUser(item: User) {
  console.log("new User ", item)
  return {
    type: "ADD_USER",
    payload: item,
  };
}