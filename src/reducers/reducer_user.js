import _ from "lodash";
import { LOGIN_USER } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      //return { ...state, user: action.payload.data[0]};
      return action.payload.data[0];
    default:
      return state;
  }
}