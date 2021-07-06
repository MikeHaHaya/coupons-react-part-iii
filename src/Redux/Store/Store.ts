import {authReducer} from "../AuthState/AuthState";
import {combineReducers, createStore} from "redux";

const rootReducers = combineReducers({authState: authReducer});
const store = createStore(rootReducers);

export default store;