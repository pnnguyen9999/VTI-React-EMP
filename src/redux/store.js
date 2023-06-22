import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import counterReducer from "./reducers/counterReducer";
import employeeReducer from "./reducers/employeeReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
    employee: employeeReducer
});

const composeEnhencersDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhencersDevTools(applyMiddleware(thunk)));

export default store;