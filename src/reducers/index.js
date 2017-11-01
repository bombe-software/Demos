import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PoliticoReducer from "./reducer_politico";
import UserReducer from "./reducer_user";
import PendientesReducer from "./reducer_pendientes";

const rootReducer = combineReducers({
  form: formReducer,
  politico: PoliticoReducer,
  user: UserReducer,
  pendientes: PendientesReducer,
});

export default rootReducer;