import COUNTER from "../actions/counter";

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