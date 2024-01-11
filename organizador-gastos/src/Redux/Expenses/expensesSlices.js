import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        expenses: []
    },

    reducers: { 
        getAllExpensess: (state, action) => {
            state.expenses = action.payload;
        },
        addexpenses: (state, action) => {
            state.expenses.push(action.payload);
        },
    }
});

export const {addexpenses, getAllExpensess} = expensesSlice.actions;

export default expensesSlice.reducer;