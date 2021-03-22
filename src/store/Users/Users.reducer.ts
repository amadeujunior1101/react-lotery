import { Action, UsersList, User } from "./Users.types"

const INITIAL_STATE = {
  users: []
};

export default function (state: UsersList = INITIAL_STATE, action: Action) {

  switch (action.type) {
    case "ADD_USER":

      let existEmail = state.users.filter((el) => {
        return el.email === action.payload.email
      })
      if (existEmail.length === 0) {
        state.users.push(action.payload)
      }
      // console.log("Fora do reducer", state.users);
      // console.log("já existe: ", existEmail);

      return state

    default:
      return state
  }
}
