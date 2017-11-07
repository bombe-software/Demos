import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PoliticoReducer from "./reducer_politico";
import UserReducer from "./reducer_user";
import PendientesReducer from "./reducer_pendientes";
import EleccionesReducer from "./reducer_elecciones";
import ReducerMensajes from "./reducer_mensajes";

const rootReducer = combineReducers({
  form: formReducer,
  politico: PoliticoReducer,
  user: UserReducer,
  pendientes: PendientesReducer,
  elecciones: EleccionesReducer,
  mensajes: ReducerMensajes
});

export default rootReducer;