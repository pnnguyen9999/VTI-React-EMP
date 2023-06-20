import EMPLOYEE from "../actions/employee";

const initialState = {
    isOpenModal: false,
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE.SET_MODAL:
            {
                return {
                    ...state,
                    isOpenModal: action.payload
                };
            }
        default:
            return state;
    }
};

export default employeeReducer;