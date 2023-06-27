import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employeeApi from '../../api/EmployeeApi';

const initialState = {
    isOpenModal: false,
    isLoading: false,
    data: [],
    currentFormData: {},
    error: null
};

export const fetchEmployeeDataToolkit = createAsyncThunk('employee/fetchData', async () => {
    try {
        const response = await employeeApi.getEmployees();
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        throw error.message;
    }
});

export const createEmployeeToolkit = createAsyncThunk('employee/createData', async (newData) => {
    try {
        const response = await employeeApi.createEmployees(newData);
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        throw error.message;
    }
});

export const updateEmployeeToolkit = createAsyncThunk('employee/updateData', async (newData) => {
    try {
        const response = await employeeApi.updateEmployee(newData.id, newData);
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        throw error.message;
    }
});

export const deleteEmployeeToolkit = createAsyncThunk('employee/deleteData', async (id) => {
    try {
        const response = await employeeApi.deleteEmployee(id);
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        throw error.message;
    }
});

const employeeSliceToolkit = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.isOpenModal = action.payload;
            state.currentFormData = {};
        },
        setCurrentFormData: (state, action) => {
            state.currentFormData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeeDataToolkit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchEmployeeDataToolkit.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchEmployeeDataToolkit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(createEmployeeToolkit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createEmployeeToolkit.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.isLoading = false;
                state.error = null;
                state.isOpenModal = false;
            })
            .addCase(createEmployeeToolkit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(updateEmployeeToolkit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateEmployeeToolkit.fulfilled, (state, action) => {
                const updatedIndex = state.data.findIndex(emp => emp.id === action.payload.id);
                if (updatedIndex !== -1) {
                    state.data[updatedIndex] = action.payload;
                }
                state.isLoading = false;
                state.error = null;
                state.isOpenModal = false;
                state.currentFormData = {};
            })
            .addCase(updateEmployeeToolkit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(deleteEmployeeToolkit.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteEmployeeToolkit.fulfilled, (state, action) => {
                state.data = state.data.filter(emp => emp.id !== action.payload.id);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteEmployeeToolkit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    }
});

export const { setModal, setCurrentFormData } = employeeSliceToolkit.actions;

export default employeeSliceToolkit.reducer;
