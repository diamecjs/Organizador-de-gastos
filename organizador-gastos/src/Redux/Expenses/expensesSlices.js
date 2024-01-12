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
        getExpensesById:(state,action) =>{
            state.expenses= action.payload;
        },
        deleteExpenses: (state, action) => {
            state.expenses = state.expenses.filter(expenses => expenses.id !== action.payload);
        },
        changeExpenses: (state, action) => {
            const updatedExpenses = action.payload;
            for (let i in state.expenses) {
              if (state.expenses[i].id === updatedExpenses.id) {
                state.expenses[i] = updatedExpenses;
                break;
              }
            }
          }
    }    
});

export const {addexpenses, getAllExpensess, getExpensesById, changeExpenses, deleteExpenses} = expensesSlice.actions;

export default expensesSlice.reducer;