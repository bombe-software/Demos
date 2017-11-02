import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PoliticoReducer from "./reducer_politico";
import UserReducer from "./reducer_user";
import PendientesReducer from "./reducer_pendientes";
import EleccionesReducer from "./reducer_elecciones";

const rootReducer = combineReducers({
  form: formReducer,
  politico: PoliticoReducer,
  user: UserReducer,
  pendientes: PendientesReducer,
  elecciones: EleccionesReducer
});

export default rootReducer;