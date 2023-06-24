import EMPLOYEE from "../actions/employee";

const initialState = {
    isOpenModal: false,
    isLoading: false,
    data: [],
    currentFormData: {},
    error: null
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMPLOYEE.SET_MODAL:
            return {
                ...state,
                isOpenModal: action.payload,
                currentFormData: {}
            };
        case EMPLOYEE.SET_CURRENT_FORM_DATA:
            return {
                ...state,
                currentFormData: action.payload
            };
        case EMPLOYEE.FETCH_DATA_PENDING:
        case EMPLOYEE.CREATE_DATA_PENDING:
        case EMPLOYEE.UPDATE_DATA_PENDING:
        case EMPLOYEE.DELETE_DATA_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case EMPLOYEE.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            };
        case EMPLOYEE.CREATE_DATA_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
                isLoading: false,
                error: null,
                isOpenModal: false,
            };
        case EMPLOYEE.UPDATE_DATA_SUCCESS:
            return {
                ...state,
                data: state.data.map((emp) => emp.id === action.payload.id ? { ...action.payload } : emp),
                isLoading: false,
                error: null,
                isOpenModal: false,
                currentFormData: {}
            };
        case EMPLOYEE.DELETE_DATA_SUCCESS:
            return {
                ...state,
                data: state.data.filter((emp) => emp.id !== action.payload.id),
                isLoading: false,
                error: null
            }
        case EMPLOYEE.FETCH_DATA_FAILED:
        case EMPLOYEE.CREATE_DATA_FAILED:
        case EMPLOYEE.UPDATE_DATA_FAILED:
        case EMPLOYEE.DELETE_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default employeeReducer;