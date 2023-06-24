import employeeApi from "../../api/EmployeeApi";

const EMPLOYEE = {
    SET_MODAL: "SET_MODAL",
    SET_CURRENT_FORM_DATA: "SET_CURRENT_FORM_DATA",
    FETCH_DATA_PENDING: "FETCH_DATA_PENDING",
    FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
    FETCH_DATA_FAILED: "FETCH_DATA_FAILED",
    CREATE_DATA_PENDING: "CREATE_DATA_PENDING",
    CREATE_DATA_SUCCESS: "CREATE_DATA_SUCCESS",
    CREATE_DATA_FAILED: "CREATE_DATA_FAILED",
    UPDATE_DATA_PENDING: "UPDATE_DATA_PENDING",
    UPDATE_DATA_SUCCESS: "UPDATE_DATA_SUCCESS",
    UPDATE_DATA_FAILED: "UPDATE_DATA_FAILED"
};

export default EMPLOYEE;

export const setCurrentFormData = (data) => {
    return {
        type: EMPLOYEE.SET_CURRENT_FORM_DATA,
        payload: data
    };
};

export const fetchEmployeeData = () => {
    return async (dispatch) => {
        dispatch({ type: EMPLOYEE.FETCH_DATA_PENDING });
        try {
            const response = await employeeApi.getEmployees();
            const data = response.data;
            console.log(data);
            dispatch({
                type: EMPLOYEE.FETCH_DATA_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: EMPLOYEE.FETCH_DATA_FAILED,
                payload: error.message
            });
        }
    };
};

export const createEmployee = (newData) => {
    return async (dispatch) => {
        dispatch({ type: EMPLOYEE.CREATE_DATA_PENDING });
        try {
            const response = await employeeApi.createEmployees(newData);
            const data = response.data;
            console.log(data);
            dispatch({
                type: EMPLOYEE.CREATE_DATA_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: EMPLOYEE.CREATE_DATA_FAILED,
                payload: error.message
            });
        }
    };
};

export const updateEmployee = (newData) => {
    return async (dispatch) => {
        dispatch({ type: EMPLOYEE.UPDATE_DATA_PENDING });
        try {
            const response = await employeeApi.updateEmployee(newData.id, newData);
            const data = response.data;
            console.log(data);
            dispatch({
                type: EMPLOYEE.UPDATE_DATA_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: EMPLOYEE.UPDATE_DATA_FAILED,
                payload: error.message
            });
        }
    };
};