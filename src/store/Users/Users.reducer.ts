import { Action, ActionToken, UsersList, User } from "./Users.types"

const INITIAL_STATE = {
  users: [],
};

const INITIAL_STATE_TOKEN = {
  token: String,
};

function userRedux(state: UsersList = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "ADD_USER":
      let existEmail = state.users.filter((el) => {
        return el.email === action.payload.email
      })
      if (existEmail.length === 0) {
        state.users.push(action.payload)
      }
      return state
    default:
      return state
  }
}

function userTokenRedux(state: string = "Aqui vai o Token", action: ActionToken) {
  switch (action.type) {
    case "ADD_TOKEN":
      state = action.payload
      return state
    default:
      return state
  }
}

export {
  userRedux,
  userTokenRedux
}
