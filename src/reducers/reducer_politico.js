import _ from "lodash";
import { FETCH_ESTADOS, FETCH_POLITICOS, FETCH_POLITICO, FETCH_PROPUESTAS, FETCH_HISTORIAL ,FETCH_ISLIKED, FETCH_COUNTLIKES, FETCH_PARTIDOS, FETCH_TIPOPROPUESTA  } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ESTADOS:
      return {estados: action.payload.data};
    case FETCH_POLITICOS:
      return { ...state, politicos: action.payload.data};
    case FETCH_POLITICO:
      return { ...state, politicoSelected: action.payload.data[0][0]};
    case FETCH_PROPUESTAS:
      return { ...state, propuestas: action.payload.data[0]};
    case FETCH_HISTORIAL:
      return { ...state, historial: action.payload.data[0]};
    case FETCH_ISLIKED:
      return { ...state, propuestas_like: action.payload.data};  
    case FETCH_COUNTLIKES:
      return { ...state, propuesta_count: action.payload.data};  
    case FETCH_PARTIDOS:
      return { ...state, partidos: action.payload.data};   
     case FETCH_TIPOPROPUESTA:
      return { ...state, tipo_propuesta: action.payload.data};   
    default:
      return state;
  }
}