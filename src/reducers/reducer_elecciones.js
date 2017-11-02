import _ from "lodash";
import { FETCH_ELECCIONES } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ELECCIONES:
      return action.payload.data[0];
    default:
      return state;
  }
}