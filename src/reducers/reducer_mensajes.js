 import _ from "lodash";
import { FETCH_MENSAJES } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENSAJES:
      return action.payload.data;
    default:
      return state;
  }
}