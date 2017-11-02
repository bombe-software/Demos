import _ from "lodash";
import { FETCH_PENDIENTESHISTORIAL, FETCH_PENDIENTESPOLITICO, FETCH_PENDIENTESPROPUESTA } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PENDIENTESHISTORIAL:
      return { ...state, historial: action.payload.data};
    case FETCH_PENDIENTESPOLITICO:
      return { ...state, politicos: action.payload.data};
    case FETCH_PENDIENTESPROPUESTA:
      return { ...state, propuestas: action.payload.data};
    default:
      return state;
  }
}