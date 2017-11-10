 import _ from "lodash";
import { FETCH_MENSAJES, FETCH_CONVERSACIONES } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MENSAJES:
      return  { ...state, mensajes: action.payload.data};
    case FETCH_CONVERSACIONES:
      return { ...state, conversaciones: action.payload.data.rows[0]};
    default:
      return state;
  }
}