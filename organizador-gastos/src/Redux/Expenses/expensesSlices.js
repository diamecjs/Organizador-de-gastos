import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
    name: "expenses",
    initialState: {
        expenses: []
    },

    reducers: { 
        addexpenses: (state, action) => {
            state.expenses.push(action.payload);
        },
    }
});

export const {addexpenses} = expensesSlice.actions;

export default expensesSlice.reducer;