import _ from "lodash";
import { LOAD_USER } from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case LOAD_USER:
      //return { ...state, user: action.payload.data[0]};
      if (action.payload.data == 404) {
        return {};
      } else {

        return action.payload.data;
      }
    default:
      return state;
  }
}