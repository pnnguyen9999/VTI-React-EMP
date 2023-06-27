import COUNTER from "../actions/counter";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    message: ""
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER.UPDATE_MESS:
            {
                return {
                    ...state,
                    message: action.mess,
                };
            }
        case COUNTER.INCREMENT:
            {
                return { ...state, count: state.count + 1 };
            }
        case COUNTER.DECREMENT:
            {
                return { ...state, count: state.count - 1 };
            }
        default:
            return state;
    }
};

export default counterReducer;

const initialStateCounterToolkit = {
    count: 0,
    message: ""
};

export const incremented = createAction('incremented');
export const decremented = createAction('decremented');
export const setMessage = createAction('setMessage');

export const counterReducerToolkit = createReducer(initialStateCounterToolkit, {
    [incremented]: state => {
        return { ...state, count: state.count + 1 };
    },
    [decremented]: state => {
        return { ...state, count: state.count - 1 };
    },
    [setMessage]: (state, action) => {
        return { ...state, message: action.payload };
    }
});