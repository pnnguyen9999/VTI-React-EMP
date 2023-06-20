import { combineReducers, legacy_createStore as createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import employeeReducer from "./reducers/employeeReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    employee: employeeReducer
});

const store = createStore(rootReducer);

export default store;