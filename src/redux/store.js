import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import counterReducer, { counterReducerToolkit } from "./reducers/counterReducer";
import employeeReducer from "./reducers/employeeReducer";
import employeeReducerToolkit from "./reducers/employeeReducerTookit";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    counter: counterReducer,
    counterToolkit: counterReducerToolkit,
    employee: employeeReducer,
    employeeToolkit: employeeReducerToolkit
});

// const composeEnhencersDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhencersDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;