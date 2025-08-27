import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEmployees } from '../services/employeeService';

// Define the initial state
interface EmployeeState {
    employees: any[];
    loading: boolean;
    error: string | null;
}

const initialState: EmployeeState = {
    employees: [],
    loading: false,
    error: null,
};

// Define the thunk
export const fetchEmployeesThunk = createAsyncThunk(
    'employees/fetchEmployees',
    async () => {
        const data = await fetchEmployees();
        return data.results; // Extract the results array from the response
    }
);

// Create the slice
const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployeesThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployeesThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(fetchEmployeesThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch employees';
            });
    },
});

export default employeesSlice.reducer;